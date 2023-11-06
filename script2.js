 function refleshjs(){
    Sabit.clearPanel() //! her sayfada uygulanması gereken temizleme işlemini sabitler.jsde yazarak burda çağırıyoruz.
    
    /**
     * burda sabit artışlı görülen kontrollü bir for yapısı kullanıldı.
     * ayrıca oluşan dizide elemanlar stringe çevrilerek include methodu kullanılarak 
     * arama kontrolü yapıldı
     */
    /*-------------------------------------------------------------------------*/
    let js2ArrayNumber = [];
    let recordNumber=0
    for (let kontrol = 0; kontrol < 9; kontrol++) { 
            let r = Math.floor(Math.random() * 9) + 1;
        if (js2ArrayNumber.toString().includes(r)== false) { // include yapısı string parametrelerde geçerli olduğu için 
            js2ArrayNumber.push(r);                          // dizimiz tür dönüşümü ile geçici olarak metne çerildi.
            recordNumber +=r
            Sabit.pushOutput("Eklenen Elelam :",js2ArrayNumber[kontrol])
        }else{
            kontrol=-1; // şartlarım sağlanmaz ise son işlemi tekrarlar
        }
        if(js2ArrayNumber.length==8){
        break;
        }  
    }
    /*-------------------------------------------------------------------------*/

    Sabit.pushOutput(js2ArrayNumber);
    Sabit.pushOutput("Atlanan sayı :", 45 - recordNumber)
    Sabit.img("algo-2")
}
refleshjs()