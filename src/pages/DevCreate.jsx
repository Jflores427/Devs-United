import supabase from "../client";
import "./DevCreate.css"

const DevCreate = () => {

    const createDeveloper = async (createdObject) => {
        try {
            const { error } = await supabase.from('developers').insert(createdObject)
        }
        catch(e) {
            alert(e);
        }
    };

    const createDev = async () => {
        const nameValue = document.getElementById("name").value;
        const wpmValue = document.getElementById("wpm").value;
        const devTypeValue = document.querySelector('input[name="dev-type"]:checked').value;
        
        let colorValue;

        switch(devTypeValue) {
            case "Front-End" :
                colorValue ="Red";
                break;
            case "Back-End" :
                colorValue="Blue";
                break;
            case "Full-Stack":
                colorValue = "Purple"
                break;
            case "Quality-Assurance":
                colorValue ="Green";
                break;
            case "Dev-Ops" :
                colorValue = "Orange"
                break;
            default :
                colorValue = "White"
        }
        
        const data = {name : nameValue, wpm: wpmValue, type : devTypeValue, color: colorValue};
       
        createDeveloper(data);
        alert("Create Successful");
        location.href= "/devTeam";
    };

    return (
        <div className="dev-create-container">
            <h1> &lt; Create A Dev /&gt;</h1>
            <img alt ="developers image" src="https://img.freepik.com/free-vector/team-programmers-working-program-code-with-laptops-teamwork-male-female-professional-testers-coders-flat-vector-illustration-software-development-programming-lesson-concept_74855-22051.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698796800&semt=ais"></img>
            <div className="forms-container">

                <div className="form-container">
                    <h4 className="form-title">Name:</h4>
                    <input type="text" id="name" placeholder="Dev Name"></input>    
                </div>
                
                
                <div className="form-container"> 
                    <h4 className="form-title">WPM:</h4>
                    <input type="number" id="wpm" placeholder="E.g. 30"></input>
                </div>

                <div className="form-container dev-type">
                    <h4 className="form-title">Dev Type:</h4>
                    <div className="front-end">
                        <input type="radio" name="dev-type" id="front-end" value="Front-End"></input>
                        <label htmlFor="front-end">Front-End</label>  
                    </div>
                    
                    <div className="back-end">
                        <input type="radio" name="dev-type" id="back-end" value="Back-End"></input>
                        <label htmlFor="back-end">Back-End</label> 
                    </div>

                    <div className="full-stack"> 
                        <input type="radio" name="dev-type" id="full-stack" value="Full-Stack"></input>
                        <label htmlFor="full-stack">Full Stack</label> 
                    </div>

                    <div className="quality-assurance">
                        <input type="radio" name="dev-type" id="quality-assurance" value="Quality-Assurance"></input>
                        <label htmlFor="quality-assurance">Quality Assurance</label> 
                    </div>
                   
                    <div className="quality-assurance">
                        <input type="radio" name="dev-type" id="dev-ops" value="Dev-Ops"></input>
                        <label htmlFor="dev-ops">Dev Ops</label> 
                    </div>
                </div>

            </div>
            <button className="submit-button" onClick={createDev}>Create New Dev</button>
        </div>
    );

};



export default DevCreate;