import React from 'react';
import { useState } from 'react';
import { getLength } from '../api/users';
function Pagination(props) {
    
    const [counter, setCounter]=useState(1);

    var length = getLength();

    function decrease(){
        if(counter>1){
            setCounter(counter-1);
            props.breadCrumbs(counter-1); 
        }
    }
    
    function increase(){
        if((counter+1)*props.data - length<0 ){
            console.log(counter);
            setCounter(counter+1);
            props.breadCrumbs(counter+1);
        }
    }

    function first(){
            setCounter(1);
            props.breadCrumbs(1);
    }

    function last(){
        if(Math.floor(length / props.data)!=Math.ceil(length / props.data)){
                setCounter(Math.floor(length / props.data)+1);
                props.breadCrumbs(Math.floor(length / props.data)+1);
        }else{
            setCounter(Math.floor(length / props.data));
            props.breadCrumbs(Math.floor(length / props.data));
        }        
    }

    function setLimit20(){
        setCounter(1);
        props.changeLimit(20);
    }

    function setLimit40(){
        setCounter(1);
        props.changeLimit(40);
    }
    function setLimit60(){
        setCounter(1);
        props.changeLimit(60);
    }
    
    return (
        <>
            <ul className="pagination pagination-md justify-content-end">
                <li className="page-item" ><span className="page-link">Search Limit</span></li>
                <li className="page-item" onClick={setLimit20}><span className="page-link">20</span></li>
                <li className="page-item" onClick={setLimit40}><span className="page-link">40</span></li>
                <li className="page-item" onClick={setLimit60}><span className="page-link">60</span></li>
            </ul>
            <ul className="pagination pagination-md justify-content-end">
                <li className="page-item" onClick={first}><span className="page-link">&laquo;</span></li>
                <li className="page-item" onClick={decrease}><span className="page-link">&lsaquo;</span></li>
                <li className="page-item"><span className="page-link">{counter}</span></li>
                <li className="page-item" onClick={increase}><span className="page-link">&rsaquo;</span></li>
                <li className="page-item" onClick={last}><span className="page-link">&raquo;</span></li>
            </ul>
        </>
    );
}

export default Pagination;