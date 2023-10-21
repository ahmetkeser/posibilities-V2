let number=[];
let say=0;
while(say<8){
    console.log(number);
    debugger;
    let randNumber = Math.floor(Math.random()*9)+1;
    if(number.includes(randNumber)== false){
        say ++;
        debugger;
        switch(randNumber){
        case randNumber:
            number[say]=randNumber;
            break;            
        }   
    }
    debugger;
}
//let eksik =number.indexOf("");
//console.log("eksik sayı :",eksik);
console.log(number);