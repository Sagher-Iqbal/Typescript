let username:string[]= ['admin','usman','awais','umer','daim'];

for(let a =0; a< username.length; a++){
    if(username[a]== "admin"){
        console.log("Hello admin, would you like to see a status report");
    }
    else {
        console.log(`Hello ${username[a]} thank you for logging in again`);
    }
}