import React from "react";
import "./Resume.css";


const  education = () =>{
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

            educt.style.top = "-340px";
            exper.style.top = "-340px";
            skin.style.top = "-340px";
            proj.style.top = "-340px";
            inter.style.top = "-340px";
            z.style.top = "45px"; 
            
            educts.classList.remove('active');
            expers.classList.toggle('active');
            skinn.classList.remove('active');
            projs.classList.remove('active');
            inters.classList.remove('active');
}
const  skins = () =>{
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

            educt.style.top = "-680px";
            exper.style.top = "-680px";
            skin.style.top = "-680px";
            skin.style.transition = "Fade in";
            proj.style.top = "-680px";
            inter.style.top = "-680px";
            z.style.top = "86px"; 

            educts.classList.remove('active');
            expers.classList.remove('active');
            skinn.classList.toggle('active');
            projs.classList.remove('active');
            inters.classList.remove('active');
               
}
const  project = () =>{

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

            educt.style.top = "-1020px";
            exper.style.top = "-1020px";
            skin.style.top = "-1020px";
            proj.style.top = "-1020px";
            inter.style.top = "-1020px";
            z.style.top = "130px";  
            
            educts.classList.remove('active');
            expers.classList.remove('active');
            skinn.classList.remove('active');
            projs.classList.toggle('active');
            inters.classList.remove('active');
}
const  interest = () =>{


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

            educt.style.top = "-1360px";
            exper.style.top = "-1360px";
            skin.style.top = "-1360px";
            proj.style.top = "-1360px";
            inter.style.top = "-1360px";
            z.style.top = "174px";
            
            educts.classList.remove('active');
            expers.classList.remove('active');
            skinn.classList.remove('active');
            projs.classList.remove('active');
            inters.classList.toggle('active');
}

export default function Resume(){
   
    return(
        <div className="resume-container" id="conhecimento">
            <div className="resume-header">
                <span className="resume-title">Curr??culo acad??mico</span>
                <p className="resume_subtitle">bibliografia acad??mica</p>
                <hr className="horinzotal-row" />
            </div>

            <div className="resume-content">
                <div className="resume-option">
                    <div className="option">
                        <div id="btn"></div>
                        <button type="button" id="educts" className="btn-option active" onClick={education}>Educa????o</button>
                        <button type="button" id="expers" className="btn-option"  onClick={experience}>Experi??ncia</button>
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
                                        <span className="span-content"> Licenciatura em Inform??tica (por defender)</span>
                                    </li>
                                    <li>
                                        <span className="span-title">Escola Secund??ria de Malhazine</span>  <button className="btn-bio">2012-2014</button> <br />
                                        <span className="span-content">Nivel M??dio</span>  
                                    </li>
                                    <li>
                                        <span className="span-title">Escola Secund??ria de Malhazine</span>     <button className="btn-bio">2010-2012</button> <br />
                                        <span className="span-content">Nivel b??sico</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="experiencia" id="experiencia">
                            <div className="content-experience">
                                <ul>
                                    <li>
                                        <span className="span-title-experience">desenvolvomento de aplica????es com fins acad??micos </span> <button className="btn-experience">2018-Presente</button><br />
                                        <span className="span-content-experience">Venho desenvolevendo aplica????es com fins academicos desde 2018 ate hoje, tenda ja desenvolvido dezenas de
                                         softwares de gest??o empresarial, gest??o de vendas, gest??o acad??mica, entre outros em direfentes linguagens de programa????o(Pascal, Java, Java Web, Php, JavaScript, Phyton) e ambientes,
                                         desde o <i>Front End</i>, <i>Back End</i> e um pouco de <i>Mobile</i>, bem como gerenciamento e administracao das bases de dados relacionais em diferentes 
                                         SGBD (PostGree, Oracle, MysQl, Sqlyog).
                                         Boa parte das minha aplica????es  est??o no meu perfil do <a className="link-github" href="https://github.com/ArsenioLanga">GitHub</a> la hospedadas e outras em alguns servidores na web.</span>
                                    </li>
                                    
                                </ul>
                                </div>
                        </div>
                        <div className="skins" id="skins">
                             <div className="content-skins">
                                <ul>
                                    <div className="content-grid">
                                        <div className="skin-item skin1">
                                            <li >
                                                <span className="skin-title">PHP</span><br />
                                                <span className="skin-content">Laravel, Codigniter</span>
                                            </li>
                                        </div>
                                        <div className="skin-item skin2">
                                            <li>
                                                <span className="skin-title">Python</span><br />
                                                <span className="skin-content">No????es  b??sicas</span>
                                            </li>
                                        </div>
                                        <div className="skin-item skin3">
                                            <li>
                                                <span className="skin-title">JavaScript</span><br />
                                                <span className="skin-content">React Js, AngularJs,Vue Js</span>
                                            </li>
                                        </div>
                                        <div className="skin-item skin4">
                                            <li>
                                                <span className="skin-title">Java & Java web</span><br />
                                                <span className="skin-content">Hibernete, Spring MVC & BOOT</span>
                                            </li>
                                        </div>
                                        <div className="skin-item skin5">
                                            <li >
                                                <span className="skin-title">Html</span><br />
                                            </li>
                                        </div>
                                        <div className="skin-item skin6">
                                            <li>
                                                <span className="skin-title">CSS</span><br />
                                                <span className="skin-content">Sass & Less, Bootstrap, Materialise</span>
                                            </li>
                                        </div>
                                        <div className="skin-item skin7">
                                            <li className="skin-item">
                                                <span className="skin-title">SGBD</span><br />
                                                <span className="skin-content">MySql, Oracle, Postgree, Sqlyog</span>
                                            </li>
                                        </div>
                                        <div className="skin-item skin8">
                                            <li>
                                                <span className="skin-title">Versionamento</span><br />
                                                <span className="skin-content">Git/GitHub</span>
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="projectos" id="projectos">
                            <div className="project-content">
                                <ul>
                                    <li>
                                        <span className="procjct-title">Gest??o Hoteleira</span><br />
                                        <span className="procjct-content"><strong>Tecnologias usadas: </strong> Java, MySql</span>
                                        <p>Este software foi desenvolvido no ambiente acad??mico , faz o gereciamento dos funcionarios, quartos e hospedes de forma comoda e rapida.</p>
                                    </li>
                                    <li>
                                        <span className="procjct-title">Gest??o  de Vendas</span> <br />
                                        <span className="procjct-content"><strong>Tecnologias usadas: </strong>Java Desktop, MySql</span> 
                                        <p>Um software aplicavel a qualquer tipo de loja ou estabelecimento de vendas com a gest??o do stock inclusa.</p> 
                                    </li>
                                    <li>
                                        <span className="procjct-title">Modulo de Marca????o  de consultas online</span> <br />
                                        <span className="procjct-content"><strong>Tecnologias usadas: </strong>PHP(Laravel), Bootstrap, JavaScript e MariaBD</span>
                                        <p>Parte de da gest??o  hospitalar, voltada para o gereciamento de consultas de online, evitando a necessidade de permanencia nas morosas e longas filas de espera. </p>
                                    </li>
                                    <li>
                                        <span className="procjct-title">Portfolio Profissional</span> <br />
                                        <span className="procjct-content"><strong>Tecnologias usadas: </strong>React Js, Bootstrap</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="interesse" id="interesse">
                            <div className="interesse-content">
                                <ul>
                                    <li>
                                        <span className="interesse-title">Aprender</span><br />
                                        <p>O ramo da programa????o ?? muito vasto, e eu procuro sempre aprender mais, e algo curioso que j??
                                             reparei ?? que quanto mais aprendo mais longe de saber tudo fico, sim porque essa era minha
                                              ideia quando comecei a programar l?? em 2017, hoje j?? n??o que saber tudo apenas que focar no que vai me elevar 
                                               profissionalmente e me tornar cada dia melhor, rumo ao tao senha do FullStack</p>
                                    </li>
                                    <li>
                                        <span className="interesse-title">Futebol</span> <br />
                                        <p>Quando os bugs sobem a flor da pele, vou ter com o meu velho amigo de inf??ncia, ???o futebol???. 
                                            Gosto de ver as minhas equipes favoritas em campo fico muito feliz quando ganham, 
                                            aos domingos e feriados vou integrar a equipe de veteranos do meu bairro. </p> 
                                    </li>
                                    <li>
                                        <span className="interesse-title">Caminhar</span> <br />
                                        <p>Essa ?? outra terapia que faz parte dos meus dias, caminhar alivia-me mente e refresca as minha ideias, a maior parte das ideias de solu????es para os bugs tive no meio da rua caminhando. </p>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}