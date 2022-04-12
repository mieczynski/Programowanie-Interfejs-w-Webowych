import React from 'react';
import './myStyles.css';
import Header from "./Header";
import Search from "./components/Search";
import initialDetails from "./data/initialDetails";

function Home() {

    return (
        <div>
            <Header/>
            <Search details={initialDetails} />
        </div>
    );
}
export default Home;