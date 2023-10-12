const cars=(manufacturer :string,model:string,...Properties:[string,any][]):any=>{

    const car={
        manufacturer,
        model,
    };

    for(const[key,value]of Properties){

        //car[key]=value;
           
    }
    return car;

}
const mycar= cars("Honda","City",["Color" , "Red"]);
console.log(mycar);













