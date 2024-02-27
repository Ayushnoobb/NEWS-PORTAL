import dataService from '@/utils/data/api/news-portal/dataService';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  first_name: string
  last_name: string
  email:string
  phone_number:number
  profile_image:string
  password:string
}

const UserRegesterForm: React.FC = () => {
  const { register, handleSubmit, formState:{errors} } = useForm<IFormInput>();
  const [error , setError] = useState("")

  const onSubmit:SubmitHandler<IFormInput> =async(data: any) => {
    console.log("ayush")
    console.log(data);
    try{
      const res = await dataService.postData("/api/signup/",data);
      const resData = await res.json();
      console.log(resData)
    }catch(err:any){
      setError(err.message)
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8 font-medium" >
      <div className='flex gap-4 mb-4'>
        <div>
          <label className="block mb-2">First Name:</label>
          <input
          {...register("first_name", { required: true, maxLength: 20 })}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
            />
            {errors?.first_name && <span className="text-red-500">This field is required</span>}
        </div>

        <div>
          <label className="block mb-2">Last Name:</label>
          <input
          {...register("last_name", { required: true, maxLength: 20 })}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
          />
          {errors?.last_name && <span className="text-red-500">This field is required</span>}
        </div>
      </div>


      <div className='flex gap-4 mb-4'>
        <div className='w-1/2'>
          <label className="block mb-2">Email:</label>
          <input
            {...register("email", { required: true, maxLength: 20 })}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
          />
          {errors?.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label className="block mb-2">Profile Number:</label>
          <input
            {...register("phone_number", { required: true, maxLength: 20 })}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
          />
          {errors?.phone_number && <span className="text-red-500">This field is required</span>}
        </div>
      </div>

      <div className='mb-4'>
        <label className="block mb-2">Profile Image:</label>
        <input {...register("profile_image", { required: true, maxLength: 20 })} className="mb-2" type='file'/>
        {errors?.profile_image && <span className="text-red-500 block">This field is required</span>}
      </div>



      <div className='mb-4'>
        <label className="block mb-2">Password:</label>
        <input
          {...register("password", { required: true, maxLength: 20 })}
          className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
          type='password'
        />
        {errors?.password && <span className="text-red-500">This field is required</span>}
      </div>

      <div className='flex'>
        <button className='bg-danger text-slate-200 hover:text-white ease-in px-4 py-2 rounded'onClick={()=>{}}>Cancel</button>
        <input type="submit" className="bg-boxdark text-bodydark hover:text-white ease-in px-4 py-2 rounded ml-auto" />
      </div>
      {error.length !== 0 ?<p className='text-danger'>{error}</p>:null}
    </form>
  );
};

export default UserRegesterForm;
