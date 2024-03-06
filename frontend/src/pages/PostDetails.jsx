import Navbar from "../components/Navbar";
import Footer from "./../components/Footer.jsx";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 uses of artificial intelligence in daily life
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <BiEdit />
            <MdDelete />
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@danield</p>
          <div className="flex space-x-2 text-sm">
            <p>2024-03-06</p>
            <p>20:45</p>
          </div>
        </div>
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*Hc1p9ZDHT5NZnuUdEToj4w.png"
          className="w-full mx-auto mt-8"
          alt=""
        />
        <p className="mx-auto mt-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>categories</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          {/* write a comment */}
          <div className="px-2 py-2 bg-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600">@Danield</h3>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-gray-500">2024-03-06</p>
                <p className="text-gray-500">20:45</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
