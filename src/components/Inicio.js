import React from 'react'
import Contato from './Contato'
import Projetos from './Projetos'
import Skill from './Skill'
import Sobre from './Sobre'

const Inicio = () => {
  return (
    <div className='bg-slate-800'>
        <div className='flex'>
          <div className='flex-1 h-45 w-45 p-20'>
            <img src='card.png' alt='foto perfil' />
          </div>
          <div className='flex-1 right-1.5 text-lg top-40 p-20'>
            <p className='text-slate-200'>Olá, Eu sou !</p>
            <h1 className='text-green-500'>Carlos Nascimento</h1>
            <p className='text-slate-200'>Desenvolvedor Full Stack</p>
          </div>
        </div>
        <Sobre />
        <Skill />
        <Projetos />
        <Contato />
    </div>
  )
}

export default Inicio