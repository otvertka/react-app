import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
// import { useNavigate } from 'react-router-dom';

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  //   const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        // navigate('/myaccaunt');
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('sign out successful');
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In assoul ${authUser.email}`}</p>
          <button onClick={userSignOut}> Sign Out</button>
        </>
      ) : (
        <p>Signed Up</p>
      )}
    </div>
  );
};

export default AuthDetails;
