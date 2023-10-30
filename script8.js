
function refleshjs(){
    sessionStorage.clear()
    const clearDOMConsole = document.getElementById("console-div") // console-div tagını temizle
    while(clearDOMConsole.firstChild){
        clearDOMConsole.removeChild(clearDOMConsole.firstChild)
    }
    const clearDOMImage=document.getElementById("image-div")    // image-div tagını temizle
    clearDOMImage.removeChild(clearDOMImage.firstChild)

    function pushOutput(text,textValue=""){ // yeni p tagı oluştur gelen irleri içene yerleştir
        let yapi =document.getElementById("console-div")
        let pushOutput = document.createElement("p")
        pushOutput.textContent = text + textValue
        yapi.appendChild(pushOutput)
    }

    let totalElement = 0
    let carry=[]
    
    while(carry.length < 8) {
        //debugger
        let randNumber = Math.floor(Math.random() * 9) + 1;
        if (carry.indexOf(randNumber) === -1){  // indexof var ise 1 yok ise -1 değeri döner
            carry.push(randNumber)
            sessionStorage.setItem("carry",carry)
            totalElement += randNumber
            pushOutput("Eklenen Sayı :",randNumber);
        }
    }
    const searchNumber =sessionStorage.getItem("carry")// sesionstrogedeki  verileri alır
    for(let i =1;i<=9;i++){
        if(searchNumber.indexOf(i)== -1){ // 1 ile 9 arasındaki sayıları sesionda olup olmadığını kontrol eder.
            pushOutput("Eksik eleman :",i)
        }
    }
    let yapi2 = document.querySelector("#image-div")
    let pushOutput2 = document.createElement("img")
    pushOutput2.src = "image/algo-8.png"
    yapi2.appendChild(pushOutput2)
}
refleshjs()











