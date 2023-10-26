
/**
 * for döngüsü artış miktarı içerde artırılabiliyor bu uygulandı,
 * for şartımı sağladığı sürece artış olucak
 * burada aranan eleman indexof komutu ile kontrol edilip aynı numaranın seçilmesini engeller
 * döngüden çıkmadan başka bir döngü ile 9 sayının hangisi atlandığı kontrol edildi
 * 
 */
function refleshjs(){
    let js4ArrayNumbers = [];
    for (let control = 0; control < 8;) {
        let r = Math.floor(Math.random() * 9) + 1;
        if (js4ArrayNumbers.indexOf(r) === -1) { //bu elemanı numbers dizisinde bulamazsa girer
        js4ArrayNumbers[control]=r;
            control++;                  // kontrolü bir artırır
            console.log("eleman eklendi :" + r);
        }
        if(control == 8){
            for(let i =1;i<9;i++){ // atlanan elemanı bulmak için kullanıldı
                if(js4ArrayNumbers.indexOf(i)==-1){
                    console.log("kaçak eleman : ", i)
                }
            }
        }
    }
    console.log(js4ArrayNumbers);
}
console.clear()
refleshjs()