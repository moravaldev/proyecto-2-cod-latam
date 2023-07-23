
/*  1 – Seleccionar todos los items del menú 
    2 – Recorrer esa lista de nodos y detectar el click en cualquiera de ellos
    3 – Cuando un elemento es clickeado, se ejecuta una función que realiza varias cosas:
     - Selecciona al elemento que ya tiene la clase active (por defecto, primero la tendrá Inicio)
     - Le quita a ese elemento la clase
     - Se la agrega al elemento que fue clickeado 
*/

const menuItems = document.querySelectorAll('.menu-item');    

menuItems.forEach(function(item){
    item.addEventListener('click', function(e){
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    }); 
});

const changeFontBtn = document.querySelector('#change-font')
changeFontBtn.addEventListener('click', function(){
    document.body.classList.toggle('change-font')
})










