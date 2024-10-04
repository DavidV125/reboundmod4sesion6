let arregloProductos = [
    ["Martini", 2550],
    ["Cappuccino", 1370],
    ["Deriso", 6750],
    ["Cipollotti", 5990],
];

function asignarEventos() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]'); 
    // esto lo saque de https://www.w3schools.com/tags/att_input_type_checkbox.asp

    checkboxes.forEach(checkbox => { // for each sirve para ejecutir una funcion indicada con el elemento de un arreglo o sea 
        checkbox.addEventListener('change', actualizarTotal); //al hacer change se va a ctualizar el total segun la funcion de  abjo
    });
} //usar change en vez de click

function actualizarTotal() {
    let total = 0; // parte total en ceroo
    
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');  // segun lo elegido

    checkboxes.forEach((checkbox, index) => {  // si algo esta checked, se revisa el arreglo en posicion 1, donde esta el precio
        if (checkbox.checked) {
            total += arregloProductos[index][1];
        }
    });

    document.getElementById('precioTotal').innerText = `Total: ${total}`;
}
