/** for ile sonsuz döngü türetilerek şart sağlanması ile beraber kırıldı
 * oluşan dizideki eleman sayıları toplamı 1+2+3+4+5+6+7+8+9 =45 den farkı ile bulundu 
 */
function refleshjs() {
    // const clearDOMConsole = document.getElementById("console-div") // bu kontrol tekrarlanan clicklerde div içersindeki önceki eklenen elemanları temizler (üstüne yazmazını engeller)
    // while (clearDOMConsole.firstChild) {
    //     clearDOMConsole.removeChild(clearDOMConsole.firstChild)
    // }
    // const clearDOMImage = document.getElementById("image-div") // bu kontrol tekrarlanan clicklerde div içersindeki önceki eklenen elemanları temizler (üstüne yazmazını engeller)
    // while (clearDOMImage.firstChild) {
    //     clearDOMImage.removeChild(clearDOMImage.firstChild)
    // }
    sabit()

    function pushOutput(text, textValue = "") {
        let yapi = document.querySelector("#console-div")
        let pushOutput = document.createElement("p")
        pushOutput.textContent = text + textValue
        yapi.appendChild(pushOutput)

    }
    let js1Array = []; // 8 elemanlı boş dizi oluştur
    let js1Collect = 0 // girilmeyen sayıyı bulmak için bit tutucu
    for (; ;) { // sonsuz döngü
        let r = Math.floor(Math.random() * 9) + 1; // 1 ile 9 arası random sayı üret
        if (js1Array.includes(r) == false) {// üretilen sayı dizide yoksa
            js1Array.push(r); // türetilen sayı diziye eklenir
            js1Collect += r; // girilen sayıların toplamı tutucuya aktarılır.
            pushOutput("Eklenen Eleman : ", r)
            if (js1Array.length == 8) {// sonsuz döngüyü kırmak için oluşacak eşsiz rakam dizisinin 8 elemandan oluşmasını denetler
                break;  // sonsuz döngüyü kırar
            }
        }
    }
    pushOutput(js1Array) // üretilen benzersiz sayı dizisini yazdırır.
    pushOutput("Atlanan sayı :", (45 - js1Collect))  // türetilen sayılar toplamı çıkarak eksik olan sayı bulunur.
    let yapi2 = document.querySelector("#image-div")
    let pushOutput2 = document.createElement("img")
    pushOutput2.src = "image/algo-1.png"
    yapi2.appendChild(pushOutput2)

}
import {sabit} from "./sabitler.js";    // sabit kullanılan fonksiyonlar bir js dosyasında toplandı
refleshjs()


