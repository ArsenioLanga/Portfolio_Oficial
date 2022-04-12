import React from "react";
import "./Contact.css";

const  valid = (item, type) =>{
    console.warn("item", type)
}

export default function Resume(){
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
                    <form action="" method="POST">
                        <div class="input-group">
                            <input type="text" class="field" name="name" id="name" onChange={(item)=>valid(item,"name")} />
                            <label for="nome" class="field-label">Nome</label>
                        </div>
                        <div class="input-group">
                            <input type="text" class="field" name="email" id="email" onChange={(item)=>valid(item,"email")}/>
                            <label for="email" class="field-label">Email</label>
                        </div>
                        <div class="input-group">
                            <textarea class="field" id="mesagem" name="msg" onChange={(item)=>valid(item,"mensagem")} ></textarea>
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