function myFunction(){
    event.preventDefault();
    let dol = document.getElementById("valueDol").value
    document.getElementById("valueBrl").value = (dol*5.51).toFixed(2);
}