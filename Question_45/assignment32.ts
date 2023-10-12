let current_users:string[]= ['admin','usman','awais','umer','daim'];
let new_users:string[]= ['admin','usman','Bilal','amir','adeel'];

function chkUserName(current_users:string[],new_users:string[]):void{
let lowercasCurrenteuser= current_users.map((current)=>
{
    return current.toLowerCase()
} );

for(let newuser of new_users){
   let lowercaseNewUser = newuser.toLowerCase();
   if(lowercasCurrenteuser.includes(lowercaseNewUser)){
    console.log(`UserName ${newuser} is already taken `);
   }
   else{
    console.log(`UserName ${newuser} is not available`)
   }

}
}
chkUserName(current_users,new_users)
