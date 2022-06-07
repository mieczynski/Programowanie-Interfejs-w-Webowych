import React from 'react';
import '../myStyles.css';
import LogoutTable from "../Components/LogoutTable";

const GroupHeader = () => (
    <div>
    <LogoutTable/>
    <header className="header">
        <div>Group Board</div>
    </header>
    </div>
);

export default GroupHeader;