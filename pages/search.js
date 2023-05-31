import Head from 'next/head'
import Image from 'next/image'

//import styles from '@/styles/globals.css'

import Script from 'next/script'
import { useEffect, useState } from 'react'
//import banner1 from '@/pages/images/banner.png'
import Link from 'next/link';
import { RxHamburgerMenu, RxWidth } from 'react-icons/rx';
import { VscAccount } from "react-icons/vsc";
import { CiLogout, CiSettings, CiUser, CiPen } from "react-icons/ci";
import { BiTrendingUp, BiSearchAlt2 } from "react-icons/bi";
import { BsPen } from "react-icons/bs";
import { SlLike } from "react-icons/sl";




// Import the functions you need from the SDKs you need
import  {initializeApp}  from 'firebase/app';
import { getDatabase, ref, onValue, get, child, orderByChild, query, limitToLast } from "firebase/database";
//import { getStorage, uploadBytes, ref as Sref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
import { getStorage, uploadBytes, ref as Sref, getDownloadURL } from "firebase/storage";
import { useRouter } from 'next/router';
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
let name_ra


let namer

if (typeof window !== "undefined") {
  window.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem("name") == null || localStorage.getItem("name") == undefined) {
      document.getElementById("navbar").classList.add("navbar_not")
      document.getElementById("navbar").classList.remove("navbar")
  } else {
    
    
  }})}

  function load_search() {
    if (typeof window !== "undefined") {
        console.log("searches initiated")
       console.log("searches initiated")
        sessionStorage.setItem("oneTime", "true")
     
        const mostViewedPosts = query(ref(db, "articles/"), orderByChild('views/views', 'desc'));
        
        if (sessionStorage.getItem("oneTime") == "true") {

get(mostViewedPosts).then((snapshot) => {
  if (snapshot.exists()) {
    if (sessionStorage.getItem("oneTime") == "true") {

    sessionStorage.setItem("oneTime", "false")

    snapshot.forEach((childSnapshot) => {
 
      const childKey = childSnapshot.key;
      if (String(childSnapshot.key).includes(namer, 0)){
              const childData = childSnapshot.val();

              console.log(childKey)
              list.push(childKey)
              var ress = document.getElementById("ress")
              var container = document.createElement("div")
              var boco = document.createElement("div")
              var listi = document.createElement("li")
              container.classList.add("container")
              container.classList.add("topic_container")
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
              getDownloadURL(Sref(storage, "Posts/" + childKey + '/title.png')).then(function(url) {
                
                var test = url;
                console.log(test)
                banner.src = test;
                banner.classList.add("lbanner")
                banner.classList.add("lbanner_home")
                document.getElementById("search_loader").style.display = "none"

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
              ress.appendChild(listi)}catch(err){
                console.log('error')                
              }
    }})
  } else {
  }
}}).catch((error) => {
  console.error(error);
});
}}//dd
  }

const Search = () => {
    const [showMe, setShowMe] = useState(false);
    const router = useRouter()
    const {name} = router.query
    console.log(name)
     if (name != undefined) {
        namer = name
        load_search()
        console.log("searches")
     }
    
  function toggle(){
    setShowMe(!showMe);
    
    document.getElementById('imm').style.display = 'none'
  }

  if (typeof window !== "undefined") {
    if  (localStorage.hasOwnProperty('name')) {
      document.getElementById('logol').style.display = 'none'
      document.getElementById('logol1').style.display = 'none'
      document.getElementById('imm').src = "https://ui-avatars.com/api/?name=" + localStorage.getItem("name") + "rounded=true&size=50/?background=ffffff"
    } else {
      document.getElementById('imm').style.display = 'none'
    }}
  return ( 
    <main >
          <div id='progressbar'></div>
          <div id='scrollPath'></div>
 
          <div className='navbar' id='navbar'>
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
              <div className='profo'>
                <img className='shower2' id='imm2'></img>
                <div className='nama'><h1 id='nama' ></h1></div>
              </div>
              
              
              <Link href='editor' className='del1  safe'>Editor</Link>
              
              <Link href='profile' className='del1 alt'>Profile</Link>
              <Link href='about' className='del1 alt'>About</Link>
              
            </div>
          </div> 

          <div className='search_loader' id='search_loader'>
            <div className='search_loader_box'>
                <div className='search_loader_box1'></div>
                <div className='search_loader_box2'></div>
                <div className='search_loader_box3'></div>
            </div>
          </div>
          <ul id='ress' className='ress'></ul>

        

  </main>

    
      
    
  )
}

export default Search