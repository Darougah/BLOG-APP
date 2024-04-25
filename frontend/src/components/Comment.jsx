import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { URL } from "../url";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

// List of swear words to censor
const swearWords = ["badword1", "badword2", "badword3"];

// Function to censor swear words
const censorSwearWords = (comment) => {
  let censoredComment = comment;
  swearWords.forEach((word) => {
    const regex = new RegExp(word, "gi");
    censoredComment = censoredComment.replace(regex, "***");
  });
  return censoredComment;
};

const Comment = ({ c, post }) => {
  const { user } = useContext(UserContext);

  const deleteComment = async (id) => {
    try {
      await axios.delete(`https:danielblogg.onrender.com/api/comments/` + id, { withCredentials: true });
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-600">@{c.author}</h3>
        <div className="flex justify-center items-center space-x-4">
          <p>{new Date(c.updatedAt).toString().slice(0, 15)}</p>
          <p>{new Date(c.updatedAt).toString().slice(16, 24)}</p>
          {(user?._id === c?.userId || "Admin" === user?.username) && (
            <div className="flex items-center justify-center space-x-2">
              <p className="cursor-pointer" onClick={() => deleteComment(c._id)}>
                <MdDelete />
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Censor swear words in the comment */}
      <p className="px-4 mt-2">{censorSwearWords(c.comment)}</p>
    </div>
  );
};

export default Comment;