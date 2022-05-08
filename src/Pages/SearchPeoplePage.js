import React, {useReducer, useRef, useState} from "react";
import '../myStyles.css';
import Header from "./Header";
import Search from "../Components/Search";
import {logout, useAuthDispatch, useAuthState} from "../Context";
import {useNavigate} from "react-router-dom";

function SerachPeoplePage({notices}) {
    const dispatch = useAuthDispatch();
    const userDetails = useAuthState();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(dispatch);
        navigate('/');
    };

    return (
        <div>
            <div className={"login"}>
            <p style={{display: "inline", marginTop: "0px", marginBottom: "0px", marginRight: "8px"}}>{userDetails.user.email}</p>
                <input
                    className={"logoutBtn"}
                    type="button"
                    value="Logout"
                    onClick={handleLogout}
                />
            </div>
            <Header/>
            <Search details={notices}/>
        </div>
    );
}
export default SerachPeoplePage;