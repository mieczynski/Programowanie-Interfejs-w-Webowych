import React, {useContext, useState} from "react";
import { useSetState } from 'react-use';
import './myStyles.css';
import Header from "./Header";
import {useNavigate} from "react-router-dom";

function Home({members}) {

    const navigate = useNavigate();

    const handleOnClickRegBtn = () => {
        navigate("/register")
        // groupsData.push(membersData)

    }


    return (
        <div>
            <Header/>
            <input
                className={"loginFields"}
                placeholder="Login"
            />
            <input
                className={"loginFields"}
                type="password"
                placeholder="Password"
            />
            <div className={"center"}>
                <input
                    className={"loginBtn"}
                    type="button"
                    value="Login"

                />
                <input className={"registerBtn"} type="button" value="Register" onClick={handleOnClickRegBtn}/>
            </div>
        </div>
    );
}
    export default Home;