let primero = document.querySelector("form input");
primero.focus();
let reg_nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let reg_correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
let reg_telefono = /^\d{7,14}$/;

function validar() {
	
  // variables para comprobar
  let f_nombre = document.querySelector("#f_nombre");
  f_nombre.classList.remove("error");
	document.querySelector('#msj-nombre').classList.add('mensaje-error-inactivo')
	document.querySelector('#msj-nombre').classList.remove('mensaje-error-activo')	
  let f_correo = document.querySelector("#f_correo");
  f_correo.classList.remove("error");
	document.querySelector('#msj-correo').classList.add('mensaje-error-inactivo')
	document.querySelector('#msj-correo').classList.remove('mensaje-error-activo')	
  let f_telefono = document.querySelector("#f_telefono");
  f_telefono.classList.remove("error");
	document.querySelector('#msj-telefono').classList.add('mensaje-error-inactivo')
	document.querySelector('#msj-telefono').classList.remove('mensaje-error-activo')
	let f_motivo = document.querySelector("#f_motivo");
	document.querySelector('#msj-motivo').classList.add('mensaje-error-inactivo')
	document.querySelector('#msj-motivo').classList.remove('mensaje-error-activo')
	
	let lta_mensajes = document.querySelector("#mensajes");
  // bandera
  let hubo_error = false;
  // comprobaciones
  if (f_nombre.value == "" || !reg_nombre.test(f_nombre.value)) {
    f_nombre.classList.add("error");
		document.querySelector('#msj-nombre').classList.remove('mensaje-error-inactivo')
		document.querySelector('#msj-nombre').classList.add('mensaje-error-activo')
    hubo_error = true;
  }

	if (f_correo.value == "" || !reg_correo.test(f_correo.value)){
		f_correo.classList.add("error");
		document.querySelector('#msj-correo').classList.remove('mensaje-error-inactivo')
		document.querySelector('#msj-correo').classList.add('mensaje-error-activo')
    hubo_error = true;
  }

	if (f_telefono.value == "" || !reg_telefono.test(f_telefono.value)){
		f_telefono.classList.add("error");
		document.querySelector('#msj-telefono').classList.remove('mensaje-error-inactivo')
		document.querySelector('#msj-telefono').classList.add('mensaje-error-activo')
    hubo_error = true;
	}

	if (f_motivo.value == "value="){
		document.querySelector('#msj-motivo').classList.remove('mensaje-error-inactivo')
		document.querySelector('#msj-motivo').classList.add('mensaje-error-activo')
    hubo_error = true;
	}

	if (hubo_error){
		return false;
	}else{
		let p = document.createElement("p");
		p.innerHTML =
		"Se envía: Nombre: "+f_nombre.value+", "+"Correo: "+f_correo.value+", "+"Teléfono: "+f_telefono.value+", Motivo: "+f_motivo.value
		lta_mensajes.appendChild(p);
		document.forms['f_contacto'].reset();
		let primero = document.querySelector("form input");
    primero.focus();
	}
	return false;
}