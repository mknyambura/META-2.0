import Image from 'next/image'
import React from 'react'
import logo from './meta.png'
import Link from 'next/link'
import LogOut from './LogOut';

function Header() {
    const session = true;

    if (session){
        return (
            <header className='sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm'>
                <div className="flex space-x-2">
                    <Image className='rounded-full mx-2 object-contain' width={50} height={10} src={logo} alt='Profile Picture'/>
                    <div>
                        <p className='text-blue-400'>Logged In as:</p>
                        <p className='font-bold text-lg'>Nyambura Mercy</p>
                    </div>
                </div>

                <LogOut/>

            </header>
        )
    }
  return (
    <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm'>
        <div className='flex flex-col items-center space-y-5'>
            <div className='flex space-x-2'>
                <Image 
                    src={logo} 
                    alt="logo" 
                    width={50} 
                    height={10}
                />
                <p className="text-blue-400">Welcome to MESSENGER</p>
            </div>
            <Link href="/auth/signin" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign In</Link>
        </div>
    </header>
  )
}

export default Header