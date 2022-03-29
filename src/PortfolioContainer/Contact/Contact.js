import React from "react";
import "./Contact.css";
import Email from "./Email.php";

export default function Resume(){
    return(
        <div className="conctact-container">
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
                    <form action={<Email />} method="POST">
                        <div class="input-group">
                            <input type="text" class="field" name="nome" id="nome" required/>
                            <label for="nome" class="field-label">Nome</label>
                        </div>
                        <div class="input-group">
                            <input type="text" class="field" name="email" id="email" required/>
                            <label for="email" class="field-label">Email</label>
                        </div>
                        <div class="input-group">
                            <textarea class="field" id="mesagem" name="msg" required></textarea>
                            <label for="mesagem" class="field-label">Mensagem</label>
                        </div>
                        <button type="submit" class="btn highlighted-btn">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}