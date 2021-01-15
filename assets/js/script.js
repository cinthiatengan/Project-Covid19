
let email= document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let emailOk = false
let assuntoOk = false

function validaEmail(){
    let txtEmail=document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML='E-mail invalido'
        txtEmail.style.color='red'
    } else {
        txtEmail.innerHTML='E-mail valido'
        txtEmail.style.color='green'
        emailOk = true
    }
}
function validaAssunto(){
    let txtAssunto=document.querySelector('#txtAssunto')
    if(assunto.value.length>=100){
        txtAssunto.innerHTML='Texto é muito grande, digite no maximo 100 caracteres'
        txtAssunto.style.color='red'
        txtAssunto.style.display='block'
    }else{
        txtAssunto.style.display='none' 
        assuntoOk = true   
    }
}
function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso')
    } else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}
