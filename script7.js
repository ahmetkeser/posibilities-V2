
/*üretilen sayılar sesionstorageede tutularak kontrolleri sağlandı*/

function refleshjs(){
    Sabit.clearPanel()
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
            Sabit.pushOutput("Eklenen Sayı :",randNumber);
        }
    }
    const searchNumber =sessionStorage.getItem("carry")// sesionstrogedeki  verileri alır
    /*-------------------------------------------------------------------------*/

    Sabit.pushOutput("Eklenen elemanlar :",carry)
    Sabit.pushOutput("Eksik eleman",45-totalElement)
    Sabit.img("algo-7")
}
refleshjs()











