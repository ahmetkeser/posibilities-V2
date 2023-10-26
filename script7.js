/**
 * fonksiyon ile oluşturulan random sayı üretimi 
 * fonksiyon ile oluşturulan eksik sayı kontrolü
 * başarısız işlemlerde döngü sınırını etkilemeyen değer azalışı
 */
function refleshjs(){
    let js7ArrayNumbers=[];
    let js7Control=[1,2,3,4,5,6,7,8,9] // eksik sayı kontrolü için oluşturulan dizi
    function control(value){ // ! bu fonksiyon üretilen random dizi içersinde eksik sayıyı bulur
        for(let deger of js7Control){
            if(value.includes(deger)==false)
            {
                return deger;
            }
        }
    }
    function drive(){ // bu fonksiyon random 1 ile 9 arası sayı üretir
        let newNumber = Math.floor(Math.random()*9)+1;
        return newNumber;
    }
    for(let say=0;say<8;say++){
        let meetNumber=drive(); // sayı üretme fonksiyonundan gelen değeri atadık
        if(js7ArrayNumbers.includes(meetNumber)==false){ // üretilen sayının oluşturulan dizide kontrolünü yapar
            console.log("Bu dizimde mevcut değil ekliyorum  : ",meetNumber);
            js7ArrayNumbers.push(meetNumber)
        }else{
            console.log("bu eleman mevcut",meetNumber,", bu beni etkilemez devamet Yenisini arıyorum ...");
            say--; //! başarısız denemelerin tekrarını sağlar.
        }
    }
    console.log(js7ArrayNumbers);
    console.log("aranan eksik sayı : ",control(js7ArrayNumbers));
}
console.clear()
refleshjs()