import React, {useState} from "react";
import Typical from "react-typical";
import "./Profile.css";

 
    const  menuToggle = () =>{
        var MenuItem = document.getElementById('MenuItem');
        if( MenuItem.style.maxHeight === "0px"){
            MenuItem.style.maxHeight = "200px";
          }else{
            MenuItem.style.maxHeight = "0px";
          }
    }

export default function Profile(){

    
    const [ pageYPosition, setPageYPosition ] = useState(0);

    function getPageYAfterScroll(){
        setPageYPosition(window.scrollY);
    }

    window.addEventListener('scroll', getPageYAfterScroll);

    return(
    <div className="profile-containers"> 
        <div className="navbar">
            <div class="logo">
                <h1>Arsénio Langa</h1>
            </div>
            <nav>
                <ul id="MenuItem">
                    <li><a href="home" className="home-selected" >Inicio</a></li>
                    <li><a href="#conhecimento" >Conhecimentos</a></li>
                    <li><a href="#about" >Bibliografia</a></li>
                    <li><a href="#contact" >Contacto</a></li>
                </ul>
            </nav>
            <div className="menu-toggle" onClick={menuToggle}>

            </div>
      </div> 
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
                            Olá, sou <span className="highlighted-text">Arsénio</span>
                       </span>
                    </div>
 
                    <div className="profile-details-role">
                        <span className="primary-text">
                            <h1>
                                <Typical 
                                  loop={Infinity} 
                                  steps={[
                                      "DB Manegerment",
                                      2000,
                                      "Front Dev",
                                      2000,
                                      "Back Dev",
                                      2000,
                                      "Web Designer",
                                      2000,
                                      "Mobile Dev",
                                      2000,
                                  ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Analista e programador, com habilidades em tecnologias para front and back end.
                            </span>
                        </span>
                    </div>
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
                <div className="profile-picture">
                    <div className="profile-picture-background">   
                    </div>             
                </div>
            </div> 
        </div>
         {pageYPosition > 500 &&
            <a href="#home" className="link-topo">
            <i class="fas fa-arrow-up"></i>
            </a>
        }
    </div>
    )
}