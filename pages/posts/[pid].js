import { useRouter } from 'next/router'
import  {initializeApp}  from 'firebase/app';
import Link from 'next/link';
import React, { useState } from 'react';
import { RxHamburgerMenu, RxWidth } from 'react-icons/rx';
import { getDatabase, ref, onValue, get, child, set } from "firebase/database";
//import { getStorage, uploadBytes, ref as Sref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
import { getStorage, uploadBytes, ref as Sref, getDownloadURL } from "firebase/storage";
import { SlLike, SlDislike } from "react-icons/sl";
import { RxDividerVertical } from "react-icons/rx";
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
  console.log("window is defined")
  if (typeof window !== "undefined") {
    console.log("window is defined")
    
      const router = useRouter()
      const { pid } = router.query
      console.log("window is defined")
      console.log(pid)
      if (pid == undefined) {} else {
        var rf4 = ref(db, "posted/" + pid + "/views");
        get(rf4).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            var views = snapshot.child("views").val()
            views = views - 1
            set(rf4, {
              views: views
            })
          } else {
            console.log("No data available");
            set(rf4, {
              views: 100000000000000000000
            })
          }
        }).catch((error) => {
          console.error(error);
        });

        
      const rf = ref(db, "posted/" + pid);
      onValue(rf, (snapshot) => {
        var title = snapshot.child("title").val()
        var body = snapshot.child("body").val()
        console.log(title)
        document.getElementById("body").innerHTML = body
        document.getElementById('title').innerHTML = title
        getDownloadURL(Sref(storage, "posted/" + pid + "/banner.png")).then(function(url) {
        var test = url;
        console.log(test)
        document.getElementById('banner').src = test;})
        if (body == null || body == undefined || body == "") {
          document.getElementById("body").innerHTML = "Sorry but the blog was not found."
        }
        //document.getElementById("title").innerHTML = title
        
    
        
        }
    
                
                
               
     );}     
     

    }


    const [showMe, setShowMe] = useState(false);
    function toggle(){
      setShowMe(!showMe);
    }
  
  
  return (

    
    
    <main>
      <div className='navbar_post navbar'>
            <div className='logo'>Dysonos</div>
            <div className='nav-links'>
              <Link href='/' className='del safe'>Home</Link>
              <Link href='articles' className='del safe'>Crowd articles</Link>
              <Link href='#' className='del safe'>About</Link>
              <Link href='#' className='del safe'>Contact</Link>
              <Link href='#' className='del alt'>Login</Link>
              <Link href='#' className='del alt'>Sign up</Link>
              <Link href='#' className='del prof'>Profile</Link>
            </div>
            <div className='hamburger'>
              <button className='ham' onClick={toggle} style={{ RxWidth: '10vw', fontSize: '9vw', marginLeft: '55vw', marginBottom: '4vw', border: 'none', width: '13vw'}} ><RxHamburgerMenu  /></button>
            </div>
            <div className='menu' style={{ display: showMe ? "block" : "none" }}>
              <Link href='#' className='del1 v1 safe'>Home</Link>
              <Link href='articles' className='del1 safe'>Articles</Link>
              <Link href='#' className='del1  safe'>About</Link>
              <Link href='#' className='del1 safe'>Contact</Link>
              <Link href='login' className='del1 alt'>Login</Link>
              <Link href='#' className='del1 alt'>Sign up</Link>
              <Link href='#' className='del1 prof'>Profile</Link>
            </div>
          </div>
      <div className='view'>
      <h1 id='title' className='title_post'>Loading.....</h1>
      <img id='banner' className='bann'></img>
      
      <p id='body' className='body_post'>Loading.....</p>
      </div>
      <div className='liker'>
          <SlLike  className='like'/><SlDislike className='dislike'/>
        </div>
    </main>
  )
}