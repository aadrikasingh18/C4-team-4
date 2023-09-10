import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, message);
    const config = {
      Host: process.env.REACT_APP_Host,
      Username: process.env.REACT_APP_Username,
      Password: process.env.REACT_APP_Password,
      To: process.env.REACT_APP_To,
      From: process.env.REACT_APP_Username,
      Subject: "New email support",
      Body: `<h1>Username: ${name} <br/> Password: ${email}</h1> <p>Message: ${message}</p>`,
    };
    if (window.Email) {
      console.log("email is working");
      await window.Email.send(config).then((message) => {
        alert("Message sent successfully !");
      });
      navigate("/admin/default");
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full max-w-sm">
        <form className="flex justify-center flex-col text-sm md:text-base items-center mt-5 p-6 text-white dark:text-[#000] h-auto z-10 bg-lightPrimary dark:bg-navy-600 rounded-xl font-bold mb-4 shadow-gray-700 dark:shadow-navy-300 shadow-inset">
          <div className=" w-full">
            <label className="mb-2 block text-sm font-bold text-gray-600 " for="name">
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-none dark:bg-navy-900"
              id="username"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-5 w-full">
            <label className="mb-2 block text-sm font-bold text-gray-600" for="email">
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-none dark:bg-navy-900"
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <p className="text-red-500 text-xs italic">Email</p> */}
          </div>
          <div className="mb-5 w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-600"
              for="message"
            >
              Message
            </label>
            <textarea
              className=" w-full h-32 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-none dark:bg-navy-900"
              id="message"
              type="text-area"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            {/* <p className="text-red-500 text-xs italic">Message</p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="flex items-center justify-between text-white dark:text-[#000] px-4 py-2 w-auto h-10 bg-blueSecondary dark:bg-brandLinear rounded-lg font-bold"
              type="button"
              onClick={handleSubmit}
            >
              Support
            </button>
            {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Support;
