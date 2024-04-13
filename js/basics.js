
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