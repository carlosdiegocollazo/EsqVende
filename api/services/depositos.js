let depositos = {
	
	getRecordById: async function (tabla, idTabla, id){
		let sql 		= `
							SELECT *
							FROM ${tabla}
							WHERE
							${idTabla} = ${id}
						`
		let response 	= {error: "No se encontraron registros"}
		let res 		= await conn.query(sql);
		if (res.code) {
	 		response 	= {error: "Error en consulta SQL"};
	 	}else if (res.length>0) {
			response 	= res[0];
			}
		return response; 
	},
	
	obtenerdepositos: async function(){
		let sql 		= `
							SELECT * FROM depositos where depositos.activo=1 order by depositos.iddep asc
						`
		let response 	= {error: "No se encontraron depositos"}
		let resultado 	= await conn.query(sql);
		if (resultado.code) {
	 		response 	= {error: "Error en consulta SQL"};
	 	}else if (resultado.length>0) {
			response 	= {response: resultado}
		}
		return response;
	},

	obtenerdepositosall: async function(){
		let sql 		= `
							SELECT * FROM depositos order by depositos.iddep asc
						`
		let response 	= {error: "No se encontraron depositos"}
		let resultado 	= await conn.query(sql);
		if (resultado.code) {
	 		response 	= {error: "Error en consulta SQL"};
	 	}else if (resultado.length>0) {
			response 	= {response: resultado}
		}
		return response;
	},

	obtenerdepositoPorId: async function(id){
		let sql 		= `
							SELECT * FROM depositos
							WHERE
							depositos.iddep = '${id}' 
							&& depositos.activo = 1
						`
		let response 	= {error: `No se encontró deposito con Id: ${id}`}
		let resultado 	= await conn.query(sql);
		if (resultado.code) {
	 		response 	= {error: "Error en consulta SQL"};
	 	}else if (resultado.length>0) {
			response 	= {response: resultado[0]}
		}
		return response;
	},

	creardeposito: async function(depositos){
		//console.log(depositos)
		let sql = `
					INSERT INTO depositos
					(
					nombre,
					localizacion,					
					observaciones,
					principal,
					activo
					)
					VALUES
					(
					"${depositos.nombre}",
					'${depositos.localizacion}',
					'${depositos.observaciones}',
					'${depositos.principal}',
					'${depositos.activo}'
					)		
				`
		let response 	= {error: "No se pudo crear deposito"}
		let resultado 	= await conn.query(sql);
		//console.log(resultado);
		if (resultado.code) {
	 		response 	= {error: "Error en consulta SQL"};
	 	}else if (resultado.insertId) {
			response 	= {response: "deposito creada correctamente"}
		}
		return response;
	},

	actualizardeposito: async function(deposito, id){
		
		let sql = `
					UPDATE depositos
					SET
					deposito		= '${depositos.nombre}',
					localizacion	= '${depositos.localizacion}',
					observaciones	= '${depositos.observaciones}',
					principal			= '${depositos.principal}',					
					activo	 		= '${depositos.activo}'			
					WHERE
					depositos.iddep = '${id}'
				`
		let response 		= {};
		let existedeposito 	= await this.obtenerdepositoPorId(id);
		if (!existedeposito.error) {
			let resultado 	= await conn.query(sql);
		
			if (resultado.code) {
	 			response 	= {error: "Error en consulta SQL"};
	 		}else if (resultado.affectedRows>0) {
				response 	= {response: "deposito actualizado correctamente"}
			}else{
				response 	= {error: "No se pudo actualizar el deposito"}
			}
		}else{
			response 		= {error: `No existe deposito con Id: ${id}`}
			}
		return response;
	},

	eliminardeposito: async function(id){
		let sql 		= `
							UPDATE depositos 
							SET 
							activo = 0 
							WHERE
							depositos.iddep = '${id}'
						`
		let response 		= {};
		let existedeposito 	= await this.obtenerdepositoPorId(id);
		if (!existedeposito.error) {
			let resultado 	= await conn.query(sql);
			if (resultado.code) {
	 			response 	= {error: "Error en consulta SQL"};
	 		}else if (resultado.affectedRows>0) {
				response 	= {response: "deposito eliminado correctamente"}
			}
		}else {
			response 		= {error: `No existe deposito con Id: ${id}`}
		}
		return response;
	},
}

module.exports = depositos;