import React, {useState} from "react";
import Scroll from "./Scroll";
import SearchListGroup from "./SearchListGroup";
import {Link} from "react-router-dom";

class SearchGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptionSearch: true,
            subjectSearch: false,
            search: ""
        }
    }

    render() {
        let filteredGroups;

        if(this.state.descriptionSearch) {

            filteredGroups = this.props.details.filter(
                group => {
                    return (
                        group
                            .description
                            .toLowerCase()
                            .includes(this.state.search.toLowerCase())
                    );
                })
        } else{
            filteredGroups = this.props.details.filter(
                group => {
                    return (
                        group
                            .subject
                            .toLowerCase()
                            .includes(this.state.search.toLowerCase())
                    );
                })
        }
        const handleChange = e => {
            this.setState({search :e.target.value})
        };

        const searchList = () => {
            return (
                <Scroll>
                    <SearchListGroup filteredGroups={filteredGroups} />
                </Scroll>
            );
        }
        return (

              <section  className="webBackground" >
                  <div style={{background: "#6301bd", paddingBottom:"5px"}}>
                      <input
                          className="searchWindow"
                          type = "search"
                          placeholder = "Search Group"
                          onChange={handleChange}
                      />
              <form>
                  <div className="radioButtons" style={{ textAlign: "center"}}>
                      <input type="radio" value="description" name="radioBtn" onChange={() => this.setState(
                          {
                              descriptionSearch: true,
                              subjectSearch: false
                          }
                      )} defaultChecked  /> Description
                  <input type="radio" value="subjects" name="radioBtn" onChange={() => this.setState(
                          {
                              descriptionSearch: false,
                              subjectSearch: true
                          }
                  )} /> Subject
                      </div>
                  <div className="center">
                  <Link to="/">
                      <button type="button" className="back-button">
                          Back
                      </button>
                  </Link>
                      <Link to="/newGroup">
                          <button type="button" className="add-notice">
                              Add New Group
                          </button>
                      </Link>

                  </div>
              </form>
                  </div>
                  {searchList()}
              </section>
        );
    }
}

export default SearchGroup;