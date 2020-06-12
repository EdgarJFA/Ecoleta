import React from 'react';
import { FiHome, FiSearch, FiLogIn, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css'

const RegistrationComplete = () => {
    return (
        <div id="page-registration-complete">
            
            <div className="content">
                <main>
                <div className="checked">
                <span >
                    <FiCheckCircle/>
                </span> 
            </div>             
                    <h1>Cadastro Concluido!</h1>
                    <Link to="/">
                        <span>
                            <FiHome/>
                        </span>
                        <strong>Voltar para home</strong>
                    </Link>

                    <Link to="#">
                        <span>
                            <FiSearch/>
                        </span>
                        <strong>Pesquisar por pontos de coleta</strong>
                    </Link>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn/>
                        </span>
                        <strong>Cadastre um novo ponto de coleta</strong>
                    </Link>
                </main>
            </div>            
        </div>       
    );
}

export default RegistrationComplete;