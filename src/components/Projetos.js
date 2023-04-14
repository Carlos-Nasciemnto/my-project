import React from "react";

const Projetos = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font px-10 py-24 p-20 pl-15">
        <span className="text-green-500 text-lg ml-5 border-b-2">Projetos</span>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-wrap flex-col items-center">
          <div className="bg-gray-500 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              className="bg-gray-900"
              alt="advpalavras" 
              src="adivinhaPalavras.png"
            />
          </div>
          <div className="lg:flex-grow text-slate-200 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl mb-4 font-medium text-white">
              Adivinhar palavra.
            </h1>
            <p className="mb-8 leading-relaxed">
              Projeto desenvolvido com objetivo de aprimorar os conhecimentos de
              HTML, CSS e JAVASCRIPT. E o objetivo é acertar as palavras, além
              disso o sistema faz a contagem de pontuação e identifica as letras
              já jogada.
            </p>
          </div>
          
          <div className="mx-auto flex px-5 py-24 md:flex-row flex-wrap flex-col items-center">
            <div className="bg-gray-500 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <img
                className="bg-gray-900" 
                alt="palpitebox"
                src="Palpitebox.png"
              />
            </div>
            <div className="lg:flex-grow text-slate-200 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl mb-4 font-medium text-white">
                Palpitebox.
              </h1>
              <p className="mb-8 leading-relaxed">
                Projeto desenvolvido para um restaurante onde as pessoas dá sua opnião e
                ou sugestão com isso a pessoa ganha um cupom de desconto na próxima compra.                 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
