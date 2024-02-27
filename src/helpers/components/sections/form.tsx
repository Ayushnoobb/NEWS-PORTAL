"use client"
import { login } from '@/helpers/redux-app/auth/_actions';
import dataService from '@/utils/data/api/news-portal/dataService';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';


export default function LoginForm() {
  let dispatch = useDispatch();
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const router = useRouter();


    async function handleSubmit(e:FormEvent){
      e.preventDefault();


      try{
        let user = await dataService.postData("/api/token/",{"username":userName,"password":password});
        const userData = {
          token:user,
          userInfo:user
        }
        if(user.success){
          dispatch(login(userData)); //set user token
          router.push("/auth/dashboard");
        }
        else{
          setError("Something went wrong !")
          return null
        }

      }catch(error:any){
        setError(error.response.data.detail as string);
        return null
      }
      
    }

  return (
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Login
                      </h1>
                      <form className="space-y-4 md:space-y-6" onSubmit={(e)=>{handleSubmit(e)}}>
                          <div>
                              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                              <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                 placeholder="username" required onChange={(e)=>{setUserName(e.target.value)}} autoComplete='false'/>
                          </div>
                          <div>
                              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                              <input type="password" name="password" id="password" placeholder="Enter Password" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                required onChange={(e)=>{setPassword(e.target.value)}} autoComplete='false'/>
                          </div>
                          <div className="flex items-center justify-between">
                              <div className="flex items-start">
                                  <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                  </div>
                              </div>
                          </div>
                          <button type="submit" className="w-full text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                          {error && <p className='text-sm text-danger'>{error}</p>}
                      </form>
                  </div>
              </div>
          </div>
        </section>
  )
}
