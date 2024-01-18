import React from "react";
import './_skills.css'

function Skill(){
    return(
        <section className="Skills">
            <h2>Dosažené Dovednosti</h2>
            <div className="Skill" title="JavaScript">
                JavaScript
            </div>
            <div className="Skill" title="React.js">
                React.js
            </div>
            <div className="Skill" title="CSS">
                CSS
            </div>
            <div className="Skill" title="HTML">
                HTML
            </div>
        </section>
    );
}

export default Skill;
