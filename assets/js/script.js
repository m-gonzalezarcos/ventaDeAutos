var hamburguesa=document.querySelector('.hamburguesa');
var enlaces=document.querySelector('.menu');

hamburguesa.addEventListener('click', function(){
    enlaces.classList.toggle('activado');
});
