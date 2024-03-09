import NavBar from '@/componants/NavBar'
import Login from '@/componants/auth/Login'
import React from 'react'

const SignInPage = () => {
  return (
    <main
      className='h-screen  bg-gradient-to-br from-black via-primary to-white relative'
    >
      <div className='absolute top-0 left-0 w-full'>
      <NavBar  />
      </div>



        <div className='h-full w-full flex justify-center items-center'>
          <Login />
        </div>
    
    </main>
  )
}

export default SignInPage