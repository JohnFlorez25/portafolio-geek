import React from 'react'
import Micomponente from '../components/About';
import Education from '../components/Education';
//Importar los elementos según los vamos utilizando
import Main from '../components/Main';

const App = () => {
    return (
        <Main>
            <Micomponente />
            <Education />
        </Main>
    )
}

export default App
