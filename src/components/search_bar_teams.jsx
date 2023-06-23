import React, { useState } from "react";
import "./css/search_bar.css"

export default function SearchBarTeams(props){

    function clickHandler(event){
        const tag = event.target.textContent;
        props.getDomains(tag);
    }

    return(
        <div className="search-bar">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select The Domains
          </button>
          <ul class="dropdown-menu">
            {
                props.domain.temp.map(x=>(
                    <li><span class="form-check-label" id={x} style={{width:"100%",height:"100%",padding:'5px',display:'block'}} onClick = {clickHandler}>{x}</span></li>
                ))
            }
          </ul>
        </div>
        <input class="btn btn-primary" type="button" value="Go to Profiles Tab" onClick={props.changeTab}></input>
      </div>
    )
}