
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import {toast} from "react-toastify";

// const Profile = () => {
//   const [profileInfo, setProfileInfo] = useState({
//     id: "",
//     profileName: "",
//     address: "",
//     contactNumber: "",
//     bloodGroup: "",
//     gender: "",
//     dateOfBirth: "",
//   });

//   const [profiles, setProfiles] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   const navigate = useNavigate();
//   const BlTypes = ["Apositive", "Anegative", "Bpositive", "Bnegative", "ABpositive", "ABnegative", "Opositive", "Onegative"];
//   const Genders = ["Male", "Female", "Unisex"];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editMode) {
//       // Update existing profile
//       const updatedProfiles = [...profiles];
//       updatedProfiles[editIndex] = profileInfo;
//       setProfiles(updatedProfiles);
//       setEditMode(false);
//       setEditIndex(null);
//     } else {
//       // Add new profile
//       setProfiles([...profiles, profileInfo]);

//             // Send POST request to create new profile
//       axios.post("https://localhost:7120/api/Profile/Profile", {
//         Name: profileInfo.profileName,
//         District: profileInfo.address,
//         Contact: profileInfo.contactNumber,
//         Bgroup: profileInfo.bloodGroup,
//         Gender: profileInfo.gender,
//         DoB: profileInfo.dateOfBirth,
//       })
//       .then((response) => {
//         if (response.data && response.data.success) {
//           toast.success("Profile created successfully");
//         } else {
//           toast.error("Failed to create profile");
//         }
//       })
//       .catch((error) => {
//         console.error("Error creating profile:", error);
//         toast.error("Error creating profile");
//       });
//     }

//     // Clear the form
//     setProfileInfo({
//       profileName: "",
//       address: "",
//       contactNumber: "",
//       bloodGroup: "",
//       gender: "",
//       dateOfBirth: "",
//     });
//   };





//   const handleEdit = (index) => {
//     setEditMode(true);
//     setEditIndex(index);
//     setProfileInfo(profiles[index]);
//   };

//   const handleDelete = (index) => {
//     const updatedProfiles = [...profiles];
//     updatedProfiles.splice(index, 1);
//     setProfiles(updatedProfiles);
//   };

//   useEffect(() => {
//     // You can save profiles to a database or localStorage here
//     // For demo purposes, saving to localStorage
//     localStorage.setItem("profiles", JSON.stringify(profiles));
//   }, [profiles]);

//   useEffect(() => {
//     // Retrieve profiles from localStorage on component mount
//     const savedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
//     setProfiles(savedProfiles);
//   }, []);

//   return (
//     <div className="flex items-center justify-center p-40">
//       <div className="request-container bg-white p-8 rounded-md">
//         <h1 className="text-3xl font-bold text-center text-red-700 mb-4">
//           Manage Your Profile
//         </h1>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="profileName"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Profile Name
//             </label>
//             <input
//               type="text"
//               id="profileName"
//               name="profileName"
//               value={profileInfo.profileName}
//               className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               autoComplete="off"
//               required
//               onChange={(e) =>
//                 setProfileInfo({
//                   ...profileInfo,
//                   [e.target.name]: e.target.value,
//                 })
//               }
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="address"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={profileInfo.address}
//               className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               autoComplete="off"
//               required
//               onChange={(e) =>
//                 setProfileInfo({
//                   ...profileInfo,
//                   [e.target.name]: e.target.value,
//                 })
//               }
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="contactNumber"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Contact Number
//             </label>
//             <input
//               type="tel"
//               id="contactNumber"
//               name="contactNumber"
//               value={profileInfo.contactNumber}
//               className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               autoComplete="tel"
//               required
//               onChange={(e) =>
//                 setProfileInfo({
//                   ...profileInfo,
//                   [e.target.name]: e.target.value,
//                 })
//               }
//             />
//           </div>

//           <div className="mb-4">
//   <label
//     htmlFor="bloodGroup"
//     className="block text-gray-700 text-sm font-bold mb-2"
//   >
//     Blood Group
//   </label>
//   <select
//     id="bloodGroup"
//     name="bloodGroup"
//     value={profileInfo.bloodGroup}
//     className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//     autoComplete="off"
//     required
//     onChange={(e) =>
//       setProfileInfo({
//         ...profileInfo,
//         [e.target.name]: e.target.value,
//       })
//     }
//   >
//     <option value="" disabled>
//       Select Blood Group
//     </option>
//     {BlTypes.map((type) => (
//       <option key={type} value={type}>
//         {type}
//       </option>
//     ))}
//   </select>
// </div>

// <div className="mb-4">
//   <label
//     htmlFor="gender"
//     className="block text-gray-700 text-sm font-bold mb-2"
//   >
//     Gender
//   </label>
//   <select
//     id="gender"
//     name="gender"
//     value={profileInfo.gender}
//     className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//     autoComplete="off"
//     required
//     onChange={(e) =>
//       setProfileInfo({
//         ...profileInfo,
//         [e.target.name]: e.target.value,
//       })
//     }
//   >
//     <option value="" disabled>
//       Select Gender
//     </option>
//     {Genders.map((gender) => (
//       <option key={gender} value={gender}>
//         {gender}
//       </option>
//     ))}
//   </select>
// </div>

           

//           <div className="mb-4">
//             <label
//               htmlFor="dateOfBirth"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               id="dateOfBirth"
//               name="dateOfBirth"
//               value={profileInfo.dateOfBirth}
//               className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               required
//               onChange={(e) =>
//                 setProfileInfo({
//                   ...profileInfo,
//                   [e.target.name]: e.target.value,
//                 })
//               }
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full rounded-2xl bg-red-500 text-white p-2 mt-4 hover:bg-red-600"
//           >
//             {editMode ? "Save Changes" : "Save"}
//           </button>
//         </form>

//         <div className="mt-8">
//           <h2 className="text-xl font-bold mb-2">Your Profiles</h2>
//           {profiles.length > 0 ? (
//             <ul>
//               {profiles.map((profile) => (
//                 <li key={profile.id} className="mb-4">
//                   {console.log(profile)}
//                   <div>
//                     <strong>Profile Name:</strong> {profile.profileName}
//                   </div>
//                   <div>
//                     <strong>Address:</strong> {profile.address}
//                   </div>
//                   <div>
//                     <strong>Contact Number:</strong> {profile.contactNumber}
//                   </div>
//                   <div>
//                     <strong>Blood Group:</strong> {profile.bloodGroup}
//                   </div>
//                   <div>
//                     <strong>Gender:</strong> {profile.gender}
//                   </div>
//                   <div>
//                     <strong>Date of Birth:</strong> {profile.dateOfBirth}
//                   </div>
//                   <div className="mt-2 flex space-x-2">
//                     <button
//                       className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//                       onClick={() => handleEdit(index)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
//                       onClick={() => handleDelete(index)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No profiles found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const Profile = () => {
//   const [profileInfo, setProfileInfo] = useState({
//     id: "",
//     profileName: "",
//     address: "",
//     contactNumber: "",
//     bloodGroup: "",
//     gender: "",
//     dateOfBirth: "",
//   });

//   const [profiles, setProfiles] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();
//   const BlTypes = ["Apositive", "Anegative", "Bpositive", "Bnegative", "ABpositive", "ABnegative", "Opositive", "Onegative"];
//   const Genders = ["Male", "Female", "Unisex"];


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     //const url = editMode ? 'https://localhost:7120/api/Profile/Profile/${profiles[editIndex].id} : "https://localhost:7120/api/Profile/Profile"'
  
//     const url = editMode ? `https://localhost:7120/api/Profile/EditProfile/${profiles[editIndex].id}` : "https://localhost:7120/api/Profile/Profile";



//    const requestData = {
//       name: profileInfo.profileName,
//       district: profileInfo.address,
//       contact: profileInfo.contactNumber,
//       bgroup: profileInfo.bloodGroup,
//       gender: profileInfo.gender,
//       doB: profileInfo.dateOfBirth,
//    };
  
  
//     axios({
//       method: editMode ? "PUT" : "POST",
//       url: url,
//       headers: {
//         "Content-Type": "application/json", // Ensure the backend can parse the data correctly
//       },
//       data: requestData,
//     })
//     .then((response) => {
//       if (response.data && response.data.success) {
//         toast.success(editMode ? "Profile updated successfully" : "Profile created successfully");
        
//         // Update or add the profile to the state
//         if (editMode) {
//           const updatedProfiles = [...profiles];
//           updatedProfiles[editIndex] = response.data.data; // Use the data returned by the backend
//           setProfiles(updatedProfiles);
//         } else {
//           setProfiles([...profiles, response.data.data]); // Use the data returned by the backend
//         }
  
//         // Clear the form
//         setEditMode(false);
//         setEditIndex(null);
//         setProfileInfo({
//           profileName: "",
//           address: "",
//           contactNumber: "",
//           bloodGroup: "",
//           gender: "",
//           dateOfBirth: "",
//         });
//       } else {
//         setError(response.data.statusMessage || (editMode ? "Profile update unsuccessful" : "Profile creation unsuccessful"));
//       }
//     })
//     .catch((error) => {
//       console.error("An error occurred while processing your request:", error);
//       setError("An error occurred while processing your request.");
//     });
//   };
  

//   // const handleEdit = (index) => {
//   //   setEditMode(true);
//   //   setEditIndex(index);
//   //   setProfileInfo(profiles[index]);
//   // };
  
//   // const handleEdit = (index) => {
//   //   console.log("Selected Profile:", profiles[index]);
//   //   setEditMode(true);
//   //   setEditIndex(index);
//   //   setProfileInfo(profiles[index]);
//   // };
  
//   // const handleEdit = (id) => {
//   //   const selectedProfile = profiles[id];
//   //   if (selectedProfile) {
//   //     setEditMode(true);
//   //     setEditIndex(id);
//   //     setProfileInfo(selectedProfile);
//   //   } else {
//   //     console.error("Cannot edit profile: Profile not found at id", id);
//   //   }
//   // };

//   const handleEdit = (id) => {
//     const index = profiles.findIndex(profile => profile.id === id);
//     if (index !== -1) {
//       setEditMode(true);
//       setEditIndex(index);
//       setProfileInfo(profiles[index]);
//     } else {
//       console.error("Cannot edit profile: Profile not found with id", id);
//     }
//   };
  
  

//   const handleDelete = (id) => {
//     axios.delete(`https://localhost:7120/api/Profile/Profile/${id}`)
//       .then((response) => {
//         if (response.data && response.data.success) {
//           toast.success("Profile deleted successfully");
//           // Remove the deleted profile from the state
//           const updatedProfiles = profiles.filter(profile => profile.id !== id);
//           setProfiles(updatedProfiles);
//         } else {
//           setError(response.data.statusMessage || "Profile deletion unsuccessful");
//         }
//       })
//       .catch((error) => {
//         console.error("An error occurred while processing your request:", error);
//         setError("An error occurred while processing your request.");
//       });
//   };
  

//   useEffect(() => {
//     const response = (id) => {
//       axios.get(`https://localhost:7120/api/Profile/Profile/${id}`)
//       console.log(response)
//     }
//   }, [profiles.id]);


//   useEffect(() => {
//     // You can save profiles to a database or localStorage here

//     // For demo purposes, saving to localStorage
//     localStorage.setItem("profiles", JSON.stringify(profiles));
//   }, [profiles]);

//   useEffect(() => {
//     // Retrieve profiles from localStorage on component mount
//     const savedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
//     setProfiles(savedProfiles);
//   }, []);



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Profile = () => {
//   const [profileInfo, setProfileInfo] = useState({
//     profileName: "",
//     district: "",
//     contactNumber: "",
//     bloodGroup: "",
//     gender: "",
//     dateOfBirth: "",
//   });

//   const [profiles, setProfiles] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();
//   const BlTypes = ["Apositive", "Anegative", "Bpositive", "Bnegative", "ABpositive", "ABnegative", "Opositive", "Onegative"];
//   const Genders = ["Male", "Female", "Unisex"];

//    // Function to fetch profile data from API or local storage
//    const fetchProfileData = async (id) => {
//     try {
//       console.log('hello:', id)
//       // Fetch profile : data from API or local storage
//       const url = id ? `https://localhost:7120/api/Profile/Profile/${id}`:`https://localhost:7120/api/Profile/Profile`
//       const response = await axios.get(url);
//       setProfiles(response.data);
//     } catch (error) {
//       console.error("Error fetching profile data:", error);
//       // Handle error
//     }
//   };

//   // useEffect(() => {
//   //   fetchProfileData(); // Fetch profile data when component mounts
//   // }, []);



//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     const url = editMode ? `https://localhost:7120/api/Profile/EditProfile/${profiles[editIndex].id}` : "https://localhost:7120/api/Profile/Profile";
  
//     const requestData = {
//       name: profileInfo.profileName,
//       district: profileInfo.district,
//       contact: profileInfo.contactNumber,
//       bgroup: profileInfo.bloodGroup,
//       gender: profileInfo.gender,
//       doB: profileInfo.dateOfBirth,
//     };
  
//     axios({
//       method: editMode ? "PUT" : "POST",
//       url: url,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: requestData,
//     })
//     .then((response) => {
//       if (response.data && response.data.success) {
//         console.log("Response from API:", response);

//         // extract the id
//         const newProfileId = response.data.data.id;
//         console.log("Newly created profile ID:", newProfileId); 
//         console.log(profiles)
//         // fetch the profile of that id
//         // fetchProfileData(newProfileId);
//         // setProfiles([...profiles,response.data])

//         toast.success(editMode ? "Profile updated successfully" : "Profile created successfully");
//         const updatedProfile = response.data.data;
//         const updatedProfiles = editMode ? [...profiles] : [...profiles, updatedProfile];
  
//         // If in edit mode, replace the old profile with the updated one
//         if (editMode) {
//           updatedProfiles[editIndex] = updatedProfile;
//         }
//         console.log(updatedProfile)

//         saveToLocalStorage(updatedProfile)

  
//         setProfiles(updatedProfiles);
//         setEditMode(false);
//         setEditIndex(null);
//         setProfileInfo({
//           profileName: "",
//           district: "",
//           contactNumber: "",
//           bloodGroup: "",
//           gender: "",
//           dateOfBirth: "",
//         });
  
//         // Update local storage
//         // localStorage.setItem("profiles", JSON.stringify(updatedProfiles));

//       } else {
//         setError(response.data.statusMessage || (editMode ? "Profile update unsuccessful" : "Profile creation unsuccessful"));
//       }
//     })
//     .catch((error) => {
//       console.error("An error occurred while processing your request:", error);
//       setError("An error occurred while processing your request.");
//     });
//   };
  



//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
  
//   //   const url = editMode ? `https://localhost:7120/api/Profile/EditProfile/${profiles[editIndex].id}` : "https://localhost:7120/api/Profile/Profile";
  
//   //   const requestData = {
//   //     name: profileInfo.profileName,
//   //     district: profileInfo.address,
//   //     contact: profileInfo.contactNumber,
//   //     bgroup: profileInfo.bloodGroup,
//   //     gender: profileInfo.gender,
//   //     doB: profileInfo.dateOfBirth,
//   //   };
  
//   //   axios({
//   //     method: editMode ? "PUT" : "POST",
//   //     url: url,
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     data: requestData,
//   //   })
//   //   .then((response) => {
//   //     if (response.data && response.data.success) {
//   //       toast.success(editMode ? "Profile updated successfully" : "Profile created successfully");
//   //       const updatedProfile = response.data.data;
//   //       const updatedProfiles = editMode ? [...profiles] : [...profiles, updatedProfile];
//   //       console.log(editMode)
//   //       console.log(editIndex)
//   //       console.log(profiles)
//   //       console.log([...profiles,updatedProfile])
        
        
//   //       // If in edit mode, replace the old profile with the updated one
//   //       if (editMode) {
//   //         updatedProfiles[editIndex] = updatedProfile;
//   //         console.log(updatedProfiles[editIndex])
//   //       }
        
//   //       setProfiles(updatedProfiles);
//   //       setEditMode(false);
//   //       setEditIndex(null);
//   //       setProfileInfo({
//   //         profileName: "",
//   //         address: "",
//   //         contactNumber: "",
//   //         bloodGroup: "",
//   //         gender: "",
//   //         dateOfBirth: "",
//   //       });
//   //     } else {
//   //       setError(response.data.statusMessage || (editMode ? "Profile update unsuccessful" : "Profile creation unsuccessful"));
//   //     }
//   //   })
//   //   .catch((error) => {
//   //     console.error("An error occurred while processing your request:", error);
//   //     setError("An error occurred while processing your request.");
//   //   });
//   // };

//   const handleEdit = (id) => {
//     const index = profiles.findIndex((profile) => profile?.id === id);
//     console.log('edit index: ', index)
//     if (index !== -1) {
//       setEditMode(true);
//       setEditIndex(index);
//       const selectedProfile = profiles[index];
//       setProfileInfo({
//         profileName: selectedProfile.name,
//         district: selectedProfile.district,
//         contactNumber: selectedProfile.contact,
//         bloodGroup: selectedProfile.bgroup,
//         gender: selectedProfile.gender,
//         dateOfBirth: selectedProfile.doB,
//       });
//     } else {
//       console.error("Cannot edit profile: Profile not found with id", id);
//     }
//   };
  




//   const handleDelete = (id) => {
//     axios.delete(`https://localhost:7120/api/Profile/Profile/${id}`)
//       .then((response) => {
//         if (response.data && response.data.success) {
//           toast.success("Profile deleted successfully");
//           const updatedProfiles = profiles.filter(profile => profile.id !== id);
//           setProfiles(updatedProfiles);
//         } else {
//           setError(response.data.statusMessage || "Profile deletion unsuccessful");
//         }
//       })
//       .catch((error) => {
//         console.error("An error occurred while processing your request:", error);
//         setError("An error occurred while processing your request.");
//       });
//   };

//   useEffect(() => {
//     const savedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
//     console.log(savedProfiles)
//     setProfiles(savedProfiles);
//   }, []);

//   const saveToLocalStorage = (data) => {
//     const savedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    
//     localStorage.setItem("profiles", JSON.stringify([...savedProfiles,data]));

//   }

//   // useEffect(() => {
//   // }, [profiles]);






//   return (
//     <div className="flex items-center justify-center p-40">
//       <div className="request-container bg-white p-8 rounded-md">
//         <h1 className="text-3xl font-bold text-center text-red-700 mb-4">
//           Manage Your Profile
//         </h1>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="profileName"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Profile Name
//             </label>
//             <input
//               type="text"
//               id="profileName"
//               name="profileName"
//               value={profileInfo.profileName}
//               className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               autoComplete="off"
//               required
//               onChange={(e) =>
//                 setProfileInfo({
//                   ...profileInfo,
//                   [e.target.name]: e.target.value,
//                 })
//               }
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="district"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               district
//             </label>
//             <input
//               type="text"
//               id="district"
//               name="district"
//               value={profileInfo.district}
//               className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               autoComplete="off"
//               required
//               onChange={(e) =>
//                 setProfileInfo({
//                   ...profileInfo,
//                   [e.target.name]: e.target.value,
//                 })
//               }
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="contactNumber"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Contact Number
//             </label>
//             <input
//               type="tel"
//               id="contactNumber"
//               name="contactNumber"
//               value={profileInfo.contactNumber}
//               className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               autoComplete="tel"
//               required
//               onChange={(e) =>
//                 setProfileInfo({
//                   ...profileInfo,
//                   [e.target.name]: e.target.value,
//                 })
//               }
//             />
//           </div>

//           <div className="mb-4">
//   <label
//     htmlFor="bloodGroup"
//     className="block text-gray-700 text-sm font-bold mb-2"
//   >
//     Blood Group
//   </label>
//   <select
//     id="bloodGroup"
//     name="bloodGroup"
//     value={profileInfo.bloodGroup}
//     className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//     autoComplete="off"
//     required
//     onChange={(e) =>
//       setProfileInfo({
//         ...profileInfo,
//         [e.target.name]: e.target.value,
//       })
//     }
//   >
//     <option value="" disabled>
//       Select Blood Group
//     </option>
//     {BlTypes.map((type) => (
//       <option key={type} value={type}>
//         {type}
//       </option>
//     ))}
//   </select>
// </div>

// <div className="mb-4">
//   <label
//     htmlFor="gender"
//     className="block text-gray-700 text-sm font-bold mb-2"
//   >
//     Gender
//   </label>
//   <select
//     id="gender"
//     name="gender"
//     value={profileInfo.gender}
//     className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//     autoComplete="off"
//     required
//     onChange={(e) =>
//       setProfileInfo({
//         ...profileInfo,
//         [e.target.name]: e.target.value,
//       })
//     }
//   >
//     <option value="" disabled>
//       Select Gender
//     </option>
//     {Genders.map((gender) => (
//       <option key={gender} value={gender}>
//         {gender}
//       </option>
//     ))}
//   </select>
// </div>

           

//           <div className="mb-4">
//             <label
//               htmlFor="dateOfBirth"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               id="dateOfBirth"
//               name="dateOfBirth"
//               value={profileInfo.dateOfBirth}
//               className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               required
//               onChange={(e) =>
//                 setProfileInfo({
//                   ...profileInfo,
//                   [e.target.name]: e.target.value,
//                 })
//               }
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full rounded-2xl bg-red-500 text-white p-2 mt-4 hover:bg-red-600"
//           >
//             {editMode ? "Save Changes" : "Save"}
//           </button>
//         </form>

//         <div className="mt-8">
//           <h2 className="text-xl font-bold mb-2">Your Profiles</h2>

          
//           {profiles.length > 0 ? (
//   <ul>
//     {profiles.map((profile) => (
//       <li key={profile && profile.id} className="mb-4">
//         {profile && (
//           <>
//             <div>
//               <strong>Profile Name:</strong> {profile.name}
//             </div>
//             <div>
//               <strong>District:</strong> {profile.district}
//             </div>
//             <div>
//               <strong>Contact Number:</strong> {profile.contact}
//             </div>
//             <div>
//               <strong>Blood Group:</strong> {profile.bgroup}
//             </div>
//             <div>
//               <strong>Gender:</strong> {profile.gender}
//             </div>
//             <div>
//               <strong>Date of Birth:</strong> {profile.doB}
//             </div>
//             <div className="mt-2 flex space-x-2">
//               <button
//                 className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//                 onClick={() => handleEdit(profile.id)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
//                 onClick={() => handleDelete(profile.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </>
//         )}
//       </li>
//     ))}
//   </ul>
// ) : (
//   <p>No profiles found.</p>
// )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;






import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({
    profileName: "",
    district: "",
    contactNumber: "",
    bloodGroup: "",
    gender: "",
    dateOfBirth: "",
  });

  const [profiles, setProfiles] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const BlTypes = ["Apositive", "Anegative", "Bpositive", "Bnegative", "ABpositive", "ABnegative", "Opositive", "Onegative"];
  const Genders = ["Male", "Female", "Unisex"];



  const handleSubmit = (e) => {
    e.preventDefault();
  
    const url = editMode ? `https://localhost:7120/api/Profile/EditProfile/${profiles[editIndex].id}` : "https://localhost:7120/api/Profile/Profile";
  
    const requestData = {
      name: profileInfo.profileName,
      district: profileInfo.district,
      contact: profileInfo.contactNumber,
      bgroup: profileInfo.bloodGroup,
      gender: profileInfo.gender,
      doB: profileInfo.dateOfBirth,
    };
  
    axios({
      method: editMode ? "PUT" : "POST",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: requestData,
    })
    .then((response) => {
      if (response.data && response.data.success) {
        toast.success(editMode ? "Profile updated successfully" : "Profile created successfully");
        const updatedProfile = response.data.data;
        const updatedProfiles = editMode ? [...profiles] : [...profiles, updatedProfile];
  
        // If in edit mode, replace the old profile with the updated one
        if (editMode) {
          updatedProfiles[editIndex] = updatedProfile;
        }
  
        setProfiles(updatedProfiles);
        setEditMode(false);
        setEditIndex(null);
        setProfileInfo({
          profileName: "",
          district: "",
          contactNumber: "",
          bloodGroup: "",
          gender: "",
          dateOfBirth: "",
        });
  
        // Update local storage
        localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
      } else {
        setError(response.data.statusMessage || (editMode ? "Profile update unsuccessful" : "Profile creation unsuccessful"));
      }
    })
    .catch((error) => {
      console.error("An error occurred while processing your request:", error);
      setError("An error occurred while processing your request.");
    });
  };
  



  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   const url = editMode ? `https://localhost:7120/api/Profile/EditProfile/${profiles[editIndex].id}` : "https://localhost:7120/api/Profile/Profile";
  
  //   const requestData = {
  //     name: profileInfo.profileName,
  //     district: profileInfo.address,
  //     contact: profileInfo.contactNumber,
  //     bgroup: profileInfo.bloodGroup,
  //     gender: profileInfo.gender,
  //     doB: profileInfo.dateOfBirth,
  //   };
  
  //   axios({
  //     method: editMode ? "PUT" : "POST",
  //     url: url,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: requestData,
  //   })
  //   .then((response) => {
  //     if (response.data && response.data.success) {
  //       toast.success(editMode ? "Profile updated successfully" : "Profile created successfully");
  //       const updatedProfile = response.data.data;
  //       const updatedProfiles = editMode ? [...profiles] : [...profiles, updatedProfile];
  //       console.log(editMode)
  //       console.log(editIndex)
  //       console.log(profiles)
  //       console.log([...profiles,updatedProfile])
        
        
  //       // If in edit mode, replace the old profile with the updated one
  //       if (editMode) {
  //         updatedProfiles[editIndex] = updatedProfile;
  //         console.log(updatedProfiles[editIndex])
  //       }
        
  //       setProfiles(updatedProfiles);
  //       setEditMode(false);
  //       setEditIndex(null);
  //       setProfileInfo({
  //         profileName: "",
  //         address: "",
  //         contactNumber: "",
  //         bloodGroup: "",
  //         gender: "",
  //         dateOfBirth: "",
  //       });
  //     } else {
  //       setError(response.data.statusMessage || (editMode ? "Profile update unsuccessful" : "Profile creation unsuccessful"));
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("An error occurred while processing your request:", error);
  //     setError("An error occurred while processing your request.");
  //   });
  // };

  const handleEdit = (id) => {
    const index = profiles.findIndex((profile) => profile?.id === id);
    console.log('edit index: ', index)
    if (index !== -1) {
      setEditMode(true);
      setEditIndex(index);
      const selectedProfile = profiles[index];
      setProfileInfo({
        profileName: selectedProfile.name,
        district: selectedProfile.district,
        contactNumber: selectedProfile.contact,
        bloodGroup: selectedProfile.bgroup,
        gender: selectedProfile.gender,
        dateOfBirth: selectedProfile.doB,
      });
    } else {
      console.error("Cannot edit profile: Profile not found with id", id);
    }
  };
  




  const handleDelete = (id) => {
    axios.delete(`https://localhost:7120/api/Profile/Profile/${id}`)
      .then((response) => {
        if (response.data && response.data.success) {
          toast.success("Profile deleted successfully");
          const updatedProfiles = profiles.filter(profile => profile.id !== id);
          setProfiles(updatedProfiles);
        } else {
          setError(response.data.statusMessage || "Profile deletion unsuccessful");
        }
      })
      .catch((error) => {
        console.error("An error occurred while processing your request:", error);
        setError("An error occurred while processing your request.");
      });
  };

  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    setProfiles(savedProfiles);
  }, []);

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);






  return (
    <div className="flex items-center justify-center p-40">
      <div className="request-container bg-white p-8 rounded-md">
        <h1 className="text-3xl font-bold text-center text-red-700 mb-4">
          Manage Your Profile
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="profileName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Profile Name
            </label>
            <input
              type="text"
              id="profileName"
              name="profileName"
              value={profileInfo.profileName}
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              autoComplete="off"
              required
              onChange={(e) =>
                setProfileInfo({
                  ...profileInfo,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="district"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              district
            </label>
            <input
              type="text"
              id="district"
              name="district"
              value={profileInfo.district}
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              autoComplete="off"
              required
              onChange={(e) =>
                setProfileInfo({
                  ...profileInfo,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="contactNumber"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={profileInfo.contactNumber}
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              autoComplete="tel"
              required
              onChange={(e) =>
                setProfileInfo({
                  ...profileInfo,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-4">
  <label
    htmlFor="bloodGroup"
    className="block text-gray-700 text-sm font-bold mb-2"
  >
    Blood Group
  </label>
  <select
    id="bloodGroup"
    name="bloodGroup"
    value={profileInfo.bloodGroup}
    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
    autoComplete="off"
    required
    onChange={(e) =>
      setProfileInfo({
        ...profileInfo,
        [e.target.name]: e.target.value,
      })
    }
  >
    <option value="" disabled>
      Select Blood Group
    </option>
    {BlTypes.map((type) => (
      <option key={type} value={type}>
        {type}
      </option>
    ))}
  </select>
</div>

<div className="mb-4">
  <label
    htmlFor="gender"
    className="block text-gray-700 text-sm font-bold mb-2"
  >
    Gender
  </label>
  <select
    id="gender"
    name="gender"
    value={profileInfo.gender}
    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
    autoComplete="off"
    required
    onChange={(e) =>
      setProfileInfo({
        ...profileInfo,
        [e.target.name]: e.target.value,
      })
    }
  >
    <option value="" disabled>
      Select Gender
    </option>
    {Genders.map((gender) => (
      <option key={gender} value={gender}>
        {gender}
      </option>
    ))}
  </select>
</div>

           

          <div className="mb-4">
            <label
              htmlFor="dateOfBirth"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={profileInfo.dateOfBirth}
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              required
              onChange={(e) =>
                setProfileInfo({
                  ...profileInfo,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-red-500 text-white p-2 mt-4 hover:bg-red-600"
          >
            {editMode ? "Save Changes" : "Save"}
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Your Profiles</h2>

          
          {profiles.length > 0 ? (
  <ul>
    {profiles.map((profile) => (
      <li key={profile && profile.id} className="mb-4">
        {profile && (
          <>
            <div>
              <strong>Profile Name:</strong> {profile.name}
            </div>
            <div>
              <strong>District:</strong> {profile.district}
            </div>
            <div>
              <strong>Contact Number:</strong> {profile.contact}
            </div>
            <div>
              <strong>Blood Group:</strong> {profile.bgroup}
            </div>
            <div>
              <strong>Gender:</strong> {profile.gender}
            </div>
            <div>
              <strong>Date of Birth:</strong> {profile.doB}
            </div>
            <div className="mt-2 flex space-x-2">
              <button
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                onClick={() => handleEdit(profile.id)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                onClick={() => handleDelete(profile.id)}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </li>
    ))}
  </ul>
) : (
  <p>No profiles found.</p>
)}
        </div>
      </div>
    </div>
  );
};

export default Profile;
