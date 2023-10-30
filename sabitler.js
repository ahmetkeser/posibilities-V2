
export function sabit() {
    const clearDOMConsole = document.getElementById("console-div") // bu kontrol tekrarlanan clicklerde div içersindeki önceki eklenen elemanları temizler (üstüne yazmazını engeller)
    while (clearDOMConsole.firstChild) {
        clearDOMConsole.removeChild(clearDOMConsole.firstChild)
    }
    const clearDOMImage = document.getElementById("image-div") // bu kontrol tekrarlanan clicklerde div içersindeki önceki eklenen elemanları temizler (üstüne yazmazını engeller)
    while (clearDOMImage.firstChild) {
        clearDOMImage.removeChild(clearDOMImage.firstChild)
    }
    console.log("çağırıldı")
}
