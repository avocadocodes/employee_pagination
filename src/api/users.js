import users from "./users.json"
import { isset } from "../utils/utility";
import { data } from "../utils/utility";

var USERS = users;

export const search=function(DATA){
    //search by first name 
    //filter by gender, domain and availability
    var fName= isset(DATA.fName) ?  data(DATA.fName) : '';
    var gender=isset(DATA.gender) ?  data(DATA.gender) : '';
    var domain=isset(DATA.domain) ?  data(DATA.domain) : '';
    var availability=isset(DATA.availability) ?  data(DATA.availability) : '';
    var array=users;
    if(fName){
        let result=[];
        array.map(x=>{if(x.first_name.toLowerCase()==fName.toLowerCase()){
            result.push(x);
           }});
        array=result;
    }
    if(gender){
        let result=[];
        array.map(x=>{if(x.gender.toLowerCase()==gender.toLowerCase()){
            result.push(x);
           }});
        array=result;
    }
    if(domain){
        let result=[];
        array.map(x=>{if(x.domain.toLowerCase()==domain.toLowerCase()){
            result.push(x);
           }});
        array=result;
    }
    if(availability){
        let result=[];
        array.map(x=>{if(x.available==availability.toLowerCase()){
            result.push(x);
           }});
        array=result;
    }

    USERS=array; // did you understand what we did? // what did you not understand?
    // use whatsapp
    return USERS;
}

export const getUsers= function(page, limit){
    let array=[];
    for (let i= (page-1)*limit; i < (page*limit) && i<USERS.length; i++) {
        array.push(USERS[i]);    
    }
    return array;
}

export const getLength=function(){
    return USERS.length;
} 

export const showAvailable = function(domain){
    var array=users;
    let result=[];
        array.map(x=>{if(x.available && x.domain==domain){
            result.push(x);
           }});

    return result;
}

export const domainTags = function(){
    var result = {};
    users.map(x=>{
        if(!isset(result[x.domain])){
            result[x.domain]=1;
        }
    })

    var temp = [];
    for(const key in result){
        if(result.hasOwnProperty(key)){
            temp.push(key);
        }
    }
    return {result,temp};
}