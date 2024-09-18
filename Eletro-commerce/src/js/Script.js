let sliderRadio1 = document.querySelector("#radio1")
let sliderRadio2 = document.querySelector("#radio2")
let sliderRadio3 = document.querySelector("#radio3")

sliderRadio1.checked = true

function sliderTrocaInput(){
    if(sliderRadio1.checked){
        sliderRadio2.checked = true
        sliderRadio1.checked = false
    }
    else if(sliderRadio2.checked){
        sliderRadio3.checked = true
        sliderRadio2.checked = false
    }
    else if(sliderRadio3.checked){
        sliderRadio1.checked = true
        sliderRadio3.checked = false
    }
}

function sliderTrocaImagem(){
    let imagem1 = document.querySelector(".image1")

    if(sliderRadio1.checked){
        imagem1.style.marginLeft = "0"
    }
    else if(sliderRadio2.checked){
        imagem1.style.marginLeft = "-100%"
    }
    else if(sliderRadio3.checked){
        imagem1.style.marginLeft = "-200%"
    }
}
function update(){
    sliderTrocaInput()
    sliderTrocaImagem()
}
let intervalo = setInterval(update, 1000)