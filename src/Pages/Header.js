import React, {useEffect} from 'react';
import '../myStyles.css';
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../Firebase/Initialize";
import LogoutTable from "../Components/LogoutTable";

function Header()   {

    return(
        <div>
            <LogoutTable/>
            <header className="header">
            <div>Notice Board</div>
           </header>
        </div>
    );
}

export default Header;