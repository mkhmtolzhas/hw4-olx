import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='top-0 left-0 w-full px-[8%] py-[30px] text-[#FFF] bg-[#002F34] flex justify-between items-center font-mono'>
        <Link href="" className='text-[25px] font-semibold text-[#23E5DB]'> OlX</Link>
        <nav className='hidden md:flex'>
            <Link href="" className="text-[18px] font-medium mx-[20px] my-[0] [transition:.3s]">Home</Link>
            <Link href="" className="text-[18px] font-medium mx-[20px] my-[0] [transition:.3s]">About</Link>
            <Link href="" className="text-[18px] font-medium mx-[20px] my-[0] [transition:.3s]">Contacts</Link>
        </nav>
        <div className='md:hidden'>
            <button id="menuButton" className='text-[25px]'>☰</button>
        </div>
        <nav id="mobileMenu" className='hidden flex-col items-center bg-white absolute top-[60px] left-0 w-full px-[8%] py-[20px] z-10'>
            <Link href="" className="block text-[18px] font-medium my-[10px] [transition:.3s]">Home</Link>
            <Link href="" className="block text-[18px] font-medium my-[10px] [transition:.3s]">About</Link>
            <Link href="" className="block text-[18px] font-medium my-[10px] [transition:.3s]">Contacts</Link>
        </nav>
    </header>
  )
}

export default Header   