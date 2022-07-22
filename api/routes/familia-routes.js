module.exports = function(app){

	const midd = require('../services/middleware.js');	
	const Cors = require('../services/cors.js');
	app.use(Cors.cors(Cors.corsOptions));

	//Devuelve JSON con colección de objetos "familia" activos
	app.get('/familias/all', midd.rutasProtegidas, async function(req, res){
		let familia 	= require ('../services/familias.js');
		let response 	= await familia.obtenerfamilias();
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})


	//Devuelve JSON con colección de objetos "familia" activos e inactivos.
	app.get('/familias/allall', midd.rutasProtegidas, async function(req, res){
		let familia 	= require ('../services/familias.js');
		let response 	= await familia.obtenerfamiliasall();
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

	//Devuelve JSON con objeto "familia" seleccionado por el valor de su campo Id.
	//si se encuentra activo.
	app.get('/familias/:id', midd.rutasProtegidas, async function(req, res){
		let id 			= req.params.id;
		let familia 	= require('../services/familias.js');
		let response 	= await familia.obtenerfamiliaPorId(id);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})


	//Permite dar de alta a un nuevo registo familia.
	app.post('/familias/new', midd.rutasProtegidas, async function(req, res){
		let familia = req.body;
		let familias = require('../services/familias.js');
		let response = await familias.crearfamilia(familia);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

	//Permite editar los valores de los atributos del artículo seleccionado
	// a partir del valor de su campo Id.
	app.put('/familias/edit/:id', midd.rutasProtegidas, async function(req, res){
		let familia 	= req.body;
		let id 			= req.params.id;
		let familias 	= require('../services/familias.js');
		let response 	= await familias.actualizarfamilia(familia, id);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

	//Permite borrar de manera lógia al artículo identificado por el valor de su campo Id.
	//(pasa a inactivo).
	app.put('/familias/delete/:id', midd.rutasProtegidas, async function(req, res){
		let id 			= req.params.id;
		let familia 	= require('../services/familias.js');
		let response 	= await familia.eliminarfamilia(id);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})
	
}