import { avatar } from "../assets";


const AboutMe = () => (
  <section>
    <div className="text-white text-center">
      <img src={avatar} alt='avatar' className='w-40 h-32 rounded-full mx-auto mt-10' />
      <h1 className='text-3xl font-bold mt-5'>I do code and <br /> brand make content
        <spam className="bg-gradient-to-br from-orange-500 to-purple-800 text-transparent bg-clip-text"> About it!</spam></h1>
      <p className="text-gray-400 mt-5 mb-5 flex text-center justify-center">
        I am a frontend developer with a passion for creating beautiful and functional user interfaces.<br/> I have experience in HTML, CSS, JavaScript, and React, and
        I enjoy working on projects that challenge me and allow me to express my creativity.<br/>
        In my free time, I like to explore new frameworks and libraries, read tech blogs, and contribute to open-source projects.
      </p>
      <div className="flex justify-center mt-0.1">
        <button className="m-5 bg-white hover:bg-[#161616] text-[#161616] hover:text-white py-2 px-10 border border-white rounded-full ">Get in Touch</button>
        <button className="m-5 bg-transparent hover:bg-white  hover:text-[#161616] py-2 px-10 border border-white hover:border-transparent rounded-full">Download CV</button>
      </div>
    </div>
  </section>

)



export default AboutMe