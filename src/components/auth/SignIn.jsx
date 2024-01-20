import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/myaccaunt');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='sign-in-container'>
      <form
        onSubmit={signIn}
        className='flex flex-col w-full max-w-[448px] max-h-[1080px]  py-20 border-solid border-2 border-black'>
        <h1 className='text-3xl font-bold text-center mb-4'>Log In</h1>
        <input
          className='m-3 bg-gray-200'
          type='email'
          placeholder='Enter you email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='m-3 bg-gray-200'
          type='password'
          placeholder='Enter you password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type='submit'
          className='w-44 h-12 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white hover:scale-110 transition-all duration-300 m-3'>
          Log in to your account
        </button>
      </form>
    </div>
  );
};

export default SignIn;
