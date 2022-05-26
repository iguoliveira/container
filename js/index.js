// Firebase settings
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, push, remove, onValue } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

var firebaseConfig = {
    apiKey: "AIzaSyDUpO6ZYLonxNkz1Oll-XKA0QyVrD2jRn8",
    authDomain: "realtime-chat-jspure.firebaseapp.com",
    projectId: "realtime-chat-jspure",
    storageBucket: "realtime-chat-jspure.appspot.com",
    messagingSenderId: "267330241128",
    appId: "1:267330241128:web:6a357abe7b078ea42eb1dd"
};

const app = initializeApp(firebaseConfig);
var db = getDatabase(app);
const dbRef = ref(db, 'users');

// Check the fields and send the message
document.getElementById("btnSend").addEventListener("click", (() => {
    if(document.getElementById("name").value != ""){
        document.getElementById("name").setAttribute("readonly", "")
        if(document.getElementById("msg").value != ""){
            if(document.getElementById("msg").value.length >= 2 && document.getElementById("msg").value.length <= 100){
                enviarMSG()
                document.getElementById("msg").value = ""
            }else{
                alert("Message with a wrong size! Reminder: min 2chars || max 100chars")
            }
        }else{
            alert("Send something, doesn't let in blank!")
        }
    }else{
        alert("Tell us your name before you send a message")
    }
}))

// Delete message from DB
function deleteMessage(key){
    remove(ref(db, 'users/' + key))
}

// Create the new component for the message
onValue(dbRef, (snapshot) => {
    document.getElementById('content').innerHTML = ''

    snapshot.forEach(function (childSnapshot) {
        let key = childSnapshot.key

        let btnDelete = document.createElement('div')
        btnDelete.classList.add("btnDelete")
        btnDelete.setAttribute("id", key+childSnapshot.val().nome)
        btnDelete.textContent = "Delete"

        let name = document.createElement('div')
        name.classList.add('divName')
        name.textContent = childSnapshot.val().nome
        name.appendChild(btnDelete)

        let msg = document.createElement('div')
        msg.classList.add('divMsg')
        msg.setAttribute("id", key+key)
        msg.textContent = childSnapshot.val().mensagem

        let time = document.createElement('div')
        time.classList.add('divTime')
        time.textContent = childSnapshot.val().horario

        let div = document.createElement('div')
        div.classList.add('msg')
        div.setAttribute("id", key)
        div.appendChild(name)
        div.appendChild(msg)
        div.appendChild(time)

        let newDiv = document.createElement('div')
        newDiv.classList.add('userMsg-container')
        newDiv.appendChild(div)
        

        if(childSnapshot.val().nome != document.getElementById("name").value){
            btnDelete.style = 'display:none;'
            atualizarHTML(div);
        }else{
            div.style.backgroundColor = '#F8F2F5'
            atualizarHTML(newDiv);
        }
        
        document.getElementById(key + childSnapshot.val().nome).onclick = () => {
            btnDelete.style = 'display:none;'
            deleteMessage(key)
            atualizarHTML(newDiv)
            console.log(newDiv)
            document.getElementById(key+key).innerHTML = "This message has been deleted!"
        }
    });
});

// Send the data to the DB
function enviarMSG() {
    var datahj = new Date();
    var hora = datahj.getHours() + ":" + datahj.getMinutes() + ":" + datahj.getSeconds()

    push(ref(db, 'users'), {
        nome: document.getElementById("name").value,
        horario: hora,
        mensagem: document.getElementById("msg").value
    });
}

// Update the DOM everytime the page was updated
function atualizarHTML(value) {
    document.getElementById("content").appendChild(value)
    // ajustarScroll();
}

// function ajustarScroll() {
//     var divConteudo = document.getElementById("content");
//     divConteudo.scrollTop = divConteudo.scrollHeight;
// 
//     PEGA A DIV CONTEUDO E ROLA PARA O TAMANHO MAXIMO DELA
// }