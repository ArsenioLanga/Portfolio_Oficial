import React from "react";
import "./About.css";

export default function About(){
    return(
        <div className="about-container" id="about">
            <div className="about-header">
                <span className="about-title">conhecimentos</span>
                <p className="about_subtitle">porque me escolher?</p>
                <hr className="horinzotal-row" />
            </div>

            <div className="about-content">

                <div className="about-photo"></div>

                <div className="about-descriction">
                    <div>
                    <p>Aprender mais e me tornar um programador <i>FullStack</i> de mão cheia é o meu principal
                         objectivo, viso obter conhecimentos teóricos e práticos trabalhando em contacto 
                         directo com realidade para meu desenvolvimento profissional, com foco nos que a 
                         empresa estabelecer. 
                     Aberto a novos desafios e disposto a ser um trunfo para o progresso de uma organização.</p>
                      <span>Habilidades:</span>
                      <ul>
                          <li>Front End Developer</li>
                          <li>Back End Developer</li>
                          <li>Mobile Developer</li>
                          <li>Database Management System</li>
                          <li>Versioning</li>
                      </ul>
                      </div>

                      <div className="find-me">
                          <div className="profile-options">
                           <a href="#contact">
                            <button className="btn primary-btn">
                                Fale comigo
                            </button>
                           </a>
                          <a href="curriculum_vitae.pdf" download="Arsenio curriculum_vitae.pdf">
                                <button className="btn highlighted-btn">Download CV</button>   
                            </a>
                          </div>
                      </div>
                </div>
                
            </div>
            
        </div>
    )
}