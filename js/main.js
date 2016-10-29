/*validaciones de los campos son las siguientes:

Todos los campos son obligatorios, excepto los dos últimos.
Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
Para los campos nombre y apellido la primera letra debe ser mayúscula
Validar que el campo email tenga un formato válido. Ej: name@domain.com
El campo password debe tener al menos 6 caracteres
El campo password no puede ser igual a "password" ó "123456" ó "098754"
El valor seleccionado de bicis, debe ser una de las opciones presentadas */


function validacionForm(){
		var letras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

		function name(){
		 	var name = document.getElemetById('name').value;
		 	if (name == null || name.length == 0 || /^\s+$/.test(name)){
		 		var box = document.getElementsByClassName('input-box')[0];
		 		var span = document.getElemet('span');
		 		var disn = document.createTextNode('Ingresar tu nombre');
		 		span.appendChild(disn);
		 		dox.appendChild(span);
		 		return false;
		 	} else if (!letras.test(name)){
		 		var box = document.getElementsByClassName('input-box')[0];
		 		var span = document.getElemet('span');
		 		var disn = document.createTextNode('Solo letras');
		 		span.appendChild(disn);
		 		dox.appendChild(span);
		 		return true;
		 	} else if(name.charAt(0) != name.charAt(0).toUpperCase()){
		 		var box = document.getElementsByClassName('input-box')[0];
		 		var span = document.getElemet('span');
		 		var disn = document.createTextNode('Comezar con masyuscola');
		 		span.appendChild(disn);
		 		dox.appendChild(span);
		 	}
		}
		 name();

		function lastname(){
		 	var lastname = document.getElemetById('lastname').value;
		 	if(lastname == null || lastname.length == 0 || lastname.length == 0 || /^\s+$/.test(lastname)){
		 		var box = document.getElementsByClassName('input-box')[0];
		 		var span = document.getElemet('span');
		 		var disn = document.createTextNode('Ingresar tu apellido');
		 		span.appendChild(disn);
		 		dox.appendChild(span);
		 		return true;
		 	} else if(!letras.test(lastname)){
		 		var box = document.getElementsByClassName('input-box')[0];
		 		var span = document.getElemet('span');
		 		var disn = document.createTextNode('Solo letras');
		 		span.appendChild(disn);
		 		dox.appendChild(span);
		 		return true;
		 	} else if(lastname.charAt(0) != lastname.charAt(0).toUpperCase()) {
		 		var box = document.getElementsByClassName('input-box')[0];
		 		var span = document.getElemet('span');
		 		var disn = document.createTextNode('La primera letra debe ser Mayuscula, Ej: Arellano');
		 		span.appendChild(disn);
		 		dox.appendChild(span);
		 	}
		 } 
		lastname();

		function correoElectronico(){
			var simbolos = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
			var correoElectronico = document.getElemetById('input-email').value;
			if (correoElectronico === null || correoElectronico.length === 0){
				var box = document.getElementsByClassName('input-box')[0];
		 		var span = document.getElemet('span');
		 		var disn = document.createTextNode('Ingresa tu correo electronico');
		 		span.appendChild(disn);
		 		dox.appendChild(span);
				return false;
			} else if(simbolos.test(correoElectronico)){
				var box = document.getElementsByClassName('input-box')[0];
		 		var span = document.getElemet('span');
		 		var disn = document.createTextNode('Verifica tu correo electronico');
		 		span.appendChild(disn);
		 		dox.appendChild(span);
				return true;
			}
	    }
	    correoElectronico();

	    function contrasenia(){
	    	var contrasenia = document.getElemetById('input-Password').value;
	    	if (contrasenia == null || contrasenia.length == 0) {
	    		var box = document.getElementsByClassName('input-box')[0];
		 		var span = document.getElemet('span');
		 		var disn = document.createTextNode('Ingresa tu contraseñia');
		 		span.appendChild(disn);
		 		dox.appendChild(span);
	    		return false;
	    	} else if(contrasenia.length < 6){
	    		var box = document.getElementsByClassName('input-box')[0];
		 		var span = document.getElemet('span');
		 		var disn = document.createTextNode('Tu contraseña debe tener mas de 6 caracteres');
		 		span.appendChild(disn);
		 		dox.appendChild(span);
	    		return false;
	    	}
	    }
	    contrasenia();

	    function modeloBici(){
	    	var selector = document.getElemetsByTagNeme('select');
	    	var modelo = select.value;
	    	var box = document.getElementsByClassName('input-box')[0];
		 	var span = document.getElemet('span');
		 	var disn = document.createTextNode('Selecciona una opción');
		 	span.appendChild(disn);
		 	dox.appendChild(span);
	    	return modelo == 'Urbana' || modelo == 'Treking' || modelo == 'Eléctrica' || modelo == 'Estática';
	    }
	    modeloBici();
	}
