
// Es6 Set özelliğinin Aynı değeri biden fazla kez kaydetmemesi avantajını kullandım.

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
    const mySet = new Set() // set bjesi oluşturuyoruz //!set aynı değerleri kaydetmet
    while (mySet.size < 8) {    // set e 8 tane benzersiz eleman üretene kadar dönücek
        let number = Math.floor(Math.random() * 9) + 1
        mySet.add(number)
    }
     
    let tut = 0
    mySet.forEach(function (numbers) { // set içersindeki sayıların toplamını bularak 45 den çıkararak eksik elemanı buluyoruz
        tut += numbers
        pushOutput("Eklenen değer :",numbers)
    })
    pushOutput("Eksik Eleman :",45 - tut)

    let yapi2 = document.querySelector("#image-div")
    let pushOutput2 = document.createElement("img")
    pushOutput2.src = "image/algo-8.png"
    yapi2.appendChild(pushOutput2)
}
refleshjs()