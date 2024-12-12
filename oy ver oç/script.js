let kilicdar = document.querySelector(".kilicdar")
let alibaba = document.querySelector(".alibaba")
let rte = document.querySelector(".rte")
let oyverkk = document.querySelector(".oyverkk")
let oyverali = document.querySelector(".oyverali")
let oyverrte = document.querySelector(".rteoyver")
let width1 = 0
let width2 = 0
oyverkk.addEventListener("click",function() {
    width1 += 80
    kilicdar.style.marginTop = width1 + "px"
})

oyverali.addEventListener("click", function(){
    width2 += 80
    alibaba.style.marginTop = width2 + "px"
})

oyverrte.addEventListener("click",function(){
    alert("TEBRİKLER OYUNUZU BAŞARIYLA KULLANDINIZ")
})