import React, {useContext, useState} from "react";
import '../myStyles.css';
import Header from "./Header";
import {useNavigate} from "react-router-dom";
import { loginUser, useAuthState, useAuthDispatch } from "../Context"

function Home({data}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {  errorMessage } = useAuthState();

    const dispatch = useAuthDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            let response = await loginUser(dispatch, { email, password }, data);
            if (!response) {
                return;}
            navigate('/findPeople');
        } catch (error) {
            console.log(error)
        }
    };

    const handleOnClickRegBtn = () => {
        navigate("/register")

    }


    return (
        <div>
            <Header/>
            {errorMessage ? <p className={"error"}>{errorMessage}</p> : null}

            <input
                className={"loginFields"}
                placeholder="Login"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className={"loginFields"}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}

            />
            <div className={"center"}>
                <input
                    className={"loginBtn"}
                    type="button"
                    value="Login"
                    onClick={handleLogin}
                />
                <input className={"registerBtn"} type="button" value="Register" onClick={handleOnClickRegBtn}/>
            </div>
        </div>
    );
}
    export default Home;