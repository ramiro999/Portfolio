"use client"
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";

type Inputs = {
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  

  return(
    <>
    <div className="container mt-4 mb-2 text-2xl sm:text-4xl text-center font-bold text-white">Contact</div>
    <form className= "max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
    
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">Email</label>
      <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" type="email" id="email" {...register("email")}/>
      {errors.email?.message && <p>{errors.email.message}</p>}
    
    </div>  

      <div className="mb-5">

      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="textarea">Message</label>
      <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" type="textarea" id="textarea" {...register("message")} />
      {errors.message?.message && <p>{errors.message.message}</p>}

      </div>


      <button className="text-white container bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  type="submit">Submit</button>

    </form>
    </>
  )
}

export default ContactSection;
