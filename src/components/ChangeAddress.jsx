
import React, { useState } from 'react';

export const ChangeAddress = ({ setAddress, setIsModalOpen }) => {
  const [newAddress, setNewAddress] = useState("");

  return (
    <div>
      <input 
        type="text"
        placeholder="Enter new Address"
        className="border p-2 w-full mb-4"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => setAddress(newAddress)}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};
