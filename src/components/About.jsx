import React from 'react';
import '../styles/About.css';
import styled from 'styled-components';

//INICIO DE NUESTROS ESTILOS CON STYLED-COMPONENTS

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #3F51B5;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0,0.6);
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #448AFF;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #448AFF;
`;

const AboutBio = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;

const AboutLocation = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 400;
`;

//FIN DE NUESTROS ESTILOS CON STYLED-COMPONENTS

//Función statefull
const About = () => {
    return (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src="https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png" alt="Mi avatar" />
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>John Faber Flórez Vasco</AboutH2>
            </AboutName>
            <div className="About-profession">
                <AboutProfession>Consultor/Instructor de Software</AboutProfession>
            </div>
            <div className="About-description">
                <AboutBio>Desarrollando futuros programadores y software </AboutBio>
            </div>
            <AboutLocation>
                Medellin, Colombia
            </AboutLocation>
            <div className="About-social">
                Redes Sociales
            </div>
        </div>
    </AboutStyle>
    )
};

export default About;
