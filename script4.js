/**
 * while döngüsü ile şart belirlenerek işlem içersinde artış yapıldı
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
    let totalElement = 0
    let js4ArrayNumbers = [];
    while (js4ArrayNumbers.length < 8) {
        let randNumber = Math.floor(Math.random() * 9) + 1;
        if (js4ArrayNumbers.indexOf(randNumber) === -1) {  // indexof var ise 1 yok ise -1 değeri döner
            js4ArrayNumbers.push(randNumber)
            totalElement += randNumber
            pushOutput("Eklenen Sayı :",randNumber);
        }
    }
    pushOutput(js4ArrayNumbers);
    pushOutput("Dizideki Eksik Eleman :", 45 - totalElement)
    let yapi2 = document.querySelector("#image-div")
    let pushOutput2 = document.createElement("img")
    pushOutput2.src = "image/algo-4.png"
    yapi2.appendChild(pushOutput2)
}
refleshjs()