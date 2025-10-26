import React from 'react'
import Image from 'next/image'
const Page = () => {
  return (
    <div className='h-screen flex flex-col md:flex-row justify-center items-center rounded-3xl overflow-hidden my-16 container'>

           <div className='flex w-100 h-80 group'>
           <div>
              <Image
              src="/img/villa1/1.jpeg"
              alt="villa"
              width={500}
              height={500}
              className="rounded-es-full  rounded-tl-full rounded-se-full  opacity-80 w-50 h-40 group-hover:opacity-100 group-hover:rounded-none 
              group-hover:rounded-tl-2xl transition-all duration-300"

            /> 
             <Image
              src="/img/villa1/2.jpeg"
              alt="villa"
              width={500}
              height={500}
              className="rounded-b-full rounded-l-full group-hover:rounded-bl-2xl group-hover:rounded-none  opacity-80 w-50 h-40 group-hover:opacity-100 transition-all duration-300"
            />
           </div>
           <div>
             <Image
              src="/img/villa1/3.jpeg"
              alt="villa"
              width={500}
              height={500}
              className="rounded-t-full rounded-br-full group-hover:opacity-100 group-hover:rounded-none 
              group-hover:rounded-tr-2xl opacity-80 w-50 h-40 transition-all duration-300"
            />
            <Image
              src="/img/villa1/1.jpeg"
              alt="villa"
              width={500}
              height={500}
              className="rounded-b-full  rounded-tr-full  group-hover:opacity-100 group-hover:rounded-none 
              group-hover:rounded-br-2xl opacity-80 w-50 h-40 transition-all duration-300"
            />
           </div>
           </div>
            
      
       <div className='bg-background w-100 h-80 flex flex-col md:items-center py-5 rounded-2xl px-5'>
        <h3 className='text-white font-bold text-xl'>Let&apos;s Build your Project together</h3>
        <p className='text-white my-4 text-sm' >
          get in touch with our team for consultation
        </p>
        <div className='grid grid-cols-1 gap-2 w-full mb-2'>
          <input type="text" placeholder='First Name' className='border border-gray-300 rounded-full px-3 py-2 bg-white focus:outline-none focus:ring-2' required />
          <input type="text" placeholder='Last Name' className='border border-gray-300 rounded-full px-3 py-2 bg-white focus:outline-none focus:ring-2' required/>
          <input type="email" placeholder='E-mail' className='border border-gray-300 text-w w-full rounded-full px-3 py-2 bg-white  focus:outline-none focus:ring-2' required />
        </div>
        <button className='bg-white justify-center items-center px-6 py-2 rounded-full hover:text-black hover:bg-foreground transition flex gap-2'>
          Send
          <svg className="w-6 h-6 animate-pulse" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>
        </button>
       </div>
    </div>
  )
}

export default Page