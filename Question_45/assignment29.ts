let favorite_fruits:string[]= ['Mange','Banana','Apple'];
console.log(favorite_fruits);

for(let a = 0; a <favorite_fruits.length; a++ ){

    if(favorite_fruits[a]== favorite_fruits[0]){
        console.log("You really like  Mango");
    }
    else if (favorite_fruits[a]== favorite_fruits[1]){
        console.log("You really like BANANA");
    
    }
    else{
        console.log("You really like Apple");
    }
}
