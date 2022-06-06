import { app, db, dbRef } from "../../chat-page/js/index.js"
import { getDatabase, ref, push, remove, onValue } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { doc, setDoc } from "firebase/firestore"; 

document.getElementById("submitBtn").onclick = (() =>{
    verifyInputs()
})

function verifyInputs(){
    fname = document.getElementById("fname")
    lname = document.getElementById("lname")
    email = document.getElementById("email")
    edv = document.getElementById("edv")
    password = document.getElementById("password")
    confirmPass = document.getElementById("confirmPass")
    if(fname.value != ""){
        if(lname.value != ""){
            if(email.value != ""){
                if(edv.value != ""){
                    if(password.value != ""){
                        if(confirmPass.value == password.value){
                            createDataStructure(fname.value, lname.value, email.value, edv.value, password.value)
                        }
                    }
                }
            }
        }
    }else{
        console.log("RUIM")
        prompt("OPA")
    }
}

function createDataStructure(fname, lname, email, edv, password){
    var data = {
        name: fname + " " + lname,
        email: email,
        edv: edv,
        password: password,
    }

    saveInDatabase(data)
}

function saveInDatabase(data){
    await setDoc(doc(db, "users"),data)
}