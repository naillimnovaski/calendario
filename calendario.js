function validarDia() {
    let days = document.getElementById('day').value;
    if (days < 1 || days > 31) { 
        alert("Por favor, digite um número entre 1 e 31.");
    } else {
        colorirDia(); 
    }
}
 
function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendarTable'); 
    let td = calendar.getElementsByTagName('td')[(parseInt(days)-1)];
td.style.backgroundColor = color;
}
