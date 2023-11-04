import { Link, Outlet } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="nav-bar-container">
            <img className="logo" src="https://cdn3.iconfinder.com/data/icons/communication-skills-linear-outline/300/07-07-20_communication_skills_editable_stroke_15-512.png"></img>
            <h1>Devs United</h1>   
            <div className="nav-list">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="devCreate"> Create a Dev</Link>
                <Link className="links" to="/devTeam">Dev Team</Link>
            </div>
        </nav>
    );
};

export default NavBar;