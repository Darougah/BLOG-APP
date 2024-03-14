import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Menu = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-black w-[200px] flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4">
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-500">Login</h3>
      )}
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-500">Register</h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500">Profile</h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500">Write</h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500">My blogs</h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500">Logout</h3>
      )}
    </div>
  );
};

export default Menu;
