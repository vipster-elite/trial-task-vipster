// Login.js
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })
  const router =useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn('credentials', credentials);
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.currentTarget.name]: e.currentTarget.value })
  }

  return (


    <div className="flex mx-10 lg:mx-0 w-full lg:w-fit h-fit flex-col justify-center p-6   border rounded-lg">
      <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Sign in to your account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-bold leading-6 text-white">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder='Enter your email'
                value={credentials.email} onChange={(e) => handleChange(e)}
                required
                className="block w-full rounded-md border-white py-1.5 text-white shadow-sm ring-1 ring-inset placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none  bg-transparent"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-bold leading-6 text-white">
                Password
              </label>

            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder='Enter your password'
                value={credentials.password} onChange={(e) => handleChange(e)}
                required
                className="block w-full rounded-md border-white py-1.5 text-white shadow-sm ring-1 ring-inset placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none  bg-transparent"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>

          <div className='text-white'>
            <p>Don't have an account ? please <b className='text-indigo-600 cursor-pointer' onClick={()=>router.push("/sign-up")}>Sign Up</b></p>
          </div>
        </form>
      </div>
    </div>
 
  );
}