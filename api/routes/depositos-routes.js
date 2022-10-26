module.exports = function(app){

	const midd = require('../services/middleware.js');	
	const Cors = require('../services/cors.js');
	app.use(Cors.cors(Cors.corsOptions));

	//Devuelve JSON con colección de objetos "deposito" activos
	app.get('/depositos/all', midd.rutasProtegidas, async function(req, res){
		let deposito 	= require ('../services/depositos.js');
		let response 	= await deposito.obtenerdepositos();
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})


	//Devuelve JSON con colección de objetos "deposito" activos e inactivos.
	app.get('/depositos/allall', midd.rutasProtegidas, async function(req, res){
		let deposito 	= require ('../services/depositos.js');
		let response 	= await deposito.obtenerdepositosall();
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

	//Devuelve JSON con objeto "deposito" seleccionado por el valor de su campo Id.
	//si se encuentra activo.
	app.get('/depositos/:id', midd.rutasProtegidas, async function(req, res){
		let id 			= req.params.id;
		let deposito 	= require('../services/depositos.js');
		let response 	= await deposito.obtenerdepositoPorId(id);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})


	//Permite dar de alta a un nuevo registo deposito.
	app.post('/depositos/new', midd.rutasProtegidas, async function(req, res){
		let deposito = req.body;
		let depositos = require('../services/depositos.js');
		let response = await depositos.creardeposito(deposito);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

	//Permite editar los valores de los atributos del artículo seleccionado
	// a partir del valor de su campo Id.
	app.put('/depositos/edit/:id', midd.rutasProtegidas, async function(req, res){
		let deposito 	= req.body;
		let id 			= req.params.id;
		let depositos 	= require('../services/depositos.js');
		let response 	= await depositos.actualizardeposito(deposito, id);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

	//Permite borrar de manera lógia al artículo identificado por el valor de su campo Id.
	//(pasa a inactivo).
	app.put('/depositos/delete/:id', midd.rutasProtegidas, async function(req, res){
		let id 			= req.params.id;
		let deposito 	= require('../services/depositos.js');
		let response 	= await deposito.eliminardeposito(id);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})
	
}