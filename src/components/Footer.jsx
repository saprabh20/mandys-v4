import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-gray-600 text-white flex justify-center items-center flex-col py-6">
            <div className="flex pb-2">
                <div className="px-2 hover:text-fuchsia-500">
                    <a
                        href="https://www.instagram.com/_mandys.store_"
                        target="_blank"
                    >
                        <BsInstagram />
                    </a>
                </div>
                <div className="px-2 hover:text-blue-500">
                    <a href="" target="_blank">
                        <BsFacebook />
                    </a>
                </div>
            </div>
            <p>&copy; 2024 Mandy's Store. All rights reserved.</p>
            <p>by Diksha and Saprabh</p>
        </div>
    );
};

export default Footer;
