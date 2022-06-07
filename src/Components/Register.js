import React, {Component, useEffect, useRef, useState} from "react";
import { useNavigate} from "react-router-dom"
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../Firebase/Initialize";
import { registerWithEmailAndPassword} from "../Firebase/UserAuth";
import {Button, Modal} from "react-bootstrap";


function Register({members}) {

    const [member, setMember] = useState({
        id: members.length + 1,
        password: "",
        email: "",
        name: ""
    });
    const [user, loading, error] = useAuthState(auth);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();



    useEffect(() => {
        if (loading)
            return
        if (user)
            handleShow()
        if (error)
            console.error({error});
    }, [user, loading]);

    const handleOnInput = (event) => {
        const id = event.target.id;
        const {value} = event.target;
        if (id === 'passwordID') {
            setMember({...member, password: value});
        } else if (id === 'emailID') {
            setMember({...member, email: value});
        } else {
            setMember({...member, name: value});
        }
    }

    const register = () => {

        if (member.password === "" || member.email === "" || member.name === "") {
            alert("All fields must be completed");
        } else {
            registerWithEmailAndPassword(member.name, member.email, member.password);
        }

    }

    const handleOnClick = () => {
        navigate("/");
    }


    return (
        <div>
            <header className="header">
                <div>Notice Board</div>
            </header>
            <div className="newNoticeLayout">
                <input className="input-notice" id="emailID" placeholder="Email" onChange={handleOnInput}/>
                <input className="input-notice" type={"password"} id="passwordID" placeholder="Password"
                       onChange={handleOnInput}/>
                <input className="input-notice" id="nameID" placeholder="Name" onChange={handleOnInput}/>

            </div>
            <div style={{textAlign: "center"}}>
                <button className="add-notice" type={"button"} onClick={register}>Register</button>
                <button className="back-button" type={"button"} onClick={handleOnClick}>Back to main page</button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    <Modal.Title>Registration complete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Congratulation, your account was registered. Now you can start use the site!!!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleOnClick}>Go to the site</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
    export default Register



