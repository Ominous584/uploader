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
import { BiTrendingUp } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
const inter = Inter({ subsets: ['latin'] })



// Import the functions you need from the SDKs you need
import  {initializeApp}  from 'firebase/app';
import { getDatabase, ref, onValue, get, child, orderByChild, query, limitToLast } from "firebase/database";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getDatabase(app);
const rf = ref(db, "Articles/posted");
const storage = getStorage();



const list = [];
const mostViewedPosts = query(ref(db, "posted"), orderByChild('timestamp'));
const mostViewedPosts1 = query(ref(db, "posted"), orderByChild('views/views', 'desc'));
console.log(mostViewedPosts)
console.log(mostViewedPosts1)
get(mostViewedPosts).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    console.log("title is ", snapshot.child("body").val())
    snapshot.forEach((childSnapshot) => {
      console.log("one title", childSnapshot.key)
      console.log("one body", childSnapshot.child("body").val())
      const childKey = childSnapshot.key;
              const childData = childSnapshot.val();

              console.log(childKey)
              list.push(childKey)
              var container = document.createElement("div")
              var boco = document.createElement("div")
              var listi = document.createElement("li")
              container.classList.add("container")
              listi.classList.add("listi")


          
          
              
              var a = document.createElement("a");
              var checki = sessionStorage.getItem("checker112")
              
              a.textContent = childKey;
              //a.classList.add("entry")
              //a.classList.add("entry2")
              a.classList.add("entry1")
              a.style.listStyle = "none"
              
              a.setAttribute('href', "posts/" + childKey);
              

              var checkii = sessionStorage.getItem("check123")

              

              function resclick() {
                sessionStorage.setItem("article", childKey);
                window.open("viewer.html", '_self');
              }

              var har = document.createElement("hr")
              har.style.marginBottom = "2vw"
              har.style.marginTop = "1vw"
              har.style.marginLeft = "-10vw"
              har.classList.add("har")
              
              try{
              var bod = childSnapshot.child("body").val()
              var bode = bod.slice(0, 30)
              var boded = bode + "...."
              var entry1 = document.createElement('li');
              entry1.appendChild(document.createTextNode(boded));
              entry1.addEventListener('click', resclick);
              entry1.style.listStyle = "none"
              var banner = document.createElement("img")
              getDownloadURL(Sref(storage, "posted/" + childKey + '/banner.png')).then(function(url) {
                
                var test = url;
                console.log(test)
                banner.src = test;
                banner.classList.add("lbanner")

              }).catch(function(error) {
                console.log("error!")
              });

              
              

              //entry.style.boxShadow = "0 0 15px 4px rgba(0,0,0,0.06)"
              
              //entry.style.marginLeft = "-20vw"
              entry1.classList.add("aaa");
              a.style.listStyle = "none" 
              boco.classList.add("boco")
              boco.append(a)
              
              boco.appendChild(entry1)
              //container.appendChild(har)
              container.appendChild(boco)
              container.appendChild(banner)
              var liner = document.createElement("hr")
              listi.appendChild(container)
              
              listi.style.listStyle = "none"
              res.appendChild(listi)}catch(err){
                console.log('error')                
              }
    })
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

get(mostViewedPosts1).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    console.log("title is ", snapshot.child("body").val())
    snapshot.forEach((childSnapshot) => {
      console.log("one title", childSnapshot.key)
      console.log("one body", childSnapshot.child("body").val())
      const childKey = childSnapshot.key;
              const childData = childSnapshot.val();

              console.log(childKey)
              list.push(childKey)
              var container = document.createElement("div")
              var boco = document.createElement("div")
              var listi = document.createElement("li")
              container.classList.add("trending_container")
              listi.classList.add("listi")


          
          
              
              var a = document.createElement("a");
              var checki = sessionStorage.getItem("checker112")
              
              a.textContent = childKey;
              //a.classList.add("entry")
              //a.classList.add("entry2")
              a.classList.add("trend_title")
              a.style.listStyle = "none"
              
              a.setAttribute('href', "posts/" + childKey);
              

              var checkii = sessionStorage.getItem("check123")

              

              function resclick() {
                sessionStorage.setItem("article", childKey);
                window.open("viewer.html", '_self');
              }

              var har = document.createElement("hr")
              har.style.marginBottom = "2vw"
              har.style.marginTop = "1vw"
              har.style.marginLeft = "-10vw"
              har.classList.add("har")
              var rel = document.getElementById("rel")
              
              try{
              var bod = childSnapshot.child("body").val()
              var bode = bod.slice(0, 30)
              var boded = bode + "...."
              var entry1 = document.createElement('li');
              entry1.appendChild(document.createTextNode(boded));
              entry1.addEventListener('click', resclick);
              entry1.style.listStyle = "none"
              var banner = document.createElement("img")
              

              
              

              //entry.style.boxShadow = "0 0 15px 4px rgba(0,0,0,0.06)"
              
              //entry.style.marginLeft = "-20vw"
              entry1.classList.add("trending_body");
              a.style.listStyle = "none" 
              
              //container.appendChild(har)
              container.appendChild(a)
              container.appendChild(entry1)
              
              var liner = document.createElement("hr")
              listi.appendChild(container)
              
              listi.style.listStyle = "none"
              rel.appendChild(listi)}catch(err){
                console.log('error')                
              }
    })
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

if (typeof window !== "undefined") {
  window.addEventListener('DOMContentLoaded', (event) => {
    
    var res = document.getElementById("res")
    document.body.style.display = 'block'
    onValue(rf, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
              
        // ...
      });
    }, {
      onlyOnce: true
    });
  });
    

  
}


//Acount shower and stuff -----------------------------------------------------------------
//----------------------------------------------------------Account-----------------------
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
    document.getElementById('logol').style.display = 'none'
    document.getElementById('logol1').style.display = 'none'
    var imma = "https://ui-avatars.com/api/?name=" + user
    console.log(imma)
    document.getElementById("imm").src = imma
    document.getElementById("imm2").src = imma
    document.getElementById('starter').addEventListener('click', function() {
      window.open("signup", '_self')
    })
    
    
    
    
    console.log(imma)
  }
  })}


export default function Home() {

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
          <h1 className='techz'>Great Tech Blogs</h1>
          <button className='start' id='starter'>Start reading</button>
        </div>
        <hr className='seperator'></hr>
        <div className='trend'>
          <h1><BiTrendingUp /> Trending</h1>
          <ul id='rel'></ul>
        </div>

        <h1 className='latest'>Latest</h1>
        <div className='aspects'>
          <h1 className='discohead'>Discover posts of your interest.</h1>
          <Link href='topics/technology' className='discotop'>Technology</Link>
          <Link href='topics/programming' className='discotop'>Programming</Link>
          <Link href='topics/machinelearning' className='discotop'>Machine learning</Link>
          <Link href='topics/health' className='discotop'>Health</Link>
          <Link href='topics/sports' className='discotop'>Sports</Link>
          <Link href='topics/politics' className='discotop'>Politics</Link>
          <Link href='topics/events' className='discotop'>Events</Link>
          <hr className='discomar'></hr>

        </div>
        
        <ul id='res'></ul>
        

  </main>

    
      
    
  )
}
