import React, { useState } from "react";
import requireAuth from "../../requireAuth";
import donateblood1 from '../assets/donateblood1.png'

const BlTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const Genders = ["Male", "Female", "Unisex"];

const DonateBlood = () => {
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    address: "",
    contact: "",
    bloodGroup: "",
    donationDate: "",
    lastDonationDate: "",
    gender: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission here
    setDonorInfo({
      name: "",
      address: "",
      contact: "",
      bloodGroup: "",
      donationDate: "",
      lastDonationDate: "",
      gender: "",
      age: "",
    });
  };

  return (
    <>
    
    <div className="flex items-center justify-center p-40">
      <div className="request-container bg-white p-8 rounded-md">
        <h1 className="text-3xl font-bold text-center text-red-700 mb-4">
          You Are One Step Away to Donate!
        </h1>

          {/* Your Snackbar and Card components go here */}

          <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={donorInfo.name}
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                autoComplete="name"
                required
                autoFocus
                onChange={(e) =>
                  setDonorInfo({
                    ...donorInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={donorInfo.address}
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                autoComplete="address"
                required
                onChange={(e) =>
                  setDonorInfo({
                    ...donorInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contact"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={donorInfo.contact}
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                autoComplete="tel"
                required
                onChange={(e) =>
                  setDonorInfo({
                    ...donorInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bloodGroup"
              >
                Blood Group
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={donorInfo.bloodGroup}
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={(e) =>
                  setDonorInfo({
                    ...donorInfo,
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
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="donationDate"
              >
                Date of Donation
              </label>
              <input
                type="date"
                id="donationDate"
                name="donationDate"
                value={donorInfo.donationDate}
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={(e) =>
                  setDonorInfo({
                    ...donorInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastDonationDate"
              >
                Last Donation Date
              </label>
              <input
                type="date"
                id="lastDonationDate"
                name="lastDonationDate"
                value={donorInfo.lastDonationDate}
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={(e) =>
                  setDonorInfo({
                    ...donorInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={donorInfo.gender}
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={(e) =>
                  setDonorInfo({
                    ...donorInfo,
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
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="age"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={donorInfo.age}
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={(e) =>
                  setDonorInfo({
                    ...donorInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 rounded-2xl text-white p-2 mt-4 hover:bg-red-600"
              >
                Donate
                {/* Add your spinner here if needed */}
              </button>
            </form>
          </div>
        </div>
    </>
  );
};

export default requireAuth(DonateBlood);
