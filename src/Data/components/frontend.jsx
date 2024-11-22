import React from 'react'
import { frontEnd } from '../QA'
import { Link } from 'react-router-dom'
import { BiCopyright } from 'react-icons/bi'

export function FrontEnd() {
  return (

    <>
    <div className='flex '>

    <div className='bg-black hidden md:flex lg:flex xl:flex  md:w-[20%] lg:w-[20%] xl:w-[20%] h-auto text-white px-[20px] py-[40px]'>
            <div className='flex flex-col gap-y-2 fixed pt-[100px]'>
                <Link to='/home'>Home</Link>
                <hr />
                <Link to='/html'>HTML5</Link>
                <hr />
                <Link to='/css'>CSS</Link>
                <hr />
                <Link to='/javascript'>JavaScript</Link>
                <hr />
                <Link to='/react'>React</Link>
                <hr />
                <Link to='/frontend'>FrontEnd Developer</Link>
                <hr />
            </div>
    </div>

    <div className='bg-black w-full md:w-[80%] lg:w-[80%] xl:w-[80%] h-auto text-white px-[20px] py-[40px]'>

        <p className='text-[25px] font-bold text-center mt-3'>Frontend Interview Questions</p>

        {frontEnd.map((v,i) => {
            return(
                <div className='flex flex-col px-[20px] py-[20px] gap-y-2' key={v.id}>
                    <p className='text-[20px]'>Q.No : {v.id}</p>
                    <p className='text-[20px] pl-[15px] font-bold'> {v.Question} </p>
                    <p className='text-[16px] pl-[20px]'>Answer : {v.Answer} </p>
                </div>
            )
        })}
    </div>

    </div>

    <div className='flex justify-center items-center h-[40px] bg-black text-white'>
        <BiCopyright/> 2024, ravimelinkeri
    </div>

    </>
  )
}