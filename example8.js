/**
 * burada case break ile anlık üretilen sayıları giriş yapılmışcasına fonksiyonlarda 
 * kontrolleri sağlar 
 */



let numbers=[],tut=0,say=0;
function randNumber(){ //bu fonksiyon her çağrıldığında 1 ile 9 arasında random üretim geri dönüş yapar.
    let number = Math.floor(Math.random()*9)+1;
    return number;
}
function arrayControl(caseNumber){
    if(numbers.includes(caseNumber)== true) // üretilen sayıyı dizide kontrol eder
    {
        console.log("pass"); // dizide varsa pass geçer
    }else{
        numbers.push(caseNumber); // sayı dizide yoksa ekler
        console.log("add :",caseNumber);
        return caseNumber;
    }
}
while(numbers.length<8){    // dizi uzunluğuna göre tekrarlar
    console.log("Döngü sayısı :",say++);
    switch( tut=randNumber()){
        //console.log("switce giren sayı",tut)
        case 1:
            arrayControl(1);
            break;
        case 2:
            arrayControl(2);
            break;
        case 3:
            arrayControl(3);
            break;
        case 4:
            arrayControl(4);
            break;
        case 5:
            arrayControl(5);
            break;
        case 6:
            arrayControl(6);
            break;
        case 7:
            arrayControl(7);
            break;
        case 8:
            arrayControl(8);
            break;
        case 9:
            arrayControl(9);
            break;
        default:
            console.log("geçersiz değer")
            break;
    }
}
console.log(numbers)