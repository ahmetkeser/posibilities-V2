
/**
 * for döngüsü artış miktarı içerde artırılabiliyor bu uygulandı,
 * for şartımı sağladığı sürece artış olucak
 * burada aranan eleman indexof komutu ile kontrol edilip aynı numaranın seçilmesini engeller
 * döngüden çıkmadan başka bir döngü ile 9 sayının hangisi atlandığı kontrol edildi
 * 
 */
function refleshjs() {
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
    let js3ArrayNumbers = [];
    for (let control = 0; control < 8;) {
        let r = Math.floor(Math.random() * 9) + 1;
        if (js3ArrayNumbers.indexOf(r) === -1) { //bu elemanı numbers dizisinde bulamazsa girer
            js3ArrayNumbers[control] = r;
            control++;                  // kontrolü bir artırır
            pushOutput("eleman eklendi :" , r);
        }
        if (control == 8) {
            for (let i = 1; i < 9; i++) { // atlanan elemanı bulmak için kullanıldı
                if (js3ArrayNumbers.indexOf(i) == -1) {
                    pushOutput("kaçak eleman : ", i)
                }
            }
        }   
    }
    pushOutput(js3ArrayNumbers);
    let yapi2 = document.querySelector("#image-div")
    let pushOutput2 = document.createElement("img")
    pushOutput2.src = "image/algo-3.png"
    yapi2.appendChild(pushOutput2)
}
refleshjs()