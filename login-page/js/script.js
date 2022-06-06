function checkAnswer(){
    event.preventDefault()
    var edv = document.getElementById('edv')
    var password = document.getElementById('password')
    edvConfirm = false
    passConfirm = false

    if(password.value == ""){
        passConfirm = true
        password.style.border = "0"
    }else{
        password.style.border = "1px solid red"
        passConfirm = false
    }

    if(edv.value == ""){
        edvConfirm = true
        edv.style.border = "0"
    }else{
        edv.style.border = "1px solid red"
        edvConfirm = false
    }

    if(edvConfirm && passConfirm){
        location = './chat-page/chat.html'
    }
}