/**
 * burda sabit artışlı görülen kontrollü bir for yapısı kullanıldı.
 * ayrıca oluşan dizide elemanlar stringe çevrilerek include methodu kullanılarak 
 * arama kontrolü yapıldı
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
    let js2ArrayNumber = [];
    let recordNumber=0
    for (let kontrol = 0; kontrol < 9; kontrol++) { 
            let r = Math.floor(Math.random() * 9) + 1;
        if (js2ArrayNumber.toString().includes(r)== false) { // include yapısı string parametrelerde geçerli olduğu için 
            js2ArrayNumber.push(r);                          // dizimiz tür dönüşümü ile geçici olarak metne çerildi.
            recordNumber +=r
            pushOutput("Eklenen Elelam :",js2ArrayNumber[kontrol])
        }else{
            kontrol=-1; // şartlarım sağlanmaz ise son işlemi tekrarlar
        }
        if(js2ArrayNumber.length==8){
        break;
        }  
    }
    pushOutput(js2ArrayNumber);
    let yapi2 = document.querySelector("#image-div")
    let pushOutput2 = document.createElement("img")
    pushOutput2.src = "image/algo-2.png"
    yapi2.appendChild(pushOutput2)
}
refleshjs()