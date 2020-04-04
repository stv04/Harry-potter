import potter from './data/potter/potter.js';


	
	
	
function show(prop, val){
	var section = document.getElementById('root');
	section.innerHTML = '';
	var personajes = potter.filter(function(x){
			if(prop === 'vivos'){
				return x.alive;
			}else if (prop === 'estudiantes'){
				return x.hogwartsStudent;
			}else if (prop === 'sexo'){
				return x.gender === val;
			}else if(prop === 'casa'){
				return x.house === val;
			}else{
				return x;
			}
		});
		
		
	for(var i = 0; i < personajes.length; i++){
		var l_i = document.createElement("li");
		var img_i = document.createElement('img');
		var pIndex_i = document.createElement('p');
		img_i.setAttribute('src', personajes[i].image);
		img_i.setAttribute('alt', personajes[i].name);
		img_i.setAttribute('value', personajes[i].name);
		img_i.setAttribute('class', 'indice')
		img_i.setAttribute('height', '150px');
		img_i.setAttribute('width', '95%');
		l_i.setAttribute('id', personajes[i].image);
		l_i.setAttribute('class', 'n_personajes')
		pIndex_i.innerHTML = personajes[i].name;
		pIndex_i.setAttribute('class', 'nombres');
		//l_i.innerHTML = personajes[i].name;
		// l_i.innerHTML = personajes[i].name;
		// l_i.setAttribute('id', personajes[i].image);
		section.appendChild(l_i);
		l_i.appendChild(img_i);
		l_i.appendChild(pIndex_i);

	}
	console.log();
	
	const infoOfPerson = personajes.forEach(function(personaje){
		return document.getElementById(personaje.image)
		.addEventListener('click', function(){
			var info = document.getElementById('informacion');
			var li1 = document.createElement('li');
			var li2 = document.createElement('li');
			var li3 = document.createElement('li');
			var li4 = document.createElement('li');
			var pInfo = document.getElementById('pInfo');
			var retrato = document.getElementById('imagen');
		pInfo.innerHTML = `<ul id="caracteristicas"><li>Nombre: ${personaje.name}</li>
		<li>Casa: ${personaje.house}</li>
		<li>Fecha de nacimiento: ${personaje.dateOfBirth}</li>
		<li>Ancestro: ${personaje.ancestry}</li>
		<li>Color de ojos: ${personaje.eyeColour}</li>
		<li>Color de cabello: ${personaje.hairColour}</li>
		<li>Madera de la varita: ${personaje.wand.wood}</li>
		<li>Núcleo de la varita: ${personaje.wand.core}</li>
		<li>Longitud de la varita: ${personaje.wand.length * 2.5}Cm</li>
		<li>Patronus: ${personaje.patronus}</li>
		<li>Actor: ${personaje.actor}</li></ul>`;
		if(personaje.gender === 'male'){
			li1.innerHTML = 'Es de sexo masculino';
			document.getElementById('caracteristicas').appendChild(li1);
		}else if (personaje.gender === 'female'){
			li1.innerHTML = 'Es de sexo femenino';
			document.getElementById('caracteristicas')
			.appendChild(li1);
		} if (personaje.hogwartsStudent === true){
			li2.innerHTML = 'Estudiante De Hogwarts';
			document.getElementById('caracteristicas')
			.appendChild(li2);
		}if (personaje.hogwartsStaff === true){
			li3.innerHTML = 'Personal de Hogwarts';
			document.getElementById('caracteristicas')
			.appendChild(li3)
		}if(personaje.alive === true){
			li4.innerHTML = 'Está vivo';
			document.getElementById('caracteristicas')
			.appendChild(li4)
		}else{
			li4.innerHTML = 'Está muerto';
			document.getElementById('caracteristicas')
			.appendChild(li4)
		}
			var h1 = document.getElementById('title');
			h1.style.color = 'black';
			h1.innerHTML = personaje.name;
			info.appendChild(pInfo);
			retrato.setAttribute('src', personaje.image);
			retrato.setAttribute('style', 'width: 300px; height: 420px;');
			document.getElementById('informacion').style.backgroundImage = 
			'linear-gradient(black, rgba(250, 250, 250, 0.5))';

		})
	});
	
}


function show_personajes(dato, value){
	
	var k = document.getElementById(value);
	k.addEventListener('click', function(){show(dato, value)}, false);
};




export {show, show_personajes};