function cagir(deger){
    var script = document.createElement("script")
    script.src ="example"+deger+".js"
    
}
document.addEventListener("DOMContentLoaded", function(){
    var buton1 = document.getElementById("example-10")
    var buton2 = document.getElementById("example-11")
    var buton3 = document.getElementById("example-12")
    var script1 = document.getElementById("script1")
    var script2 = document.getElementById("script2")
    var script3 = document.getElementById("script3")
    buton1.addEventListener("click",function(){
        if(script1){
            script1.remove()
        }
        var newScript = document.createElement("script")
        newScript.id="script1"
        newScript.src="example-4.js"
        document.head.appendChild(newScript)
    })
    buton2.addEventListener("click",function(){
        if(script2){
            script2.remove()
        }
        var newScript = document.createElement("script")
        newScript.id="script2"
        newScript.src="example-5.js"
        document.head.appendChild(newScript)
    })
    buton3.addEventListener("click",function(){
        if(script3){
            script3.remove()
        }
        var newScript = document.createElement("script")
        newScript.id="script3"
        newScript.src="example-6.js"
        document.head.appendChild(newScript)
    })


})
const deneme ={
    a:"ahmet",
    b:"Baki",
    c:"cemil"
}
for (let gel in deneme){
    console.log(deneme[gel])
}

const texts =["ali","veli","keli"]
for(let ara in texts){
    console.log(texts[ara])
}

const text ="mikail"
for(let next in text){
    // console.log(text[next])
    console.log(...text)
}