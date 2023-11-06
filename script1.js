function refleshjs() {
    Sabit.clearPanel() //! her sayfada uygulanması gereken temizleme işlemini sabitler.jsde yazarak burda çağırıyoruz.
    
    /** for ile sonsuz döngü türetilerek şart sağlanması ile beraber kırıldı
    * oluşan dizideki eleman sayıları toplamı 1+2+3+4+5+6+7+8+9 =45 den farkı ile bulundu 
    */
    /*-------------------------------------------------------------------------*/
    let js1Array = []; // 8 elemanlı boş dizi oluştur
    let js1Collect = 0 // girilmeyen sayıyı bulmak için bit tutucu
    for (; ;) { // sonsuz döngü
        let r = Math.floor(Math.random() * 9) + 1; // 1 ile 9 arası random sayı üret
        if (js1Array.includes(r) == false) {// üretilen sayı dizide yoksa
            js1Array.push(r); // türetilen sayı diziye eklenir
            js1Collect += r; // girilen sayıların toplamı tutucuya aktarılır.
            Sabit.pushOutput("Eklenen Eleman : ", r)
            if (js1Array.length == 8) {// sonsuz döngüyü kırmak için oluşacak eşsiz rakam dizisinin 8 elemandan oluşmasını denetler
                break;  // sonsuz döngüyü kırar
            }
        }
    }
    /*-------------------------------------------------------------------------*/

    Sabit.pushOutput(js1Array) // üretilen benzersiz sayı dizisini yazdırır.
    Sabit.pushOutput("Atlanan sayı :", (45 - js1Collect))  // türetilen sayılar toplamı çıkarak eksik olan sayı bulunur.
    Sabit.img("algo-1") //hazırlanan algoritmayı taga ekler
}
refleshjs()



