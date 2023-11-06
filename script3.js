
function refleshjs() {
    Sabit.clearPanel() //! her sayfada uygulanması gereken temizleme işlemini sabitler.jsde yazarak burda çağırıyoruz.
    const clearDOMConsole = document.getElementById("console-div") // bu kontrol tekrarlanan clicklerde div içersindeki önceki eklenen elemanları temizler (üstüne yazmazını engeller)

    /**
     * for döngüsü artış miktarı içerde artırılabiliyor bu uygulandı,
     * for şartımı sağladığı sürece artış olucak
     * burada aranan eleman indexof komutu ile kontrol edilip aynı numaranın seçilmesini engeller
     * döngüden çıkmadan başka bir döngü ile 9 sayının hangisi atlandığı kontrol edildi
     * 
     */
    /*-------------------------------------------------------------------------*/
    let js3ArrayNumbers = [];
    for (let control = 0; control < 8;) {
        let r = Math.floor(Math.random() * 9) + 1;
        if (js3ArrayNumbers.indexOf(r) === -1) { //bu elemanı numbers dizisinde bulamazsa girer
            js3ArrayNumbers[control] = r;
            control++;                  // kontrolü bir artırır
            Sabit.pushOutput("eleman eklendi :" , r);
        }
        if (control == 8) {
            for (let i = 1; i <=9; i++) { // atlanan elemanı bulmak için kullanıldı
                if (js3ArrayNumbers.indexOf(i) == -1) {
                    Sabit.pushOutput("kaçak eleman : ", i)
                }
            }
        }   
    }
    /*-------------------------------------------------------------------------*/
    Sabit.pushOutput(js3ArrayNumbers);
    Sabit.img("algo-3")
}
refleshjs()