import React, { useState } from "react";
import Todo from "../../pages/todo";
import Home from "../../pages/home";
import Sobre from "../../pages/sobre";
import Dashboard from "../../pages/dashboard";
import Login from "../../pages/login";

enum RouterPages {
    'home' = 'home',
    'todo' = 'todo',
    'dashboard' = 'dashboard',
    'sobre' = 'sobre',
    'login' = 'login'
}

const Router = () => {
    const [getPaginaAtual, setPaginaAtual] = 
        useState<RouterPages>(RouterPages.home)
    
    const renderizarBotoes = () => (
        <div>
            <button onClick={() => setPaginaAtual(RouterPages.home)}>Inicio</button>
            <button onClick={() => setPaginaAtual(RouterPages.todo)}>Todo</button>
            <button onClick={() => setPaginaAtual(RouterPages.dashboard)}>Dashboard</button>
            <button onClick={() => setPaginaAtual(RouterPages.sobre)}>Sobre</button>
            <button onClick={() => setPaginaAtual(RouterPages.login)}>Login</button>
        </div>
    )

    const renderizarPagina = () => {
        switch (getPaginaAtual) {
            case RouterPages.home: return <Home />
            case RouterPages.todo: return <Todo />
            case RouterPages.dashboard: return <Dashboard />
            case RouterPages.sobre: return <Sobre />
            case RouterPages.login: return <Login />
            default: return <Home />
        }
    }

    return (
        <div>
            {renderizarBotoes()}
            {renderizarPagina()}
        </div>
    )
}

export default Router;