
/** for ile sonsuz döngü türetilerek şart sağlanması ile beraber kırıldı
 * oluşan dizideki eleman sayıları toplamı 1+2+3+4+5+6+7+8+9 =45 den farkı ile bulundu 
 */
let dizi=[]; // 8 elemanlı boş dizi oluştur
let topla=0 // girilmeyen sayıyı bulmak için bit tutucu
for(;;){ // sonsuz döngü
    let r = Math.floor(Math.random()*9)+1; // 1 ile 9 arası random sayı üret
    if(dizi.includes(r)== false ){// üretilen sayı dizide yoksa
        dizi.push(r); // türetilen sayı diziye eklenir
        topla +=r; // girilen sayıların toplamı tutucuya aktarılır.
        console.log("eleman eklendi :"+r);
        if(dizi.length==8){// sonsuz döngüyü kırmak için oluşacak eşsiz rakam dizisinin 8 elemandan oluşmasını denetler

            break;  // sonsuz döngüyü kırar
        }
    }   
}
console.log(dizi)
console.log("Atlanan sayı :",45-topla ) // 1 den 9 a kadar olan sayıların toplamından
                       // türetilen sayılar toplamı çıkarak eksik olan sayı bulunur.
console.log("BAŞARILI")