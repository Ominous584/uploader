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
import { useRouter } from 'next/router';
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

let name_ra
/*const mostViewedPosts = query(ref(db, "articles"), orderByChild('timestamp'));
const mostViewedPosts1 = query(ref(db, "articles"), orderByChild('views/views', 'desc'));
console.log(mostViewedPosts)
console.log(mostViewedPosts1)
get(mostViewedPosts).then((snapshot) => {
*/

const Topic = () => {
    if (typeof window !== "undefined") {
        const router = useRouter()
        const { pid } = router.query
        console.log(pid)
        sessionStorage.setItem("oneTime", "true")
        
        console.log(localStorage.getItem('name'))
        if  (localStorage.hasOwnProperty('name')) {
          console.log('name exists')
          document.getElementById('logol').style.display = 'none'
          document.getElementById('logol1').style.display = 'none'
          document.getElementById('imm').src = "https://ui-avatars.com/api/?name=" + localStorage.getItem("name") + "rounded=true&size=50"
        } else {
          console.log('name does not exist')
          document.getElementById('imm').style.display = 'none'
        }
        const mostViewedPosts = query(ref(db, "Topics/" + pid), orderByChild('views/views', 'desc'));
        
        if (sessionStorage.getItem("oneTime") == "true") {
        console.log(mostViewedPosts)
        sessionStorage.se
get(mostViewedPosts).then((snapshot) => {
  if (snapshot.exists()) {
    if (sessionStorage.getItem("oneTime") == "true") {
    console.log(snapshot.val());
    sessionStorage.setItem("oneTime", "false")
    console.log("title is ", snapshot.child("body").val())
    snapshot.forEach((childSnapshot) => {
      console.log("one title", childSnapshot.key)
      console.log("one body", childSnapshot.child("body").val())
      const childKey = childSnapshot.key;
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
    })
  } else {
    console.log("No data available");
  }
}}).catch((error) => {
  console.error(error);
});

    }}
  const [showMe, setShowMe] = useState(false);
 
  function toggle(){
    setShowMe(!showMe);
    
    document.getElementById('imm').style.display = 'none'
  }
  return (
 
    <main >
          <div id='progressbar'></div>
          <div id='scrollPath'></div>
          <div className='navbar topic'>
            <div className='logo'>Dysonos</div>
            <div className='nav-links'>
           
              <Link href='articles' className='del safe'>Crowd articles</Link>
              <Link href='#' className='del safe'>About</Link>
              <Link href='#' className='del safe'>Contact</Link>
              <Link href='login' className='del alt' id='logol' >Login</Link>
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

          <li id='ress'></li>
  </main>    
  )
}

export default Topic