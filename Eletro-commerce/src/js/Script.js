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
    let slider = document.querySelector(".slider")

    if(sliderRadio1.checked){
        slider.style.marginLeft = "0"
    }
    else if(sliderRadio2.checked){
        slider.style.marginLeft = "-100%"
    }
    else if(sliderRadio3.checked){
        slider.style.marginLeft = "-200%"
    }
}
function update(){
    sliderTrocaInput()
    sliderTrocaImagem()
}
let intervalo = setInterval(update, 4000)

let btn_menu = document.querySelector(".btn-menu")
let menu = document.querySelector(".menu")

btn_menu.addEventListener("click", () => {
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

let sair_menu = document.querySelector(".sair-menu").addEventListener("click", ()=>{
    menu.style.display = "none"
})