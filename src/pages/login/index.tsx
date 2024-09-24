import React from "react";
import "../../styles/login.css"

const Login = () => (

    <div className="allLogin">
        <h1>Login</h1>

        <div className="login-panel">
            <label htmlFor="usuario">usuario</label>
            <input id="usuario" type="text" />
            <label htmlFor="senha">senha</label>
            <input id="senha" type="password" />

            <div style={{display: "inline-block"}}>
                <input type="checkbox" name="naosourobo" id="naosourobo" /><label htmlFor="naosourobo">Não sou um robô</label>
            </div>
        </div>
    
    
    </div>
    
)

export default Login;