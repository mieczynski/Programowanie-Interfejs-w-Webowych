import React from 'react';
import GroupCard from "./GroupCard";
class SearchListGroup extends React.Component{

    render(){
        const filtered = this.props.filteredGroups.map(filteredGroup =>
            <GroupCard key={filteredGroup.id} group={filteredGroup}> </GroupCard>);
        return(
            <div>
                {filtered}
            </div>
        );
    }
}

export default SearchListGroup;