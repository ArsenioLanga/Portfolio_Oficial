import React from "react";
import "./Resume.css";

var educt = document.getElementById('educacao');
var exper = document.getElementById('experiencia');
var skin = document.getElementById('skins');
var proj = document.getElementById('projectos');
var inter = document.getElementById('interesse');
// ===============================================
var educts = document.getElementById('educts');
var expers = document.getElementById('expers');
var skinn = document.getElementById('skinn');
var projs = document.getElementById('projs');
var inters = document.getElementById('inters');
var z = document.getElementById('btn');
const  education = () =>{

            educt.style.top = "0";
            exper.style.top = "0";
            skin.style.top = "0";
            proj.style.top = "0";
            inter.style.top = "0"; 
            z.style.top = "0"; 

            
            educts.classList.toggle('active');
            expers.classList.remove('active');
            skinn.classList.remove('active');
            projs.classList.remove('active');
            inters.classList.remove('active');
}
const  experience = () => {

            educt.style.top = "-340px";
            exper.style.top = "-340px";
            skin.style.top = "-340px";
            proj.style.top = "-340px";
            inter.style.top = "-340px";
            z.style.top = "37px"; 
            
            educts.classList.remove('active');
            expers.classList.toggle('active');
            skinn.classList.remove('active');
            projs.classList.remove('active');
            inters.classList.remove('active');
}
const  skins = () =>{

            educt.style.top = "-680px";
            exper.style.top = "-680px";
            skin.style.top = "-680px";
            skin.style.transition = "Fade in";
            proj.style.top = "-680px";
            inter.style.top = "-680px";
            z.style.top = "74px"; 

            educts.classList.remove('active');
            expers.classList.remove('active');
            skinn.classList.toggle('active');
            projs.classList.remove('active');
            inters.classList.remove('active');
               
}
const  project = () =>{

            educt.style.top = "-1020px";
            exper.style.top = "-1020px";
            skin.style.top = "-1020px";
            proj.style.top = "-1020px";
            inter.style.top = "-1020px";
            z.style.top = "109px";  
            
            educts.classList.remove('active');
            expers.classList.remove('active');
            skinn.classList.remove('active');
            projs.classList.toggle('active');
            inters.classList.remove('active');
}
const  interest = () =>{

            

            educt.style.top = "-1360px";
            exper.style.top = "-1360px";
            skin.style.top = "-1360px";
            proj.style.top = "-1360px";
            inter.style.top = "-1360px";
            z.style.top = "144px";
            
            educts.classList.remove('active');
            expers.classList.remove('active');
            skinn.classList.remove('active');
            projs.classList.remove('active');
            inters.classList.toggle('active');
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
                        <button type="button" id="educts" className="btn-option active" onClick={education}>Educacao</button>
                        <button type="button" id="expers" className="btn-option"  onClick={experience}>Experiencia</button>
                        <button type="button" id="skinn" className="btn-option" onClick={skins}>Linguagens</button>
                        <button type="button" id="projs" className="btn-option" onClick={project}>Projectos</button>
                        <button type="button" id="inters" className="btn-option" onClick={interest}>Interesse</button>
                    </div>

                </div>
                <div className="resume-item">
                    <div className="resume-item-container">
                        <div className="educacao" id="educacao">
                            <div className="content-bio">
                                <ul>
                                    <li>
                                        <span className="span-title">Universidade Eduardo Mondlane </span> <button className="btn-bio">2018-2021</button><br />
                                        <span className="span-content"> Licenciatura em Informatica (por defender)</span>
                                    </li>
                                    <li>
                                        <span className="span-title">Escola Secundaria de Malhazine</span>  <button className="btn-bio">2012-2014</button> <br />
                                        <span className="span-content">Nivel Medio</span>  
                                    </li>
                                    <li>
                                        <span className="span-title">Escola Secundaria de Malhazine</span>     <button className="btn-bio">2010-2012</button> <br />
                                        <span className="span-content">Nivel basico</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="experiencia" id="experiencia">
                            <div className="content-experience">
                                <ul>
                                    <li>
                                        <span className="span-title-experience">desenvolvomento de aplicacoes com fins academicos </span> <button className="btn-experience">2018-Presente</button><br />
                                        <span className="span-content-experience">Venho desenvolevendo aplicacoes com fins academicos desde 2018 ate hoje, tenda ja desenvolvido dezenas de
                                         softwares de gestao empresarial, gestao de vendas, gestao academica, entre outros em direfentes linguagens de programacao(Pascal, Java, Java Web, Php, JavaScript, Phyton) e ambientes,
                                         desde o <i>Front End</i>, <i>Back End</i> e um pouco de <i>Mobile</i>, bem como gerenciamento e administracao das bases de dados relacionais em diferentes 
                                         SGBD (PostGree, Oracle, MysQl, Sqlyog, entre outros).
                                         Boa parte das minha aplicacacoes estao no meu perfil do <a className="link-github" href="https://github.com/ArsenioLanga">GitHub</a> la hospedadas e outras em alguns servidores na web.</span>
                                    </li>
                                    {/* <li>
                                        <span className="span-title">De</span>  <button className="btn-bio">2012-2014</button> <br />
                                        <span className="span-content">Nivel Medio</span>  
                                    </li> */}
                                </ul>
                                </div>
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