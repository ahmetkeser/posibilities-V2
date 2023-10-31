/**
 * burada case break ile anlık üretilen sayıları giriş yapılmışcasına fonksiyonlarda 
 * kontrolleri sağlar 
 */


function refleshjs(){
    const clearDOMConsole = document.getElementById("console-div") // bu kontrol tekrarlanan clicklerde div içersindeki önceki eklenen elemanları temizler (üstüne yazmazını engeller)
    while (clearDOMConsole.firstChild) {
        clearDOMConsole.removeChild(clearDOMConsole.firstChild)
    }
    const clearDOMImage = document.getElementById("image-div") // bu kontrol tekrarlanan clicklerde div içersindeki önceki eklenen elemanları temizler (üstüne yazmazını engeller)
    while (clearDOMImage.firstChild) {
        clearDOMImage.removeChild(clearDOMImage.firstChild)
    }

    function pushOutput(text, textValue = "") {
        let yapi = document.querySelector("#console-div")
        let pushOutput = document.createElement("p")
        pushOutput.textContent = text + textValue
        yapi.appendChild(pushOutput)
    }

    let js7ArrayNumbers=[],tut=0,say=0;
    function randNumber(){ //bu fonksiyon her çağrıldığında 1 ile 9 arasında random üretim geri dönüş yapar.
        let number = Math.floor(Math.random()*9)+1;
        return number;
    }

    function pushOutput(text, textValue = "") {
        let yapi = document.querySelector("#console-div")
        let pushOutput = document.createElement("p")
        pushOutput.textContent = text + textValue
        yapi.appendChild(pushOutput)
    }

    function arrayControl(caseNumber){
        if(js7ArrayNumbers.includes(caseNumber)== true) // üretilen sayıyı dizide kontrol eder
        {
            pushOutput("Önceden eklenen eleman :", caseNumber); // dizide varsa pass geçer
        }else{
            js7ArrayNumbers.push(caseNumber); // sayı dizide yoksa ekler
            pushOutput("add :",caseNumber);
            return caseNumber;
        }
    }
    
    while(js7ArrayNumbers.length<8){    // dizi uzunluğuna göre tekrarlar
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
    pushOutput("Tüm Eklenen Sayılar :",js7ArrayNumbers)

}
refleshjs()