import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { HiLogin } from "react-icons/hi";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <button
                className="hover:underline"
                onClick={() => loginWithRedirect()}
            >
                Login
            </button>
        </>
    );
};

export default LoginButton;
