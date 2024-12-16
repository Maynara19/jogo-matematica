import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importação do useNavigate
import './Sobre-nos.css';
import sobreNos1 from '../imagens/sobre_nos1.png';
import sobreNos2 from '../imagens/sobre_nos2.png';

export default function Sobre() {
    const navigate = useNavigate(); // Instância do hook para navegação

    return (
        <div className="sobre-nos-container">
            <div className="informacoes">
                <h2>Quem somos?</h2>
                <p>
                    Somos estudantes concluintes do curso de informática no IFRN Macau. Tivemos a ideia de criar esse site
                    para ajudar você aluno da escola Dom Bosco a entender e praticar a matemática de uma forma mais dinâmica
                    e interativa.
                </p>
            </div>
            <h2>Equipe</h2>
            <ul>
                <li> 
                    <img src={sobreNos1} alt="Maynara" className="team-photo" />
                    <strong>Maynara Vanessa</strong> - Aluna, Criadora e desenvolvedora.
                </li>
                <li>
                    <img src={sobreNos2} alt="Ramon" className="team-photo" />
                    <strong>Ramon Nunes</strong> - Aluno, Criador e desenvolvedor.
                </li>
            </ul>
            <div className="button-container">
                <button onClick={() => navigate('/')} className="back-button">Voltar</button>
            </div>
        </div>
    );
}
