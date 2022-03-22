import React from "react";
import "./Resume.css";

var educt = document.getElementById('educacao');
var exper = document.getElementById('experiencia');
var skin = document.getElementById('skins');
var proj = document.getElementById('projectos');
var inter = document.getElementById('interesse');
var z = document.getElementById('btn');
const  education = () =>{
            educt.style.top = "0";
            exper.style.top = "0";
            skin.style.top = "0";
            proj.style.top = "0";
            inter.style.top = "0";
            z.style.left = "710px";    
}
const  experience = () =>{
            alert('ex');
            educt.style.top = "370px";
            exper.style.top = "-370px";
            skin.style.top = "370px";
            proj.style.top = "0";
            inter.style.top = "0";
            z.style.left = "710px";    
}
const  skins = () =>{
            educt.style.top = "740px";
            exper.style.top = "370px";
            skin.style.top = "-1110";
            proj.style.top = "0";
            inter.style.top = "0";
            z.style.left = "710px";    
}
const  project = () =>{
            educt.style.top = "1110px";
            exper.style.top = "740px";
            skin.style.top = "370";
            proj.style.top = "-370";
            inter.style.top = "0";
            z.style.left = "710px";    
}
const  interest = () =>{
            educt.style.top = "1110px";
            exper.style.top = "740px";
            skin.style.top = "370";
            proj.style.top = "-370";
            inter.style.top = "0";
            z.style.left = "710px";    
}

export default function Resume(){
   
    return(
        <div className="resume-container">
            <div className="resume-header">
                <span className="resume-title">curriculo academico</span>
                <p className="resume_subtitle">bibliografia academica</p>
                <hr className="horinzotal-row" />
            </div>

            <div className="resume-content">
                <div className="resume-option">
                    <div className="option">
                        <div id="btn"></div>
                        <button type="button" className="btn-option active" onClick={education}>Educacao</button>
                        <button type="button" className="btn-option"  onClick={experience}>Experiencia</button>
                        <button type="button" className="btn-option" onClick={skins}>Skins de Programacao</button>
                        <button type="button" className="btn-option" onClick={project}>Projectos</button>
                        <button type="button" className="btn-option" onClick={interest}>Interesses</button>
                    </div>

                </div>
                <div className="resume-item">
                    <div className="resume-item-container">
                        <div className="educacao" id="educacao">
                            EDUCACAO
                        </div>
                        <div className="experiencia" id="experiencia">
                            EXPERIENCIA
                        </div>
                        <div className="skins" id="skins">
                            SKINS
                        </div>
                        <div className="projectos" id="projectos">
                            PROJECTS
                        </div>
                        <div className="interesse" id="interesse">
                            INTERESSE
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}