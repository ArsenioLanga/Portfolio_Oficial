import React, { useState} from "react"; 
import "./Contact.css";
import emailjs from "emailjs-com";
import FlashMessage from "./FlashMessage"


export default function Resume(){

    const [success, setSuccess ] = useState(false);
    const [message, setMessage ] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_z79j4x8', 'template_jdqk1bs', e.target, 'SwFWKMbYt-_mdWPxp').then(res=>{
            console.log(res)
            e.target.elements.nome.value = ""; 
            e.target.elements.email.value = ""; 
            e.target.elements.mesagem.value = ""; 
                setMessage('Obrigado por contactar o Arsenio.');
                setSuccess(true);
        }).catch(err=> console.log(err));

        setSuccess(false);  
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
                            <input type="text" class="field" name="nome" id="nome" required
                            />
                            <label for="nome" class="field-label">Nome</label>
                        </div>
                        <div class="input-group">
                            <input type="email" class="field" name="email" id="email" required
                           />
                            <label for="email"  class="field-label">Email</label>
                        </div>
                        <div class="input-group">
                            <textarea class="field" id="mesagem" name="msg"  required
                             ></textarea>
                            <label for="mesagem" class="field-label">Mensagem</label>
                        </div>
                        <button type="submit" class="btn submit">Enviar</button>
                    </form>
                </div>
            </div>
            
           {
               success ? <FlashMessage message={message} /> : ''    
           }
        </div>
    )
}