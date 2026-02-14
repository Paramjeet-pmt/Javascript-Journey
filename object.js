let product={
    title : "Ball Pen",
    rating : 4,
    offer : 5,
    price :270,
};
console.log(product);

const profile={
    username : "Paramjeet",
    age :19,
    isFollow : false,
    followers : 1538,
    follow : 89,
};

console.log(profile);

//To get what type of the data the variable contain we use 

console.log(typeof profile); //As Profile is object so it give output object

console.log(typeof product["rating"]); //By this we can access typeof data a key contains

//We can change value of a object"s key even if object is declared as const

profile["age"] = profile["age"]+1; //Increase age by +1

profile["username"] = "Pmt"; //change username to pmt

console.log(profile);   
