/**
 * while döngüsü ile şart belirlenerek işlem içersinde artış yapıldı
 */

let numbers=[];
while(numbers.length<8){
    let randNumber = Math.floor(Math.random()*9)+1;
    if(numbers.indexOf(randNumber)==-1){  // indexof var ise 1 yok ise -1 değeri döner
        numbers.push(randNumber)
        console.log(randNumber);
    }
    console.log(numbers.length);
}
console.log(numbers);