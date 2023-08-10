 // Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import {getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import {getAuth, createUserWithEmailAndPassword} from "https:/www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBTaxrXnhszPMsLvFryQC7K9dFTukO-0p8",
    authDomain: "icodemy-b08eb.firebaseapp.com",
    projectId: "icodemy-b08eb",
    storageBucket: "icodemy-b08eb.appspot.com",
    messagingSenderId: "1025768308242",
    appId: "1:1025768308242:web:c72fde01cb75ab6119a2cb",
    measurementId: "G-02BCFHE7PQ"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

alert("end of firebase setup");

const auth = getAuth(app);
createUserWithEmailAndPassword(auth, "yusufmainaishaku@gmail.com", "12345maina")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   alert("successfully sign in")
   alert(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
   alert(erroMessage)
  });

class UploadForm {
  
  constructor() {
    this.root = newArticle("<h1>Unit Upload</h1>");
    
    //contents
    this.unitInput = newPre(this.getUnitFormat());
    this.unitInput.setAttribute("contenteditable", true);
    this.idInput = newTextField("");
    this.idInput.placeholder = "Unit id";
    this.uploadStatus = newPara("Not yet uploaded");
    this.submitBtn = newBtn("Submit");
    
   //input container 
    this.inputContainer = newSection("<h2>Unit</h2>");
    this.inputContainer.appendChild(this.idInput);
    this.inputContainer.appendChild(this.unitInput);
    //submission and status container
    this.submissionContainer = newSection("<h2>Submission</h2>");
    this.submissionContainer.appendChild(this.submitBtn);
    this.submissionContainer.appendChild(this.uploadStatus);
    
    //containers to root
    this.root.appendChild(this.inputContainer);
    this.root.appendChild(this.submissionContainer);
    
    //setUp submit
    this.setUpSubmission();
  }
  
  setUpSubmission(){
    this.submitBtn.addEventListener("click", ()=> this.upload());
  }
  
  getUnitFormat(){
    if (this.unitFormat) return this.unitFormat;
    
    let unitFormat= `{
      title: ""
      
      ,
      
      objectives: ""
      
      ,
      
      content: ""
      
      ,
      
      example1:
      {
        problem: ""
        
        ,
        
        figure: ""
        
        ,
        
        sample: ""
        
        ,
        
        solution: ""
        
        
      }
      
      ,
      
      
      example2:
      {
        problem: ""
        
        ,
        
        figure: ""
        
        ,
        
        sample: ""
        
        ,
        
        solution: ""
        
      }
      
    }`;
    
    
    return unitFormat;
    
  }
  
  
 async upload(){
   alert(db);
    let id = this.idInput.value;
    if (id.length < 1) {
      alert("Empty unit Id" + id);
      return;
    }
    let unit;
    eval("unit = " + this.unitInput.textContent);
   alert(unit.title);
   try {
     let ref = doc(db, "html/" + id);
      await setDoc(ref, unit);
    let user = await getDoc(ref);
    user = user.exists();
      this.uploadStatus.innerHTML = "Successfully uploaded as: " + user;
      this.uploadStatus.style.color = "green";
    } catch(e){
      this.uploadStatus.innerHTML = "Error: " + e.toString();
      this.uploadStatus.style.color = "red";
    }
  }
      
}



let root = document.getElementById("root");
let up = new UploadForm();

root.appendChild(up.root);
  up.unitInput.style.border="0.02px black solid";
  up.unitInput.style.padding="10px";
  up.submitBtn.classList.add("btn-primary");
  
