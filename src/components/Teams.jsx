import React, { useState } from "react";
import { showAvailable } from "../api/users";

export default function Teams(props){
    
    return(
        <table className="table">
        <thead>
            <tr>
                <th className="p-3">id</th>
                <th className="p-3">first_name</th>
                <th className="p-3">last_name</th>
                <th className="p-3">email</th>
                <th className="p-3">gender</th>
                <th className="p-3">avatar</th>
                <th className="p-3">domain</th>
                <th className="p-3">available</th>
                <th className="p-3">select</th>
            </tr>
        </thead>
        <tbody>
            {props.usersTeams.map(user=>(
                <tr key={user.id}>
                 <td>{user.id}</td>
                 <td>{user.first_name}</td>
                 <td>{user.last_name}</td>
                 <td>{user.email}</td>
                 <td>{user.gender}</td>
                 <td>{user.avatar}</td>
                 <td>{user.domain}</td>
                 <td>{user.available?'yes':'no'}</td>
                 <td><input class="btn btn-primary" type="button" value="select"></input></td>
            </tr>
            ))}
            
        </tbody>
    </table>
);

}