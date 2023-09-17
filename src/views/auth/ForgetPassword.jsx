import React, { useState } from "react";
import { useAuth } from "contexts/AuthContext";
import InputField from "components/fields/InputField";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {    
    resetPassword(email)
    .then(() => {
      alert("Password Reset Link sent to your registered email-id !");
      navigate("/auth/sign-in");
    });
  };
  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        {/* Name */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Name*"
          placeholder="Name"
          id="name"
          type="text"
          setField={setName}
        />
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="email"
          setField={setEmail}
        />
        <button
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={handleSubmit}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
