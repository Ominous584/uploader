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
const storage = getStorage();
let files_1
if (typeof window !== "undefined") {
    window.addEventListener('DOMContentLoaded', (event) => {
      if (typeof window !== 'undefined') {
        document.getElementById("text0").addEventListener("keydown", function (e) {
            console.log(e.code)
            console.log(e.which)
            if (document.getElementById("text0").selectionStart % document.getElementById("text0").cols == 0) {
                if (e.code == "Backspace"){
                    document.getElementById("text0").rows = document.getElementById("text0").rows - 1;
                    console.log("back")
                } else {
                    var le = document.getElementById("text0").scrollHeight;
                    document.getElementById("text0").style.height = "auto";
                    console.log(e.key)
                    document.getElementById("text0").rows = document.getElementById("text0").rows + 1;
                    console.log(le);
                    console.log("the cursor position is ", document.getElementById("text0").selectionStart);
                    console.log("the max is " , document.getElementById("text0").scrollWidth);
                    console.log("the width is ", document.getElementById("text0").cols);
    }}})
    }
    
      
      
        var user = localStorage.getItem("name")
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
            normal.placeholder = "Body..."
            normal.classList.add('editor_body')
            heading.classList.add('editor_heading')
            normal.cols = 50
            document.getElementById("body_input").appendChild(heading)
            normal.addEventListener('keydown', function (e){
              if (this.selectionStart % this.cols == 0) {
                if (e.code == "Backspace"){
                    this.rows = this.rows - 1;
                    console.log("back")
                } else {
                    var le = this.scrollHeight;
                    this.style.height = "auto";
                    console.log(e.key)
                    this.rows = this.rows + 1;
                    console.log(le);
                    console.log("the cursor position is ", this.selectionStart);
                    console.log("the max is " , this.scrollWidth);
                    console.log("the width is ", this.cols);
    }}}
        );
            document.getElementById("body_input").appendChild(normal)
            dialog2 = dialog2 + 1
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
                    text_r.placeholder = "Body..."
                    text_r.cols = 50
                    text_r.addEventListener('keydown', function (e){
                      if (this.selectionStart % this.cols == 0) {
                        if (e.code == "Backspace"){
                            this.rows = this.rows - 1;
                            console.log("back")
                        } else {
                            var le = this.scrollHeight;
                            this.style.height = "auto";
                            console.log(e.key)
                            this.rows = this.rows + 1;
                            console.log(le);
                            console.log("the cursor position is ", this.selectionStart);
                            console.log("the max is " , this.scrollWidth);
                            console.log("the width is ", this.cols);
            }}
      })
                    text_r.addEventListener('keydown', function (e){
                      if (this.selectionStart % this.cols == 0) {
                        if (e.code == "Backspace"){
                            this.rows = this.rows - 1;
                            console.log("back")
                        } else {
                            var le = this.scrollHeight;
                            this.style.height = "auto";
                            console.log(e.key)
                            this.rows = this.rows + 1;
                            console.log(le);
                            console.log("the cursor position is ", this.selectionStart);
                            console.log("the max is " , this.scrollWidth);
                            console.log("the width is ", this.cols);
            }}
                      })
                
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
        var rf_publish_1 = ref(db, 'articles/' + title + "/views")
        var rf_publish_user_1 = ref(db, 'People/' + user + "/posts/list/" + title + "/views")
        set(rf_publish_1, {
          views: 0
        })
        set(rf_publish_user_1, {
          views: 0
        })
        var stref = Sref(storage, "Posts/" + title + "/" + "title" + ".png")
        uploadBytes(stref, files_1[0]);
        var rf_publish_user = ref(db, 'People/' + user + '/posts/list/' + title);
        set(rf_publish_user, data)
        var rf_publish_topic = ref(db, "Topics/" + topic + "/" + title)
        set(rf_publish_topic, data).then(() => {
          window.open('posts/' + title, '_self')
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
            <a href='/' className='logo'>Dysonos</a>
            <div className='searchbar'>
              <input type='text'id='searchbar' placeholder='Search'></input>
              <button><BiSearchAlt2 /></button>
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
              <button className='ham' onClick={toggle} style={{ RxWidth: '10vw', fontSize: '9vw', marginLeft: '55vw', marginBottom: '4vw', border: 'none', width: '13vw'}} ><RxHamburgerMenu  /></button>
            </div>
            <div className='menu' style={{ display: showMe ? "block" : "none" }}>
              
              <Link href='editor' className='del1  safe'>Editor</Link>
              <Link href='profile' className='del1 alt'>Profile</Link>
              <Link href='about' className='del1 alt'>About</Link>
              
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
          <textarea cols="20" rows="1" id="title" class="editor_title" placeholder="Title..."></textarea>
          <div id='body_input'>
          <textarea cols="50" rows="1" id="text0" class="editor_body"  placeholder="Body..."  style={{width: "auto", height: "auto"}}></textarea>
          </div>
          </div>
          <div className='topic_select' style={{ display: showMe ? "none" : "block"}}>
            <h1 className='topic_select_head'>Select the topic</h1>
            <select id='topic_selector' className='topic_selector'>
              <option value="1" className='topic_selector_item'>Technology</option>
              <option value="2" className='topic_selector_item'>Machine learning</option>
              <option value="3" className='topic_selector_item'>Programming</option>
              <option value="4" className='topic_selector_item'>Sports</option>
              <option value="5" className='topic_selector_item'>Politics</option>
              <option value="6" className='topic_selector_item'>Events</option>
            </select>
          </div>
          </div>

          
          
          
        
        </main>
    )
}