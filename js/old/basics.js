
/*if (2>5) {
    console.log("2>5");
} 
else if ( 2===5 ) {
    console.log("2=5");
}  
else if ( 1===5 ){
console.log("condition3");
}
else {
console.log("last line");
}

console.log("hfhsdlkh");



if (a>50) {
    console.log("a is more than 50");
    } else if (a<100) {
    console.log("a is less than 100"); 
} else if (a>50 && a<100){
    console.log("a>50 && a<100")
} else if (a<50 || a>100) {
    console.log("a<50 || a>100")
} else {
    console.log("the end")
}
*/

let car= "sdff"
switch (car) {
    case "Porsche": console.log("Porsche");        
        break;
        case "Toyota": console.log("Toyota");        
        break;

    default:console.log("smth");    
        break;
}

/*for (let 
    i = 0; 
    i < array.length; 
    i++) {
    const element = array[i];
    
}

for (let i=0; i <10; i++){
    console.log(i);
}



let i=0;
while (i <10) {
    console.log("Before increment" + 1);
    i++; //console.log(i); before incrementing it will got ill 9
    console.log(i);// after incrementing it will 10
}

for (let i = 0; i <= 20; i++) {
    console.log("A,B");
    }

for (let i = 0; i <= 60; i++) {
    console.log("A,A,A,A,A,B");
    }


for (let i = 1; i <=60; i++) {
  if (i % 6 == 0){
    console.log("B");
  }else {
    console.log("A");
  }
    
}
*/

//1,2,a,4,b,a,7,8,a,b,11,a,13,14,c



  for (let i=1; i<=15; i++){
    if (i == 15) {
        console.log("c");}
        else if (i % 5 == 0) {
            console.log("b")
             } else if (i % 3 == 0) {
                console.log("a")
                    }else {
                        console.log(i);
      }
  }


  
let array = ["world", "hello", "abc"]
array.shift[2];
array.shift[1];
array.pop["hello"]

console.log(array);

////////////////////////
let array = ["world", "hello", "abc"]
let add1 = array.pop();
let add2 = array.pop();
let add3 = array.unshift("Hello");

console.log(array)



////////////////////////


let numbersArray = [1, 12, 5, 45, 7];
const numbersArrayNew = numbersArray.map(function(number){
    return number*number
});
const numbersArrayNewFiltered = numbersArrayNew.filter(function(number){
    return number < 100;
})

const numbersArrayNewForEach = numbersArray.forEach(function(number){
    return number*number
});


console.log(numbersArrayNew) 
console.log(numbersArrayNewFiltered) 
console.log(numbersArrayNewForEach) 


let namesArray = ["henry", "bella", "sibel", "tina"];
const result6 = namesArray.every(function(word){
    if (typeof word  === "string") {
        return true;
    }})

console.log(result6)

let namesArrayJohn = namesArray.unshift("john");
console.log(namesArray)

let namesArrayJohnSorted = namesArrayJohn.sort();
console.log(namesArrayJohnSorted);

/////////////// splice

let arr17= ["Jan", "mar", "apr", "jun"];
//inserts at index 1
arr17.splice(1, 0, "feb");
console.log(arr17)
//reolaces element at place 4
arr17.splice(4,1, "may");
console.log(arr17)
