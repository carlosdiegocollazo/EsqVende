let Articulo = {

    getRecordById: async function(tabla, idTabla, id) {
        let sql = `
							SELECT *
							FROM ${tabla}
							WHERE
							${idTabla} = ${id}
						`
        let response = { error: "No se encontraron registros" }
        let res = await conn.query(sql);
        if (res.code) {
            response = { error: "Error en consulta SQL" };
        } else if (res.length > 0) {
            response = res[0];
        }
        return response;
    },

    obtenerArticulos: async function() {
        let sql = `
							SELECT * FROM articulos
							WHERE articulos.activo = 1
						`
        let response = { error: "No se encontraron articulos" }
        let resultado = await conn.query(sql);
        if (resultado.code) {
            response = { error: "Error en consulta SQL" };
        } else if (resultado.length > 0) {
            response = { response: resultado }
        }
        return response;
    },

    obtenerArticulosall: async function() {
        let sql = `
							SELECT * FROM articulos
						`
        let response = { error: "No se encontraron articulos" }
        let resultado = await conn.query(sql);
        if (resultado.code) {
            response = { error: "Error en consulta SQL" };
        } else if (resultado.length > 0) {
            response = { response: resultado }
        }
        return response;
    },

    obtenerArticuloPorId: async function(id) {
        let sql = `
	  			SELECT * FROM articulos
	  			WHERE 
	  			articulos.idart = '${id}' 
	  			&& articulos.activo = 1
	 		`
        let articulos = []
        let response = { error: `No existe el articulo con ID: ${id}` }
        articulos = await conn.query(sql)
        if (articulos.code) {
            response = { error: "Error en consulta SQL" };
        } else if (articulos.length > 0) {
            response = { response: articulos[0] }
        }
        return response;
    },

    obtenerArticuloPorCodigo: async function(codigo) {
        let sql = `
	  			SELECT * FROM articulos
	  			WHERE 
	  			articulos.codigo = '${codigo}' 
	  			&& articulos.activo = 1
	 		`
        let articulos = []
        let response = { error: `No existe el articulo con Codigo: ${id}` }
        articulos = await conn.query(sql)
        if (articulos.code) {
            response = { error: "Error en consulta SQL" };
        } else if (articulos.length > 0) {
            response = { response: articulos[0] }
        }
        return response;
    },


    obtenerArticuloPorBarra: async function(barra) {
        let sql = `
	  			SELECT * FROM articulos
	  			WHERE 
	  			articulos.barras = '${barra}' 
	  			&& articulos.activo = 1
	 		`
        let articulos = []
        let response = { error: `No existe el articulo con Codigo de barras: ${barra}` }
        articulos = await conn.query(sql)
        if (articulos.code) {
            response = { error: "Error en consulta SQL" };
        } else if (articulos.length > 0) {
            response = { response: articulos[0] }
        }
        return response;
    },

 
    ingresarArticulo: async function(articulo) {
        let sql = `
					INSERT INTO articulos
					  		(
							codigo,
							barras,
							descripcion,							
							costo,
							pvp,
							pvps,
							stock,
							unidad,
							familia,
							proveedor,
							observaciones,
							activo
							 )
		  			VALUES
		  					(
							'${articulo.codigo}',
							'${articulo.barras}',
							'${articulo.descripcion}',
							'${articulo.costo}',
							'${articulo.pvp}',
							'${articulo.pvps}',
							'${articulo.stock}',
							'${articulo.unidad}',
							'${articulo.familia}',
							'${articulo.proveedor}',
							'${articulo.observaciones}',
							'${articulo.activo}'
							)
				`

                //console.log("sql que inserta",sql)
        let response = { error: "No se pudo crear el articulo" }
        let codigo = articulo.codigo;
        let existeArticulo = await this.obtenerArticuloPorCodigo(codigo);
        if (existeArticulo.error) {
            try {
                let resultado = await conn.query(sql);
                if (resultado.code) {
                    response = { error: "Error en consulta SQL" };
                } else if (resultado.insertId) {
                    response = { response: "Articulo creado correctamente" }
                }
            } catch (error) {
                //console.log(error);
            }
        } else {
            response = { error: `Ya existe articulo con codigo : ${codigo}` }
        }
        return response;
    },

    actualizarArticulo: async function(articulo, id) {
        //console.log("lo que llega de app",articulo)
        let sql = `
							UPDATE articulos 
							SET 
								codigo 			= '${articulo.codigo}',
								barras 			= '${articulo.barras}',
								descripcion 	= '${articulo.descripcion}',
								costo 		    = '${articulo.costo}',
								pvp	 	        = '${articulo.pvp}',
								pvps	 	    = '${articulo.pvps}',
								stock			= '${articulo.stock}',
								unidad		    = '${articulo.unidad}',
								familia			= '${articulo.familia}',
								proveedor		= '${articulo.proveedor}',
								observaciones 	= '${articulo.observaciones}',
								activo 			= '${articulo.activo}'
							WHERE
							articulos.idart = '${id}'
						`
        let response = { error: "No se pudo actualizar articulo" }
        let existeArticulo = await this.obtenerArticuloPorId(id);
        if (!existeArticulo.error) {
            let resultado = await conn.query(sql);
            if (resultado.code) {
                response = { error: "Error en consulta SQL" };
            } else if (resultado.affectedRows > 0) {
                response = { response: "Articulo actualizado correctamente" }
            }
        } else {
            response = { error: `No existe articulo con Id: ${id}` }
        }
        return response;
    },

    eliminarArticulo: async function(id) {
        let sql = `
							UPDATE articulos 
							SET 
							activo = 0 
							WHERE
							articulos.idart = '${id}'
						`
        let response = { error: "No se pudo eliminar articulo" }
        let existeArticulo = await this.obtenerArticuloPorId(id);
        if (!existeArticulo.error) {
            let resultado = await conn.query(sql);
            if (resultado.code) {
                response = { error: "Error en consulta SQL" };
            } else if (resultado.affectedRows > 0) {
                response = { response: "Articulo eliminado correctamente" }
            }
        } else {
            response = { error: `No existe articulo con Id: ${id}` }
        }
        return response;
    },

}

module.exports = Articulo;