import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/globals.css'

import Script from 'next/script'
import React, { useState } from 'react';
//import banner1 from '@/pages/images/banner.png'
import Link from 'next/link';
import { RxHamburgerMenu, RxWidth } from 'react-icons/rx';
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import  {initializeApp}  from 'firebase/app';
import { getDatabase, ref, onValue, get, child, set } from "firebase/database";
//import { getStorage, uploadBytes, ref as Sref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
import { getStorage, uploadBytes, ref as Sref, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOhWfbhSdOhUvJAw2qF3qZaCGpKdr6Rgg",
  authDomain: "blog-5ec50.firebaseapp.com",
  projectId: "blog-5ec50",
  storageBucket: "blog-5ec50.appspot.com",
  messagingSenderId: "973166205545",
  appId: "1:973166205545:web:8ff6a22e3b97bf7cf3e0f8",
  measurementId: "G-HVFHTVQKYS"
};

const app = initializeApp(firebaseConfig);


const db = getDatabase(app)

if (typeof window !== "undefined") {
    window.addEventListener('DOMContentLoaded', (event) => {
    console.log("window is defined")
    document.getElementById("signup").onclick = function(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var user = document.getElementById("username").value;

var rf1 = ref(db, "People/" + name)
set(rf1, {
    username:user,
    name: name,
    email:email,
    password:pass
});

localStorage.setItem("user", name)


var rf3 = ref(db, "People/" + name + "/posts")
set(rf3, {
  number: 0
})
    }
})
}

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }

export default function articles(){
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
    }
    
    return (
        <main>
            <header>
              <div className='navbar'>
                <div className='logo'><Link href='/'  className='logo'>Home</Link></div>
                <div className='nav-links'>
                  <Link href='#' className='del safe'>Home</Link>
                  <Link href='articles' className='del safe'>Crowd articles</Link>
                  <Link href='#' className='del safe'>About</Link>
                  <Link href='#' className='del safe'>Contact</Link>
                  <Link href='#' className='del alt'>Login</Link>
                  <Link href='#' className='del alt'>Sign up</Link>
                  <Link href='#' className='del prof'>Profile</Link>
                </div>
                <div className='hamburger'>
                  <button className='ham' onClick={toggle} style={{ RxWidth: '10vw', fontSize: '9vw', marginLeft: '55vw', marginBottom: '4vw', border: 'none', width: '13vw'}}><RxHamburgerMenu style={{RxWidth: '10vw', fontSize: '9vw', marginLeft: '55vw', marginBottom: '4vw'}}/></button>
                </div>
                <div className='menu' style={{display: showMe?"block":"none"}}>
                  <Link href='#' className='del1 v1 safe'>Home</Link>
                  <Link href='articles' className='del1 safe'>Articles</Link>
                  <Link href='#' className='del1  safe'>About</Link>
                  <Link href='#' className='del1 safe'>Contact</Link>
                  <Link href='#' className='del1 alt'>Login</Link>
                  <Link href='#' className='del1 alt'>Sign up</Link>
                  <Link href='#' className='del1 prof'>Profile</Link>
                </div>
              </div>
            </header>
        
        

        <div className='contain'>
        <h1 className='login'>Signup</h1>
        <input type='text' placeholder='Name' className='input' id='name'/>
        <input type='text' placeholder='Username' className='input' id='username'/>
        <input type='text' placeholder='Email' className='input' id='email'/>
        <input type='password' placeholder='Password' className='input' id='password'/>
        <button className='buttonlog' id='signup'>Signup</button>
        <p className='dont'>Already have an account? <Link href='login' className='link'>Login</Link></p>
        </div>
        </main>
    )
}