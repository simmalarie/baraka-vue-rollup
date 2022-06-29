//Script d'installation des CSS dans Storybook.
const destinationModule = "../../public";


//Copie les fichiers du composant dans le répertoire stories de Storybook
function copyModuleFile(){
	var copyfiles = require('copyfiles');
	
	var options = {"up":1};
	copyfiles(["mes_tokens/css/*",destinationModule], options, function(){
		console.log('Copie des styles réussie');
		
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
	console.log('Copie des styles dans Storybook.');
	copyModuleFile();
}else{
	console.log('Aucun script à rouler dans le module même.');
}
