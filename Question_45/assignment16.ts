let guest:string[] = ['Ali','Zaki','Shahan'];

guest.unshift(" zeeshan");//add value start of the arr
console.log(guest);
let len = guest.length;

let mid = len /2;
guest.splice(mid,0,"awais");
console.log(guest);
guest.push("ahmad");
 console.log(guest);
