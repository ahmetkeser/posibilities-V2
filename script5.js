function refleshjs(){
    Sabit.clearPanel()
    
    /**
     * burada case break ile anlık üretilen sayıları giriş yapılmışcasına fonksiyonlarda 
     * kontrolleri sağlar 
     */
    /*-------------------------------------------------------------------------*/
    let js5ArrayNumbers=[],tut=0,say=0,topla=0
    function randNumber(){ //bu fonksiyon her çağrıldığında 1 ile 9 arasında random üretim geri dönüş yapar.
        let number = Math.floor(Math.random()*9)+1;
        return number;
    }
    function arrayControl(caseNumber){
        if(js5ArrayNumbers.includes(caseNumber)== true) // üretilen sayıyı dizide kontrol eder
        {
            Sabit.pushOutput("pass", caseNumber); // dizide varsa pass geçer
        }else{
            js5ArrayNumbers.push(caseNumber); // sayı dizide yoksa ekler
            Sabit.pushOutput("add :",caseNumber);
            topla += caseNumber
            return caseNumber;
        }
    }
    while(js5ArrayNumbers.length<8){    // dizi uzunluğuna göre tekrarlar
        say ++
        switch( tut=randNumber()){
            case 1:
                arrayControl(1);
                break;
            case 2:
                arrayControl(2);
                break;
            case 3:
                arrayControl(3);
                break;
            case 4:
                arrayControl(4);
                break;
            case 5:
                arrayControl(5);
                break;
            case 6:
                arrayControl(6);
                break;
            case 7:
                arrayControl(7);
                break;
            case 8:
                arrayControl(8);
                break;
            case 9:
                arrayControl(9);
                break;
            default:
                Sabit.pushOutput("geçersiz değer")
                break;
        }
    }
    /*-------------------------------------------------------------------------*/

    Sabit.pushOutput("Döngü sayısı :",say)
    Sabit.pushOutput(js5ArrayNumbers)
    Sabit.pushOutput("Eksik Eleman : ", 45-topla)
    Sabit.img("algo-5")
}
refleshjs()