import React from "react";
import Card from "./Cards";
import "./css/card_view.css";
export default function Cardview(props){
return(
    <>
    <div className="card_view">
        {props.users.map(user=>(
                <Card data={user} />
            )
        )}
    </div>
    </>
)

}