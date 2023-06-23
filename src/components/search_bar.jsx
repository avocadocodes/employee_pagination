import React from "react";
import "./css/search_bar.css"

export default function SearchBar(props){
    
    
    
    function aliveDead(event){
        let classname = event.target.textContent;
        let tag = event.target;
        console.log(event);
        var F = false;
        tag.classList.forEach(classes =>{
            console.log(classes);
            if(classes == 'bg_color'){
                F=true;
            }
        });
        if(F){
            document.getElementById(classname).value='';
            document.getElementById(classname).classList.add("notvisible");
            document.getElementById(tag.id).classList.remove("bg_color");
        }else{
            document.getElementById(classname).classList.remove("notvisible");
            document.getElementById(tag.id).classList.add("bg_color");
        }
        
    }

    function findUsers(){
        var Data  = {};
        Data["fName"]=document.getElementById('fName').value;
        if(document.getElementById('Gender')){
            Data["gender"] = document.getElementById('Gender').value;
        }
        if(document.getElementById('Domain')){
            Data["domain"] = document.getElementById('Domain').value;
        }
        if(document.getElementById('Availability')){
            Data["availability"] = document.getElementById('Availability').value;
        }
       props.search(Data);
    };

    return(
        <div className="search-bar">
        <input type="text" placeholder="Search by first name" id="fName"  //onChange={handleSearch} 
        />
        <input type="text" placeholder="Specify gender" className="notvisible" id="Gender"/>
        <input type="text" placeholder="Specify domain" className="notvisible" id="Domain"/>
        <input type="text" placeholder="Search availability" className="notvisible" id="Availability"/>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filters
          </button>
          <ul class="dropdown-menu">
            <li><span class="form-check-label" id="input1" style={{width:"100%",height:"100%",padding:'5px',display:'block'}} onClick={aliveDead} >Gender</span></li>
            <li><span class="form-check-label" id="input2" style={{width:"100%",height:"100%",padding:'5px',display:'block'}} onClick={aliveDead}>Domain</span></li>
            <li><span class="form-check-label" id="input3" style={{width:"100%",height:"100%",padding:'5px',display:'block'}} onClick={aliveDead}>Availability</span></li>
          </ul>
        </div>
        <input class="btn btn-primary" type="button" value="Search" onClick={findUsers}></input>
        <input class="btn btn-primary" type="button" value="Go to Build Team" onClick={props.changeTab}></input>
      </div>
    )
}