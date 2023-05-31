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
import { BiTrendingUp, BiSearchAlt2 } from "react-icons/bi";
import { CiUser, CiSettings, CiLogout } from 'react-icons/ci';
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

       var rf_topics = ref(db, "articles/" + pid + "/topic");
        onValue(rf_topics, (snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            var topic = snapshot.val()
            var rf4 = ref(db, "Topics/" + topic + "/" + pid + "/views");
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
          } else {
            console.log("No data available");
          }
        })
        
      
          
          
          
        
      sessionStorage.setItem("oneTime", "true")
      if (sessionStorage.getItem("oneTime") == "true") {
        
      onValue(rf, (snapshot) => {
        if (sessionStorage.getItem("oneTime") == "true"){
        const parser = new DOMParser();
        document.getElementById('search_loader').style.display = 'none'
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
          window.open("/search" + "?name=" + search, '_self')
        }
      })
      }

      const [showMe, setShowMe] = useState(false);
 
  function toggle(){
    setShowMe(!showMe);
    
    document.getElementById('imm').style.display = 'none'
  }
  
  return (

    
    
    <main>

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
          <div id='post_content'></div>
          <div className='pid_shower'>
          <div className='post_content' id='post_content'></div>
          <div className='post_author' id='post_author'>
            <h1 className='post_author_name' id='post_author_name'>post_author</h1>
            <p1 className='post_author_about' id='post_author_about'></p1>
            <h1 className='more_posts'>More posts from author</h1>
            <ul id='post_author_posts'></ul>
          </div>
          </div>
      
    </main>
  )

  
}

export default Post 