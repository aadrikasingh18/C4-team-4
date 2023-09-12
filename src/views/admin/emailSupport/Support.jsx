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
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-xs">
        <form className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="name"
            >
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="username"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <p className="text-red-500 text-xs italic">Email</p> */}
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="message"
            >
              Message
            </label>
            <textarea
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="message"
              type="text-area"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            {/* <p className="text-red-500 text-xs italic">Message</p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
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
