import React, {useRef, useState} from "react";
import { useNavigate} from "react-router-dom"
import axios from "axios";
import Header from "../Pages/Header";


function AddNotice({notices}) {

    const navigate = useNavigate();
    const [wait, setWait] = useState(false);
    const [notice, setNotice] = useState({
        id: notices.length+1,
        name: "",
        email: "",
        description: "",
        tags: "",
        subjects: "",
        url: ""
    });

    const handleOnClick = () => {
        navigate("/findPeople");
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

    const getPicture = () =>{
        axios.get("https://picsum.photos/70/100", {
            responseType: "arraybuffer"
        })
            .then((res) => {
                const base64 = btoa(
                    new Uint8Array(res.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte), ''
                    )
                )
                setNotice({...notice, url: base64});
            })
        setWait(true);
    }

    if(!wait)
        getPicture();


    const addNotice = () => {
        if (notice.name !== "" && notice.description !== "" && notice.email !== "" && notice.tags !== "" && notice.subjects !== "") {
           if(wait){
            notices.push(notice);
            navigate("/findPeople");}

        } else {
            alert("All fields must be completed");
        }
    }

        return (
            <div>
                <Header />
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