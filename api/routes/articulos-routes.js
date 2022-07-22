module.exports = function(app){

	const midd = require('../services/middleware.js');	
	const Cors = require('../services/cors.js');
	app.use(Cors.cors(Cors.corsOptions));

	//Devuelve JSON con la colección de objetos "articulo" activos.
	app.get('/articulos/all', midd.rutasProtegidas, async function(req, res){
		let Articulo 	= require ('../services/articulos.js');
		let response 	= await Articulo.obtenerArticulos();
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

		//Devuelve JSON con la colección de objetos "articulo" activos e inactivos
		app.get('/articulos/allall', midd.rutasProtegidas, async function(req, res){
			let Articulo 	= require ('../services/articulos.js');
			let response 	= await Articulo.obtenerArticulosall();
			res.set('Content-Type', 'aplication/json');
			res.send(response);
		})

	//Devuelve JSON con objeto "articulo" seleccionado por el valor de su campo Id.
	//si se encuentra activo.
	app.get('/articulos/:id', midd.rutasProtegidas, async function (req, res) {
		let id 			= req.params.id;
		let Articulo 	= require('../services/articulos');
		let response 	= await Articulo.obtenerArticuloPorId(id);
		res.set(['Content-Type', 'application/json']);
		res.send(response);
	});

	//Devuelve JSON con objeto "articuloCodigo" seleccionado por el valor de su campo Codigo.
	app.get('/articulos/codigo/find', midd.rutasProtegidas, async function (req, res) {
		let codigo 		= req.body.articuloCodigo;
		let Articulo 	= require('../services/articulos');
		let response 	= await Articulo.obtenerArticuloPorCodigo(codigo);
		res.set(['Content-Type', 'application/json']);
		res.send(response);
	});

	//Permite dar de alta a un nuevo registo articulo.
	app.post('/articulos/new', async function (req, res) {
		 let articulo	= req.body;
		 let Articulo 	= require('../services/articulos');
		 let response	= await Articulo.ingresarArticulo(articulo);
		 res.set(['Content-Type', 'application/json']);
		 res.send(response);
	});

	//Permite editar los valores de los atributos del articulo seleccionado
	// a partir del valor de su campo Id.
	app.put('/articulos/edit/:id', midd.rutasProtegidas, async function(req, res){
		let id 			= req.params.id;
		let articulo		= req.body;
		let Articulo 	= require('../services/articulos.js');
		let response 	= await Articulo.actualizarArticulo(articulo, id);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

	//Permite borrar de manera lógia al articulo identificado por el valor de su campo Id.
	//(pasa a inactivo).
	app.put('/articulos/delete/:id', midd.rutasProtegidas, async function(req, res){
		let id 			= req.params.id;
		let Articulo 	= require('../services/articulos.js');
		let response 	= await Articulo.eliminarArticulo(id);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})
	
}