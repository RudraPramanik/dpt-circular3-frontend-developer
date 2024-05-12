import React from "react";
import Container from "./Container";
import Text from "./Text";
import Notification from "../icon/Notification";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="bg-gray-700 ">
        <Container className="flex justify-between items-center p-4">
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200">
              Dashboard
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Master Price
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Custom Price
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Calendar
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Report
            </a>
          </div>
          <div className="flex space-x-4">
            <Notification className="w-5 h-5 text-white flex items-center mt-2 " />
            <img
              src="/src/assets/avatar.png"
              alt="Avatar 2"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </Container>
      </div>
      <div className="text-gray-700 my-5 border-b border-b-gray-300 ">
        <Text variant="headingLg" className="" fontWeight="semibold">
          Master Price
        </Text>
      </div>
    </>
  );
};

export default Navbar;
