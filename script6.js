/**
 * fonksiyon ile oluşturulan random sayı üretimi 
 * fonksiyon ile oluşturulan eksik sayı kontrolü
 * başarısız işlemlerde döngü sınırını etkilemeyen değer azalışı
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
    let js6ArrayNumbers=[];
    let js6Control=[1,2,3,4,5,6,7,8,9] // eksik sayı kontrolü için oluşturulan dizi
    let tut=0
    function control(value){ // ! bu fonksiyon üretilen random dizi içersinde eksik sayıyı bulur
        for(let deger of js6Control){
            if(value.includes(deger)==false)
            {
                return deger;
            }
        }
    }
    function drive(){ // bu fonksiyon random 1 ile 9 arası sayı üretir
        let newNumber = Math.floor(Math.random()*9)+1;
        return newNumber;
    }
    for(let say=0;say<8;say++){
        tut++
        let meetNumber=drive(); // sayı üretme fonksiyonundan gelen değeri atadık
        if(js6ArrayNumbers.includes(meetNumber)==false){ // üretilen sayının oluşturulan dizide kontrolünü yapar
            pushOutput("Bu dizimde mevcut değil ekliyorum  : ",meetNumber);
            js6ArrayNumbers.push(meetNumber)
        }else{
            pushOutput("bu eleman mevcut",meetNumber,", bu beni etkilemez devamet Yenisini arıyorum ...");
            say--; //! başarısız denemelerin tekrarını sağlar.
        }
    }
    pushOutput(js6ArrayNumbers);
    pushOutput("Döngü çalışma sayınsı :",tut)
    pushOutput("aranan eksik sayı : ",control(js6ArrayNumbers));
    let yapi2 = document.querySelector("#image-div")
    let pushOutput2 = document.createElement("img")
    pushOutput2.src = "image/algo-6.png"
    yapi2.appendChild(pushOutput2)
}
refleshjs()