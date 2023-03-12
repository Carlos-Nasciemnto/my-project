import React, { useRef } from "react"

import { Link } from "react-router-dom"


const Header = () => {
    return(
        <header className="text-gray-600 body-font">
        <div className="flex flex-wrap bg-slate-500 p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" classNameName="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-green-500">Carlos Nascimento</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to='/' className="mr-5 hover:text-gray-900 text-white" >Inicio</Link>
            <Link to='/sobre' className="mr-5 hover:text-gray-900 text-white">Sobre</Link>
            <Link to='/skill' className="mr-5 hover:text-gray-900 text-white">Skill</Link>
            <Link to='/projetos' className="mr-5 hover:text-gray-900 text-white">Projeto</Link>
            <Link to='/contato' className="mr-5 hover:text-gray-900 text-white">Contato</Link>
          </nav>   
        </div>
      </header>
    )
}

export default Header