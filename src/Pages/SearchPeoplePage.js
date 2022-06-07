import React, {useContext, useEffect, useReducer, useRef, useState} from "react";
import '../myStyles.css';
import Header from "./Header";
import Search from "../Components/Search";
import {AuthProvider, useAuthDispatch} from "../Context";
import {useNavigate} from "react-router-dom";
import {logout} from '../Firebase/UserAuth'
import {useAuthState} from "react-firebase-hooks/auth";
import { ref, onValue } from "firebase/database";
import { auth, db } from "../Firebase/Initialize";
import {signOut} from "firebase/auth";

function SerachPeoplePage({notices}) {

    return (
        <div>
            <Header/>
            <Search details={notices}/>
        </div>
    );
}
export default SerachPeoplePage;