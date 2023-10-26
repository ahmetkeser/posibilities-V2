/**
 * burda sabit artışlı görülen kontrollü bir for yapısı kullanıldı.
 * ayrıca oluşan dizide elemanlar stringe çevrilerek include methodu kullanılarak 
 * arama kontrolü yapıldı
 */
function refleshjs(){
    let js3ArrayNumber = [];
    for (let kontrol = 0; kontrol < 9; kontrol++) { 
            let r = Math.floor(Math.random() * 9) + 1;
        if (js3ArrayNumber.toString().includes(r)== false) { // include yapısı string parametrelerde geçerli olduğu için 
            js3ArrayNumber.push(r);                          // dizimiz tür dönüşümü ile geçici olarak metne çerildi.
            console.log(js3ArrayNumber)
        }else if(js3ArrayNumber.length ==8){ // döngü istenilen eleman sayısına ulaşıldığında kırılacak
            break;
        }else{
            kontrol=-1; // şartlarım sağlanmaz ise son işlemi tekrarlar
        }  
    }
    console.log(js3ArrayNumber);
}
console.clear()
refleshjs()