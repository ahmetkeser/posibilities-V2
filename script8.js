// çalışma 1 butonu ile example1.js dosyasını tetikler
document.addEventListener("DOMContentLoaded", function () {
    let calistir1 = document.getElementById("example-1")
    calistir1.addEventListener("click", function () {
        console.clear()
        ekle = document.createElement("script")
        ekle.src = "example1.js"
        document.head.appendChild(ekle)
    })
    let calistir2 = document.getElementById("example-3")
    calistir2.addEventListener("click", function () {
        ekle=""
        ekle = document.createElement("script")
        ekle.src = "example3.js"
        document.head.appendChild(ekle)

    })

})
// çalışma 2 butonu ile example1.js dosyasını tetikler



// document.addEventListener("DOMContentLoaded", function () {
//     let calistir2 = document.getElementById("example-3")
//     calistir2.addEventListener("click", function () {
//         console.clear()
//         let ekle = document.createElement("script")
//         ekle.src = "example3.js"
//         document.head.appendChild(ekle)
//     })
// })












