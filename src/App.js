import {BrowserRouter as Router, Link,
    Routes, Route} from 'react-router-dom'
import './App.css';
import AddNotice from "./Components/AddNotice";
import Home from "./Pages/Home";
import SearchGroupPage from "./Pages/SearchGroupPage";
import AddNewGroup from "./Components/AddNewGroup";
import React, {useEffect, useReducer, useRef, useState} from "react";
import axios from "axios";
import SearchPeoplePage from "./Pages/SearchPeoplePage";
import Register from "./Components/Register";
import { AuthProvider } from './Context';


function App(){
    const [noticesData, setNoticesData] = useState([]);
    const [groupsData, setGroupsData] = useState([]);
    const [membersData, setMembersData] = useState([]);

    let noticesInitialData = [];
    let groupsInitialData = [];
    let membersInitialData = [];

    useEffect(() => {
            axios.get("http://localhost:3000/personsData.json").then((response) => {
                setNoticesData(response.data);
            });
            axios.get("http://localhost:3000/groupsData.json").then((response) => {
                setGroupsData(response.data);
            });
        axios.get("http://localhost:3000/membersData.json").then((response) => {
                setMembersData(response.data);
        });
    }, []);

    if (noticesData.length !== 0) {
        noticesInitialData = noticesData["persons"];
    }
    if (groupsData.length !== 0)
        groupsInitialData = groupsData["groups"];

    if (membersData.length !== 0) {
        membersInitialData = membersData["logins"];
    }

        for ( let i = 0 ;i< noticesInitialData.length; i++) {
            axios.get("https://picsum.photos/70/100", {
                responseType: "arraybuffer"
            })
                .then((res) => {
                    const base64 = btoa(
                        new Uint8Array(res.data).reduce(
                            (data, byte) => data + String.fromCharCode(byte), ''
                        )
                    )
                    noticesInitialData.at(i).url = base64;
                })
        }
    return (
            <div className="App">
                    <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/newNotice" element={<AddNotice notices={noticesInitialData}/>}/>
                        <Route path="/" element={<Home data={membersInitialData}/>}/>
                        <Route path="register" element={<Register members={membersInitialData}/>}/>
                        <Route path="/findPeople" element={<SearchPeoplePage  notices={noticesInitialData} />}/>
                        <Route path="/findGroup" element={<SearchGroupPage groups={groupsInitialData}/>}/>
                        <Route path="/newGroup" element={<AddNewGroup groups={groupsInitialData}/>}/>
                    </Routes>
                </Router>
                </AuthProvider>
            </div>
        );

}

export default App;

