let guest:string[] = ['Ali','Zaki','Shahan'];
for(let i = 0; i < guest.length;i++){
    console.log(guest[i] +'  ' +"You are inviting for a dinner");
}
let list:any = guest.pop()
console.log(list +" "+ " is not attend this dinner");
console.log("Remaining Guest Name"+"  " +guest);
guest.push("Usman");

console.log("New Member list after Modify" + '  ' + guest);
guest.unshift(" zeeshan");//add value start of the arr
console.log(guest);
let len = guest.length;

let mid = len /2;
guest.splice(mid,0,"awais");
console.log(guest);
guest.push("ahmad");
 console.log(guest);

 let s = ((guest.length)-2);
guest.splice(0,s);
console.log(guest);
console.log("You are still invit" + ' ' + guest);
guest.splice(0,guest.length);
console.log("Empty List" + '  ' + guest);

