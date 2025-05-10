import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import PaymentCard from "./PaymentCard";
import ShopeePayIcon from "../../assets/icons/Logo-ShopeePay-V.webp";
import MoMoIcon from "../../assets/icons/Logo-MoMo-Circle.webp";
import ZaloPayIcon from "../../assets/icons/Logo-ZaloPay-Square.webp";
import VNPayIcon from "../../assets/icons/Icon-VNPAY-QR.webp";
import CreditCardIcon from "../../assets/icons/creditcard.png";

const paymentOptions = [
  {
    icon: ShopeePayIcon,
    label: "ShopeePay",
    status: "BẬT",
  },
  {
    icon: MoMoIcon,
    label: "MoMo",
    status: "BẬT",
  },
  {
    icon: ZaloPayIcon,
    label: "ZaloPay",
    status: "BẬT",
  },
  {
    icon: VNPayIcon,
    label: "VNPay-QR",
    status: "TẮT",
  },
  {
    icon: CreditCardIcon, // icon thẻ tín dụng
    label: "Thẻ Tín dụng/Ghi nợ",
    status: "BẬT",
  },
];

const PaymentManagement = () => {
  const { isAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   }
  // }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col justify-between h-screen">
        <div className="p-8 h-full">

      <div className="grid grid-cols-3 gap-6">
        {paymentOptions.map((option, index) => (
          <PaymentCard
            key={index}
            icon={option.icon}
            label={option.label}
            status={option.status}
          />
        ))}
      </div>
    </div>
    {/* Nút lưu/hủy */}
    <div className="flex justify-center my-8 gap-4">
        <button className="px-6 py-2 rounded-md bg-[#86a500] text-white font-bold uppercase hover:opacity-90 transition">
          Lưu
        </button>
        <button className="px-6 py-2 rounded-md border-2 border-[#86a500] text-[#86a500] font-bold uppercase hover:bg-[#f4fce3] transition">
          Huỷ thay đổi
        </button>
      </div>
    </div>
  );
};

export default PaymentManagement;
