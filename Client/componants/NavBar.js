import React from 'react'
import WalletConnect from './WalletConnect'
import { SignInIcon, logoIcon } from '@/assests/icons'
import { useRouter } from 'next/router'


const NavBar = ({ setShowLogin }) => {
    const router =useRouter()
    return (
        <div className='w-full h-20 flex justify-between items-center py-4 px-10'>
            <div className='size-10'>
                <img src={logoIcon.src} />
            </div>
            <div className='flex items-center gap-2'>
                <button
                    onClick={() => router.push("/sign-in")}
                    className="flex w-fit outline-none border-none justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

                    Sign In

                </button>
                <WalletConnect />
            </div>

        </div>
    )
}

export default NavBar