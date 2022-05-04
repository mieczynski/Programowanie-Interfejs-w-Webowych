import React, {useEffect, useReducer, useRef, useState} from 'react';
import useCollapse from 'react-collapsed';

function Card({person}) {
        const config = {
            duration: 1000
        };
        const {getCollapseProps, getToggleProps, isExpanded} = useCollapse(config);


        const tagsToString = () => {
        const array = person.tags.split(" ");
             return array.map((tag,i) => <a key={i} className="tag">{tag}</a>)
    }


    return(

        <div style={{background: "#f9ffe8", width: "1000px", marginLeft: "320px"}} >
        <div className="notice-header" {...getToggleProps()}>
            <img src={`data:image/jpg;charset=utf-8;base64,${person.url}`} />
            {isExpanded ? <a className="notice-details" >Notice details</a> : <div >
                <a style={{marginLeft: 10}}>{person.name}</a>
                {tagsToString()}
            </div>
                 }
        </div>
        <div className="collapse" {...getCollapseProps()}>
                <p id={"nameID"}  >Name: {person.name}</p>
                <p id={"descID"} >Description: {person.description} </p>
                <p id={"subjectsID"} >Subjects: {person.subjects} </p>
                <p id={"tagsID"} >Tagi: {person.tags}</p>
        </div>
    </div>
    );
}

export default Card;