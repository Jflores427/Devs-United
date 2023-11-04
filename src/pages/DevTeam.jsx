import { useState, useEffect } from "react";
import supabase from "../client.js";
import "./devTeam.css"


const DevTeam = () => {

    const [developers, setDevelopers] = useState([]);

    useEffect(() => {
        getDevelopers();
    }, []);

    const goToDevCreate = () => {
        location.href = "/DevCreate";
    };

    const getDevelopers =  async () => {
        try {
            const { data, error } = await supabase.from("developers").select();
            setDevelopers(data);
        }
        catch(e) {
            alert(e);
        }
    };
    
    const editDev = (id) => {
        location.href = "/" + id + "/edit";
    }
    const viewDev = (id) => {
        location.href = "/" + id;
    }

    


    return (
        <div className="dev-team-container">
            <h1 className="title"> &lt;Developer Roster /&gt;</h1>
            <div className="devs-container">
                {developers.length !== 0 ?  developers.map((dev) => (
                <div style={{color: dev.color}} className="dev-container">
                    <img width="100" height="100" src="https://lordicon.com/icons/wired/outline/680-it-developer.svg" alt="Developer Info"></img>
                    <p className="dev-name"> Developer Name: {dev.name}</p>
                    <p className="dev-wpm">WPM : {dev.wpm}</p>
                    <p className="dev-type">Developer Type: {dev.type}</p>
                    <div className="button-container">
                        <button className="edit-dev" onClick={() => {editDev(dev.id)}}>Edit Developer</button>
                        <button className="view-dev" onClick={() => {viewDev(dev.id)}}>View Developer</button>
                    </div>
                </div>)) :  
                        <div className="dev-container">
                        <h2 className="no-developers">No Developers Available</h2>
                        <button onClick={goToDevCreate}>Create a Developer</button>
                        </div>
                            }

            </div>


        </div>


    );
};



export default DevTeam;