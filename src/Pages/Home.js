import React, {useContext, useEffect, useState} from "react";
import '../myStyles.css';
import Header from "./Header";
import {useNavigate} from "react-router-dom";
import {logInWithFacebook, logInWithGoogle, logInWithEmailAndPassword} from "../Firebase/UserAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../Firebase/Initialize";

function Home({data}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);


    const handleOnClickRegBtn = () => {
        navigate("/register")
    }

    const handleOnClickLoginBtn = () => {
        logInWithEmailAndPassword(email,password);
    }

    useEffect(() => {
        if (loading)
            return
        if (user)
            navigate("/findPeople");
        if(error)
            console.error({error});
    }, [user, loading]);

    return (
        <div className={"center"}>
            <Header/>
            <div >
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
            </div>
              <div >
                    <input className={"loginBtn"} type="button" value="Login" onClick={handleOnClickLoginBtn} />
                    <input className={"registerBtn"} type="button" value="Register" onClick={handleOnClickRegBtn}/>
                </div>

                <div style={{marginLeft:'10px', display:'grid', justifyContent:'center'}} >
                    <input className={"loginWithGoogleBtn"} type="button" value="Login with Google" onClick={logInWithGoogle}/>
                    <input className={"loginWithFacebookBtn"} type="button" value="Login with Facebook" onClick={logInWithFacebook}/>
                </div>
        </div>

    );
}
    export default Home;