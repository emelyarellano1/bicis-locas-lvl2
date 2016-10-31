/*validaciones de los campos son las siguientes:

Todos los campos son obligatorios, excepto los dos últimos.
Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
Para los campos nombre y apellido la primera letra debe ser mayúscula
Validar que el campo email tenga un formato válido. Ej: name@domain.com
El campo password debe tener al menos 6 caracteres
El campo password no puede ser igual a "password" ó "123456" ó "098754"
El valor seleccionado de bicis, debe ser una de las opciones presentadas */


function validateForm(){
		var letras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

		function name(){
		 	var name = document.getElementById('name').value;
		 	if (name == null || name.length == 0 || /^\s+$/.test(name)){
		 		var box = document.getElementsByClassName('input-box')[0];
		 		var spn = document.createElement('span');
		 		var cnt = document.createTextNode('Ingresar tu nombre, Ej: Emelys');
		 		spn.appendChild(cnt);
		 		box.appendChild(spn);
		 		return false;
		 	} else if (!letras.test(name)){
		 		var box = document.getElementsByClassName('input-box')[0];
		 		var spn = document.createElement('span');
		 		var cnt = document.createTextNode('Solo letras');
		 		spn.appendChild(cnt);
		 		box.appendChild(spn);
		 		return true;
		 	} else if(name.charAt(0) != name.charAt(0).toUpperCase()){
		 		var box = document.getElementsByClassName('input-box')[0];
		 		var spn = document.createElement('span');
		 		var cnt = document.createTextNode('Comezar con masyuscula');
		 		spn.appendChild(cnt);
		 		box.appendChild(spn);
		 	}
		}
		name();

		function lastname(){
		 	var lastname = document.getElementById('lastname').value;
		 	if(lastname == null || lastname.length == 0 || lastname.length == 0 || /^\s+$/.test(lastname)){
		 		var box = document.getElementsByClassName('input-box')[1];
		 		var spn = document.createElement('span');
		 		var cnt = document.createTextNode('Ingresar tu apellido');
		 		spn.appendChild(cnt);
		 		box.appendChild(spn);
		 		return true;
		 	} else if(!letras.test(lastname)){
		 		var box = document.getElementsByClassName('input-box')[1];
		 		var spn = document.createElement('span');
		 		var cnt = document.createTextNode('Solo letras');
		 		spn.appendChild(cnt);
		 		box.appendChild(spn);
		 		return true;
		 	} else if(lastname.charAt(0) != lastname.charAt(0).toUpperCase()) {
		 		var box = document.getElementsByClassName('input-box')[1];
		 		var spn = document.createElement('span');
		 		var cnt = document.createTextNode('La primera letra debe ser Mayuscula, Ej: Arellano');
		 		spn.appendChild(cnt);
		 		dox.appendChild(spn);
		 	}
		 } 
		lastname();

		function correoElectronico(){
			var simbolos = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
			var correoElectronico = document.getElementById('input-email').value;
			if (correoElectronico === null || correoElectronico.length === 0){
				var box = document.getElementsByClassName('input-box')[2];
		 		var spn = document.createElement('span');
		 		var cnt = document.createTextNode('Ingresa tu correo electronico');
		 		spn.appendChild(cnt);
		 		box.appendChild(spn);
				return false;
			}
	    }
	    correoElectronico();

	    function contrasenia(){
	    	var contrasenia = document.getElementById('input-Password').value;
	    	if (contrasenia == null || contrasenia.length == 0){
	    		var box = document.getElementsByClassName('input-box')[3];
		 		var spn = document.createElement('span');
		 		var cnt = document.createTextNode('Ingresa tu contraseña');
		 		spn.appendChild(cnt);
		 		box.appendChild(spn);
	    		return false;
	    	} else if(contrasenia.length < 6){
	    		var box = document.getElementsByClassName('input-box')[3];
		 		var spn = document.createElement('span');
		 		var cnt = document.createTextNode('Tu contraseña debe tener mas de 6 caracteres');
		 		spn.appendChild(cnt);
		 		box.appendChild(spn);
	    		return true;
	    	}
	    }
	    contrasenia();

	    function modeloBici(){
	    	var selector = document.getElementsByTagName('select').value;
	    	var modelo = selector.value;
	    	var box = document.getElementsByClassName('input-box')[4];
		 	var spn = document.createElement('span');
		 	var cnt = document.createTextNode('Selecciona una opción');
		 	spn.appendChild(cnt);
		 	box.appendChild(spn);
	    	return modelo == 'Urbana' || modelo == 'Treking' || modelo == 'Eléctrica' || modelo == 'Estática';
	    }
	    modeloBici();
	}

validateForm();