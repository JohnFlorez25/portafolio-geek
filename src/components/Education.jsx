import React from 'react'
import H2Styled from '../styled/H2Styled';

// Componentes como funciones Stateless [Return implicito]
const Education = () => (
        <div>
            <H2Styled name="Mis Estudios" />
            <div className="Education-container">
                <div className="Education-item">
                    <h3>PCJIC - <span>2016 </span></h3>
                    <p>Ingeniero Informático</p>
                </div>
            </div>
        </div>
);

export default Education

