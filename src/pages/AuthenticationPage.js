// import { json, redirect } from 'react-router-dom';
// import AuthForm from '../components/AuthForm';

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

// import { json, redirect } from 'react-router-dom';
// import AuthForm from '../components/AuthForm';

// import React from 'react';

// const AuthenticationPage = () => {
//   return <AuthForm />;
// };

// export default AuthenticationPage;

// export async function action({ request }) {
//   const searchParams = new URL(request.url).searchParams;
//   const mode = searchParams.get('mode') || 'login';

//   const data = await request.formData();
//   const authData = {
//     email: data.get('email'),
//     password: data.get('password'),
//   };

//   const response = await fetch('http://localhost:8080/' + mode, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(authData),
//   });

//   if (response.status === 422 || response.status === 401) {
//     return response;
//   }
//   if (!response.ok) {
//     throw json(
//       { message: 'Не получается аутентифицировать пользователя' },
//       { status: 500 }
//     );
//   }
//   //
//   return redirect('/');
// }
