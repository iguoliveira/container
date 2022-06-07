import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

var firebaseConfig = {
    apiKey: "AIzaSyB4W9PiMVp2qjlcwimtK7155hk2Lh1l6Rw",
    authDomain: "smart-conversation-524.firebaseapp.com",
    databaseURL: "https://smart-conversation-524-default-rtdb.firebaseio.com",
    projectId: "smart-conversation-524",
    storageBucket: "smart-conversation-524.appspot.com",
    messagingSenderId: "645453791274",
    appId: "1:645453791274:web:b9d70cc3d1e08f6fc68353"
};

const app = initializeApp(firebaseConfig);
var db = getDatabase(app);
const dbRefe = ref(db, "login")

if(document.getElementById("form-login")){
    document.getElementById("form-login").onsubmit = (() => {
        checkAnswer()
    })
}

function checkAnswer(){
    event.preventDefault()
    var edv = document.getElementById('edv')
    var password = document.getElementById('password')
    var edvConfirm = false
    var passConfirm = false
    onValue(dbRefe, (snapshot) => {
        snapshot.forEach(function (childSnapshot){
            if(password.value == childSnapshot.val().password){
                passConfirm = true
                password.style.border = "0"
            }else{
                password.style.border = "1px solid red"
                passConfirm = false
            }
        
            if(edv.value == childSnapshot.val().edv){
                edvConfirm = true
                edv.style.border = "0"
            }else{
                edv.style.border = "1px solid red"
                edvConfirm = false
            }
        
            if(edvConfirm && passConfirm){
                location = './chat-page/chat.html'
            }
        })
    })
}