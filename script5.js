/**
 * while döngüsü ile şart belirlenerek işlem içersinde artış yapıldı
 */
function refleshjs(){
    let js5ArrayNumbers=[];
    while(js5ArrayNumbers.length<8){
        let randNumber = Math.floor(Math.random()*9)+1;
        if(js5ArrayNumbers.indexOf(randNumber)==-1){  // indexof var ise 1 yok ise -1 değeri döner
            js5ArrayNumbers.push(randNumber)
            console.log(randNumber);
        }
        console.log(js5ArrayNumbers.length);
    }
    console.log(js5ArrayNumbers);
}
console.clear()
refleshjs()