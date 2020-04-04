import potter from './data/potter/potter.js';
import {show, show_personajes} from './data.js';

//funccion para agrupar
Array.prototype.groupBy = function(prop){
 	return this.reduce(function(groups, item){
		const val = item[prop];
		groups[val] = groups[val] || [];
		groups[val].push(item);
		return groups;
		}, {})
	}

show('','todos');
show_personajes("vivos", 'vivos');
show_personajes('estudiantes','estudiantes');
show_personajes('sexo', 'male');
show_personajes('sexo', 'female');
show_personajes('casa', 'Gryffindor');
show_personajes('casa', 'Slytherin');
show_personajes('casa', 'Hufflepuff');
show_personajes('casa', 'Ravenclaw');
show_personajes('','todos');

function slide_left(){	
		const firstPerson = document.getElementsByTagName('li')[6];
		document.getElementById('root').appendChild(firstPerson);
	}
		
	function slide_right(){
		var n_right = document.getElementsByClassName('n_personajes').length;
		const firstPerson = document.getElementsByTagName('li')[6];
		var lastPerson = document.getElementsByTagName('li')[n_right + 5];
		document.getElementById('root').insertBefore(lastPerson, firstPerson);
	}
	
var left = document.getElementById('left').addEventListener('click', slide_right, false);
document.getElementById('right').addEventListener('click', slide_left, false);

setInterval(slide_left, 2000);
