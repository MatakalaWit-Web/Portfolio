import React from 'react'

const Navbar = () => (
  <section>
    <nav className="flex justify-between items-center p-4 bg-[#202020] text-white">
      <div className="text-2xl font-bold font-serif">Matakala</div>
      <div className='mr-10'>
       <ul className="flex space-x-4 ">
        <li><a href="#about" className="hover:text-gray-400 m-5">Home</a></li>
        <li><a href="#projects" className="hover:text-gray-400 m-5">Projects</a></li>
        <li><a href="#experience" className="hover:text-gray-400 m-5">Experience</a></li>
        <li><a href="#contact" className="hover:text-gray-400 m-5">Contact</a></li>
      </ul>

      </div>
     
    </nav>

  </section>
)
 

export default Navbar