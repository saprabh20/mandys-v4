import React from "react";

const AddressCard = ({ address }) => {
    if (!address) return null;

    return (
        <div className="w-full md:w-96 md:max-w-full mx-auto mt-6">
            <div className="p-6 border border-gray-300 sm:rounded-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Address Information
                </h2>
                <p>
                    <strong>Name:</strong> {address.name}
                </p>
                <p>
                    <strong>Address Line 1:</strong> {address.address1}
                </p>
                <p>
                    <strong>Address Line 2:</strong> {address.address2}
                </p>
                <p>
                    <strong>City:</strong> {address.city}
                </p>
                <p>
                    <strong>State/Province:</strong> {address.state}
                </p>
                <p>
                    <strong>Zip/Postal Code:</strong> {address.zip}
                </p>
                <p>
                    <strong>Country:</strong> {address.country}
                </p>
                <p>
                    <strong>Telephone:</strong> {address.telephone}
                </p>
                <p>
                    <strong>Delivery Information:</strong> {address.message}
                </p>
            </div>
        </div>
    );
};

export default AddressCard;
