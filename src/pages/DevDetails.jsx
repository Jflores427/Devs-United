import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import supabase from "../client.js"
import "./DevDetails.css"


const DevDetails = () => {
    const [developer, setDeveloper] = useState({});
    const params = useParams();

    useEffect (() => {
        getDeveloper();
    }, []);

    const goToDev = () => {
        location.href = "/" + params.id + "/edit";
    }

    const getDeveloper =  async () => {
        try{
            const {data, error} = await supabase.from("developers").select().eq("id", params.id);
            setDeveloper(data[0]);
        }
        catch(e) {
            alert(e);
        }
    };

    return (
        <div className="div-details-container">
            <h1 className="dev-name-title">&lt;Developer : <span style={{color: developer.color}}>{developer.name}</span> /&gt;</h1>
            <h2 className="dev-qualities-title">Qualities :  </h2>
            <p className="dev-wpm-title"> WPM: {developer.wpm}</p>
            <p className="dev-type-title"> Specialty: {developer.type}</p>
            {(developer.wpm > 50) ? 
            <p className="dev-speed"><span style={{color: developer.color}}>{developer.name}</span> is a really fast typer! Great Productivity!</p> 
            :
            <p className="dev-speed"><span style={{color: developer.color}}>{developer.name}</span> is not the fastest... However, I'm sure they can still contribute!</p> }
            <button className="edit-button" onClick={goToDev}>Edit the Developer?</button>
            <img width="200" height="200" src="https://png.pngtree.com/png-vector/20210303/ourmid/pngtree-web-developer-isometric-illustration-png-image_3009069.jpg"></img>
        </div>
    );

};



export default DevDetails;