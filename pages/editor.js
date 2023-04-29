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
import { BsCardImage } from "react-icons/bs";
import { FaBold, FaItalic, FaHeading } from "react-icons/fa";

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
const storage = getStorage();
let files_1
if (typeof window !== "undefined") {
    window.addEventListener('DOMContentLoaded', (event) => {
      document.getElementById("text0").addEventListener('keypress', function (e) {
        if (e.key == 'Enter'){
          var el = this;  
    setTimeout(function(){
      var fella = el.rows
      el.rows = fella + 1
      el.style.height = "auto"
    },0)
        }
      })
      
        var user = localStorage.getItem("user")
        var dialog = sessionStorage.getItem("dialog")
        sessionStorage.setItem("dialog", 0)
        console.log("the dialog is ", dialog)
        document.getElementById("heading_input").addEventListener('click', function (){
            var heading = document.createElement('textarea')
            var normal  = document.createElement('textarea')
            heading.placeholder = "Heading..."
            var dialog1 = sessionStorage.getItem("dialog")
            var ide = parseInt(dialog1) + 1
            var idea = "text" + ide
            var dialog2 = parseInt(dialog1) + 1
            heading.id = idea
            ide = ide + 1
            idea = "text" + ide
            normal.id = idea
            normal.classList.add('editor_body')
            heading.classList.add('editor_heading')
            document.getElementById("body_input").appendChild(heading)
            normal.addEventListener('input', editor_body, false);
            document.getElementById("body_input").appendChild(normal)
            sessionStorage.setItem("dialog", dialog2)
            var rf_texter = ref(db, 'articles/' + document.getElementById("title").value);
            
            set(rf_texter, {
                
            })
            console.log(document.getElementById("whole_text").outerHTML)
        })
        document.getElementById("image_input").addEventListener('click', function (){
            var input = document.createElement('input');
            console.log("clicked image input")
            input.type = 'file';
            input.onchange = e => {
                var files = e.target.files;
                var reader = new FileReader();
                
                reader.readAsDataURL(files[0]);
                reader.onload = function(){
                    var img = document.createElement('img');
                    img.src = reader.result;
                    img.classList.add('image_input_img')
                    document.getElementById("body_input").appendChild(img);
                    var text_r = document.createElement('textarea')
                    var dialog1 = sessionStorage.getItem("dialog")
                    var ide = parseInt(dialog1) + 1
                    var idea = "text" + ide
                    var dialog2 = parseInt(dialog1) + 1
                    text_r.id = idea
                    text_r.classList.add('editor_body')
                    text_r.addEventListener('input', editor_body, false);
                    document.getElementById("body_input").appendChild(text_r)
                    sessionStorage.setItem("dialog", dialog2)
                    var rf_texter = ref(db, 'articles/' + document.getElementById("title").value);
                    
                    set(rf_texter, {
                        
                    })
                    console.log(document.getElementById("whole_text").outerHTML)
                }
            }
            input.click()
        })

        document.getElementById('previewed').addEventListener('click', function (){
          var input = document.createElement('input');
          input.type = 'file';
            input.onchange = e => {
                files_1 = e.target.files;
                var reader = new FileReader();
                
                reader.readAsDataURL(files_1[0]);
                reader.onload = function(){
                  document.getElementById("previewed").src = reader.result;
                  document.getElementById('previewed').id = 'title_img'
                }}
                input.click()
    })
        document.getElementById("publish").addEventListener('click', function (){
            var title = document.getElementById("title").value
           
            var date = new Date()
            var time = date.getTime()
            var content = document.getElementById("whole_text").outerHTML
            var data = {
                content: content,
                title: title,
                author: user

            
        }
        var checker = sessionStorage.getItem("dialog")
        var ch = parseInt(checker) 
        console.log(ch)
        var a = 0
        var boda = document.getElementById("text0").value
        var topic = document.getElementById("topic_selector").options[ document.getElementById("topic_selector").selectedIndex].text;
        console.log(topic)
        var data = {
                content: content,
                title: title,
                text_num: ch,
                author: user,
                views: 0, 
                body: boda,
                topic: topic,
                }
        while(a <= ch){
            
            var idea = "text" + a
            var text = document.getElementById(idea).value
            
            data[idea] = text
            a = a + 1
            
            
        }
        var rf_publish = ref(db, 'articles/' + title); 
        set(rf_publish, data)
        console.log(user)
        var rf_publish_user = ref(db, 'People/' + user + '/posts/list/' + title);
        set(rf_publish_user, data)
        var stref = Sref(storage, "Posts/" + title + "/" + "title" + ".png")
        uploadBytes(stref, files_1[0]);
        var rf_publish_1 = ref(db, 'articles/' + title + "/views")
        var rf_publish_user_1 = ref(db, 'People/' + user + "/posts/list/" + title + "/views")
        set(rf_publish_1, {
          views: 0
        })
        set(rf_publish_user_1, {
          views: 0
        })
        /*var stref = Sref(storage, "Article/posted/" + titles + "/" + "img" + ch + ".png")
        uploadBytes(stref, files[0]);*/
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
    return (

        <main>
            
            <div className='navbar'>
            <div><a className='logo' href='/'>Dysonos</a></div>
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

          <div className='editor'>
            <div className='inputer'>
                <button id='image_input' className='image_input'><BsCardImage /></button>
                <button id='bold_input' className='bold_input'><FaBold /></button>
                <button id='heading_input' className='heading_input'><FaHeading /></button>
                <button id='publish' className='editor_publish'> publish</button>
            </div>
            <div id='whole_text'>
              <img className='preview_img' id='previewed' src='/preview_img.png'></img>
          <textarea cols="10" rows="1" id="title" class="editor_title" placeholder="Title..."></textarea>
          <div id='body_input'>
          <textarea cols="10" rows="100" id="text0" class="editor_body"  placeholder="Body..."></textarea>
          </div>
          </div>
          <div className='topic_select'>
            <h1 className='topic_select_head'>Select the topic</h1>
            <select id='topic_selector' className='topic_selector'>
              <option value="1">Technology</option>
              <option value="2">Machine learning</option>
              <option value="3">Programming</option>
              <option value="4">Sports</option>
              <option value="5">Politics</option>
              <option value="6">Events</option>
            </select>
          </div>
          </div>

          
          
          
        
        </main>
    )
}