import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  const [isAuthenticated, setIsAutheticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        // setIsAutheticated(true);
      } else {
        setAuthUser(null);
        // setIsAutheticated(false);
      }
    });

    return () => {
      listen();
    };
  }, []);

  useEffect(() => {
    // Добавляем проверку на успешную авторизацию перед переходом
    if (isAuthenticated) {
      navigate('/myaccount');
    }
  }, [isAuthenticated, navigate]);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Вышел successful');
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}> Sign Out</button>
        </>
      ) : (
        <p>Signed Up</p>
      )}
    </div>
  );
};

export default AuthDetails;
