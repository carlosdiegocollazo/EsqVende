module.exports = function(app){

	const midd = require('../services/middleware.js');	
	const Cors = require('../services/cors.js');
	app.use(Cors.cors(Cors.corsOptions));

	
	//Devuelve JSON con colección de objetos "cajas" activos.
	app.get('/cajas/all', midd.rutasProtegidas, async function(req, res){
		let cajas 	= require ('../services/cajas.js');
		let response 	= await cajas.obtenercajas();
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

	//Devuelve JSON con colección de objetos "cajas" activos.
	app.get('/cajas/allall', midd.rutasProtegidas, async function(req, res){
		let cajas 	= require ('../services/cajas.js');
		let response 	= await cajas.obtenercajasall();
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

	//Devuelve JSON con objeto "cajas" seleccionado por el valor de su campo Id.
	//si se encuentra activo.
	app.get('/cajas/:id', midd.rutasProtegidas, async function(req, res){
		let id 			= req.params.id;
		let cajas 	= require('../services/cajas.js');
		let response 	= await cajas.obtenercajasPorId(id);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

	//Permite dar de alta a un nuevo registo cajas.
	app.post('/cajas/new', midd.rutasProtegidas, async function(req, res){
		let caja = req.body;
		let cajas = require('../services/cajas.js');
		let response = await cajas.crearcajas(caja);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

	//Permite editar los valores de los atributos del artículo seleccionado
	// a partir del valor de su campo Id.
	app.put('/cajas/edit/:id', midd.rutasProtegidas, async function(req, res){
		let caja 	= req.body;
		//console.log("docuemtno dentro del routes",caja)
		let id 			= req.params.id;
		//console.log("parametro de id que llega",id)
		let cajas 	= require('../services/cajas.js');
		let response 	= await cajas.actualizarcajas(caja, id);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

	//Permite borrar de manera lógia al artículo identificado por el valor de su campo Id.
	//(pasa a inactivo).
	app.put('/cajas/delete/:id', midd.rutasProtegidas, async function(req, res){
		let id 			= req.params.id;
		let cajas 	= require('../services/cajas.js');
		let response 	= await cajas.eliminarcajas(id);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

// movimientos de caja
	//Devuelve JSON con todas las ap[erturas de caja.
	app.get('/cajas/cajasabiertasall', midd.rutasProtegidas, async function(req, res){
		let cajas 	= require ('../services/cajas.js');
		let response 	= await cajas.cajasabiertasall();
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})	


	//Devuelve JSON con todas las ap[erturas de caja.
	app.get('/cajas/cajasabiertas', midd.rutasProtegidas, async function(req, res){
		let cajas 	= require ('../services/cajas.js');
		let response 	= await cajas.cajasabiertas();
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})	



	//Permite dar de alta a un nuevo apertura de caja.
	app.post('/cajas/abrocaja', midd.rutasProtegidas, async function(req, res){
		let caja = req.body;
		let cajas = require('../services/cajas.js');
		let response = await cajas.abrocaja(movcaj);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})





}