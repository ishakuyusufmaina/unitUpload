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
     let ref = doc(db, "html", id);
      await setDoc(ref, unit);
      this.uploadStatus.innerHTML = "Successfully uploaded as:";
      this.uploadStatus.style.color = "green";
    } catch(e){
      this.uploadStatus.innerHTML = "Error: " + e.toString();
      this.uploadStatus.style.color = "red";
    }
  }
      
}
