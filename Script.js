//Variable que mantiene el estado del menu
let menuVisible = false;

//funcion que oculta o muestra el menu
function mostrarOculto(){
if(menuVisible){
document.getElementById("nav").classList ="";
menuVisible = false;
}else{
    document.getElementById("nav").classList ="responsive";
menuVisible = true;
}
}

//funcior para ocultar el menu cuando se selecciona una opcion 
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}