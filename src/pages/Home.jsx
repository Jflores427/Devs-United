import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

import "./Home.css";

const Home = () => {
    return(
        <div className="home-container">
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Home;