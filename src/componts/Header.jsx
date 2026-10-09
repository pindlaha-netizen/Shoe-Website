import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaShoppingCart,
} from "react-icons/fa";

import { AiOutlineLogin } from "react-icons/ai";
import { SlLogin } from "react-icons/sl";

import userA from "./usercontext";
import { CartContext } from "./Cartcontext";

const Header = () => {
  const user = useContext(userA);

  const { cartCount } = useContext(CartContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white font-sans shadow-sm">

      {/* DESKTOP */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}

          <div className="flex shrink-0 items-center">
            <Link
              to="/"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="/footerimage.png"
                alt="Brand Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* NAVIGATION */}

          <nav className="hidden items-center space-x-8 lg:flex">

            <Link
              to="/"
              className="text-[15px] font-medium text-gray-600 hover:text-black"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-[15px] font-medium text-gray-600 hover:text-black"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="text-[15px] font-medium text-gray-600 hover:text-black"
            >
              Contact Us
            </Link>

          </nav>

          {/* RIGHT SIDE */}

          <div className="hidden items-center space-x-5 lg:flex">

            {/* USER */}

            {user.username && (
              <span className="text-sm font-semibold text-[#FF4633]">
                Hi, {user.username}
              </span>
            )}

            {/* CART */}

            <Link
              to="/cart"
              className="group relative flex items-center gap-2 text-[15px] font-medium text-gray-600 transition hover:text-[#FF4633]"
            >
              <FaShoppingCart
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              <span>Cart</span>

              {cartCount > 0 && (
                <span
                  key={cartCount}
                  className="
                    absolute
                    -right-3
                    -top-3
                    flex
                    h-5
                    min-w-5
                    animate-[cartBadge_0.3s_ease-out]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FF4633]
                    px-1
                    text-[10px]
                    font-bold
                    text-white
                  "
                >
                  {cartCount}
                </span>
              )}

            </Link>

            {/* DIVIDER */}

            <div className="h-6 w-px bg-gray-200" />

            {/* LOGIN */}

            {!user.username ? (
              <Link
                to="/login"
                className="flex items-center gap-2 text-[15px] font-medium text-gray-600 hover:text-black"
              >
                <AiOutlineLogin className="h-5 w-5 text-gray-400" />
                Login
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => {
                  Object.assign(user, {
                    username: "",
                  });
                }}
                className="flex items-center gap-2 text-[15px] font-medium text-gray-600 hover:text-black"
              >
                <AiOutlineLogin className="h-5 w-5 text-gray-400" />
                Logout
              </button>
            )}

            {/* REGISTER */}

            <Link
              to="/register"
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-black
                px-5
                py-2.5
                text-[15px]
                font-medium
                text-white
                transition
                hover:bg-gray-800
              "
            >
              <SlLogin className="h-4 w-4" />
              Register
            </Link>

          </div>

          {/* MOBILE */}

          <div className="flex items-center lg:hidden">

            <Link
              to="/cart"
              className="relative mr-3 text-gray-700"
            >
              <FaShoppingCart className="h-5 w-5" />

              {cartCount > 0 && (
                <span
                  className="
                    absolute
                    -right-2
                    -top-2
                    flex
                    h-4
                    min-w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FF4633]
                    px-1
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 text-gray-600"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>

          </div>

        </div>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`
          overflow-hidden
          border-t
          border-gray-100
          bg-white
          transition-all
          duration-300
          lg:hidden

          ${
            isMenuOpen
              ? "max-h-screen border-b shadow-lg"
              : "max-h-0"
          }
        `}
      >

        <div className="space-y-2 px-4 pb-6 pt-4">

          {user.username && (
            <div className="px-3 py-2 font-semibold text-[#FF4633]">
              Hello, {user.username}
            </div>
          )}

          <Link
            to="/"
            onClick={toggleMenu}
            className="block rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={toggleMenu}
            className="block rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Contact Us
          </Link>

          <div className="my-4 border-t border-gray-100" />

          <Link
            to="/cart"
            onClick={toggleMenu}
            className="flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            <FaShoppingCart className="h-5 w-5 text-gray-400" />

            <span>Cart</span>

            {cartCount > 0 && (
              <span className="rounded-full bg-[#FF4633] px-2 py-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {!user.username ? (
            <Link
              to="/login"
              onClick={toggleMenu}
              className="flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              <AiOutlineLogin className="h-5 w-5 text-gray-400" />
              Login
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => {
                Object.assign(user, {
                  username: "",
                });

                toggleMenu();
              }}
              className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-left text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              <AiOutlineLogin className="h-5 w-5 text-gray-400" />
              Logout
            </button>
          )}

          <Link
            to="/register"
            onClick={toggleMenu}
            className="
              mt-4
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              bg-black
              px-4
              py-3
              text-base
              font-medium
              text-white
              hover:bg-gray-800
            "
          >
            <SlLogin className="h-5 w-5" />
            Register
          </Link>

        </div>
      </div>

      <style>{`
        @keyframes cartBadge {
          0% {
            transform: scale(0.4);
            opacity: 0;
          }

          60% {
            transform: scale(1.3);
            opacity: 1;
          }

          100% {
            transform: scale(1);
          }
        }
      `}</style>

    </header>
  );
};

export default Header;