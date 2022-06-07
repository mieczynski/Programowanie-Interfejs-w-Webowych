import React from "react";
import '../myStyles.css';
import {useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth, db } from "../Firebase/Initialize";
import {signOut} from "firebase/auth";


function LogoutTable() {

    const navigate = useNavigate();
    const [currentUser] = useAuthState(auth);

    const handleLogout = () => {
        if (currentUser) {
            signOut(auth).then(() => {
                navigate("/");
            });
        }
    };
    const checkUser = () => {
        if (currentUser){
            return currentUser.displayName;
        }
    };

    let myElement
    let logout;

    if (currentUser){
        logout = <input
            className={"logoutBtn"}
            type="button"
            value="Logout"
            onClick={handleLogout}
        />;
        myElement = <p style={{display: "inline", marginTop: "0px", marginBottom: "0px", marginRight: "8px"}}>{checkUser()}</p>;
    }

    return (
        <div>
            <div className={"login"}>
                {myElement}
                {logout}
            </div>
        </div>
    );
}
export default LogoutTable;