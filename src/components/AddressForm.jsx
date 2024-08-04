import React, { useState } from "react";

const AddressForm = ({ onSave }) => {
    const [formState, setFormState] = useState({
        name: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        telephone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formState);
    };

    return (
        <div className="w-full md:w-96 md:max-w-full mx-auto">
            <div className="p-6 border border-gray-300 sm:rounded-md">
                <form onSubmit={handleSubmit}>
                    {Object.keys(formState).map((key) => (
                        <label key={key} className="block mb-6">
                            <span className="text-gray-700">
                                {key.replace("_", " ")}
                            </span>
                            {key !== "message" ? (
                                <input
                                    name={key}
                                    type="text"
                                    value={formState[key]}
                                    onChange={handleChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder=""
                                />
                            ) : (
                                <textarea
                                    name={key}
                                    value={formState[key]}
                                    onChange={handleChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    rows="3"
                                    placeholder="floor/door lock code/etc."
                                ></textarea>
                            )}
                        </label>
                    ))}
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddressForm;
