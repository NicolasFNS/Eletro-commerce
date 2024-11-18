let userEmail = ""
let userPassword = ""

let btnLogin = document.querySelectorAll("#login");

btnLogin.forEach(element => {
    element.addEventListener("click", ()=>{
        Swal.fire({
            title: "Login",
            html: `
              <div class="conteiner-input">  
              <input type="text" id="email" class="swal2-input" name="email" placeholder="Email">
              <input type="password" id="password" class="swal2-input" placeholder="Senha">
              </div>
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
                    Swal.fire({
                        title: "Erro ao logar",
                        customClass: {
                            popup: 'popup-login'
                        }
                    })    
                }else{
                    if(email == userEmail && password == userPassword){
                        Swal.fire({
                            title: "Logado",
                            customClass: {
                                popup: 'popup-login'
                            }
                        })
                        btnLogin.textContent = "Logado"
                        btnLogin.disabled = true
                    }else{
                        Swal.fire({
                            title: "Erro ao logar",
                            customClass: {
                                popup: 'popup-login'
                            }
                        })
                    }
                }
                
            }else if (result.isDenied){
                Swal.fire({
                    title: "Sign-up",
                    html: `
                    <div class="conteiner-input">  
                    <input type="text" id="email" class="swal2-input" placeholder="Email">
                    <input type="password" id="password" class="swal2-input" placeholder="Senha">
                    </div>
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
                            Swal.fire({
                                title: "Campos vazios",
                                customClass: {
                                    popup: 'popup-login'
                                }
                            })    
                        }else{
                            localStorage.setItem('userEmail', JSON.stringify(userEmail));
                            Swal.fire({
                                title: "Cadastrado",
                                customClass: {
                                    popup: 'popup-login'
                                }
                            });
                        }

                        
                    }else if(result.isDenied){
                        Swal.fire({
                            title: "Cancelado",
                            customClass: {
                                popup: 'popup-login'
                            }
                        })
                    }
                })
            }
          });
    })
});

