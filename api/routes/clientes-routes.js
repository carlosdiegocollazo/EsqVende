module.exports = function(app){

	const midd = require('../services/middleware.js');	
	const Cors = require('../services/cors.js');
	app.use(Cors.cors(Cors.corsOptions));


	//Devuelve JSON con la colección de objetos "cliente" activos.
	app.get('/clientes/all', midd.rutasProtegidas, async function(req, res){
		let Cliente 	= require ('../services/clientes.js');
		let response 	= await Cliente.obtenerClientes();
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

		//Devuelve JSON con la colección de objetos "cliente" activos e inactivos
		app.get('/clientes/allall', midd.rutasProtegidas, async function(req, res){
			let Cliente 	= require ('../services/clientes.js');
			let response 	= await Cliente.obtenerClientesall();
			res.set('Content-Type', 'aplication/json');
			res.send(response);
		})

	//Devuelve JSON con objeto "cliente" seleccionado por el valor de su campo Id.
	//si se encuentra activo.
	app.get('/clientes/:id', midd.rutasProtegidas, async function (req, res) {
		let id 			= req.params.id;
		let Cliente 	= require('../services/clientes');
		let response 	= await Cliente.obtenerClientePorId(id);
		res.set(['Content-Type', 'application/json']);
		res.send(response);
	});

	//Devuelve JSON con objeto "clienteEmail" seleccionado por el valor de su campo Email.
	app.get('/clientes/mail/find', midd.rutasProtegidas, async function (req, res) {
		let mail 		= req.body.clienteEmail;
		let Cliente 	= require('../services/clientes');
		let response 	= await Cliente.obtenerClientePorEmail(mail);
		res.set(['Content-Type', 'application/json']);
		res.send(response);
	});

	//Permite dar de alta a un nuevo registo cliente.
	app.post('/clientes/new', async function (req, res) {
		 let Cliente	= req.body;
		 let cliente 	= require('../services/clientes');
		 let response	= await cliente.ingresarCliente(Cliente);
		 res.set(['Content-Type', 'application/json']);
		 res.send(response);
	});

	//Permite editar los valores de los atributos del cliente seleccionado
	// a partir del valor de su campo Id.
	app.put('/clientes/edit/:id', midd.rutasProtegidas, async function(req, res){
		let id 			= req.params.id;
		let Cliente		= req.body;
		let cliente 	= require('../services/clientes.js');
		let response 	= await cliente.actualizarCliente(Cliente, id);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})

	//Permite borrar de manera lógia al cliente identificado por el valor de su campo Id.
	//(pasa a inactivo).
	app.put('/clientes/delete/:id', midd.rutasProtegidas, async function(req, res){
		let id 			= req.params.id;
		let Cliente 	= require('../services/clientes.js');
		let response 	= await cliente.eliminarCliente(id);
		res.set('Content-Type', 'aplication/json');
		res.send(response);
	})
	
}