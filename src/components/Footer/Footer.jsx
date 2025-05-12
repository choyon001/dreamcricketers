import React from "react";
import Logo from "../../assets/logo.png"
export default function Footer() {
  return (
    <div className="mt-10 bg-gradient-to-b from-[rgba(4,13,17,1)] to-[rgba(18,31,94,1)] ">
      
      <div className="w-10/12 mx-auto  text-white p-4 ">
      
      <div className="text-center mb-6">
        <img
          src={Logo}
          alt="Logo"
          className="mx-auto w-16 h-16"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg mb-2">About Us</h3>
          <p className="text-gray-300 text-xs">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="text-gray-300 text-xs">
            <li>
              <a href="" >
                Home
              </a>
            </li>
            <li>
              <a href="">
                Services
              </a>
            </li>
            <li>
              <a href="" >
                About
              </a>
            </li>
            <li>
              <a href="" >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Subscribe</h3>
          <p className="text-gray-300 text-xs">Subscribe to our newsletter for the latest updates.</p>
          <form className="mt-2">
            <div className="flex">
                <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded mb-2 text-white"
            />
            <button
              type="submit"
              className="bg-yellow-200  p-2 w-full rounded mb-2 text-black "
            >
              Subscribe
            </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
    </div>
  );
}
