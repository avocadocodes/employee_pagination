import React from 'react';
import "./css/cards.css"
import { isset, data } from '../utils/utility';
const Card = (props) => {
props=props.data;
  return (
    <div className="cards">
      <div className="pfp"><img src={isset(props.avatar)?data(props.avatar):''}></img></div>
      <div className="name">{isset(props.first_name)?data(props.first_name):''}&nbsp;&nbsp;{isset(props.last_name)?data(props.last_name):''}</div>
      <div className ="details">
        <div><span className="heading">ID :</span>&nbsp;{props.id}</div>
        <div><span className="heading">EMAIL :</span>&nbsp;{props.email}</div>
        <div><span className="heading">GENDER :</span>&nbsp;{props.gender}</div>
        <div><span className="heading">DOMAIN :</span>&nbsp;{props.domain}</div>
        <div><span className="heading">AVAILABILITY :</span>&nbsp;{props.available?'yes':'no'}</div>
      </div>
    </div>

  );
};

export default Card;
