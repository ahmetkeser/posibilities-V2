
/** for ile sonsuz döngü türetilerek şart sağlanması ile beraber kırıldı
 * oluşan dizideki eleman sayıları toplamı 1+2+3+4+5+6+7+8+9 =45 den farkı ile bulundu 
 */
function refleshjs(){
    let js2Array=[] //boş dizi oluştur
    let js2Collect=0 // girilmeyen sayıyı bulmak için bit tutucu
    for(;;){ // sonsuz döngü
        let r = Math.floor(Math.random()*9)+1; // 1 ile 9 arası random sayı üret
        if(js2Array.includes(r)== false ){// üretilen sayı dizide yoksa
            js2Array.push(r); // türetilen sayı diziye eklenir
            js2Collect +=r; // girilen sayıların toplamı tutucuya aktarılır.
            console.log("eleman eklendi :"+r);
            if(js2Array.length==8){// sonsuz döngüyü kırmak için oluşacak eşsiz rakam dizisinin 8 elemandan oluşmasını denetler

                break;  // sonsuz döngüyü kırar
            }
        }   
    }
    console.log(js2Array)
    console.log("Atlanan sayı :",45-js2Collect ) // 1 den 9 a kadar olan sayıların toplamından
                        // türetilen sayılar toplamı çıkarak eksik olan sayı bulunur.
}
console.clear()
refleshjs()