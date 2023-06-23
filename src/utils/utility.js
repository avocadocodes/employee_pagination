export const isset=(data)=>{
    if(data == undefined){
        return false;
    }
    return true;
}

export const data = (data)=>{
    if(data){
        return data;
    }
    return '';
}