// Firebase settings
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, push, remove, onValue } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
export { app, db, dbRef }

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
const dbRef = ref(db, 'users');
const dbRefe = ref(db, 'login');

if(document.getElementById("msg") != null){
    document.getElementById("msg").addEventListener("keypress", ((event) => {
        onValue(dbRefe, (snapshot) => {
            snapshot.forEach(function (childSnapshot){
                if(event.key === "Enter"){
                    if(document.getElementById("name").value == childSnapshot.val().edv || document.getElementById("name").value == childSnapshot.val().name){
                        document.getElementById("name").value = childSnapshot.val().name
                        document.getElementById("name").setAttribute("readonly","")
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
                    }
                }
            })
        })
    }))
}



// Check the fields and send the message with the click of the 'Send' button
if(document.getElementById("btnSend") != null){
    document.getElementById("btnSend").addEventListener("click", (() => {
        onValue(dbRefe, (snapshot) => {
            snapshot.forEach(function (childSnapshot){
                if(event.key === "Enter"){
                    if(document.getElementById("name").value == childSnapshot.val().edv){
                        document.getElementById("name").value = childSnapshot.val().name
                        document.getElementById("name").setAttribute("readonly","")
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
                    }
                }
            })
        })
    }))
}


// Delete message from DB
function deleteMessage(key){
    remove(ref(db, 'users/' + key))
}

// Create the new component for the messages
if(document.getElementById('content') != null){
    onValue(dbRef, (snapshot) => {
        document.getElementById('content').innerHTML = ''
    
        snapshot.forEach(function (childSnapshot) {
            let key = childSnapshot.key
    
            let btnDelete = document.createElement('div')
            btnDelete.classList.add("btnDelete")
            btnDelete.setAttribute("id", key+childSnapshot.val().nome)
            btnDelete.textContent = "delete"
    
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
                div.style.backgroundColor = '#BDF0D6'
                atualizarHTML(newDiv);
            }
            
            document.getElementById(key + childSnapshot.val().nome).onclick = () => {
                deleteMessage(key)
            }
        });
    });
}


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
    ajustarScroll();
}

// Adjust the scroll position when a new message was send
function ajustarScroll() {
    var divConteudo = document.getElementById("content");
    divConteudo.scrollTop = divConteudo.scrollHeight;
}