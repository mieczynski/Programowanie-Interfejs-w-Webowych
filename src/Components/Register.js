import React, {useRef, useState} from "react";
import { useNavigate} from "react-router-dom"
function Register({members}) {

    const [member, setMember] = useState({
        id: members.length+1,
        password: "",
        email: ""
    });

    let a = false;
    const [checkFields, setCheckFields] = useState(false);

    const ref = useRef(false);

    const navigate = useNavigate();

    const handleOnInput = (event) => {
        const id = event.target.id;
        const {value} = event.target;
        if (id === 'passwordID') {
            setMember({...member, password: value});
        }  else {
            setMember({...member, email: value});
        }
    }
    const checkLogin = () =>{
        let check = true;
        members.forEach((i) => {
            if(i.email === member.email)
                check = false;
        })
        return check
    }
    const register = () => {

        if ( member.password === "" || member.email === ""){
                 alert("All fields must be completed");
            }
        else if (!checkLogin()) {
            alert("Member with that login exists");
        }
        else{
            members.push(member);
            navigate("/");
        }

    }

    const handleOnClick = () => {
        navigate("/");
    }
    return(
        <div>
            <header className="header">
                <div>Notice Board</div>
            </header>
            <div className="newNoticeLayout">
                <input className="input-notice" id="emailID" placeholder="Email" onChange={handleOnInput}/>
                <input className="input-notice" type={"password"} id="passwordID" placeholder="Password" onChange={handleOnInput}/>
            </div>
            <div style={{textAlign: "center"}}>
                <button className="add-notice" type={"button"} onClick={register} >Register</button>
                <button className="back-button" type={"button"} onClick={handleOnClick}>Back to main page</button>
            </div>
        </div>

    )
}



export default Register