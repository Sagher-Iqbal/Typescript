const magician3:string[]=['Ricky Jay','Mark Wilson','Harry Anderson','Lance Burton'];

const make_great=(magic:string[]):void=>{

    for(let magic of magician3){
        console.log(magic);
    }
    
}
console.log("Orginal Array")
 make_great(magician3)

 const magicianName=(magic:string[]):string=>{
  const magicianName:String[]= magician3.map(magician=>`the Greet ${magician}`);
    
    return `${magicianName}`;
 }
 console.log("Greet Magician Arry"); 
 //magicianName(magician3)
 const magician9 =magicianName(magician3)
console.log(magician9);
