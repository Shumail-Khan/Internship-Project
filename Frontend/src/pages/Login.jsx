import React, { useState } from 'react'

const Login = () => {
  const [state,SetState] = useState('Signup')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')

  const onSubmitHandler = async(e)=>{
    e.preventDefault()


  }
  return (
   <form className='min-h-[80vh] flex items-center' onSubmit={()=>{
    onSubmitHandler()
   }}> 

   <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] border rounded-xl text-zinc-600 text-sm shdow-lg'>
    <p className='text-2xl font-semibold'>{state == 'Signup' ? 'CreateAccount' : 'Login'}</p>
    <p>Please {state == 'Signup' ? 'Signup' : 'Login'} to book appointment</p>
    {
      state === 'Signup' && <div className='w-full'>
      <p>Full Name</p>
      <input 
      className='border border-zinc-300 rounded w-full p-2 mt-1'
      type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)} required/>
    </div>
    }
    
    <div className='w-full'>
      <p>Email</p>
      <input 
      className='border border-zinc-300 rounded w-full p-2 mt-1'
      type="email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)} required/>
    </div>
    <div className='w-full'>
      <p>Password</p>
      <input 
      className='border border-zinc-300 rounded w-full p-2 mt-1'
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)} required/>
    </div>
    <button className='bg-gray-600 text-white w-full py-2 rounded-md text-base '>{state == 'Signup' ? 'Create Account' : 'Login'}</button>
    {
      state === 'Signup' 
      ? <p>Already have an account? <span onClick={()=>SetState('Login')}  className='text-gray-700  underline cursor-pointer'>Login here</span></p>
      : <p>Create a New Account? <span  onClick={()=>SetState('Signup')} className='text-gray-700  underline cursor-pointer'>Click Here</span></p>
    }
   </div>


   </form>
  )
}

export default Login