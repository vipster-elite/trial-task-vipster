import NavBar from '@/componants/NavBar';
import WalletConnect from '@/componants/WalletConnect';
import Login from '@/componants/auth/Login';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Home() {

  const { data: session } = useSession();

  return (
    <main
      className='h-screen  bg-gradient-to-br from-black via-primary to-white relative'
    >
      <div className='absolute top-0 left-0 w-full'>
      <NavBar  />
      </div>



        <div className='h-full w-full flex justify-center items-center text-white '>
          <h1 className='font-bold text-2xl'>Welcome To our Platform</h1>
        </div>
    
    </main>
  );
}
