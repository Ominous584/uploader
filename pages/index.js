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
import { BiTrendingUp, BiSearchAlt2 } from "react-icons/bi";
import { SlLike } from "react-icons/sl";




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

if (typeof window !== "undefined") {
  window.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem("name") == null || localStorage.getItem("name") == undefined) {
      //document.getElementById("navbar").classList.add("navbar_not")

  } else {

    
  }})}
const mostViewedPosts = query(ref(db, "articles"), orderByChild('timestamp'));
const mostViewedPosts1 = query(ref(db, "articles"), orderByChild('views/views', 'desc'));
console.log(mostViewedPosts)
console.log(mostViewedPosts1)
get(mostViewedPosts).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    console.log("title is ", snapshot.child("body").val())
    snapshot.forEach((childSnapshot) => {
      console.log("one title", childSnapshot.key)
      document.getElementById("search_loader").style.display = "none"
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
              getDownloadURL(Sref(storage, "Posts/" + childKey + '/title.png')).then(function(url) {
                
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

//Show topics and stuff
// Large stuff. Very large ----------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//-----------------------------------------------TOPICS---------------------------------------
if (typeof window !== "undefined") {
  window.addEventListener('DOMContentLoaded', (event) => {
    name_ra = sessionStorage.getItem("name")
    document.getElementById("topic_pro").addEventListener('click', function() {
      document.getElementById('res').remove()
      var raa = document.createElement("ul")
      raa.id = "res"
      console.log('clicked')
      document.body.appendChild(raa)
      var rf_pro = ref(db, "articles")
      onValue(rf_pro, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var raa1 = childSnapshot.child('topic').val()
          console.log(raa1)
          if (raa1 == "Programming") {
            console.log("one title", childSnapshot.key)
      document.getElementById("Loader").style.display = "none"
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
              getDownloadURL(Sref(storage, "Posts/" + childKey + '/title.png')).then(function(url) {
                
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
          }
        })
      })
    })

    document.getElementById("topic_health").addEventListener('click', function() {
      document.getElementById('res').remove()
      var raa = document.createElement("ul")
      raa.id = "res"
      console.log('clicked')
      document.body.appendChild(raa)
      var rf_pro = ref(db, "articles")
      onValue(rf_pro, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var raa1 = childSnapshot.child('topic').val()
          console.log(raa1)
          if (raa1 == "Health") {
            console.log("one title", childSnapshot.key)
      document.getElementById("Loader").style.display = "none"
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
              getDownloadURL(Sref(storage, "Posts/" + childKey + '/title.png')).then(function(url) {
                
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
          }
        })
      })
    })

    document.getElementById("topic_politics").addEventListener('click', function() {
      document.getElementById('res').remove()
      var raa = document.createElement("ul")
      raa.id = "res"
      console.log('clicked')
      document.body.appendChild(raa)
      var rf_pro = ref(db, "articles")
      onValue(rf_pro, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var raa1 = childSnapshot.child('topic').val()
          console.log(raa1)
          if (raa1 == "Politics") {
            console.log("one title", childSnapshot.key)
      document.getElementById("Loader").style.display = "none"
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
              getDownloadURL(Sref(storage, "Posts/" + childKey + '/title.png')).then(function(url) {
                
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
          }
        })
      })
    })

    document.getElementById("topic_events").addEventListener('click', function() {
      document.getElementById('res').remove()
      var raa = document.createElement("ul")
      raa.id = "res"
      console.log('clicked')
      document.body.appendChild(raa)
      var rf_pro = ref(db, "articles")
      onValue(rf_pro, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var raa1 = childSnapshot.child('topic').val()
          console.log(raa1)
          if (raa1 == "Events") {
            console.log("one title", childSnapshot.key)
      document.getElementById("Loader").style.display = "none"
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
              getDownloadURL(Sref(storage, "Posts/" + childKey + '/title.png')).then(function(url) {
                
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
          }
        })
      })
    })

    document.getElementById("topic_tech").addEventListener('click', function() {
      document.getElementById('res').remove()
      var raa = document.createElement("ul")
      raa.id = "res"
      console.log('clicked')
      document.body.appendChild(raa)
      var rf_pro = ref(db, "articles")
      onValue(rf_pro, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var raa1 = childSnapshot.child('topic').val()
          console.log(raa1)
          if (raa1 == "Technology") {
            console.log("one title", childSnapshot.key)
      document.getElementById("Loader").style.display = "none"
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
              getDownloadURL(Sref(storage, "Posts/" + childKey + '/title.png')).then(function(url) {
                
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
          }
        })
      })
    })

    document.getElementById("topic_machine").addEventListener('click', function() {
      document.getElementById('res').remove()
      var raa = document.createElement("ul")
      raa.id = "res"
      console.log('clicked')
      document.body.appendChild(raa)
      var rf_pro = ref(db, "articles")
      onValue(rf_pro, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var raa1 = childSnapshot.child('topic').val()
          console.log(raa1)
          if (raa1 == "Machine learning") {
            console.log("one title", childSnapshot.key)
      document.getElementById("Loader").style.display = "none"
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
              getDownloadURL(Sref(storage, "Posts/" + childKey + '/title.png')).then(function(url) {
                
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
          }
        })
      })
    })
  })
}
      
      
 


//Acount shower and stuff -----------------------------------------------------------------
//----------------------------------------------------------Account-----------------------




export default function Home() {

  const [showMe, setShowMe] = useState(false);
 
  function toggle(){
    setShowMe(!showMe);
    
    document.getElementById('imm').style.display = 'none'
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
 
    <main >
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4569046164902655"
     crossorigin="anonymous"></script>
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
       
        

        
     
        

        <h1 className='latest'>Latest</h1>
        <div className='aspects'>
          <h1 className='discohead'>Discover posts of your interest.</h1>
          <button href='topics/technology' className='discotop' id='topic_tech'>Technology</button>
          <button  className='discotop' id='topic_pro'>Programming</button>
          <button className='discotop' id='topic_machine'>Machine learning</button>
          <button className='discotop' id='topic_health'>Health</button>
          <button className='discotop' id='topic_sports'>Sports</button>
          <button className='discotop' id='topic_politics'>Politics</button>
          <button className='discotop' id='topic_events'>Events</button>
          <hr className='discomar'></hr>

        </div>
        
        <ul id='res'></ul>
        

  </main>

    
      
    
  )
}
