function refleshjs(){
    const sabit = new Sabit
    sabit.clearPanel()
    
    /**
     * fonksiyon ile oluşturulan random sayı üretimi 
     * fonksiyon ile oluşturulan eksik sayı kontrolü
     * başarısız işlemlerde döngü sınırını etkilemeyen değer azalışı
     */
    /*-------------------------------------------------------------------------*/
    let js6ArrayNumbers=[];
    let js6Control=[1,2,3,4,5,6,7,8,9] // eksik sayı kontrolü için oluşturulan dizi
    let tut=0
    function control(value){ // ! bu fonksiyon üretilen random dizi içersinde eksik sayıyı bulur
        for(let deger of js6Control){
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
        tut++
        let meetNumber=drive(); // sayı üretme fonksiyonundan gelen değeri atadık
        if(js6ArrayNumbers.includes(meetNumber)==false){ // üretilen sayının oluşturulan dizide kontrolünü yapar
            sabit.pushOutput("Dizimde mevcut değil ekliyorum  : ",meetNumber);
            js6ArrayNumbers.push(meetNumber)
        }else{
            sabit.pushOutput("bu eleman mevcut",meetNumber,", bu beni etkilemez devamet Yenisini arıyorum ...");
            say--; //! başarısız denemelerin tekrarını sağlar.
        }
    }
    /*-------------------------------------------------------------------------*/

    sabit.pushOutput(js6ArrayNumbers);
    sabit.pushOutput("Döngü çalışma sayınsı :",tut)
    sabit.pushOutput("aranan eksik sayı : ",control(js6ArrayNumbers));
    sabit.img("algo-6")
}
refleshjs()