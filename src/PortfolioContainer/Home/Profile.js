import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile(){
    return(
        <div className="profile-container">
           <div className="profile-parent">
               <div className="profile-details">
                   <div className="cols">
                       <div className="cols-icon">
                           <a href="https://github.com/ArsenioLanga"><i className="fa fa-github"></i></a>
                       <a href="https://twitter.com/arseniosergiola"><i className="fa fa-twitter"></i></a>
                       <a href="https://www.instagram.com/arsenio__langa/"><i className="fa fa-instagram"></i></a>
                       <a href="https://www.linkedin.com/in/arsenio-s%C3%A9rgio-langa-793257147/"><i className="fa fa-linkedin-square"></i></a>
                       <a href="https://web.facebook.com/arseniosergio.langa/"><i className="fa fa-facebook"></i></a>
                        </div> 
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                           {" "}
                            Olá, sou <span className="highlighted-text">Arsénio</span>
                       </span>
                    </div>

                    <div className="profile-details-role">
                        <span className="primary-text">
                           {" "}
                            <h1>
                                <Typical 
                                  loop={Infinity}
                                  steps={[
                                      "Ethusiastic Dev ",
                                      1000,
                                      "Front Dev",
                                      1000,
                                      "Back Dev",
                                      1000,
                                      "Designer Dev",
                                      1000,
                                      "Mobile Dev",
                                      1000,
                                  ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Analista e programador, com habilidades em tecnologias para front and back end.
                            </span>
                        </span>
                    </div>
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
                <div className="profile-picture">
                    <div className="profile-picture-background">
                        
                    </div>              
                </div>
            </div>
        </div>
    )
}