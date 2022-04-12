import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import initialGroups from "../data/initailGroups";
import NewMember from "./NewMember";

function AddNewGroup() {


    const navigate = useNavigate();
    const [notice, setNotice] = useState({
        id: initialGroups.length + 1,
        name: "",
        members: [],
        description: "",
        subject: "",
    });

    const [member, setMember]=useState([0])

    const [lines, setLines] = useState([0]);

    const dispMembers = () => {
        return lines.map(m => <NewMember key={m} sentData={setMember} membId={m} passData={notice.members}/>);
    }
    const addMember = () => {
    if (lines.length<5)
       setLines([...lines, lines.length]);
    else
        alert("Cannot add more members");
    }
    const handleOnClick = () => {
        navigate("/findGroup");
    }

    const handleOnInput = (event) => {
        const id = event.target.id;
        const {value} = event.target;
        if (id === 'nameID') {
            setNotice({...notice, name: value});
        }  else if (id === 'subID') {
            setNotice({...notice, subject: value});
        } else {
            setNotice({...notice, description: value});
        }

    }

    const addNotice = () => {
        if (notice.name != "" && notice.description != "" && notice.subject != "" && notice.members.length != 0) {
            initialGroups.push(notice);
            navigate("/findGroup");

        } else {
            alert("All fields must be completed");

        }
    }

    return (

        <div className="newNoticeLayout">
            <header className="header">
                <div>Group Board</div>
            </header>
            <div>
                <input className="input-notice" id="nameID" placeholder="Group Name" onChange={handleOnInput}/>
                <input className="input-notice" id="subID" placeholder="Subject" onChange={handleOnInput}/>
                <input className="input-notice" id="descID" placeholder="Description" onChange={handleOnInput}/>
            </div>
            <div className="center">
                <p style={{fontSize: "25px", color: "grey", marginBottom: "0px"}}>Members</p>
                {dispMembers()}
            </div>
            <div>
                <button className="add-notice" type={"button"} onClick={addNotice} >Add Notice</button>
                <button className="new-member-btn" type={"button"} onClick={addMember} >Add Member</button>
                <button className="back-button" type={"button"} onClick={handleOnClick}>Back to previous page</button>
            </div>
        </div>
    )
}
export default AddNewGroup;