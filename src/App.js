import React from 'react'
import '../src/index.css'
import Header from './components/Header'
import Skill from './components/Skill'
import Sobre from './components/Sobre'
import Footer from './components/Footer'
import Contato from './components/Contato'
import Projetos from './components/Projetos'
import Inicio from './components/Inicio.js'

//router

import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <main>
      <div className='bg-slate-800'>       
        <BrowserRouter>
          <Header />                 
          <Routes>
            <Route path='/' element={ <Inicio /> }/>
            <Route path='/sobre' element={ <Sobre /> }/>
            <Route path='/skill' element={ <Skill /> }/>
            <Route path='/projetos' element={ <Projetos /> }/>
            <Route path='/contato' element={ <Contato /> }/>            
          </Routes>
          <Footer />
        </BrowserRouter>       
      </div>
    </main>
  )
}
export default App
