"use client";

import Link from "next/link";
import headerClassNames from "./HeaderClassNames";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useAppDispatch } from "@/hooks/storeHook";
import { toggleCart } from "@/redux/features/cartSlice";
import useCartTotals from "@/hooks/useCartTotals";
import Signup from "../Signup/Signup";
import { useState } from "react";
import { signIn } from 'next-auth/react';

const Header = () => {
  const {
    header,
    container,
    li,
    logoContainer,
    link,
    logo,
    nav,
    ul,
    orders,
    contactUs,
    signupBtn,
    signinBtn,
    logoutBtn,
    cart,
  } = headerClassNames;

  const { totalQuantity } = useCartTotals();
  const [isSignUpFormOpen, setIsSignupFormOpen] = useState(false);

  const dispatch = useAppDispatch();

  const toggleForm = () => {
    setIsSignupFormOpen(!isSignUpFormOpen);
  };

  const signinHandler = async () => {
    try {
      await signIn();

    } catch (error) {
      console.log("SIGN IN ERROR", error);
    }

  };

  return (
    <>
      <Signup 
       isSignUpFormOpen={isSignUpFormOpen}
       toggleForm={toggleForm} />
      <header className={header}>
        <div className={container}>
          <Link href="/" className={logoContainer}>
            <h1 className={logo}>Logo</h1>
          </Link>

          <nav className={nav}>
            <ul className={ul}>
              <li>
                <button onClick={() => dispatch(toggleCart())} className={link}>
                  <span>
                    Cart
                    <AiOutlineShoppingCart className="inline-block text-3xl" />
                  </span>
                  <div className={cart}>{totalQuantity}</div>
                </button>
              </li>

              <li className="flex items-center justify-center h-7">
                <Link href="/orders" className={orders}>
                  Orders
                </Link>
                <button className={logoutBtn}>Logout</button>
                <button onClick={toggleForm} className={signupBtn}>
                  Sign Up
                </button>
                <button 
                onClick={ signinHandler }
                className={signinBtn}>
                  Sign In
                  <FcGoogle
                    style={{
                      fontSize: "25px",
                      cursor: "pointer",
                      marginLeft: "12px",
                    }}
                    className={link}
                  />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
