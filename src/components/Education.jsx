import React from 'react'
import H2Styled from '../styled/H2Styled';
import {H3Styled,PStyled} from '../styled/H3Styled'
 
// Componentes como funciones Stateless [Return implicito]
const Education = () => (
        <div>
            <H2Styled name="Mis Estudios" />
            <div className="Education-container">
                <div className="Education-item">
                    <H3Styled> PCJIC - <span>2016 </span></H3Styled>
                    <PStyled name = "Ingeniero Informático"/>  
                </div>
                <div className="Education-item">
                    <H3Styled> EAFIT - <span>2020 </span></H3Styled>
                    <PStyled name = "Magister en Ingeniería de Software"/>  
                </div>
            </div>
        </div>
);

export default Education

