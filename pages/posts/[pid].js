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
var che = 1
let f
const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  if (typeof window !== "undefined") {
    console.log("window is defined")
    
      
      console.log("window is defined")
      console.log(pid)
      if (pid == undefined) {} else {
        
        
        
      const rf = ref(db, "articles/" + pid);
      var rf4 = ref(db, "articles/" + pid + "/views");
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
              views: 10000000
            })
          }
        }).catch((error) => {
          console.error(error);
        });

      
          
          
          
        
      sessionStorage.setItem("oneTime", "true")
      if (sessionStorage.getItem("oneTime") == "true") {
        
      onValue(rf, (snapshot) => {
        if (sessionStorage.getItem("oneTime") == "true"){
        const parser = new DOMParser();
          console.log(snapshot.child("content").val())
          sessionStorage.setItem("oneTime", "false")
          var contenter = parser.parseFromString(snapshot.child("content").val(), 'text/html');
          document.getElementById('post_content').appendChild(contenter.body);
          console.log(contenter.body)
          console.log(snapshot.child("text0").val())
          var chec = snapshot.child("text2").val()
          sessionStorage.setItem("oneTime", "false")
          console.log(chec)
          document.getElementById("title").readOnly = true;
          document.getElementById("text0").innerHTML = snapshot.child("text0").val()
        //document.getElementById("title").innerHTML = title
        var checker = parseInt(snapshot.child("text_num").val())
        console.log(checker)
        var a = 0
        while (a <= checker) {
          console.log(a)
          console.log(snapshot.child("text" + a).val())
          document.getElementById("text" + a).innerHTML = snapshot.child("text" + a).val()
          document.getElementById("text" + a).readOnly = true;
          a++
        }
        document.getElementById('post_author_name').innerHTML = snapshot.child("author").val()
        document.getElementById("title").innerHTML = snapshot.child("title").val()
        var rf_ab1 = ref(db, "People/" + snapshot.child("author").val() + "/about");
        onValue(rf_ab1, (snapshot) => {
          document.getElementById('post_author_about').innerHTML = snapshot.val()
        })
        var rf_posts = ref(db, "People/" + snapshot.child("author").val() + "/posts/list");
        onValue(rf_posts, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
          var listi = document.createElement('li')
          var poster = document.createElement('a')
          poster.classList.add('post_author_posts_item')
          poster.appendChild(document.createTextNode(childSnapshot.child('title').val()));
          poster.href = "/posts/" + childSnapshot.child('title').val()
          listi.style.listStyleType = "none"
          listi.appendChild(poster)
          document.getElementById('post_author_posts').appendChild(listi)
          
        }, {
        onlyOnce: true
      })
        })
      }})
      }
      }
    }
  

    

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
      }})}


    const [showMe, setShowMe] = useState(false);
    function toggle(){
      setShowMe(!showMe);
    }
  
  
  return (

    
    
    <main>
      <div className='navbar_post navbar'>
      <div><a className='logo' href='/'>Dysonos</a></div>
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
          <div className='pid_shower'>
          <div className='post_content' id='post_content'></div>
          <div className='post_author' id='post_author'>
            <h1 className='post_author_name' id='post_author_name'></h1>
            <p1 className='post_author_about' id='post_author_about'></p1>
            <h1 className='more_posts'>More posts from author</h1>
            <ul id='post_author_posts'></ul>
          </div>
          </div>
      
    </main>
  )

  
}

export default Post 