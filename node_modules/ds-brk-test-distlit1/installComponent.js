//Script d'installation de Baraka.js.
// Racine du projet
const destinationModule = "../../baraka";


//Copie les fichiers du composant dans le répertoire stories de Storybook
function copyModuleFile(){
	var copyfiles = require('copyfiles');
	
	var options = {"up":0};
	copyfiles(["baraka.js",destinationModule], options, function(){
		console.log('Copie de Baraka réussie');
		
		});
}

//Détection du module où la composante est installé
function getModuleName(){
	var data;

	try {
		data = require(process.env.INIT_CWD+'/../../package.json');
		return data.name;
	} 
	catch (ex) {
		return '';
	}
}

//Installation de la composante
var moduleName = getModuleName();
var sitename;
if (moduleName != ''){
	console.log('Copie de Baraka.');
	copyModuleFile();
}else{
	console.log('Aucun script à rouler dans le module même.');
}
