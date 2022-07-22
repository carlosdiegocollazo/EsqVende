let familias = {
	
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
	
	obtenerfamilias: async function(){
		let sql 		= `
							SELECT * FROM familias where familias.activo=1 order by familias.idfam asc
						`
		let response 	= {error: "No se encontraron familias"}
		let resultado 	= await conn.query(sql);
		if (resultado.code) {
	 		response 	= {error: "Error en consulta SQL"};
	 	}else if (resultado.length>0) {
			response 	= {response: resultado}
		}
		return response;
	},

	obtenerfamiliasall: async function(){
		let sql 		= `
							SELECT * FROM familias order by familias.idfam asc
						`
		let response 	= {error: "No se encontraron familias"}
		let resultado 	= await conn.query(sql);
		if (resultado.code) {
	 		response 	= {error: "Error en consulta SQL"};
	 	}else if (resultado.length>0) {
			response 	= {response: resultado}
		}
		return response;
	},

	obtenerfamiliaPorId: async function(id){
		let sql 		= `
							SELECT * FROM familias
							WHERE
							familias.idfam = '${id}' 
							&& familias.activo = 1
						`
		let response 	= {error: `No se encontró familia con Id: ${id}`}
		let resultado 	= await conn.query(sql);
		if (resultado.code) {
	 		response 	= {error: "Error en consulta SQL"};
	 	}else if (resultado.length>0) {
			response 	= {response: resultado[0]}
		}
		return response;
	},

	crearfamilia: async function(familias){
		let sql = `
					INSERT INTO familias
					(
					descripcion,
					observaciones,					
					activo
					)
					VALUES
					(
					"${familias.descripcion}",
					'${familias.observaciones}',
					'${familias.activo}'
					)		
				`
		let response 	= {error: "No se pudo crear familia"}
		let resultado 	= await conn.query(sql);
		//console.log(resultado);
		if (resultado.code) {
	 		response 	= {error: "Error en consulta SQL"};
	 	}else if (resultado.insertId) {
			response 	= {response: "familia creada correctamente"}
		}
		return response;
	},

	actualizarfamilia: async function(familia, id){
		
		let sql = `
					UPDATE familias
					SET
					descripcion		= '${familia.descripcion}',
					observaciones		= '${familia.observaciones}',
					activo	 	= '${familia.activo}'			
					WHERE
					familias.idfam = '${id}'
				`
		let response 		= {};
		let existefamilia 	= await this.obtenerfamiliaPorId(id);
		if (!existefamilia.error) {
			let resultado 	= await conn.query(sql);
		
			if (resultado.code) {
	 			response 	= {error: "Error en consulta SQL"};
	 		}else if (resultado.affectedRows>0) {
				response 	= {response: "Familia actualizada correctamente"}
			}else{
				response 	= {error: "No se pudo actualizar el familia"}
			}
		}else{
			response 		= {error: `No existe familia con Id: ${id}`}
			}
		return response;
	},

	eliminarfamilia: async function(id){
		let sql 		= `
							UPDATE familias 
							SET 
							activo = 0 
							WHERE
							familias.idfam = '${id}'
						`
		let response 		= {};
		let existefamilia 	= await this.obtenerfamiliaPorId(id);
		if (!existefamilia.error) {
			let resultado 	= await conn.query(sql);
			if (resultado.code) {
	 			response 	= {error: "Error en consulta SQL"};
	 		}else if (resultado.affectedRows>0) {
				response 	= {response: "familia eliminado correctamente"}
			}
		}else {
			response 		= {error: `No existe familia con Id: ${id}`}
		}
		return response;
	},
}

module.exports = familias;