import React from "react";
import { BsBag, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-16 px-6 md:px-32 text-lg">
            <div className="md:hidden">
                <Drawer />
            </div>
            <div className="flex items-center">
                <a href="/">
                    <img className="w-48 md:w-52" src="/logo4.png" />
                </a>
                <div className="hidden md:w-[500px] md:flex md:justify-start">
                    <Link className="px-4 hover:underline" to={"/products"}>
                        Collection
                    </Link>
                    <Link className="px-4 hover:underline" to={"/products"}>
                        About Us
                    </Link>
                    <Link className="px-4 hover:underline" to={"/products"}>
                        Contact
                    </Link>
                </div>
            </div>
            <div className="flex md:w-[500px] md:justify-end">
                <Link className="px-4" to={"/cart"}>
                    <BsBag />
                </Link>
                <Link className="" to={"/user"}>
                    <BsPerson />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
