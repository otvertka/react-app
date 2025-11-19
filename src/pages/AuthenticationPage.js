import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import AuthDetails from "../components/auth/AuthDetails";

const AuthenticationPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 px-6">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-[480px]">
        <AnimatePresence mode="wait">
          {isSignIn ? (
            <motion.div
              key="signin"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.3 }}
            >
              <SignIn />
              <p className="text-center mt-4 text-sm text-gray-600">
                Kein Konto?{" "}
                <button
                  onClick={() => setIsSignIn(false)}
                  className="text-orange-600 font-semibold hover:underline"
                >
                  Registrieren
                </button>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <SignUp />
              <p className="text-center mt-4 text-sm text-gray-600">
                Bereits ein Konto?{" "}
                <button
                  onClick={() => setIsSignIn(true)}
                  className="text-orange-600 font-semibold hover:underline"
                >
                  Anmelden
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6">
        <AuthDetails />
      </div>
    </div>
  );
};

export default AuthenticationPage;
