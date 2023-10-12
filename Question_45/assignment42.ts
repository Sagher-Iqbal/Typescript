const magician2:string[]=['Ricky Jay','Mark Wilson','Harry Anderson','Lance Burton'];

const show_magicians2=(magician:string[]):void=>{
    for(let magicianPerson of magician){
        console.log(`the Great ${magicianPerson}`);
    }
}
show_magicians2(magician2)
