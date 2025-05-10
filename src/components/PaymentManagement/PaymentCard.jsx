import React, { useState } from "react";

const PaymentCard = ({ icon, label, status }) => {
  const isEnabled = status === "BẬT";

  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-xl border-2
        ${
          status === "BẬT"
            ? "bg-blue-100 border-green-600"
            : "bg-white border-gray-400"
        }
      `}
    >
      <img
        src={icon}
        alt={label}
        className="w-12 h-12 rounded-md object-contain"
      />
      <div className="ml-4">
        <p
          className={`font-bold ${
            status === "BẬT" ? "text-green-900" : "text-gray-700"
          } text-[20px]`}
        >
          {label}
        </p>
        <p
          className={`text-sm ${
            status === "BẬT" ? "text-green-600" : "text-gray-500"
          } text-[16px]`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default PaymentCard;
