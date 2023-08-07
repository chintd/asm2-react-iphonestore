export function getUser(){
    const user = localStorage.getItem('loginUser');
    if(user === null){
        return null
    }else{ 
    return JSON.parse(user)
}
}