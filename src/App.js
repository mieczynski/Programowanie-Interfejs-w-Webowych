import {BrowserRouter as Router, Link,
    Routes, Route} from 'react-router-dom'
import './App.css';
import AddNotice from "./components/AddNotice";
import Home from "./Home";
import SearchGroupPage from "./SearchGroupPage";
import AddNewGroup from "./components/AddNewGroup";

function App(){

        return (
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/newNotice" element={<AddNotice/>}/>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/findGroup" element={<SearchGroupPage />}></Route>
                        <Route path="/newGroup" element={<AddNewGroup />}></Route>
                    </Routes>
                </Router>

            </div>);

}

export default App;

