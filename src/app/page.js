'use client';
import React from 'react';
import Head  from 'next/head';
import './globals.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {FaLinkedin, FaGithub, FaCode, FaEnvelope, FaPhone,FaMapPin, FaSquareBehance,
} from 'react-icons/fa6';
import Image from "next/image";
import ProfileImage from "../../public/IMG_20221028_141841_395-removebg-preview-removebg-preview.png";
import Technologies from "../../public/4401280-removebg-preview.png" ;
import Works from "../../public/3190343-removebg-preview.png";
import Girl from "../../public/Designer girl-bro (1).png" ;
import Contact from "../../public/3459559-removebg-preview.png";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
  <div className={darkMode ? "dark" : ""}>
    <Head>
          <title>Daiana Daniela Diaz</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="bg-gradient-to-b from-violet-100 to-teal-100 scroll-smooth animate-fade-down animate-once animate-ease-in animate-normal animate-fill-forwards">
      <div className='dark:bg-gradient-to-b from-indigo-900 to-black'>
      <section className=" min h-screen" >
        <nav className="py-4 mb-6 flex justify-between">
          <h1 className="text-xl font-abc m-3 font-thin dark:text-teal-300">DevelopedByDaianaDiaz</h1>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer  dark:text-white"/></li>
            <li><a className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-4 py-2 rounded-md ml-8 mr-12" href="https://online.updf.com/index/share/es-ES?shareId=a6f9bcc7-67f6-43e1-9590-10a479c44716" target="_blank">Resume</a></li>
          </ul>
        </nav>
        <div className="text-center flex-col p-8">
          <h2  className="text-5xl font-abc py-2 text-emerald-300 font-extrabold">DAIANA DIAZ</h2>
          <h3 className="text-2xl py-2 font-def dark:text-teal-300 font-semibold font-mono underline decoration-sky-500">Developer and Designer</h3>
          <p className="text-l font-medium py-5 mx-auto leading-8 text-gray-800 md:text-xl max-w-xl dark:text-white">Aspiring Jr. Front-End Developer Seeking Opportunities to Grow. Join me down below and enjoy my works!</p>
          <div className="relative bg-gradient-to-b from-emerald-500 mx-auto h-80 w-80 rounded-full my-10 overflow-hidden drop-shadow-lg ">
          <Image src={ProfileImage} className="fill cover " alt='profile' />
        </div>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-sky-500 dark:text-sky-300">
          <a href="http://www.linkedin.com/in/daianaddiaz" target="_blank"><FaLinkedin/></a>
          <a href="https://github.com/daianaddiaz" target="_blank"><FaGithub/></a>
          <a href="https://www.behance.net/daianaddiaz" target="_blank"><FaSquareBehance/></a>
        </div>

      </section>
      <section>
        <div className="text-center mx-8">
          <h3 className="text-3xl mb-5 mx-auto pb-1 font-abc dark:text-teal-300">About my Developer Experience</h3>
            <p className="text-l p-5 leading-8 text-gray-800 dark:text-white">While my experience in front-end development with React.Js, Tailwind, Next.Js may be limited, my <span className="text-violet-500">enthusiasm</span> and commitment to learn are boundless. 
            I may not have extensive hands-on experience, but I possess a solid foundation in the fundamentals and have actively sought opportunities to enhance my skills.</p>
            <p className="text-s leading-8 text-gray-600 dark:text-white" > I constantly engage in self-study, exploring online resources, tutorials, and documentation to deepen my understanding of these technologies. learning valuable lessons along the way. I understand the importance of collaboration and value the guidance of experienced professionals. I am eager to work with seasoned developers who can mentor me and help me grow in my career. I possess strong problem-solving abilities, attention to detail, and excellent communication skills that contribute to effective teamwork. Although my experience may be limited, my passion, motivation, and willingness to learn are unparalleled. </p>
        </div>
        <div className="md:flex lg:flex gap-10">
        <div className="text-center shadow-lg rounded-xl  mx-20 p-10 my-10 pb-8 dark:bg-indigo-900">
          <div className="flex justify-center">
            <Image src={Technologies} width={300} height={300} alt='cpu' />
          </div>
          <div className="text-center">
            <h3 className="text-3xl pb-1 font-abc dark:text-teal-300 ">Hard Skills</h3>
            <p className="text-s leading-8 font-bold text-gray-600 dark:text-gray-300">Code</p> 
            <p className="text-s leading-8 text-gray-600 dark:text-white">JavaScript</p>
            <p className="text-s leading-8 text-gray-600 dark:text-white">HTML5, CSS3, Tailwind, Boostrap</p>
            <p className="text-s leading-8 text-gray-600 dark:text-white">React.Js</p>
            <p className="text-s leading-8 text-gray-600 dark:text-white">Next.Js</p>
            <p className="text-s leading-8 text-gray-600 dark:text-white">MySQL, XAMPP</p>
            <p className="text-s leading-8 text-gray-600 dark:text-white">Python</p> 
            <p className="text-s leading-8 font-bold text-gray-600 dark:text-gray-300">Design</p> 
            <p className="text-s leading-8 text-gray-600 dark:text-white">Ad. Photoshop</p>
            <p className="text-s leading-8 text-gray-600 dark:text-white">Ad. Illustrator</p>
            <p className="text-s leading-8 text-gray-600 dark:text-white">In Design</p>
            <p className="text-s leading-8 text-gray-600 dark:text-white">Figma</p>
          </div>
        </div>
        <div className="text-center shadow-lg rounded-xl p-10 mx-20 my-10 pb-8 dark:bg-indigo-900">
        <div className="flex justify-center">
          <Image src={Works} width={300} height={300} alt='work'/>
        </div>
          <div className="text-center pb-8">
          <h3 className="text-3xl pb-1 font-abc dark:text-teal-300 ">Projects</h3>
            <ul>
              <li className="mt-5"><a className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-4 py-2 rounded-md " href="https://649b45226254230525d4053e--velvety-pastelito-a2cde4.netlify.app/" target="_blank">Calculator</a></li>
              <li><a className="text-5xl flex justify-center gap-14 pt-5 pb-3 text-sky-500" href="https://github.com/daianaddiaz/calculadoraReact" target="_blank"><FaCode/></a></li>
              <li className="m-5"><a className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-4 py-2 rounded-md " href="https://649b46469506ac05c1cea5b7--delicate-cucurucho-627023.netlify.app/index.htm" target="_blank">Restaurant Web Page</a></li>
              <li><a className="text-5xl flex justify-center gap-14 pt-5 pb-3 text-sky-500" href="https://github.com/daianaddiaz/front-end-proyect" target="_blank"><FaCode/></a></li>
              <li className="m-5"><a className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-4 py-2 rounded-md " href="#" target="_blank">E-Commerce</a></li>
              <li><a className="text-5xl flex justify-center gap-14 pt-5 pb-3 text-sky-500" href="https://github.com/daianaddiaz/e-commerce-react" target="_blank"><FaCode/></a></li>
            </ul>
          </div>
        </div>
        <div className="text-center shadow-lg rounded-xl mx-20 my-10 pb-8 dark:bg-indigo-900">
          <div className="flex justify-center">
            <Image src={Contact} width={300} height={300} alt='contact'/>
          </div>
          <div className="text-center">
            <h3 className="text-3xl pb-1 font-abc dark:text-teal-300 ">Contact Me</h3>
            <ul>
              <li className="flex justify-center m-5"> <FaMapPin className="w-7 h-7 mx-1 y-2 pt-3 dark:text-teal-300"/> <p className="text-s leading-10 text-gray-600 dark:text-white">Buenos Aires, Argentina</p></li>
              <li className="flex justify-center m-5"> <FaEnvelope className="w-7 h-7 mx-1 y-2 pt-3 dark:text-teal-300"/> <p className="text-s leading-10 text-gray-600 dark:text-white">daianadaniela.diaz@outlook.com</p></li>
              <li className="flex justify-center m-5"> <FaPhone className="w-7 h-7 mx-1 y-2 pt-3 dark:text-teal-300"/> <p className="text-s leading-10 text-gray-600 dark:text-white">+541167181279</p></li>
            </ul>
            <div className="flex justify-center">
            <Image src={Girl} width={300} height={300} alt='girl-design' />
          </div>
          </div>
        </div>
        </div>
      </section>
      </div>
    </main>
    
  </div>    
    )
  }