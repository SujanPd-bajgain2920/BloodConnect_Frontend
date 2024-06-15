import React, { useState, useEffect } from "react";
import axios from "axios";

const RequestBlood = ({ patientDetail }) => {
  const [profiles, setProfiles] = useState([]); // State to store the retrieved profiles

  // Function to fetch profiles based on patientDetail
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
              <th scope="col" className="px-6 py-3">S.N</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Contact</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile, index) => (
              <tr key={index} className="bg-white border-b dark:bg-white-800 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                  {index + 1}
                </th>
                <td className="px-6 py-4">{profile.name}</td> {/* Display name */}
                <td className="px-6 py-4">{profile.contact}</td> {/* Display contact */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestBlood;
