import SearchGroup from "./components/SearchGroup";
import initialGroups from "./data/initailGroups";
import React from "react";
import GroupHeader from "./GroupHeader";

class SearchGroupPage extends React.Component{

    render() {
        return(

        <div>
            <GroupHeader/>
            <SearchGroup details={initialGroups} />
        </div>
    )
    }
}
export default SearchGroupPage;