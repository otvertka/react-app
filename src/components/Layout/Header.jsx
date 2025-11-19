import { useContext, useEffect, useRef, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import MainSVGLogo from "../UI/svg-components/MainSVGLogo";
import { NavLink, useNavigate } from "react-router-dom";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgressContext";
import { motion, useAnimation,AnimatePresence } from "framer-motion";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const [authUser, setAuthUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  const navigate = useNavigate();
  const headerRef = useRef(null);

  const totalCartItems = cartCtx.items.reduce((t, i) => t + i.quantity, 0);
  const totalFavoritesItems = cartCtx.favorites.length;

  const cartControls = useAnimation();
  const favControls = useAnimation();

  const navLinks = [
    { path: "/tradein", label: "Trade In" },
    { path: "/bikes", label: "Fahrräder" },
    { path: "/parts", label: "Fahrradteile" },
    { path: "/equipments", label: "Bekleidung" },
    { path: "/accessorries", label: "Fahrradzubehör" },
    { path: "/heimtrainer", label: "Heimtrainer" },
  ];

  // Firebase Auth
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setAuthUser(u));
    return () => unsub();
  }, []);

  // Shake анимация корзины
  useEffect(() => {
    if (totalCartItems > 0) {
      cartControls.start({
        scale: [1, 1.4, 0.9, 1.2, 1],
        rotate: [0, -15, 15, -8, 0],
        color: ["#FFFFFF", "#F57520", "#F57520", "#FFFFFF"],
        transition: { duration: 0.7, ease: "easeInOut" },
      });
    }
  }, [totalCartItems, cartControls]);

  // Shake анимация избранного
  useEffect(() => {
    if (totalFavoritesItems > 0) {
      favControls.start({
        scale: [1, 1.35, 0.9, 1.1, 1],
        rotate: [0, -10, 10, -5, 0],
        color: ["#FFFFFF", "#F57520", "#F57520", "#FFFFFF"],
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    }
  }, [totalFavoritesItems, favControls]);

  // Закрытие меню профиля по клику вне
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest(".user-menu") && !e.target.closest(".user-button")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Закрытие мобильного меню при ресайзе
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && burgerOpen) setBurgerOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [burgerOpen]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Sign out error:", err);
    } finally {
      setMenuOpen(false);
      navigate("/");
    }
  };

  return (
    <>
      {/* Header */}
      <header
        className="fixed top-0 left-0 w-full z-50 bg-black px-4 md:px-10 py-4 flex items-center justify-between"
        ref={headerRef}
      >
        {/* Logo */}
        <NavLink to="/">
          <MainSVGLogo />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex gap-8 text-sm text-white">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className="inline-block transform transition-all duration-200 hover:scale-110 hover:text-orange-500"
                  style={({ isActive }) => ({ color: isActive ? "#F57520" : "" })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-4 text-white">
          {/* Profile */}
          <div className="relative user-menu">
            {authUser ? (
              <button
                onClick={() => setMenuOpen((p) => !p)}
                className="user-button p-1 rounded transition-transform hover:scale-110"
                aria-label="Open user menu"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </button>
            ) : (
              <NavLink
                to="/auth?mode=login"
                className="p-1 rounded transition-transform hover:scale-110"
                aria-label="Login"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </NavLink>
            )}

            {/* Dropdown */}
            {authUser && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={menuOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.14 }}
                className={`absolute right-0 mt-2 w-44 bg-white text-black rounded-xl shadow-lg border z-50 ${
                  menuOpen ? "" : "pointer-events-none"
                }`}
              >
                <p className="px-4 py-2 text-sm border-b border-gray-300 truncate">{authUser.email}</p>
                <NavLink to="/myaccaunt" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100 transition-all">
                  Мой аккаунт
                </NavLink>
                <button onClick={handleSignOut} className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-all text-red-600">
                  Выйти
                </button>
              </motion.div>
            )}
          </div>

          {/* Favorites */}
          <NavLink to="/favorites" className="relative inline-block" aria-label="Favorites">
            <motion.svg animate={favControls} initial={{ scale: 1, color: "#FFFFFF" }} whileHover={{ scale: 1.1 }} className="w-6 h-6 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <motion.path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </motion.svg>
            {totalFavoritesItems > 0 && <span className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-xs">{totalFavoritesItems}</span>}
          </NavLink>

          {/* Cart */}
          <NavLink to="/cart" className="relative inline-block" aria-label="Cart">
            <motion.svg animate={cartControls} initial={{ scale: 1, color: "#FFFFFF" }} whileHover={{ scale: 1.1 }} className="w-6 h-6 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <motion.path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </motion.svg>
            {totalCartItems > 0 && <span className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-xs">{totalCartItems}</span>}
          </NavLink>

          {/* Burger */}
          <button className="md:hidden p-1 ml-1" onClick={() => setBurgerOpen((p) => !p)} aria-label="Toggle menu">
            {burgerOpen ? (
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line y1="1.25" x2="32" y2="1.25" stroke="white" />
                <line x1="8" y1="10.25" x2="32" y2="10.25" stroke="white" />
                <line x1="8" y1="19.25" x2="32" y2="19.25" stroke="white" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
  {burgerOpen && (
    <motion.nav
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="md:hidden fixed top-[64px] left-0 w-full bg-black text-white z-40 overflow-hidden flex flex-col items-center"
    >
      <ul className="flex flex-col items-center gap-4 py-4">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              onClick={() => setBurgerOpen(false)}
              className="text-lg inline-block transform transition-all duration-200 hover:scale-110 hover:text-orange-500"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  )}
</AnimatePresence>

      {/* Отступ для контента под хедер */}
      <div className="h-[64px] md:h-[64px]"></div>
    </>
  );
};

export default Header;
