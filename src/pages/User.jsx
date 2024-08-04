import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import AddressForm from "../components/AddressForm";
import AddressCard from "../components/AddressCard";

const User = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [address, setAddress] = useState(null);

    const handleSave = (addressData) => {
        setAddress(addressData);
    };

    return (
        <>
            {isAuthenticated ? (
                <div className="flex flex-col md:flex-row justify-start items-start">
                    <div className="max-w-lg mx-auto p-8 text-center border border-gray-300 rounded-lg shadow-md">
                        <div className="mb-6">
                            <img
                                src={user.picture}
                                alt={`${user.name}'s profile`}
                                className="rounded-full w-24 h-24 mx-auto mb-4 border-2 border-black"
                            />
                            <h1 className="text-2xl font-bold">{user.name}</h1>
                            <h2 className="text-xl text-gray-500">
                                {user.nickname}
                            </h2>
                        </div>
                        <div className="text-left space-y-2">
                            <p>
                                <strong>Full Name:</strong>{" "}
                                {`${user.given_name} ${user.family_name}`}
                            </p>
                            <p>
                                <strong>Email:</strong> {user.email}
                            </p>
                            <p>
                                <strong>Email Verified:</strong>{" "}
                                {user.email_verified ? "Yes" : "No"}
                            </p>
                            <p>
                                <strong>Last Updated:</strong>{" "}
                                {new Date(user.updated_at).toLocaleString()}
                            </p>
                        </div>
                    </div>
                    {address ? (
                        <AddressCard address={address} />
                    ) : (
                        <AddressForm onSave={handleSave} />
                    )}
                </div>
            ) : null}
        </>
    );
};

export default User;
