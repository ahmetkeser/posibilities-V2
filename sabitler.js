
function Sabit(){
  
    
}
Sabit.prototype.clearPanel= function(){
    const clearDOMConsole = document.getElementById("console-div") // bu kontrol tekrarlanan clicklerde div içersindeki önceki eklenen elemanları temizler (üstüne yazmazını engeller)
    while (clearDOMConsole.firstChild) {
        clearDOMConsole.removeChild(clearDOMConsole.firstChild)
    }
    const clearDOMImage=document.getElementById("image-div")    // image-div tagını temizle
    clearDOMImage.removeChild(clearDOMImage.firstChild)
}
Sabit.prototype.pushOutput= function(text, textValue = ""){
        let yapi = document.querySelector("#console-div")
        let pushOutput = document.createElement("p")
        pushOutput.textContent = text + textValue
        yapi.appendChild(pushOutput)
}
Sabit.prototype.img=function(img){
    let yapi2 = document.querySelector("#image-div")
    let pushOutput2 = document.createElement("img")
    pushOutput2.src = "image/"+img+".png"
    yapi2.appendChild(pushOutput2)
}