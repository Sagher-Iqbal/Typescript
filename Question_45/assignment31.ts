let username:string[]= ['admin','usman','awais','umer','daim'];
console.log(`${username} list of user is not Empty`);
for(let a= 0; a <= username.length; a++){

    delete username[a]
}
console.log("Empty List");
