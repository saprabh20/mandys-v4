import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
const Profile = ({size}) => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        isAuthenticated && (
            <div className={`w-${size} rounded-full border-2 border-black shadow-xm hover:shadow-xl`}>
                <img
                    className="rounded-full"
                    src={user.picture}
                    alt={user.name}
                />
            </div>
        )
    );
};

export default Profile;
