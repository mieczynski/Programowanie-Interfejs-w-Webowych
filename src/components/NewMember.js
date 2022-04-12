import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import initialGroups from "../data/initailGroups";

function NewMember({sentData, membId, passData}) {

    const [member, setMember] = useState({
        id: membId,
        name: "",
        memberDesc: "",
        email: ""
    });
    const [isActive, setActive] = useState("false");

    const handleOnInput = (event) => {
        const id = event.target.id;
        const {value} = event.target;
        setActive("false");
        if (id === 'nameID') {
            setMember({...member, name: value});
        }  else if (id === 'emailID') {
            setMember({...member, email: value});
        } else {
            setMember({...member, memberDesc: value});
        }

    }

    const confirm = () => {
        if(member.name != "" && member.memberDesc != "" && member.email != ""){
            setActive(!isActive);
            if(isActive) {
                passData[membId] = member;
                sentData(passData);
            }
        }
        else
        {
            alert("All fields must be filled")
        }
    }

    return(
        <div >
            <input className="member-input" id="nameID" placeholder="Name" onChange={handleOnInput}/>
            <input className="member-input" id="emailID" placeholder="E-mail" onChange={handleOnInput}/>
            <input className="member-input" id="descID" placeholder="Description" onChange={handleOnInput}/>
            <button className={isActive ?"confirm-btn-nonactive": "confirm-btn-active"} type={"button"} onClick={confirm} >Confirm</button>
        </div>

    );
}
export default NewMember;