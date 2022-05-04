import SearchGroup from "./components/SearchGroup";
import React from "react";
import GroupHeader from "./GroupHeader";

class SearchGroupPage extends React.Component{


    render() {
        return(
        <div>
            <GroupHeader/>
            <SearchGroup details={this.props.groups} />
        </div>
    )
    }
}
export default SearchGroupPage;