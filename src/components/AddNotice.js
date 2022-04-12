import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom"
import initialDetails from "../data/initialDetails";


function AddNotice() {

    const navigate = useNavigate();
    const [notice, setNotice] = useState({
        id: initialDetails.length+1,
        name: "",
        email: "",
        description: "",
        tags: "",
        subjects: ""
    });

    const handleOnClick = () => {
        navigate("/");
    }

    const handleOnInput = (event) => {
        const id = event.target.id;
        const {value} = event.target;
        if (id === 'nameID') {
            setNotice({...notice, name: value});
        } else if (id === 'emailID') {
            setNotice({...notice, email: value});
        } else if (id === 'tagsID') {
            setNotice({...notice, tags: value});
        } else if (id === 'subID') {
            setNotice({...notice, subjects: value});
        } else {
            setNotice({...notice, description: value});
        }
    }

    const addNotice = () => {
        if (notice.name != "" && notice.description != "" && notice.email != "" && notice.name != "" && notice.subjects != "") {
            initialDetails.push(notice);
            navigate("/");

        } else {
            alert("All fields must be completed");
        }

    }

        return (

            <div>
                <header className="header">
                    <div>Notice Board</div>
                </header>
                <div className="newNoticeLayout">
                    <input className="input-notice" id="nameID" placeholder="Full Name" onChange={handleOnInput}/>
                    <input className="input-notice" id="emailID" placeholder="Email" onChange={handleOnInput}/>
                    <input className="input-notice" id="subID" placeholder="Subjects" onChange={handleOnInput}/>
                    <input className="input-notice" id="descID" placeholder="Description" onChange={handleOnInput}/>
                    <input className="input-notice" id="tagsID" placeholder="Tags" onChange={handleOnInput}/>
                </div>
                <div style={{textAlign: "center"}}>
                <button className="add-notice" type={"button"} onClick={addNotice} >Add Notice</button>
                <button className="back-button" type={"button"} onClick={handleOnClick}>Back to main page</button>
                </div>
            </div>
        )

}
export default AddNotice