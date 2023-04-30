import Head from 'next/head'
import Image from 'next/image'

//import styles from '@/styles/globals.css'

import Script from 'next/script'
import { useEffect, useState } from 'react'
//import banner1 from '@/pages/images/banner.png'
import Link from 'next/link';
import { RxHamburgerMenu, RxWidth } from 'react-icons/rx';
import { VscAccount } from "react-icons/vsc";
import { CiLogout, CiSettings, CiUser } from "react-icons/ci";
import { BiTrendingUp } from "react-icons/bi";
import { SlLike } from "react-icons/sl";


if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', (event) => {
    
  var user = localStorage.getItem("user")
  

  if (user == null || user == undefined || user == "") {
    document.getElementById("user").style.display = "none"
    console.log("not logged in")
    document.getElementById('starter').addEventListener('click', function() {
      window.open("signup", '_self')
    })
    
  } else {
    console.log("logged in + " + user)
    document.getElementById("user").style.display = "block"
    document.getElementById("user").innerHTML = user
    document.getElementById('starter').addEventListener('click', function() {
      window.open("posts", '_self')
    }
    )
    document.getElementById('logol').style.display = "none"
    document.getElementById('logol1').style.display = "none"
  }
  })}


export default function Home() {

  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
    
    document.getElementById('imm').style.display = 'none'
  }
  return (
 
    <main >
          
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
              
              
              <Link href='editor' className='del1  safe'>Editor</Link>
              
              <Link href='profile' className='del1 alt'>Profile</Link>
              <Link href='about' className='del1 alt'>About</Link>
              
            </div>
          </div>

          <div className='my_about'>
            <h1 className='my_about_head'>This website has been created by Aditya Giri</h1>
          </div>

  </main>

    
      
    
  )
}
