import React from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "./assets/logo.png";

const Navbar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem("jsonwebtoken");

    // Dispatch action to reset Redux state
    dispatch({ type: "ON_LOGGED_OUT" });
    toast.error("You are logged Out");

    navigate("/");
  };

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>

            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-indigo-600">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600">
                About
              </Link>

              <Link
                    to="/requestblood"
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    Request
                  </Link>
                  <Link
                    to="/donateblood"
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    Donate
                  </Link>

              {/* <Link
                    to="/profile"
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    Profile
                  </Link> */}

              {props.isLoggedIn ? (
                <>
                  <Link
                    to="/requestblood"
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    Request
                  </Link>
                  <Link
                    to="/donateblood"
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    Donate
                  </Link>
                  <Link
                    to="/profile"
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    Profile
                  </Link>
                </>
              ) : null}
            </div>

            <div className="flex space-x-4 items-center">
              {props.isLoggedIn ? null : (
                <Link to="/login" className="text-gray-800 text-sm">
                  LOGIN
                </Link>
              )}
              {props.isLoggedIn ? (
                <button
                  onClick={handleLogOut}
                  className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm cursor-pointer"
                >
                  LogOut
                </button>
              ) : null}
              {props.isLoggedIn ? null : (
                <Link
                  to="/register"
                  className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 text-sm active:bg-red-800"
                >
                  Register
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Navbar);
