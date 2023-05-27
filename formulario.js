const formulario = document.forms['form-contacto'];
console.log(formulario);

formulario.addEventListener('submit', (e)=> {
    e.preventDefault();

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    const datos = {
        nombre: formulario['nombre'].value,
        correo: formulario['correo'].value,
        telefono: formulario['telefono'].value,
        motivo: formulario['motivo'].value
    }

    if(datos.nombre === ''){
        console.log('ingrese un nombre');
        alert('Ingrese un nombre')
        return
    }

    if (!expresionRegular.test(datos.correo)) {
		alert('Correo invalido');
		return;
	}

    if(datos.telefono === ''){
        console.log('ingrese un telefono');
        alert('Ingrese un telefono')
        return
    }

    if(datos.motivo === 'value='){
        console.log('motivo invalido');
        alert('Seleccione un motivo de contacto')
        return
    }else if(datos.motivo === 'legales'){
        let res = confirm('Está seguro... ?')
        if(res===false){
            return
        }
    }

    alert('Se envían los datos:\n'+
    'nombre: '+datos.nombre + '\n'+
    'correo: '+datos.correo +'\n'+
    'telefono: '+datos.telefono+'\n'+
    'motivo de contacto: '+datos.motivo)
});