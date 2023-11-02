document.addEventListener("DOMContentLoaded", function () {
    // parametre tanımlama bölgesi
    var button1 = document.getElementById("button-1")
    var button2 = document.getElementById("button-2")
    var button3 = document.getElementById("button-3")
    var button4 = document.getElementById("button-4")
    var button5 = document.getElementById("button-5")
    var button6 = document.getElementById("button-6")
    var button7 = document.getElementById("button-7")
    var button8 = document.getElementById("button-8")
    var button9 = document.getElementById("button-9")
    var button10 = document.getElementById("button-10")
    var button11 = document.getElementById("button-11")
    var button12 = document.getElementById("button-12")
    function scriptCreate(scrptId) {
        const scriptControl = document.getElementsByTagName('script')    // ana html oluşumunda 3 sabit script var
        if(scriptControl.length>=4){                                          // Her clickte yeni bir script oluşuyor ve bu karmaşaya sebebiyet veriyor
            scriptControl[3].parentNode.removeChild(scriptControl[3])   // her oluşan script işi bittiğinde yeni bir script eklenmek istenirse bir önceki eklenen scripti siler
        }
        var newScript = document.createElement("script")        // yoksa istenen biçimde oluşturur
        newScript.id = scrptId
       //newScript.type="module"
        newScript.src = scrptId + ".js"
        document.body.appendChild(newScript)
        
        
    }
    // var newScriptSabitler = document.createElement("script")
    //     newScriptSabitler.id = "sabitler"
    //     newScriptSabitler.type="module"
    //     newScriptSabitler.src = "sabitler.js"
    //     document.head.appendChild(newScriptSabitler)
    // //scriptCreate("sabitler")
    let clied = false

    button1.addEventListener("click", function () { // button-1 tetiklenmesi ile script1 dosyasını çalıştırır
        scriptCreate("script1")
       
    })
    button2.addEventListener("click", function () {// button-2 tetiklenmesi ile script2 dosyasını çalıştırır
        scriptCreate("script2")
    })
    button3.addEventListener("click", function () {// button-3 tetiklenmesi ile script3 dosyasını çalıştırır
        scriptCreate("script3")
    })
    button4.addEventListener("click", function () {// button-4 tetiklenmesi ile script4 dosyasını çalıştırır
        scriptCreate("script4")
    })
    button5.addEventListener("click", function () {// button-5 tetiklenmesi ile script5 dosyasını çalıştırır
        scriptCreate("script5")
    })
    button6.addEventListener("click", function () {// button-6 tetiklenmesi ile script6 dosyasını çalıştırır
        scriptCreate("script6")
    })
    button7.addEventListener("click", function () {// button-7 tetiklenmesi ile script7 dosyasını çalıştırır
        scriptCreate("script7")
    })
    button8.addEventListener("click", function () {// button-8 tetiklenmesi ile script8 dosyasını çalıştırır
        scriptCreate("script8")
    })
    button9.addEventListener("click", function () {// button-9 tetiklenmesi ile script9 dosyasını çalıştırır
        var newScript = document.createElement("script")
        newScript.id = "script9"
        newScript.src = "script9.js"
        document.head.appendChild(newScript)
    })
    button10.addEventListener("click", function () {// button-10 tetiklenmesi ile script10 dosyasını çalıştırır
        var newScript = document.createElement("script")
        newScript.id = "script10"
        newScript.src = "script10.js"
        document.head.appendChild(newScript)
    })
    button11.addEventListener("click", function () {// button-11 tetiklenmesi ile script11 dosyasını çalıştırır
        var newScript = document.createElement("script")
        newScript.id = "script11"
        newScript.src = "script11.js"
        document.head.appendChild(newScript)
    })
    button12.addEventListener("click", function () {// button-12 tetiklenmesi ile script12 dosyasını çalıştırır
        var newScript = document.createElement("script")
        newScript.id = "script12"
        newScript.src = "script12.js"
        document.head.appendChild(newScript)
    })
    function deneme(){
        console.log("deneme çalışır")
    }

})