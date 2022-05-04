import {BrowserRouter as Router, Link,
    Routes, Route} from 'react-router-dom'
import './App.css';
import AddNotice from "./components/AddNotice";
import Home from "./Home";
import SearchGroupPage from "./SearchGroupPage";
import AddNewGroup from "./components/AddNewGroup";
import React, {useEffect, useReducer, useRef, useState} from "react";
import axios from "axios";
import SearchPeoplePage from "./SearchPeoplePage";
import Register from "./components/Register";
import routes from "./routes";



function App(props){
    const [noticesData, setNoticesData] = useState([]);
    const [groupsData, setGroupsData] = useState([]);
    const [membersData, setMembersData] = useState([]);

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [reg] = useState([]);
props.history.push()

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

    const ref = useRef(false);


    if (noticesData.length !== 0) {
        noticesInitialData = noticesData["persons"];
    }

    if (groupsData.length !== 0)
        groupsInitialData = groupsData["groups"];

    if (membersData.length !== 0) {
        membersInitialData = membersData["logins"];
    }

    if(noticesInitialData.length === 5 && !ref.current)
    {
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
        ref.current=true;
        forceUpdate();


    }
    return (
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/newNotice" element={<AddNotice notices={noticesInitialData}/>}/>
                        <Route path="/" element={<Home members={membersInitialData}/>}/>
                        <Route path="register" element={<Register members={membersInitialData}/>}/>
                        <Route path="/findPeople" element={<SearchPeoplePage  notices={noticesInitialData} />}/>
                        <Route path="/findGroup" element={<SearchGroupPage groups={groupsInitialData}/>}/>
                        <Route path="/newGroup" element={<AddNewGroup groups={groupsInitialData}/>}/>
                    </Routes>
                </Router>
            </div>
        );

}

export default App;

