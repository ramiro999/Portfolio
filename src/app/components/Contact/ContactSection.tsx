"use client"
import { useState, useForm } from "react-hook-form";
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

  const onSubmit: SubmitHandle<Inputs> = (data) => console.log(data)
  

  return(
    <>
    <div className="container mt-4 mb-2 text-2xl sm:text-4xl text-center font-bold text-white">Contact</div>
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <label className="container mt-4 mb-2 text-2xl sm:text-4xl text-center font-bold text-white" htmlFor="email">Email</label>
      <input type="email" id="email" {...register("email")}/>
      {errors.email?.message && <p>{errors.email.message}</p>}

      <label className="container mt-4 mb-2 text-2xl sm:text-4xl text-center font-bold text-white" htmlFor="textarea">Message</label>
      <input type="textarea" id="textarea" {...register("message")} />
      {errors.message?.message && <p>{errors.message.message}</p>}


      <button className="container mt-4 mb-2 text-2xl sm:text-4xl text-center font-bold text-white"  type="submit">Submit</button>

    </form>
    </>
  )
}

export default ContactSection;
