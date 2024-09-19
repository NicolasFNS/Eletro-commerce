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

let btnLogin = document.querySelector(".login")

btnLogin.addEventListener("click", ()=>{
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
})