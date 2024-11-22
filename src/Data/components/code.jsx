import React from 'react'
import { snippets } from '../QA'
import { Link } from 'react-router-dom'
import { BiCopyright } from 'react-icons/bi'
import Highlight from 'react-highlight'

export function Code() {
  return (
    <>
    <div className='flex '>

    <div className='bg-black hidden md:flex lg:flex xl:flex  md:w-[20%] lg:w-[20%] xl:w-[20%] h-auto text-white px-[20px] py-[40px]'>
            <div className='flex flex-col gap-y-2 fixed pt-[100px]'>
                <Link to='/home'>Home</Link>
                <hr />
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

        <p className='text-[25px] font-bold text-center mt-3'>HTML5</p>

        {snippets.map((v,i) => {
            return(
                <div className='flex flex-col px-[20px] py-[20px] gap-y-2' key={v.id}>
                    <h2 className="w-auto pl-0 font-bold"> Question : <span className='w-auto h-auto inline text-[16px] text-blue-900 '>{v.Question}</span> </h2>
                    <pre className='hljs rounded-[10px] max-w-[400px]'><code className='hljs'>{v.code}</code></pre>
                    <h2 class="w-auto pl-0 font-bold"> Explination : <span className='w-auto h-auto inline text-[16px] text-blue-900 '>{v.Explination}</span> </h2>
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