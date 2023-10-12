let guest:string[] = ['Ali','Zaki','Shahan'];

let s = ((guest.length)-2);
guest.splice(0,s);
console.log(guest);
console.log("You are still invit" + ' ' + guest);
guest.splice(0,guest.length);
console.log("Empty List" + '  ' + guest);
