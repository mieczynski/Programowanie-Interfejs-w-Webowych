import React, {useRef, useState} from "react";
import Scroll from './Scroll';
import SearchList from './SearchList';
import { useNavigate} from "react-router-dom";

function Search({ details}) {
    const [state, setState] = useState({
        descriptionSearch: true,
        tagsSearch: false,
        subjectSearch: false
    });
    const [searchField, setSearchField] = useState("");


    let filteredPersons;

    const handleInputChange = (event) => {
        const {value} = event.target;
        if (value === 'description') {
            setState({...state, descriptionSearch: true, tagsSearch: false, subjectSearch: false});
        } else if (value === 'tags') {
            setState({...state, descriptionSearch: false, tagsSearch: true, subjectSearch: false});
        } else {
            setState({...state, descriptionSearch: false, tagsSearch: false, subjectSearch: true});
        }
    }

    if(state.descriptionSearch){
        filteredPersons = details.filter(
            person => {
                return (
                    person
                        .description
                        .toLowerCase()
                        .includes(searchField.toLowerCase())
                );
            })
    } else if (state.tagsSearch){
        filteredPersons = details.filter(
            person => {
                return (
                    person
                        .tags
                        .toLowerCase()
                        .includes(searchField.toLowerCase())
                );
            })
    } else{
        filteredPersons = details.filter(
            person => {
                return (
                    person
                        .subjects
                        .toLowerCase()
                        .includes(searchField.toLowerCase())
                );
            })
    }


    const handleChange = e => {
        setSearchField(e.target.value);
    };

    function searchList() {
        return (
            <Scroll>
                <SearchList filteredPersons={filteredPersons} />
            </Scroll>
        );
    }
    const navigate = useNavigate();

    const handleOnClickAddBtn = () => {
        navigate("/newNotice")
    }

    const handleOnClickFindBtn = () => {
        navigate("/findGroup")
    }
    return (
        <section  className="webBackground" >
            <div style={{background: "#6301bd"}}>
                <input
                    className="searchWindow"
                    type = "search"
                    placeholder = "Search People"
                    onChange = {handleChange}
                />
            <div className="radioButtons" style={{ textAlign: "center"}}>
                     <input type="radio" value="description" name="radioBtn" onChange={handleInputChange} defaultChecked  /> Description
                     <input type="radio" value="subjects" name="radioBtn" onChange={handleInputChange} /> Subjects
                     <input type="radio" value="tags" name="radioBtn" onChange={handleInputChange} /> Tags
                   </div>
            <div>
                  <button className="addNoticeButton" type={"button"} onClick={handleOnClickAddBtn} >Add New Notice</button>
                <button className="findButton" type={"button"} onClick={handleOnClickFindBtn} >Find Group</button>
            </div>
            </div>
            {searchList()}
        </section>
    );
}

export default Search;
