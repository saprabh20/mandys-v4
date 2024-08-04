import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import { HiLogout, HiViewGrid } from "react-icons/hi";
import Profile from "./Profile";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileDropdown = () => {
        const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <>
            {isAuthenticated ? (
                <Dropdown
                    label=""
                    dismissOnClick={false}
                    renderTrigger={() => (
                        <span>
                            <Profile  size={10}/>
                        </span>
                    )}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">{user.nickname}</span>
                        <span className="block truncate text-sm font-medium">
                            {user.email}
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item icon={HiViewGrid}><Link to={'/user'}>Profile</Link></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item icon={HiLogout}><LogoutButton/></Dropdown.Item>
                </Dropdown>
            ) : null}
        </>
    );
};

export default ProfileDropdown;
