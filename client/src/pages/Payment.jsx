import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const Payment = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const initiatePayment = async () => {
    if (!user) return;

    try {
      const { data } = await axios.post("/api/payment/create-order");

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Brayn Premium",
        description: "Upgrade to Premium Plan",
        order_id: data.order.id,
        handler: async (response) => {
          try {
            const verifyRes = await axios.post("/api/payment/verify-payment", response);

            if (verifyRes.data.success) {
              const updatedUser = verifyRes.data.user;

              // ✅ Update AuthContext with premium status
              login(localStorage.getItem("token"), updatedUser);

              toast.success("🎉 You're now a Premium user!");
              navigate("/ai/profile");
            } else {
              toast.error("Payment verification failed");
            }
          } catch (error) {
            toast.error("Error verifying payment");
            navigate("/ai/profile");
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
        },
        theme: {
          color: "#3C81F6",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      toast.error("Failed to initiate payment");
      navigate("/ai/profile");
    }
  };

  useEffect(() => {
    initiatePayment();
  }, []);

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Preparing payment...</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting to payment...</p>
    </div>
  );
};

export default Payment;
