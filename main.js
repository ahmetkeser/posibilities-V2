document.addEventListener("DOMContentLoaded", function(){
    
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
    var script1 = document.getElementById("script1")
    var script2 = document.getElementById("script2")
    var script3 = document.getElementById("script3")
    var script4 = document.getElementById("script4")
    var script5 = document.getElementById("script5")
    var script6 = document.getElementById("script6")
    var script7 = document.getElementById("script7")
    var script8 = document.getElementById("script8")
    var script9 = document.getElementById("script9")
    var script10 = document.getElementById("script10")
    var script11 = document.getElementById("script11")
    var script12 = document.getElementById("script12")
    button1.addEventListener("click",function(){ // button-1 tetiklenmesi ile script1 dosyasını çalıştırır
        if(script1){
            script1.remove()        //tekrar tekrar çağırırsak aynı tanımlamalardan dolayı hata alıyoruz her tetiklenmede script kaldırılıp tekrar çağırılır
        }
        var newScript = document.createElement("script")
         newScript.id="script1"
        newScript.src="script1.js"
        document.head.appendChild(newScript)
    })
    button2.addEventListener("click",function(){// button-2 tetiklenmesi ile script2 dosyasını çalıştırır
        if(script2){
            script2.remove()
        }
        var newScript = document.createElement("script")
        newScript.id="script2"
        newScript.src="script2.js"
        document.head.appendChild(newScript)
    })
    button3.addEventListener("click",function(){// button-3 tetiklenmesi ile script3 dosyasını çalıştırır
        if(script3){
            script3.remove()
        }
        var newScript = document.createElement("script")
        newScript.id="script3"
        newScript.src="script3.js"
        document.head.appendChild(newScript)
    })
    button4.addEventListener("click",function(){// button-4 tetiklenmesi ile script4 dosyasını çalıştırır
        if(script3){
            script4.remove()
        }
        var newScript = document.createElement("script")
        newScript.id="script4"
        newScript.src="script4.js"
        document.head.appendChild(newScript)
    })
    button5.addEventListener("click",function(){// button-5 tetiklenmesi ile script5 dosyasını çalıştırır
        if(script5){
            script5.remove()
        }
        var newScript = document.createElement("script")
        newScript.id="script5"
        newScript.src="script5.js"
        document.head.appendChild(newScript)
    })
    button6.addEventListener("click",function(){// button-6 tetiklenmesi ile script6 dosyasını çalıştırır
        if(script6){
            script6.remove()
        }
        var newScript = document.createElement("script")
        newScript.id="script6"
        newScript.src="script6.js"
        document.head.appendChild(newScript)
    })
    button7.addEventListener("click",function(){// button-7 tetiklenmesi ile script7 dosyasını çalıştırır
        if(script7){
            script7.remove()
        }
        var newScript = document.createElement("script")
        newScript.id="script7"
        newScript.src="script7.js"
        document.head.appendChild(newScript)
    })
    button8.addEventListener("click",function(){// button-8 tetiklenmesi ile script8 dosyasını çalıştırır
        if(script8){
            script8.remove()
        }
        var newScript = document.createElement("script")
        newScript.id="script8"
        newScript.src="script8.js"
        document.head.appendChild(newScript)
    })
    button9.addEventListener("click",function(){// button-9 tetiklenmesi ile script9 dosyasını çalıştırır
        if(script9){
            script9.remove()
        }
        var newScript = document.createElement("script")
        newScript.id="script9"
        newScript.src="script9.js"
        document.head.appendChild(newScript)
    })
    button10.addEventListener("click",function(){// button-10 tetiklenmesi ile script10 dosyasını çalıştırır
        if(script10){
            script10.remove()
        }
        var newScript = document.createElement("script")
        newScript.id="script10"
        newScript.src="script10.js"
        document.head.appendChild(newScript)
    })
    button11.addEventListener("click",function(){// button-11 tetiklenmesi ile script11 dosyasını çalıştırır
        if(script11){
            script11.remove()
        }
        var newScript = document.createElement("script")
        newScript.id="script11"
        newScript.src="script11.js"
        document.head.appendChild(newScript)
    })
    button12.addEventListener("click",function(){// button-12 tetiklenmesi ile script12 dosyasını çalıştırır
        if(script12){
            script12.remove()
        }
        var newScript = document.createElement("script")
        newScript.id="script12"
        newScript.src="script12.js"
        document.head.appendChild(newScript)
    })
})