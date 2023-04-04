import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/globals.css'

import Script from 'next/script'
import React, { useState } from 'react';
//import banner1 from '@/pages/images/banner.png'
import Link from 'next/link';
import { RxHamburgerMenu, RxWidth } from 'react-icons/rx';

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
                <div className='logo' >Dysonos</div>
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
        <div>
        <h1>Articles</h1>
        </div>
        </main>
    )
}