import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/globals.css'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'
//import banner1 from '@/pages/images/banner.png'
import Link from 'next/link';
import { RxHamburgerMenu, RxWidth } from 'react-icons/rx';
import { VscAccount } from "react-icons/vsc";
import { CiLogout, CiSettings, CiUser } from "react-icons/ci";
const inter = Inter({ subsets: ['latin'] })
// Import the functions you need from the SDKs you need
import  {initializeApp}  from 'firebase/app';
import { getDatabase, ref, onValue, get, child, orderByChild, query, limitToLast } from "firebase/database";
//import { getStorage, uploadBytes, ref as Sref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
import { getStorage, uploadBytes, ref as Sref, getDownloadURL } from "firebase/storage";


/*const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}*/


  // Import the functions you need from the SDKs you need
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const storage = getStorage();
const db = getDatabase(app);


export default function Home() {
    if (typeof window !== "undefined") {
        console.log("window is defined")
        
          const router = useRouter()
          const { pid } = router.query
          console.log("window is defined")
          console.log(pid)}

        const [showMe, setShowMe] = useState(false);
        function toggle(){
          setShowMe(!showMe);
          document.getElementById('nama').innerHTML = user
          document.getElementById('imm').style.display = 'none'
        }
        return (
       
          <main >
                <div id='progressbar'></div>
                <div id='scrollPath'></div>
          
      
      
      
              
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
                <div className='deez'>
          <h1 className='techz'>Technology Blogs</h1>
          
        </div>
        
        
              
      
        </main>
         
        )
      }
      