const formulario = document.getElementById('form-contacto');
const inputs = document.querySelectorAll('#form-contacto input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
            if (expresiones.nombre.test(e.target.value)){
                document.getElementById('nombre').classList.remove('error')
                document.querySelector('#msj-nombre').classList.remove('mensaje-error')
                document.querySelector('#msj-nombre').classList.add('mensaje-error-inactivo')
                campos.nombre = true;
            }else{
                document.getElementById('nombre').classList.add('error')
                document.querySelector('#msj-nombre').classList.add('mensaje-error')
                document.querySelector('#msj-nombre').classList.remove('mensaje-error-inactivo')
                campos.nombre = false;
            }
		break;
		case "correo":
			if (expresiones.correo.test(e.target.value)){
                document.getElementById('correo').classList.remove('error')
                document.querySelector('#msj-correo').classList.remove('mensaje-error')
                document.querySelector('#msj-correo').classList.add('mensaje-error-inactivo')                
                campos.correo = true;
            }else{
                document.getElementById('correo').classList.add('error')
                document.querySelector('#msj-correo').classList.remove('mensaje-error')
                document.querySelector('#msj-correo').classList.add('mensaje-error-inactivo')
                campos.correo = false;
            }
		break;
		case "telefono":
			if (expresiones.telefono.test(e.target.value)){
                document.getElementById('telefono').classList.remove('error')
                document.querySelector('#msj-telefono').classList.remove('mensaje-error')
                document.querySelector('#msj-telefono').classList.add('mensaje-error-inactivo')   
                campos.telefono = true;
            }else{
                document.getElementById('telefono').classList.add('error')
                document.querySelector('#msj-telefono').classList.remove('mensaje-error')
                document.querySelector('#msj-telefono').classList.add('mensaje-error-inactivo')
                campos.telefono = false;
            }
		break;
    }
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e)=> {
    e.preventDefault();

    console.log(campos);

    if(campos.nombre && campos.correo && campos.telefono){
        alert('Se envían los datos:\n'+
        'nombre: '+formulario.nombre.value + '\n'+
        'correo: '+formulario.correo.value +'\n'+
        'telefono: '+formulario.telefono.value+'\n'+
        'motivo de contacto: '+formulario.motivo.value)
        formulario.reset();
    }
    
});