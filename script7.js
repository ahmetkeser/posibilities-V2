
/*üretilen sayılar sesionstorageede tutularak kontrolleri sağlandı*/

function refleshjs(){
    const sabit = new Sabit
    sabit.clearPanel()
    sessionStorage.clear()

    /* üretilen randomları sesionda tutarak kontrol ettim*/
    /*-------------------------------------------------------------------------*/
    let totalElement = 0
    let carry=[]  
    while(carry.length < 8) {
        //debugger
        let randNumber = Math.floor(Math.random() * 9) + 1;
        if (carry.indexOf(randNumber) === -1){  // indexof var ise 1 yok ise -1 değeri döner
            carry.push(randNumber)
            sessionStorage.setItem("carry",carry)
            totalElement += randNumber
            sabit.pushOutput("Eklenen Sayı :",randNumber);
        }
    }
    const searchNumber =sessionStorage.getItem("carry")// sesionstrogedeki  verileri alır
    /*-------------------------------------------------------------------------*/

    sabit.pushOutput("Eklenen elemanlar :",carry)
    sabit.pushOutput("Eksik eleman",45-totalElement)
    sabit.img("algo-7")
}
refleshjs()











