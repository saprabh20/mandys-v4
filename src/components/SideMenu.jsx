"use client";

import { Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { GiHeartEarrings } from "react-icons/gi";
import { HiHome, HiLogin, HiUsers } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    return (
        <>
            <div className="flex min-h-[50vh] items-center justify-center">
                <button onClick={() => setIsOpen(true)}>
                    <RxHamburgerMenu />
                </button>
            </div>
            <Drawer className="w-screen" open={isOpen} onClose={handleClose}>
                <Drawer.Header title="MENU" titleIcon={() => <></>} />
                <Drawer.Items>
                    <Sidebar
                        aria-label="Sidebar with multi-level dropdown example"
                        className="[&>div]:bg-transparent [&>div]:p-0 w-full"
                    >
                        <div className="flex h-full flex-col justify-between py-2">
                            <div>
                                <Sidebar.Items>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item
                                            className="text-lg font-normal hover:text-gray-950 hover:font-semibold"
                                            href="/"
                                            icon={HiHome}
                                        >
                                            Home
                                        </Sidebar.Item>
                                        <Sidebar.Item
                                            className="text-lg font-normal hover:text-gray-950 hover:font-semibold"
                                            href="/products"
                                            icon={GiHeartEarrings}
                                        >
                                            Collection
                                        </Sidebar.Item>
                                        <Sidebar.Item
                                            className="text-lg font-normal hover:text-gray-950 hover:font-semibold"
                                            href="/signin"
                                            icon={HiLogin}
                                        >
                                            Sign in
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item
                                            className="text-lg font-normal hover:text-gray-950 hover:font-semibold"
                                            href="/about"
                                            icon={FaUser}
                                        >
                                            About Us
                                        </Sidebar.Item>
                                        <Sidebar.Item
                                            className="text-lg font-normal hover:text-gray-950 hover:font-semibold"
                                            href="/contact"
                                            icon={HiUsers}
                                        >
                                            Contact
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>
                                </Sidebar.Items>
                            </div>
                        </div>
                    </Sidebar>
                </Drawer.Items>
            </Drawer>
        </>
    );
};

export default SideMenu;
