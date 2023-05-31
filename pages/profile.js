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
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiTrendingUp, BiSearchAlt2 } from "react-icons/bi";
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
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', (event) => {
      var user = localStorage.getItem('name')
      console.log(user)
        document.getElementById('edit_about').style.visibility = "hidden"
        document.getElementById('create_about').addEventListener('click', function(){
          document.getElementById("edit_about").style.visibility = "visible"
        })
        document.getElementById('about_close').addEventListener('click', function(){
          document.getElementById("edit_about").style.visibility = "hidden"
        })
        document.getElementById('save_about').addEventListener('click', function(){
          var rf = ref(db, "People/" + user + "/about")
          set(rf, document.getElementById('about_text').value)
          document.getElementById("edit_about").style.visibility = "hidden"
        }) 
        console.log(user)
        var rf_about = ref(db, "People/" + user + "/about")
        onValue(rf_about, (snapshot) => {
          if (snapshot.exists()){
            console.log(snapshot.val())
            document.getElementById('create_about').style.display = "none"
            var about = document.createElement('p')
            about.textContent = snapshot.val()
            about.style.fontSize = '1.5vw'
            document.getElementById('aboutdeez').appendChild(about)
          } else{
            console.log("No data available");
          }
        })
        var rf10 = ref(db, "People/" + user)
        let username
        var imma = "https://ui-avatars.com/api/?name=" + user
        document.getElementById('profile_pic').src = imma
        onValue(rf10, (snapshot) => {
            const childKey = snapshot.child("username").val();
            username = childKey
            document.getElementById('profname').innerHTML = localStorage.getItem('name')
            document.getElementById("search_loader").style.display = "none"
        })

        var rfpost = ref(db, "People/" + user + "/posts/list")
        onValue(rfpost, (snapshot) => {
          console.log(snapshot.val())
          snapshot.forEach((childSnapshot) => {
            console.log(childSnapshot.val())
          if(snapshot.val() != null || snapshot.val() != undefined || snapshot.val() != "number"){
            console.log("the value was " + childSnapshot.child("title").val())
            document.getElementById('noner').style.display = "none"
            const childKey = childSnapshot.child("title").val();
            var lil = document.createElement('li')
            lil.classList.add("profile_lil")
            lil.textContent = childKey
            lil.addEventListener('click', () => {
              window.open('posts/' + childKey, '_self')
            })
            console.log("first load ")
            document.getElementById('post_display').appendChild(lil)
          }
          if(snapshot.val() == null){
            document.getElementById('noner').style.display = "block"
          }
          
        })
      })

 
 
  /*onValue(rf, (snapshot) => {
    
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
  })

  
  
 }*/
    })}

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }

  
export default function useArticles(){
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
    }

    if (typeof window !== "undefined") {
    
      if  (localStorage.hasOwnProperty('name')) {
        console.log('name exists')
        document.getElementById('logol').style.display = 'none'
        document.getElementById('logol1').style.display = 'none'
        document.getElementById('imm').src = "https://ui-avatars.com/api/?name=" + localStorage.getItem("name") + "rounded=true&size=50/?background=ffffff"
        document.getElementById('account_img').src = "https://ui-avatars.com/api/?name=" + localStorage.getItem("name") + "rounded=true&size=50/?background=ffffff"
      } else {
        console.log('name does not exist')
        document.getElementById('imm').style.display = 'none'
      }
      document.getElementById("searchbar").addEventListener('keypress', function(e) {
        if (e.key == "Enter"){
          var search = document.getElementById("searchbar").value
          window.open("search" + "?name=" + search, '_self')
        }
      })
      }
    return (
        <main>
            <div className='navbar _not' id='navbar'>
            <div className='logo'>Dysonos</div>
            <div className='searchbar'>
              <input type='text'id='searchbar' placeholder='Search'></input>
              <button className='search_type'><BiSearchAlt2 /></button>
            </div>
            <div className='nav-links'>
           
              
              <Link href='login' className='del alt' id='logol' >Login</Link>
              <Link href='signup' className='del alt' id='logol1'>Sign up</Link>
              
            </div>
            <div id='user' className='user'>
              <img className='shower' id='imm'></img>
              <div className='drop' >
                <div id='accounter'>
                <img id='account_img' className='account_img'></img><h1 className='account_name' id='account_name'></h1></div>
                <hr></hr>
                <Link href='profile' className='droper'><CiUser  /> My profile</Link>
                <hr></hr>
                <Link href='settings' className='droper'><CiSettings /> Settings</Link>
                <hr></hr>
                <Link href='logout' className='droper'><CiLogout /> Logout</Link>
                
                </div>         
              </div>
            <div className='hamburger'>
              <button className='ham' onClick={toggle}><RxHamburgerMenu  /></button>
            </div>
            <div className='menu' style={{ display: showMe ? "block" : "none" }}>
              <Link href='/' className='del1  safe'>Read</Link>
              <Link href='editor' className='del1 alt'>Write</Link>
              <Link href='profile' className='del1 alt'>Profile</Link>  
            </div>
          </div>

          <div className='search_loader' id='search_loader'>
            <div className='search_loader_box'>
                <div className='search_loader_box1'></div>
                <div className='search_loader_box2'></div>
                <div className='search_loader_box3'></div>
            </div>
          </div>

          <div className='profiledeez'>
          <img id='profile_pic' className='profile_pic_prof'></img>
            <h1 className='profname' id='profname'>Your name</h1>
            <hr></hr>
            <div className='postsdeez'>
            <h1>Posts</h1>
            <ul id='post_display'>
              <div id='noner'>
              <li id='' className='noner_profile'>You dont have any posts.</li>
              <a href='editor'>Create a post.</a>
              </div>
            </ul>
            </div>

            <div className='aboutdeez' id='aboutdeez'>
            <h1>About</h1>
            <button id='create_about' className='create_about_bt'> Create about section</button>
            </div>

            <div className='edit_about' id='edit_about'>
              <h1 className='about_heading'>Write about yourself.</h1>
              <AiOutlineCloseCircle className='about_close' id='about_close'/>
              <textarea id='about_text' className='about_text_input' placeholder='Something about yourself.'></textarea>
              <button id='save_about'>Save</button>
            </div>
          </div>

          
        
        </main>
    )
}