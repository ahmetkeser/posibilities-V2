function refleshjs() {
    const sabit = new Sabit
    sabit.clearPanel()
    
    // Es6 Set özelliğinin Aynı değeri biden fazla kez kaydetmemesi avantajını kullandım.
    /*-------------------------------------------------------------------------*/
    const mySet = new Set() // set bjesi oluşturuyoruz //!set aynı değerleri kaydetmet
    while (mySet.size < 8) {    // set e 8 tane benzersiz eleman üretene kadar dönücek
        let number = Math.floor(Math.random() * 9) + 1
        mySet.add(number)
    }
     
    let tut = 0
    mySet.forEach(function (numbers) { // set içersindeki sayıların toplamını bularak 45 den çıkararak eksik elemanı buluyoruz
        tut += numbers
        sabit.pushOutput("Eklenen değer :",numbers)
    })
    sabit.pushOutput("Eksik Eleman :",45 - tut)
    /*-------------------------------------------------------------------------*/

    sabit.img("algo-8")
}
refleshjs()