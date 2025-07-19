import {nodes, reactjs, html, javascript, css} from '../assets';

const Projects = () => (
  <section  className='bg-[#161616] t'>
    <div >
      <h2 className='text-gray-400 font-semibold text-center p-5'>Experience With</h2>
    </div>
    <div className='flex justify-center mt-10 pb-5'>
      <div className='flex flex-col items-center '>
        <img src={nodes} alt="Node.js" className='w-7 h-7' />
        <p className='text-gray-400'>Node.js</p>
      </div>
      <div className='flex flex-col items-center mx-10'>
        <img src={reactjs} alt="React" className='w-7 h-7' />
        <p className='text-gray-400'>React</p>
      </div>
      <div className='flex flex-col items-center'>
        <img src={html} alt="html" className='w-7 h-7' />
        <p className='text-gray-400'>Html</p>
      </div>
      <div className='flex flex-col items-center mx-10'>
        <img src={javascript} alt="JavaScript" className='w-7 h-7' />
        <p className='text-gray-400'>JavaScript</p>
      </div>
      <div className='flex flex-col items-center'>
        <img src={css} alt="CSS" className='w-7 h-7' />
        <p className='text-gray-400'>CSS</p>
      </div>
    </div>

  </section>
)

export default Projects