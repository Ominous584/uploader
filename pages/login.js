import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/globals.css'

import Script from 'next/script'
import { useEffect, useState } from 'react'
//import banner1 from '@/pages/images/banner.png'
import Link from 'next/link';
import { RxHamburgerMenu, RxWidth } from 'react-icons/rx';
import { VscAccount } from "react-icons/vsc";
import { CiLogout, CiSettings, CiUser } from "react-icons/ci";
const inter = Inter({ subsets: ['latin'] })
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

 var sub = document.getElementById("log");



 sub.addEventListener('click', sign);
 function sign(){
    var username = document.getElementById("user").value;
  var rf = ref(db, "People/" + username)
  console.log("clicked!")
  var nae = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  onValue(rf, (snapshot) => {
    
        const childKey = snapshot.child("password").val();
        const childData = snapshot.val();
        console.log(childKey)
        if (pass == childKey){
          localStorage.setItem('log', nae)
          //window.open('profile.html', '_self')
          console.log("........permitted")  
          localStorage.setItem('user', username)    
        }
        else{
          console.log(pass)
          console.log("sorry but the password is incorrect")
        }
        
  }, {
    onlyOnce: false
  });

  
  
 }
    })}

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
            <div className='navbar'>
            <div className='logo'>Dysonos</div>
            <div className='nav-links'>
           
              <Link href='articles' className='del safe'>Crowd articles</Link>
              <Link href='#' className='del safe'>About</Link>
              <Link href='#' className='del safe'>Contact</Link>
              <Link href='login' className='del alt' id='logol'>Login</Link>
              <Link href='signup' className='del alt' id='logol1'>Sign up</Link>
              
            </div>
            <div id='user' className='user'>
              <img className='shower' id='imm'></img>
              <div className='drop' >
                <h1 id='abaca'></h1>
                <hr></hr>
                <Link href='profile' className='droper'><CiUser  /> My profile</Link>
                <hr></hr>
                <Link href='settings' className='droper'><CiSettings /> Settings</Link>
                <hr></hr>
                <Link href='logout' className='droper'><CiLogout /> Logout</Link>
                
                </div>         
              </div>
            <div className='hamburger'>
              <button className='ham' onClick={toggle} style={{ RxWidth: '10vw', fontSize: '9vw', marginLeft: '55vw', marginBottom: '4vw', border: 'none', width: '13vw'}} ><RxHamburgerMenu  /></button>
            </div>
            <div className='menu' style={{ display: showMe ? "block" : "none" }}>
              <div className='profo'>
                <img className='shower2' id='imm2'></img>
                <div className='nama'><h1 id='nama' ></h1></div>
              </div>
              
              <Link href='articles' className='del1 safe'>Articles</Link>
              <Link href='#' className='del1  safe'>About</Link>
              <Link href='#' className='del1 safe'>Contact</Link>
              <Link href='login' className='del1 alt'>Login</Link>
              <Link href='signup' className='del1 alt'>Sign up</Link>
              
            </div>
          </div>
        <div className='contain'>
        <h1 className='login'>Login</h1>
        <input type='text' placeholder='Username' className='input' id='user'/>
        <input type='password' placeholder='Password' className='input' id='pass'/>
        <button className='buttonlog' id='log'>Login</button>
        <p className='dont'>Don't have an account? <Link href='signup' className='link'>Sign up</Link></p>
        </div>
        </main>
    )
}