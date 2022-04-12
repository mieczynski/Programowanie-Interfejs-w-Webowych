import React from 'react';
import {Collapse} from 'react-collapse';
import {Button} from "react-bootstrap";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {Paper} from "@material-ui/core";

class GroupCard extends React.Component{
    state={
        isDropdownOpen: false,
        title:this.props.group.name
    }
    onDropdownClicked = () => {
        this.setState(prevState => ({
            isDropdownOpen: !prevState.isDropdownOpen,
        }));
        if (this.state.isDropdownOpen)
            this.state.title = this.props.group.name;
        else
            this.state.title = "Group Card";
    };

    render(){

        return (
            <div style={{background: "#f9ffe8", width: "1000px", marginLeft: "320px"}} >
                <div className="notice-header" onClick={this.onDropdownClicked}>
                 <a  style={{marginLeft: 10}}>{this.state.title}</a>
                </div>
                <Collapse isOpened={this.state.isDropdownOpen}>
                    <div className="collapse">
                        <p id={"nameID"}  >Name: {this.props.group.name}</p>
                        <p id={"descID"} >Description: {this.props.group.description} </p>
                        <p id={"subjectID"} >Subject: {this.props.group.subject} </p>
                        <span id={"membersID"} >Members: {this.props.group.members.map(
                            (member, i) => <p key={i}>  {member.name +" - "+ member.memberDesc} </p>
                        )}</span>
                    </div>
                </Collapse>
            </div>
        );
    }}
export default GroupCard;