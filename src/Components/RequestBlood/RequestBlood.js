// import React from "react";

// const RequestBlood = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-gray-700 uppercase bg-red-100 dark:bg-red-700 dark:text-white">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 S.N
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Name
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Contact
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Last Donation
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 <span className="sr-only">Request</span>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="bg-white border-b dark:bg-white-800 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-200">
//               <th
//                 scope="row"
//                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
//               >
//                 1
//               </th>
//               <td className="px-6 py-4">Sujan Bajgain</td>
//               <td className="px-6 py-4">9812362345</td>
//               <td className="px-6 py-4">2024-02-12</td>
//               <td className="px-6 py-4 text-right">
//                 <a
//                   href="#"
//                   className="font-medium text-red-600 dark:text-white-200 hover:underline"
//                 >
//                   Request
//                 </a>
//               </td>
//             </tr>
//             <tr className="bg-white border-b dark:bg-white-800 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-200">
//               <th
//                 scope="row"
//                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
//               >
//                 2
//               </th>
//               <td className="px-6 py-4">{/* Content for row 2 */}</td>
//               <td className="px-6 py-4">{/* Content for row 2 */}</td>
//               <td className="px-6 py-4">{/* Content for row 2 */}</td>
//               <td className="px-6 py-4 text-right">
//                 <a
//                   href="#"
//                   className="font-medium text-red-600 dark:text-white-500 hover:underline"
//                 >
//                   Request
//                 </a>
//               </td>
//             </tr>
//             <tr className="bg-white dark:bg-white-800 hover:bg-red-50 dark:hover:bg-red-200">
//               <th
//                 scope="row"
//                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
//               >
//                 3
//               </th>
//               <td className="px-6 py-4">{/* Content for row 3 */}</td>
//               <td className="px-6 py-4">{/* Content for row 3 */}</td>
//               <td className="px-6 py-4">{/* Content for row 3 */}</td>
//               <td className="px-6 py-4 text-right">
//                 <a
//                   href="#"
//                   className="font-medium text-red-600 dark:text-red-500 hover:underline"
//                 >
//                   Request
//                 </a>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RequestBlood;


// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import Axios

// const RequestBlood = ({ patientDetail }) => {
//   const [profiles, setProfiles] = useState([]); // State to store the retrieved profiles

//   // Function to fetch profile data from the backend API
//   const fetchProfiles = () => {
//     // Make a GET request to your backend API endpoint
//     axios.get(`https://localhost:7120/api/Profile/Retriveprofile?district=${patientDetail.district}&requiredBloodGroup=${patientDetail.requiredBloodGroup}`)
//       .then((response) => {
//         // Set the retrieved profiles in the state
//         setProfiles(response.data);
//       })
//       .catch((error) => {
//         // Handle any errors
//         console.error("Error fetching data:", error);
//       });
//   };

//   // Call fetchProfiles when component mounts or when patientDetail changes
//   useEffect(() => {
//     if (patientDetail.district && patientDetail.requiredBloodGroup) {
//       fetchProfiles();
//     }
//   }, [patientDetail.district, patientDetail.requiredBloodGroup]);

//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-gray-700 uppercase bg-red-100 dark:bg-red-700 dark:text-white">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 S.N
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Name
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Contact
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {profiles.map((profile, index) => (
//               <tr
//                 key={index}
//                 className="bg-white border-b dark:bg-white-800 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-200"
//               >
//                 <th
//                   scope="row"
//                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
//                 >
//                   {index + 1}
//                 </th>
//                 <td className="px-6 py-4">{profile.Name}</td>
//                 <td className="px-6 py-4">{profile.Contact}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RequestBlood;


import React, { useState, useEffect } from "react";
import axios from "axios";

const RequestBlood = ({ patientDetail }) => {
  const [profiles, setProfiles] = useState([]); // State to store the retrieved profiles

  // Function to fetch profile data from the backend API
  // const fetchProfiles = () => {
  //   axios.get(`https://localhost:7120/api/Profile/Retriveprofile?district=${patientDetail.district}&requiredBloodGroup=${patientDetail.requiredBloodGroup}`)
  //     .then((response) => {
  //       // Check if the response data is an array before updating state
  //       if (Array.isArray(response.data)) {
  //         setProfiles(response.data);
  //       } else {
  //         console.error("Invalid data format:", response.data);
  //       }
  //     })
  //     .catch((error) => {
  //       // Handle any errors
  //       console.error("Error fetching data:", error);
  //     });
  // };

  const fetchProfiles = () => {
    axios.get(`https://localhost:7120/api/Profile/Retriveprofile?district=${patientDetail.district}&requiredBloodGroup=${patientDetail.requiredBloodGroup}`)
      .then((response) => {
        // Check if the response data is an array before updating state
        if (Array.isArray(response.data)) {
          setProfiles(response.data);
        } else if (typeof response.data === 'object') {
          // Handle single object case if needed
          setProfiles([response.data]); // Wrap the object in an array
        } else {
          console.error("Invalid data format:", response.data);
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error fetching data:", error);
      });
  };
  

  // Call fetchProfiles when component mounts or when patientDetail changes
  useEffect(() => {
    if (patientDetail.district && patientDetail.requiredBloodGroup) {
      fetchProfiles();
    }
  }, [patientDetail.district, patientDetail.requiredBloodGroup]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-red-100 dark:bg-red-700 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.N
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-white-800 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{profile.name}</td> {/* Display name */}
                <td className="px-6 py-4">{profile.contact}</td> {/* Display contact */}
                {/* <td className="px-6 py-4">{profile.Name}</td>
                <td className="px-6 py-4">{profile.Contact}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestBlood;
