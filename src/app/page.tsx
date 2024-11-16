'use client'


import React from 'react';
import Typewriter from 'typewriter-effect';

import { FaHtml5, FaLinkedin } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiDiscord, SiTypescript } from 'react-icons/si';
import { SiPython } from 'react-icons/si';


import { SiVisualstudiocode } from 'react-icons/si';
import { FaGithub } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { RxDesktop } from "react-icons/rx";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import Image from 'next/image';




export  default function Homeimport(){
  return(
    <main>
     <title> Saad Hussain Portfolio </title>
    {/*Header section */}

    {/*Nav Bar Include Some Pages And Social Urls */}
    <header className="text-gray-400 body-font bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a className="mr-5 hover:text-white-900">Home</a>
      <a className="mr-5 hover:text-white-900">About Us</a>
      <a className="mr-5 hover:text-white-900">Contact Us</a>
      <a className="hover:text-white-900">Privacy Policy</a>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Saad Hussain </span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 md:mt-0">Git Hub
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
  

  {/*Hero Section*/}


  <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">

    {/*Image Tag*/}
    
    <Image  alt="hero" src={"/Images/Saad.jpg"} width={500} height={500} className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full" />
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
    
    {/*Type Writer Effect*/}
       <h1 className="title-font sm:text-4x1 text-3x1 mb-4 font medium text-white"><Typewriter
  options={{
    strings: ['Student', 'Web Developer', 'Cyber Security Expert'],
    autoStart: true,
    loop: true,
  }}
  /></h1>

      <p className="mb-8 leading-relaxed">I am Saad Hussain, a student of GIAIC and i am a Front-end Developer.My Especialliast in HTML,CSS,JavaScript and NextJs.And my goal for future to become a Full Stack Developer and also become a Cyber Security Expert. </p>
      <div className="flex w-full justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <label htmlFor="hero-field" className="leading-7 text-sm text-gray-400">Newsletter</label>
          <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Subscribe Now</button>
      </div>
      <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
      <div className="flex text-gray-500">
        <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-indigo-600 hover:text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-400 mb-1">GET IT ON</span>
            <span className="title-font font-medium">Google Play</span>
          </span>
        </button>
        <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-indigo-700 hover:text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-400 mb-1">Download on the</span>
            <span className="title-font font-medium">App Store</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>


{/*Service*/}

 <section className="text-white body-font bg-gray-900">
  <div className="container px-5 py-8 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-yellow-500 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <h1 className="leading-relaxed text-lg text-yellow-500 text-3xl font-bold">
      Services What I Provide As A Web Developer 
         </h1>
     
      <h2 className="text-blue-500 font-medium title-font tracking-wider text-2xl font-bold">
      <Typewriter
                options={{
                  strings: [
                    "There are three responses to a piece of design - yes, no, and WOW!.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
      </h2>
      
    </div>
  </div>

  {/* services 4 steps */}

  <section className="text-white body-font">
  <div className="container px-5 py-10 mx-auto flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          
          <IoCodeSlash className="w-12 h-12 text-yellow-500" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-blue-500 mb-1 text-2xl">
          <Typewriter
                options={{
                  strings: [
                    " Interactive User Interfaces",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          <p className="leading-relaxed">Developing dynamic and engaging interfaces with JavaScript and TypeScript, bringing websites to life with smooth animations and interactive elements.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <RxDesktop className="w-12 h-12 text-yellow-500"  />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
        <h2 className="font-medium title-font text-blue-500 mb-1 text-2xl">
          <Typewriter
                options={{
                  strings: [
                    " Custom Web Layouts",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          <p className="leading-relaxed">
          Designing and implementing custom  layout that reflect your brand's unique identity using the HTML and CSS techniques.
            .</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
        <SiGooglecontaineroptimizedos className="w-12 h-12 text-yellow-500" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
        <h2 className="font-medium title-font text-blue-500 mb-1 text-2xl">
          <Typewriter
                options={{
                  strings: [
                    "  Web Performance Optimization ",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          <p className="leading-relaxed">
           Improving website loading times and overall performance through efficient codin practicies,ensuring a 
           fast and responsive user experience.  

          </p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12 text-yellow-500" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-blue-500 mb-1 text-xl">
          <Typewriter
                options={{
                  strings: [
                    "Responsive Web Design",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            
          </h2>
          <p className="leading-relaxed">
            Crafting visually appealing and mobile- friendly websites using HTML , Javascript , to ensure a seamless 
            user experience across all devices.
            </p>
        </div>
      </div>
    </div>
  </div>
</section>
</section>

{/*image card*/}


<div>
<section className="text-black-400 bg-indigo-900 body-font"/>
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-purple-800 rounded-lg overflow-hidden">
        <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/Images/Calculator.png" width={300} height={250} /> 
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-black-800 text-bold mb-1">Project 1</h2>
            <h1 className="title-font text-lg font-large text-yellow mb-3 ">THE CALCULATOR</h1>
            <p className="leading-relaxed mb-3 text-lg font-medium text-yellow-600">This is my calculator project using HTML CSS JAVASCRIPT.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/Images/guessthenumber.png" width={300} height={250} />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-black-800 text-bold mb-1">Project 2</h2>
            <h1 className="title-font text-lg font-medium text-sky mb-3">Guess the Number</h1>
            <p className="leading-relaxed mb-3 text-lg font-medium text-yellow-600">This is my number guessing project.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/Images/todolist.png" width={300} height={250} />
            <h2 className="tracking-widest text-xs title-font font-medium text-black-800 text-bold mb-1">Project 3</h2>
            <h1 className="title-font text-lg font-medium text-sky mb-3">To-do list</h1>
            <p className="leading-relaxed mb-3 font-medium text-yellow-600">This is my to-do list project.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <section/>




{/*feature section */}

{/*

  Project features and Commands
  Explore the essential features of each typescript project and easily run them using the npx command provided below.

  npx run start:calculator
  npx run start:number guessing
  npx run start:atm
  npx run start:todo-listhttps://dummyimage.com/722x40
  npx run start:currency convertor
  npx run start:word-counter*/}   
    

<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto"></div>
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-black text-center title-font text-yellow-500 mb-4">Project features and Commands</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Explore the essential features of each typescript project and easily run them using the npx command provided below.
      </p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white"> npx run start: calculator</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white"> npx run start: atm</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white"> npx run start: currency convertor</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white"> npx run start: to-do list</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white"> npx run start: word counter</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white"> npx run start: guess the number</span>
        </div>
      </div>

  {/*from button to custom button*/}    
    </div>


    <button className="bg-gray-800 flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-yellow-600 hover:bg-opacity-100 focus:outline-none bg-sky-400">
       <img className="w-15 h-10" src="data:image/png;base64,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" alt=""/>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-white mb-1">Git Hub</span>
          <span className="title-font font-bold text-black">@Saadhussain7</span>
        </span>
      </button>

    {/*Contents*/}
    
      <section className="text-gray-400 body-font bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-yellow-600 font-bold">Unlocking My Skill Set's The <br />Hidden Talents!</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-2xl">Highlights the range of skills and expertise,emphasizing the impact and value brought to my projects.</p>
   
    
    {/*Type Writer Effect*/}
    <div className='container px-2 py-8 mx-auto flex flex-wrap flex justify-center items-center space x-6 text-2xl'></div>
    <h1 className='title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-500'>
    <Typewriter
            options={{
            strings: ["Programming Languages"],
            autoStart: true,
            loop: true,
            }}
        />   
      </h1>   
     

<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform-duration-300 ease-in-out tranform hover:scale-110'>
    <FaHtml5 className="text-sky-500 text-6xl" />
    <span className='mt-2 text-lg text-black'>HTML</span> 
</div>    

<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform-duration-300 ease-in-out tranform hover:scale-110'>
    <TbBrandJavascript className="text-yellow-500 text-6xl" />
    <span className='mt-2 text-lg text-black'>JAVASCRIPT</span> 
</div> 

<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform-duration-300 ease-in-out tranform hover:scale-110'>
    <FaCss3Alt className="text-sky-500 text-6xl" />
    <span className='mt-2 text-lg text-black'>CSS</span> 
</div> 

<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform-duration-300 ease-in-out tranform hover:scale-110'>
    <SiTypescript className="text-yellow-500 text-6xl" />
    <span className='mt-2 text-lg text-black'>TYPESCRIPT</span> 
</div> 

<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform-duration-300 ease-in-out tranform hover:scale-110'>
    <SiPython className="text-sky-500 text-6xl" />
    <span className='mt-2 text-lg text-black'>PYTHON</span> 
    
   </div> 
  </div>
</div>
 

{/*Developmdent tools and frame wrórk icons*/}

<section className='text-gray-400 bg-gray-900 body-font'>
  <div className='container px-2 py-8 mx-auto flex flex-wrap flex justify-center items-center space-x-6 text-2xl'>
   
 

    {/*Icons*/}
    <div className='flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
      <SiVisualstudiocode className='text-blue-500 text-6xl' />
      <span className='mt-2 text-lg text-black'>
         Visual Studio Code
    </span>  
   </div> 


   <div className='flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
      <FaGithub className='text-black-500 text-6xl' />
      <span className='mt-2 text-lg text-black'> Git Hub 
        </span>  
   </div> 

   <div className='flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
      <FaHtml5 className='text-red-500 text-6xl' />
      <span className='mt-2 text-lg text-red'>
     HTML5
    </span>  
    </div>
    
    <div className='flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
      <FaLinkedin className='text-indigo-500 text-6xl' />
      <span className='mt-2 text-lg text-black'>
      Linkedin
    </span> 
    </div> 
    
    <div className='flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
      <SiDiscord className='text-red-500 text-6xl' />
      <span className='mt-2 text-lg text-black'>
      Discord
    </span>
    </div>
      


  {/*Typewriter Effect*/}  

  <h1 className='title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-500'>
    <Typewriter
    options={{
      strings: ["Development Tools And Frame Works"],
      autoStart: true,
      loop: true,
    }}
   />
    </h1>
    </div> 
   </section>
   
  </section>   

  <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-500 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8
               67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 
               30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 
               30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4
                69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              NEXT JS LEARNING MADE EASY{" "}
            </p>

            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-white font-medium title-font tracking-wider text-sm">
              Happy Coding
            </h2>
            <p className="text-sky-500">SUBSCRIBE NOW</p>
          </div>
        </div>
      </section>
  

  {/*Our Team*/}

  <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-4 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-4xl font-black title-font mb-4 text-yellow-500 tracking-widest uppercaSE">CREATIVE INNOVATORS</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">A "creative innovators" is someone who not only innovates but does so with a flair for thinking outside the box. they fuse imagination with technical expertise to create novel solutions or products,often improving or transforming everyday life.Such inventors typically excel in various fields-engineering,design,software, or even art-by pushing the boundaries of what is possible.</p>
    </div>

    {/*People 1*/}

    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-yellow-500 hower:grayscale" src="data:image/jpeg;base64,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"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-sky-400">Muhammad Harris</h2>

            <h3 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-yellow-500 mb-3">

            <Typewriter
                options={{
                  strings: [

                    "Lead Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              </h3>


            <p className="mb-4 text-white">A Lead Developer is a senior-level software engineer responsible for overseeing the development team and guiding the technical aspects of a project. They are often involved in both hands-on coding and in making high-level decisions about the project’s architecture, technology stack, and development processes.</p>
            <span className="inline-flex">
              <a className="text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-yellow-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>


      {/*People 2*/}
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-yellow-500 hower:grayscale" src="data:image/jpeg;base64,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"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-sky-400">Areeba Khan</h2>

            <h3 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-yellow-500 mb-3">
            <Typewriter
                options={{
                  strings: [

                    "UI/UX Designer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              
              </h3>



            
            <p className="mb-4 text-white"> UI/UX Designer specializes in creating intuitive, user-friendly digital experiences by focusing on both the visual layout (UI: User Interface) and overall user experience (UX). Their role blends creativity with user-centered design principles to build products that not only look good but are also easy to use.</p>
            <span className="inline-flex">
              <a className="text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-yellow-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>

      {/*People 3*/}
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-yelloe-500 hower:grayscale" src="data:image/jpeg;base64,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"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-sky-400">Asad Khan</h2>
            <h3 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-yellow-500 mb-3">
            <Typewriter
                options={{
                  strings: [

                    "Project Manager",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />

            </h3>


            <p className="mb-4 text-white">
            A Project Manager (PM) is responsible for planning, executing, and closing projects while managing the team, resources, and timeline. Their primary role is to ensure that a project meets its objectives within scope, time, and budget constraints, all while balancing the needs and expectations of stakeholders.
            </p>
            <span className="inline-flex">
              <a className="text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-yellow-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>

      {/*People 4*/}
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-yellow-500 hower:grayscale" src="data:image/jpeg;base64,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"/>
          <div className="flex-grow sm:pl-8">0
            <h2 className="title-font font-medium text-lg text-sky-400">Uzair Arshad</h2>

            <h3 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-yellow-500 mb-3">
            <Typewriter
                options={{
                  strings: [

                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              </h3>
            
            <p className="mb-4 text-white">A Full Stack Developer is a versatile software engineer capable of working on both the front-end (client side) and back-end (server side) of web applications. They have a broad range of skills that allow them to handle everything from designing user interfaces to managing databases, building APIs, and deploying web applications. Full stack developers often bridge the gap between different parts of a project, ensuring the entire system works smoothly.
            .</p>
            <span className="inline-flex">
              <a className="text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-yellow-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*Contact Us*/}

<section className="text-white bg-gray-900 body-font">
  <div className="containervpx-5 py-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-4xl font-black title-font mb-4 text-yellow-500 tracking-widest uppercase">Contact Us</h1>
       
       <p className="lg:w-2/3 mx-auto leading-relaxed test-base">fill the form below for any queries</p>
    </div>
  </div>


<section className="text-gray-400 bg-gray-900 body-font relative">
  <div className="absolute inset-0 bg-gray-900">
    <iframe title="map" width="100%" height="100%"  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"/>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 className="text-sky-400 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="lg:w-2/3 mx-auto leading-relaxed test-base">Fill this form if you have any queries or complains or if you have any message for us.</p>
      <div className="relative mb-4">
      <p className="leading-relaxed mb-5"/>
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
        <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-400 text-opacity-90 mt-3">Please read our privacy policy for any issues.</p>
    </div>
  </div>
</section>
</section>


{/*Footer*/}
<footer className="text-gray-400 bg-gray-900 body-font">

  <div className='container px-5 py-4 mx-auto'>

  </div>

    
  <div className="border-t border-gray-800">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Newsletter</label>
          <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Subscribe Now</button>
        <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">
          <br className="lg:block hidden"/>
        </p>
      </div>
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-sky-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-sky-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-sky-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-sky-400">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-sm text-center sm:text-left">© 2024 Saad Hussain —
        <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@Portfolio</a>
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">Copyright@ All Right Reserved</span>
    </div>
  </div>
</footer>



</section>
</main>
  )
}

















  

