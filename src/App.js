import React from 'react'
import '../src/index.css'
import Header from './header/header'

function App() {
  return (
    <main>
      <div className='bg-slate-800 p-4'>
        <Header />
        <div className='relative h-45 w-45'>
          <img src='card.png' alt='foto perfil' />
        </div>
        <div className='display inline-blocks flow-root'>
          <p className='text-slate-200'>Olá, Eu sou!</p>
          <h1 className='text-green-500'>Carlos Nascimento</h1>
          <p className='text-slate-200'>Desenvolvedor Full Stack</p>
        </div>
      </div>
    </main>

  )
}

export default App
