import React from 'react';
import '../myStyles.css';
import {useAuthState} from "../Context";

function Header()   {

    return(
        <div>
           <header className="header">
            <div>Notice Board</div>
           </header>

        </div>
    );
}

export default Header;