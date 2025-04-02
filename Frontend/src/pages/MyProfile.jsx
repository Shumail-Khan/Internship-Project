import React, { useState } from "react";
import profilePic from "../assets/profile_pic.png"; // Adjust the path as needed

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: profilePic,
    email: "Essaraza123@gmail.com",
    phone: "03189764318",
    address: {
      line1: "57th Cross Richmond",
      line2: "Circle Churd Road London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="flex max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <img
        src={userData.image}
        alt={userData.name}
        className="w-48 h-48 rounded-full mr-6"
      />
      <div className="flex-1">
        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        ) : (
          <h2 className="text-xl font-semibold mb-4">{userData.name}</h2>
        )}

        <hr className="my-4" />

        <div className="mb-6">
          <p className="text-lg font-bold">CONTACT INFORMATION</p>
          <div className="mb-4">
            <p>Email:</p>
            <p className="font-medium">{userData.email}</p>
            <p>Phone:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
            ) : (
              <p className="font-medium">{userData.phone}</p>
            )}
            <p>Address:</p>
            {isEdit ? (
              <div>
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <input
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ) : (
              <div>
                <p className="font-medium">{userData.address.line1}</p>
                <p className="font-medium">{userData.address.line2}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-lg font-bold">BASIC INFORMATION</p>
          <div>
            <p>Gender:</p>
            {isEdit ? (
              <select
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
                className="w-full p-2 border border-gray-300 rounded mb-2"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="font-medium">{userData.gender}</p>
            )}
            <p>Birthday:</p>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="font-medium">{userData.dob}</p>
            )}
          </div>
        </div>

        <div className="flex justify-between">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;