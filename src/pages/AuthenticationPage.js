import React from 'react';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import AuthDetails from '../components/auth/AuthDetails';

const AuthenticationPage = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-center gap-8 px-5'>
        <SignIn />
        <SignUp />
      </div>
      <AuthDetails />
    </>
  );
};

export default AuthenticationPage;