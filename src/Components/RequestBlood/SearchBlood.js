import React, { useState } from "react";
import RequestBlood from "./RequestBlood";
import requireAuth from "../../requireAuth";
import axios from "axios";

const SearchBlood = () => {
  //const BlTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const BlTypes = ["Apositive", "Anegative", "Bpositive", "Bnegative", "ABpositive", "ABnegative", "Opositive", "Onegative"];

  const provinces = [
    "Province 1",
    "Province 2",
    "Bagmati",
    "Gandaki",
    "Lumbini",
    "Karnali",
    "Sudurpashchim",
  ];

  const districtOptions = {
    "Province 1": [
      "Select District",
      "Bhojpur",
      "Dhankuta",
      "Ilam",
      "Jhapa",
      "Khotang",
      "Morang",
      "Okhaldhunga",
      "Panchthar",
      "Sankhuwasabha",
      "Solukhumbu",
      "Sunsari",
      "Taplejung",
      "Terhathum",
      "Udayapur",
    ],
    "Province 2": [
      "Bara",
      "Dhanusa",
      "Mahottari",
      "Parsa",
      "Rautahat",
      "Saptari",
      "Sarlahi",
      "Siraha",
    ],
    Bagmati: [
      "Bhaktapur District",
      "Chitwan",
      "Dhading",
      "Dolakha",
      "Kathmandu",
      "Kavrepalanchok",
      "Lalitpur",
      "Makawanpur",
      "Nuwakot District",
      "Ramechhap",
      "Rasuwa",
      "Sindhuli",
      "Sindhupalchok",
    ],
    Gandaki: [
      "Baglung",
      "Gorkha",
      "Kaski",
      "Lamjung",
      "Manang",
      "Mustang",
      "Myagdi",
      "Nawalpur",
      "Parbat",
      "Syangja",
      "Tanahu District",
    ],
    Lumbini: [
      "Arghakhanchi",
      "Banke",
      "Bardiya",
      "Dang",
      "Gulmi",
      "Kapilvastu",
      "Parasi",
      "Palpa",
      "Pyuthan",
      "Rolpa",
      "Rukum",
      "Rupandehi",
    ],
    Karnali: [
      "Dailekh District",
      "Dolpa District",
      "Humla District",
      "Jajarkot District",
      "Jumla District",
      "Kalikot District",
      "Mugu District",
      "Rukum Paschim District",
      "Salyan District",
      "Surkhet District",
    ],
    Sudurpashchim: [
      "Achham",
      "Baitadi",
      "Bajhang",
      "Bajura",
      "Dadeldhura",
      "Darchula",
      "Doti",
      "Kailali",
      "Kanchanpur",
    ],
  };

  const [selectedProvince, setSelectedProvince] = useState("");
  const [error, setError] = useState(null);
  const [districtList, setDistrictList] = useState([]);
  
  const [patientDetail, setPatientDetail] = useState({
    province: "",
    district: "",
    requiredBloodGroup: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!patientDetail.province || !patientDetail.district || !patientDetail.requiredBloodGroup) {
        throw new Error("Please fill in all fields.");
      }
      
      const response = await axios.get(`https://localhost:7120/api/Profile/Retriveprofile?district=${patientDetail.district}&requiredBloodGroup=${patientDetail.requiredBloodGroup}`);
      
      if (response.status === 200) {
        if (response.data && response.data.name === "Record not found") {
          setProfiles([]); // Clear existing profiles
          setError("Profile not found.");
        } else {
          setProfiles([response.data]); // Set the fetched profile
          setError(null); // Clear any previous error
        }
      } else {
        throw new Error("Failed to retrieve profile."); // Handle other HTTP error statuses
      }
    } catch (error) {
      setError(error.message);
    }
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your logic for handling the form submission here
  // };

  return (
    <div className="flex items-center justify-center p-40">
    <div className="request-container bg-white p-8 rounded-md">
      <h1 className="text-3xl font-bold text-center text-red-700 mb-4">
        You Are One Step Away to find Donor!
      </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="province"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Province*
            </label>
            <select
              id="province"
              name="province"
              value={patientDetail.province}
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              required
              onChange={(e) => {
                setSelectedProvince(e.target.value);
                console.log(e.target.value);
                setDistrictList(districtOptions[e.target.value] || []);
                setPatientDetail({
                  ...patientDetail,
                  province: e.target.value,
                  district: "",
                  
                });
              }}
            >
              <option value="" disabled>
                Select Province
              </option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="district"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              District*
            </label>
            <select
              id="district"
              name="district"
              value={patientDetail.district}
              
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              required
              onChange={(e) => {
                console.log(e.target.value);
                
                setPatientDetail({
                  ...patientDetail,
                  district: e.target.value,
                })
              }
                
              }
            >
              <option value="" disabled>
                Select District
              </option>
              {districtList.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="blood-group"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Blood Group*
            </label>
            <select
              id="blood-group"
              name="requiredBloodGroup"
              value={patientDetail.requiredBloodGroup}
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              required
              onChange={(e) => {
                console.log(e.target.value);

                setPatientDetail({
                  ...patientDetail,
                  [e.target.name]: e.target.value,
                })
              }
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

          <button
              type="submit"
              className="w-full rounded-2xl bg-red-500 text-white p-2 mt-4 hover:bg-red-600"
              >
                Search
            
              </button>
        </form>
      </div>

      <RequestBlood patientDetail={patientDetail} />
    </div>
  );
};

export default requireAuth(SearchBlood);
