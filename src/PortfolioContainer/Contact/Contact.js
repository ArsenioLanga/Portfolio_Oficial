import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";



export default function Resume(){

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const data = {
    //         nome: e.target.elements.nome.value,
    //         email: e.target.elements.email.value,
    //         msg: e.target.elements.nome.value
    //     }

        
    //     console.log(data);

    // } 
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_z79j4x8', 'template_jdqk1bs', e.target, 'SwFWKMbYt-_mdWPxp').then(res=>{
            console.log(res) 
        }).catch(err=> console.log(err));
    } 

    return(
        <div className="conctact-container" id="contact">
            <div className="contacto-header">
                <span className="contacto-title">Conctacto</span>
                <p className="contacto_subtitle">Fale comigo</p>
                <hr className="horinzotal-row" />
            </div>
            <div class="contacto-wrapper">
                <div class="contacto-left">

                </div>

                <div class="contacto-right">
                        <h1>Contacto</h1>
                    <form onSubmit={sendEmail}>
                        <div class="input-group">
                            <input type="text" class="field" name="nome" id="nome"
                            />
                            <label for="nome" class="field-label">Nome</label>
                        </div>
                        <div class="input-group">
                            <input type="text" class="field" name="email" id="email"
                           />
                            <label for="email" class="field-label">Email</label>
                        </div>
                        <div class="input-group">
                            <textarea class="field" id="mesagem" name="msg" 
                             ></textarea>
                            <label for="mesagem" class="field-label">Mensagem</label>
                        </div>
                        {/* <button type="submit" class="btn highlighted-btn">Enviar</button> */}
                        <button type="submit" class="btn submit">Enviar</button>
                    </form>
                </div>
            </div>
            {/* <div className="top">
                <a id="link-topo" href="#home">
                <i class="fas fa-arrow-up"></i></a>
            </div> */}
        </div>
    )
}