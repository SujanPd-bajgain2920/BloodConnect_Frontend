
// // export default Register;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";

// const Register = () => {
//   const navigate = useNavigate();
//   const [credentials, setCredentials] = useState({});
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setCredentials({
//       ...credentials,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleRegister = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     axios.post("https://localhost:7120/api/Registration/Registration", {
//       username: credentials.username,
//       password: credentials.password,
//     })
//     .then((response) => {
//       if (response.data && response.data.success) {
//         toast.success("Registered Successfully");
//         navigate("/login");
//       } else {
//         setError(response.data.message);
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//       setError("An error occurred while processing your request.");
//     });
//   };

//   return (
//     <div className="mt-48 min-h-[600px]">
//       <div className="container mx-auto mt-5">
//         <div className="flex justify-center">
//           <div className="w-full max-w-md">
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <h2 className="text-3xl font-bold text-center text-red-700 mb-4">
//                 User Registration
//               </h2>

//               <form onSubmit={handleRegister}>
//                 <div className="mb-3">
//                   <label
//                     htmlFor="username"
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                   >
//                     User Name <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="username"
//                     name="username"
//                     onChange={handleChange}
//                     className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label
//                     htmlFor="password"
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                   >
//                     Password <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     onChange={handleChange}
//                     className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//                     required
//                   />
//                 </div>
//                 {error && <div className="text-red-500 mb-3">{error}</div>}
//                 <div className="text-center mb-3">
//                   <button
//                     type="submit"
//                     className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-green active:bg-red-800"
//                   >
//                     Register
//                   </button>
//                 </div>
//               </form>

//             </div>
//             <div className="text-center">
//               <p className="text-sm text-gray-600">
//                 Already have an account?
//                 <Link to="/login" className="text-blue-500">
//                   Login
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    axios.post("https://localhost:7120/api/Registration/Registration", {
      username: credentials.username,
      password: credentials.password,
    })
    .then((response) => {
      if (response.data && response.data.success) {
        // console.log(response);
        toast.success("Registered Successfully");
        navigate("/login");
      } else {
        // console.log(response);
        if (response.data.statusMessage === "User already registered") {
          setError("User already registered");
        } else {
          setError(response.data.statusMessage || "Registration failed.");
        }
      }
    })
    .catch((error) => {
      // console.error(error);
      setError("An error occurred while processing your request.");
    });
  };

  return (
    <div className="mt-48 min-h-[600px]">
      <div className="container mx-auto mt-5">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-center text-red-700 mb-4">
                User Registration
              </h2>

              <form onSubmit={handleRegister}>
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
                {error && <div className="text-red-500 mb-3">{error}</div>}
                <div className="text-center mb-3">
                  <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-green active:bg-red-800"
                  >
                    Register
                  </button>
                </div>
              </form>

            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;



// axios.post("https://localhost:7120/api/Profile/Profile", {
//   Name: profileInfo.profileName,
//   District: profileInfo.address,
//   Contact: profileInfo.contactNumber,
//   Bgroup: profileInfo.bloodGroup,
//   Gender: profileInfo.gender,
//   DoB: profileInfo.dateOfBirth,
// })
// .then((response) => {
//   if (response.data && response.data.success) {
//     toast.success("Profile created successfully");





  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Make a POST request to your API endpoint to save the profile
  //     await axios.post("https://localhost:7120/api/Profile/Profile", profileInfo);
  //     // Clear the form after successful submission
  //     setProfileInfo({
  //       profileName: "",
  //       address: "",
  //       contactNumber: "",
  //       bloodGroup: "",
  //       gender: "",
  //       dateOfBirth: "",
  //     })
  //     .then((response) => {
  //       if (response.data && response.data.success) {
  //         toast.success("Profile created successfully");
  //         // Navigate to the profile viewing section
  //         navigate("/view-profile");
  //       }
  //     })
  //     .catch((error) => {
  //       // console.error(error);
  //       setError("An error occurred while processing your request.");
  //     });