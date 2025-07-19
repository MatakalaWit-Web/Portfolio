
import app from '@splinetool/react-spline';
import Spline from '@splinetool/react-spline';
import { gradient } from '../assets';



const AboutMe = () => (
  <section>
    <div className="flex flex-row">


      <div className="m-10 mt-50">
        <h1 className='text-3xl font-bold mt-5 text-white'>HI, it's Witness<br />I'm a
          <spam className="bg-gradient-to-br from-orange-500 to-purple-800 text-transparent bg-clip-text text-2xl"> FullStack Developer!</spam></h1>
        <p className="text-gray-400 mt-5 mb-5 flex ">
          I am a frontend developer .<br /> I have experience in HTML, CSS, JavaScript, and React, and
          I enjoy working on projects .<br />
          In my free time, I like to explore new frameworks and libraries, read tech blogs, .
        </p>
        <div className="flex mt-0.1">
          <button className="m-5 bg-white hover:bg-[#161616] text-[#161616] hover:text-white py-2 px-10 border border-white rounded-full ">Get in Touch</button>
          <button className="m-5 bg-transparent hover:bg-white  hover:text-[#161616] py-2 px-10 border border-white hover:border-transparent rounded-full">Download CV</button>
        </div>
      </div>
      <div>
        <img src={gradient} alt="gradient" className=" absolute top-0 right-0 w-[350px] h-[350px] opacity-60 -z-10  " />
        <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] -rotate-[30deg] shadow-[0_0_900px_20px_white] -z-10'></div>
        <div >
          <Spline className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%]  h-full" scene="https://prod.spline.design/jqF4GZHI2e5r-Zs0/scene.splinecode" />
        </div>

      </div>


    </div>



  </section>

)



export default AboutMe