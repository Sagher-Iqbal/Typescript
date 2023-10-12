const sandwich=(...items:string[]):void=>{
    console.log("Sandwich Name");
    if(items.length===0){
        console.log("Order a Sandwich")

    }
    else{
        items.forEach((item, i)=>{

            console.log(` ${i +1}.${item}`);
        });
    }

}

sandwich("Grilled Cheese.","Egg Sandwich" ," Nutella Sandwich")
sandwich("Ham.","chicken Sandwich")
sandwich("Roast Beef Sandwich" )

