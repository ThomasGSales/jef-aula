import React from "react";
import myPhoto from "./Minha_foto.png"

const Sobre = () => (
    <>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h1>Sobre</h1>

            <h2>Thomas Gabriel Martins Sales</h2>
            <img src={myPhoto} alt="Eu" style={{maxWidth: "300px"}}/>
            <p style={{textAlign: "center"}}>
                
                Ola meu nome é Thomas Gabriel Martins Sales, tenho 20 anos, sou de Porto Velho - RO <br />
                sou estudante de Engenharia de Software na FAG e trabalho no Infra da Constel Tecnologia <br />
                <br />
                É nois tmj

            </p>
        </div>
    </>
    
)

export default Sobre;