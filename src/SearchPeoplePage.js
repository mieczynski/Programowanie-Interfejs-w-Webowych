import React, {useReducer, useRef, useState} from "react";
import './myStyles.css';
import Header from "./Header";
import Search from "./components/Search";

function Home({notices}) {

    return (
        <div>
            <Header/>
            <Search details={notices}/>
        </div>
    );
}
export default Home;