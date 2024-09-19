let userEmail = ""
let userPassword = ""

let btnLogin = document.querySelector(".login");

btnLogin.addEventListener("click", () => {
  Swal.fire({
    title: "Login",
    html: `
      <input type="text" id="email" class="swal2-input" placeholder="Email">
      <input type="password" id="password" class="swal2-input" placeholder="Senha">
    `,
    showDenyButton: true,
    confirmButtonText: "Entrar",
    denyButtonText: "Não cadastrado",
    customClass: {
      popup: 'popup-login'
    }
  }).then((result) => {
    if (result.isConfirmed){  
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value

        if(userEmail == "" || userPassword == ""){
            Swal.fire("Erro ao Logar");    
        }else{
            if(email == userEmail && password == userPassword){
                Swal.fire("Logado!");
                btnLogin.textContent = "Logado"
                btnLogin.disabled = true
            }else{
                Swal.fire("Erro ao logar")
            }
        }
        
    }else if (result.isDenied){
        Swal.fire({
            title: "Sign-up",
            html: `
            <input type="text" id="email" class="swal2-input" placeholder="Email">
            <input type="password" id="password" class="swal2-input" placeholder="Senha">
            `,
            showDenyButton: true,
            confirmButtonText: "Salvar",
            denyButtonText: "cancelar",
            customClass: {
            popup: 'popup-login'
            }
        }).then((result) => {
            if(result.isConfirmed){
                userEmail = document.getElementById("email").value
                userPassword = document.getElementById("password").value

                if(userEmail == "" || userPassword == ""){
                    Swal.fire("Erro ao Cadastrar");    
                }else{
                    Swal.fire("Cadastrado!");
                    
                }
                
            }else if(result.isDenied){
                Swal.fire("Cancelado!")
            }
        })
    }
  });
});
