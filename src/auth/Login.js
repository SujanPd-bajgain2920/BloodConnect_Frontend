//Login.js
import React, { useState } from "react";
import axios from "axios";
import { setAuthenticationHeader } from "../utils/authenticate";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = (props) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    axios
      .post("https://localhost:7120/api/Registration/Login", {
        username: credentials.username,
        password: credentials.password,
      })
      .then((response) => {
        if (response.data) {
          const token = response.data.token;
          localStorage.setItem("jsonwebtoken", token);
          // set default headers
          setAuthenticationHeader(token);
          localStorage.setItem("username", credentials.username);
          props.onLoggedIn();
          toast.success("Login Successful");

          // Redirect to home page after successful login
          navigate("/");
        }
      })
      .catch((error) => {
        // Check if error response is 401 (Unauthorized)
        if (error.response && error.response.status === 401) {
          toast.error("Invalid username or password");
        } else {
          // Handle other errors
          console.log(error);
        }
      });
  };

  return (
    <div className=" mt-48   min-h-[600px] ">
      <div className="container mx-auto mt-5">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
                User Login
              </h2>

              <div className="mb-3">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  User Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleChange}
                  className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="text-center mb-3">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?
                <Link to="/register" className="text-blue-500">
                  Create a New Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLoggedIn: () => dispatch({ type: "ON_LOGGED_IN" }),
  };
};

export default connect(null, mapDispatchToProps)(Login);
