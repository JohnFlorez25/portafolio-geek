import React from 'react'
import About from '../components/About'
import Certification from '../components/Certification'
import Education from '../components/Education'
import Experience from '../components/Experience'
//Importar los elementos según los vamos utilizando
import Main from '../components/Main'
import Skills from '../components/Skills'

const App = () => {
  return (
    <Main>
      <About />
      <div className="Information-container">
        <Education />
        <Experience />
        <Certification></Certification>
        <Skills/>
      </div>
    </Main>
  )
}

export default App
