// dichiarazione funzione
// function somma(num1,  num2){ //! parametri formali
    //! istruzioni
//     return num1+num2;
// }
//! chiamata a funzione -> chiami tanti paramenti reali quanti sono i formali
// console.log(somma(10, 20)); 
// console.log(somma(18, 33));
// console.log(somma(6, 66));

//* MAP
// let myMap = new Map();
// myMap.set("name", "Numa");
// myMap.set(118, "Ambulanza");
// myMap.set("name1", "Melissa");
// let obj = {name: "Siria", age: 25};
// myMap.set(obj, "Reggiana",);
// let obj1 = {name: "Alfredo", age: 23};
// myMap.set(obj1, "Italiano");
// console.log(myMap);

// let reggiana={name: "Siria"};
// let napoletano={name: "Alfredo"};
// let myMap = new Map();
// myMap.set(reggiana, [{dog: "Numa", color: "white", age: 3}]);
// myMap.set(napoletano, [{cat: "Joy", color: "macchiata", age: 2}]);

// for(let key of myMap.keys()){
//     console.log(myMap.get(key));
// }

//! scrivere una funzione che accetti una stringa contenente solo caratteri x e y e ritorni true se il numero delle x è uguale al numero delle y

function xy(string){
    let numX = 0;
    let numY = 0;

    for(let i = 0; i < string.length; i++ ){
        if(string[i]=="x"){
            numX++;
        }else{
            numY++;
        }
    }
    return numX == numY;
}
function xy(string){
    return string.split("").filter(el => el == "x").length == string.split("").filter(el => el == "y").length;
}
// console.log(xy("xxxyyyyyyyx")); -> false
// console.log(xy("xxxyyy")); --> true



