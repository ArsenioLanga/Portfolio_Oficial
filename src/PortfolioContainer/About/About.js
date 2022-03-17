import React from "react";
import "./About.css";

export default function About(){
    return(
        <div className="about-container">
            <div className="about-header">
                <p className="about-title">conhecimentos</p>
                <p className="about_subtitle">porque me escolher?</p>
                <hr className="horinzotal-row" />
            </div>

            <div className="about-content">

                <div className="about-photo"></div>

                <div className="about-descriction">
                    <p>Desenvolvedor web e móvel de pilha completa com conhecimento de fundo de pilhas MERN com redux,
                     juntamente com um talento especial para criar aplicativos com a máxima eficiência. Profissional
                      forte com um BSC disposto a ser um trunfo para uma organização.</p>
                      <span>Aqui estao alguns exemplos</span>
                      <ul>
                          <li>Desenvolvimento Web e Mobile Full Stack</li>
                          <li>Front-end interativo de acordo com o desig</li>
                          <li>Gerenciando banco de dados</li>
                      </ul>

                      <div className="find-me">
                          <div className="profile-options">
                           <button className="btn primary-btn">
                             {""}
                            Fale comigo {""}
                           </button>
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