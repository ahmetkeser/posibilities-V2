/**
 * burda sabit artışlı görülen kontrollü bir for yapısı kullanıldı.
 * ayrıca oluşan dizide elemanlar stringe çevrilerek include methodu kullanılarak 
 * arama kontrolü yapıldı
 */
function refleshjs(){
    let js3ArrayNumber = [];
    let recordNumber=0
    for (let kontrol = 0; kontrol < 9; kontrol++) { 
            let r = Math.floor(Math.random() * 9) + 1;
        if (js3ArrayNumber.toString().includes(r)== false) { // include yapısı string parametrelerde geçerli olduğu için 
            js3ArrayNumber.push(r);                          // dizimiz tür dönüşümü ile geçici olarak metne çerildi.
            recordNumber +=r
            console.log(js3ArrayNumber)
        }else{
            kontrol=-1; // şartlarım sağlanmaz ise son işlemi tekrarlar
        }
        if(js3ArrayNumber.length==8){
        break;
        }  
    }
    console.log(js3ArrayNumber);
}
console.clear()
refleshjs()