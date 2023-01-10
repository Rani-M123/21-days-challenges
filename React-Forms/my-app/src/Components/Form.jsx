import React from 'react'
import { useState } from 'react';
import {useForm} from "react-hook-form"
import './Form'

const Form = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const [userinfo,setUserinfo]=useState()
    const onSubmit=(data)=>{
        setUserinfo(data);
        console.log(data)
    }
    console.log(errors)
  return (
    <div className='container'>
        <center>
            <pre>{JSON.stringify(userinfo)}</pre>
            <form  autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <h1>RegisterForm</h1>
                <label>UserName</label><br/><br/>
                <input  className="demo" type="text" name="username" placeholder='enter username' {...register('username',{required:"username is required",pattern:{value:"[a-z]{1,15}",message:"username is not matched"}})}/><br/><br/>
                <p>{errors.username?.message}</p>
                <label>Email</label><br/><br/>
                <input  className="demo" type="email" name="email" placeholder='enter eamil'{...register('email',{required:"Useremail is required",pattern:{value:"/^/s+@$/i",message:" this is not valid email "}})}/><br/><br/>
                <p>{errors.email?.message}</p>
                <label>Password</label><br/><br/>
                <input className="demo"  type="password" name="password" placeholder='enter password' {...register('password',{required:"Userpassword is required",minLength:{value:5,message:"at least 5 char"},maxLength:{value:10,message:"cannot exced more than 10char"}})}/><br/><br/>
                <p>{errors.password?.message}</p>
                <input type="submit" name="submit"/>
            </form>
        </center>
    </div>
  )
}
export default Form