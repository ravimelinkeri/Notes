import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'


export function Header() {
  let [before, after] = useState(false)

  return (
    <>
    <div className='h-[40px] w-full flex justify-between bShadow px-[20px] items-center fixed bg-black'>
        <p className='text-white flex items-center gap-x-2 text-[20px]'> <FaGithub/>  Ravimelinkeri </p>
        <div className='text-white items-center gap-x-10 text-[18px] hidden md:flex lg:flex xl:flex'>
              <a href='/html'>Interview Questions</a>
              <a href="https://ravimelinkeri.github.io/Portfolio/" target='_blank'>About Me</a>
              <a href='https://www.linkedin.com/in/ravichandra-melinkeri/' target='_blank'>Contact Me</a>
        </div>
        
        <button onClick={() => after(!before)} className='text-white text-[30px] cursor-pointer md:hidden lg:hidden xl:hidden '> {before? <RxCross2/> : <IoReorderThreeOutline/> } </button>

    </div>

    <div className={` ${before? 'ActivenewWindow' : 'newWindow '} z-1 fixed mt-[40px] rounded-xl bShadow h-[500px] w-[50%] bg-black text-white flex flex-col px-5 gap-y-5  pt-[10px] md:hidden lg:hidden xl:hidden`}>

        <div onClick={() => after(!before)} className='text-[25px] cursor-pointer font-bold flex justify-end'>
          <RxCross2/>
        </div>

        <div className='flex flex-col gap-y-1'>
          <a className='pl-[10px]' href='/home'>Home</a>
          <hr />
          <a className='pl-[10px]' href='/html'>HTML5</a>
          <hr />
          <a className='pl-[10px]' href='/css'>CSS</a>
          <hr />
          <a className='pl-[10px]' href='/javascript'>JavaScript</a>
          <hr />
          <a className='pl-[10px]' href='/react'>React</a>
          <hr />
          <a className='pl-[10px]' href='/frontend'>FrontEnd Developer</a>
          <hr />
          <a className='pl-[10px]' href='https://ravimelinkeri.github.io/Portfolio/' target='_blank'>About Me</a>
          <hr />
          <a className='pl-[10px]' href='https://www.linkedin.com/in/ravichandra-melinkeri/' target='_blank'>Contact Me</a>
          <hr />
        </div>
    </div>

    </>

  )
}
