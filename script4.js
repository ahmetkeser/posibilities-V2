
function refleshjs() {
    Sabit.clearPanel()
    
    /**
     * while döngüsü ile şart belirlenerek işlem içersinde artış yapıldı
     */
    /*-------------------------------------------------------------------------*/
    let totalElement = 0
    let js4ArrayNumbers = [];
    while (js4ArrayNumbers.length < 8) {
        let randNumber = Math.floor(Math.random() * 9) + 1;
        if (js4ArrayNumbers.indexOf(randNumber) === -1) {  // indexof var ise 1 yok ise -1 değeri döner
            js4ArrayNumbers.push(randNumber)
            totalElement += randNumber
            Sabit.pushOutput("Eklenen Sayı :",randNumber);
        }
    }
    /*-------------------------------------------------------------------------*/

    Sabit.pushOutput(js4ArrayNumbers);
    Sabit.pushOutput("Dizideki Eksik Eleman :", 45 - totalElement)
    Sabit.img("algo-4")
}
refleshjs()