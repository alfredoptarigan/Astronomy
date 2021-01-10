import React from "react";

function Footer() {
  return (
    <div className=" border-t border-gray-500 flex justify-center  items-center mt-24">
      <p className="font-medium pt-5 text-xs lg:text-sm ">
        Copyright {new Date().getFullYear()} Alfredo Patricius Tarigan
      </p>
    </div>
  );
}

export default Footer;
