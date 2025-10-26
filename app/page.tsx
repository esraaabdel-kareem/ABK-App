import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
<div className='h-screen my-10 md:my-50'>
      <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Image
        src="/img/villa1/1.jpeg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
    </div>

    <div className="relative px-6 z-10 mt-20 flex  text-white  md:justify-between flex-col md:flex-row">
      <h1 className="text-7xl font-bold mt-10">A. 
        <br />
        <span className='pl-10 text-6xl' >Abd ElKareem</span>
      </h1>
      <p className="text-end mt-30 max-w-md text-lg">
        join us to
        <br />
        transform spaces
        <br />
        with exceptional 
        <br />
        design solutions.
      </p>
    </div>

    <Link href="/about" className="flex px-10 my-10">
      <button className="relative z-10 bg-background text-white px-6 py-3 rounded-full hover:bg-foreground transition">
        Learn More About Us
        <svg className="inline-block animate-bounce ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </button>
    </Link>


</div>
  );
}
