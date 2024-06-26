import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import styles from "../../styles/style";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios"
import serverUrl from "../../server"
const Signup = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [visible,setVisible]=useState(false)
    const [name,setName]=useState("")
    const [avatar,setAvatar]=useState(null)

    
    const handleFileInputChange=(e)=>{
        const file=e.target.files[0]
        setAvatar(file);
    }
   
    const handleSubmit = async(e)=>{
      e.preventDefault()
     const config={headers:{"Content-Type":"multipart/form-data"}}
      const newForm=new FormData()
      newForm.append("file",avatar)
      newForm.append("name",name)
      newForm.append("email",email)
      newForm.append("password",password)
   
      axios.post(`${serverUrl}/user/create-user`,newForm,config)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    }




  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-centre py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                SIGN-UP
            </h2>
        </div>
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                <form className='space-y-6' onSubmit={handleSubmit}>
                <div> 
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Your Name</label>
                        <div className='mt-1'>
                            <input type='text' name='text' autoComplete='name' required value={name} onChange={(e)=>setName(e.target.value)}
                             className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div> 
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>E-mail address</label>
                        <div className='mt-1'>
                            <input type='email' name='email' autoComplete='email' required value={email} onChange={(e)=>setEmail(e.target.value)}
                             className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className='relative mt-2'> 
                        <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                        <div className='mt-1'>
                            <input type={visible? "text":"password"} name="password"  required value={password} onChange={(e)=>setPassword(e.target.value)}
                             className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {visible? (<AiOutlineEye
                             className='absolute right-2 top-8 cursor-pointer'
                             size={25} 

                             onClick={() => setVisible(false)}
                             />) :(<AiOutlineEyeInvisible
                             className='absolute right-2 top-8 cursor-pointer'
                             size={25} 
                             onClick={() => setVisible(true)}
                             /> )}
                             
                        </div>
                    </div>
                    <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href=".forgot-password"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>






            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>Already have an account</h4>
              <Link to="/login" className="text-blue-600 pl-2">
                Sign In Now!
              </Link>
            </div>
                </form>
            </div>
        </div>    
    </div>
  )
}

export default Signup
//componets se pages folder 