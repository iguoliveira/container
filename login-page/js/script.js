function goToChat(){
    
    let edv = document.getElementById("edv")
    let pass = document.getElementById("password")

    if(edv.value == ""){
        event.preventDefault();
        if(pass.value == ""){
            pass.style.border = "1px solid red"
        }else{
            pass.style.border = "0"
        }
        edv.style.border = "1px solid red"
    }

    else if(pass.value == ""){
        event.preventDefault();
        edv.style.border = "0"
        pass.style.border = "1px solid red"
    }

    else{
        window.location.href='/chat-page/chat.html';
    }
}