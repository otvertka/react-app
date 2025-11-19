// 
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  const userSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  if (authUser) {
    return (
      <div className="flex flex-col items-center mt-4 text-center">
        <p className="text-gray-700 text-sm md:text-base">
          Signed in as <span className="font-semibold">{authUser.email}</span>
        </p>
        <button
          onClick={userSignOut}
          className="mt-2 px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-all duration-200"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="text-center mt-4 text-gray-500 text-sm md:text-base">
      Nicht angemeldet
    </div>
  );
};

export default AuthDetails;
