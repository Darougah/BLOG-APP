import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../url";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();








  // useEffect(() => {
  //   registerAdmin(); // Call registerAdmin function when component mounts
  // }, []);

  // useEffect(() => {
  //   // Navigate to login page when admin registration is successful
  //   if (username === "Admin" && email === "admin@admin.com" && password === "admin" && !error) {
  //     navigate("/register");
  //   }
  // }, [username, email, password, isAdmin, error, navigate]);

  // const registerAdmin = async () => {
  //   try {
  //     const res = await axios.post(URL + "/api/auth/register", {
  //       username: "Admin",
  //       email: "admin@admin.com",
  //       password: "admin",
  //       isAdmin: true
  //     });
  //     setUsername(username);
  //     setEmail(email);
  //     setPassword(password);
  //     setIsAdmin(isAdmin);
  //     setError(false);
  //     navigate("/login");
  //     console.log("Admin registered successfully:", res.data);
  //   } catch (err) {
  //     setError(true);
  //     console.log("Error registering admin:", err);
  //   }
  // };




  
  
  const handleRegister = async () => {
    try {
      let registerEndpoint = isAdmin ? "/api/auth/register-admin" : "/api/auth/register";
      const res = await axios.post(URL + registerEndpoint, {
        username,
        email,
        password,
      });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link to="/">Blog Market</Link>
        </h1>
        <h3>
          <Link to="/login">Login</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Create an account</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="text"
            placeholder="Enter your username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="text"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="password"
            placeholder="Enter your password"
          />
          <button
            onClick={handleRegister}
            className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black "
          >
            Register
          </button>
          {error && (
            <h3 className="text-red-500 text-sm ">Something went wrong</h3>
          )}
          <div className="flex justify-center items-center space-x-3">
            <p>Already have an account?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;