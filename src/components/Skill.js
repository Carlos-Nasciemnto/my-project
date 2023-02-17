import React from 'react'

const Skill = () => {
  return (
    <div>
        <section className="text-gray-400 bg-gray-900 body-font pl-18">            
            <div className="container px-10 pb-20 py-24 mx-auto p-h-15 pl-15">
            <span className="text-green-500 text-lg border-b-2">Skill</span>
            <div className="flex flex-wrap -m-4 p-10">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">                     
                    <img alt="ecommerce" className="block relative h-48 rounded overflow-hidden object-cover object-center w-full h-full block" src="react4.png"/>          
                </div>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">            
                        <img alt="ecommerce" className="block relative h-48 rounded overflow-hidden object-cover object-center w-full h-full block" src="next.png"/>            
                    </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">            
                    <img alt="ecommerce" className="block relative h-48 rounded overflow-hidden object-cover object-center w-full h-full block" src="javascript.png"/>            
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">            
                    <img alt="ecommerce" className="block relative h-48 rounded overflow-hidden cover object-center w-full h-full block" src="node.png"/>           
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">            
                    <img alt="ecommerce" className="block relative h-48 rounded overflow-hidden object-cover object-center w-full h-full block" src="html.png"/>            
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">             
                   <img alt="ecommerce" className="block relative h-48 rounded overflow-hidden object-cover object-center w-full h-full block" src="css2.png"/>
                    {/* <svg fill="none" height="200" width="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba"/><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7"/><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff"/></svg>             */}
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">            
                <img className="block relative h-48 rounded overflow-hidden object-cover object-center w-full h-full block" alt='tailwind' src="tailwind3.png"/>       
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">            
                    <img alt="ecommerce" className="block relative h-48 rounded overflow-hidden object-cover object-center w-full h-full block" src="mongodb.png"/>            
                </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Skill