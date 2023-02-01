import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import Login from "./Login";
import { CLIENT_ID } from "../../utils/environement";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clienId: CLIENT_ID,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  return (
    <nav className="bg-white shadow-md py-4 md:py-3 px-4 md:px-8 lg:px-16 xl:px-20 flex items-center flex-col lg:flex-row ">
      <div className="flex justify-between items-center w-full lg:w-auto lg:mx-16 xl:mx-20">
        <a href="/">
          <img src="/shared//Logo.svg" alt="Logo" />
        </a>
        <button className="space-y-2 w-12 lg:hidden" onClick={toggleVisible}>
          <div className="w-full h-1 rounded-full bg-dark-blue" />
          <div className="w-full h-1 rounded-full bg-dark-blue" />
          <div className="w-full h-1 rounded-full bg-dark-blue" />
        </button>
      </div>
      <div
        className={`lg:flex items-center justify-between w-full flex-col lg:flex-row ${
          visible ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center lg:flex-row space-y-4 lg:space-y-0 my-4 font-semibold text-sm md:text-base lg:text-lg lg:space-x-8">
          <a href="#About" className="hover:text-hover duration-300">
            About us
          </a>
          <a href="#Team" className="hover:text-hover duration-300">
            Our team
          </a>
          <a href="#Contact" className="hover:text-hover duration-300">
            Contact us
          </a>
        </div>
        <div className="space-x-4">
          <Login />
        </div>
      </div>
    </nav>
  );
}
