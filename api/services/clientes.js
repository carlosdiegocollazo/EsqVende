let cliente = {

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


    obtenerClientes: async function() {
        let sql = `
							SELECT * FROM clientes
							WHERE clientes.activo = 1
						`
        let response = { error: "No se encontraron clientes" }
        let resultado = await conn.query(sql);
        if (resultado.code) {
            response = { error: "Error en consulta SQL" };
        } else if (resultado.length > 0) {
            response = { response: resultado }
        }
        return response;
    },

    obtenerClientesall: async function() {
        let sql = `
							SELECT * FROM clientes
						`
        let response = { error: "No se encontraron clientes" }
        let resultado = await conn.query(sql);
        if (resultado.code) {
            response = { error: "Error en consulta SQL" };
        } else if (resultado.length > 0) {
            response = { response: resultado }
        }
        return response;
    },

    obtenerClientePorId: async function(id) {
        let sql = `
	  			SELECT * FROM clientes
	  			WHERE 
	  			clientes.idcli = '${id}' 
	  			&& clientes.activo = 1
	 		`
        let clientes = []
        let response = { error: `No existe el cliente con ID: ${id}` }
        clientes = await conn.query(sql)
        if (clientes.code) {
            response = { error: "Error en consulta SQL" };
        } else if (clientes.length > 0) {
            response = { response: clientes[0] }
        }
        return response;
    },

    obtenerClientePorRut: async function(rut) {
        let sql = `
	  			SELECT clientes.idcli 
	  			FROM clientes
	  			WHERE 
	  			clientes.rutced = '${rut}'
	 		`
        let clientes = []
        let response = { error: `No existe el cliente con Rut/Ced : ${rut}` }
        clientes = await conn.query(sql)
        if (clientes.code) {
            response = { error: "Error en consulta SQL" };
        } else if (clientes.length > 0) {
            response = { response: clientes[0] }
        }
        return response;
    },

    obtenerClientePorNombre: async function(nombre) {
        let sql = `
	  			SELECT clientes.idcli 
	  			FROM clientes
	  			WHERE 
	  			clientes.nombres = '${'nombre'}'
	 		`
        let clientes = []
        let response = { error: `No existe el cliente con Nombres : ${'nombres'}` }
        clientes = await conn.query(sql)
        if (clientes.code) {
            response = { error: "Error en consulta SQL" };
        } else if (clientes.length > 0) {
            response = { response: clientes[0] }
        }
        return response;
    },

    obtenerClientePorApellido: async function(apellido) {
        let sql = `
	  			SELECT clientes.idcli 
	  			FROM clientes
	  			WHERE 
	  			clientes.apellidos = '${'apellidos'}'
	 		`
        let clientes = []
        let response = { error: `No existe el cliente con Nombres : ${'apellidos'}` }
        clientes = await conn.query(sql)
        if (clientes.code) {
            response = { error: "Error en consulta SQL" };
        } else if (clientes.length > 0) {
            response = { response: clientes[0] }
        }
        return response;
    },

    obtenerClientePorEmail: async function(mail) {
        let sql = `
	  			SELECT clientes.idcli 
	  			FROM clientes
	  			WHERE 
	  			clientes.email = '${mail}'
	 		`
        let clientes = []
        let response = { error: `No existe el cliente con mail : ${mail}` }
        clientes = await conn.query(sql)
        if (clientes.code) {
            response = { error: "Error en consulta SQL" };
        } else if (clientes.length > 0) {
            response = { response: clientes[0] }
        }
        return response;
    },

    
    ingresarCliente: async function(cliente) {
        let sql = `
					INSERT INTO clientes
					  		(
                            rutced,
							email,
							apellidos,
							nombres,							
							telefono,
							direccion,
							ciudad,
							fechnac,
							observaciones,
							activo
							 )
		  			VALUES
		  					(
                            '${cliente.rutced}',
							'${cliente.email}',
							'${cliente.apellidos}',
							'${cliente.nombres}',
							'${cliente.telefono}',
							'${cliente.direccion}',
							'${cliente.ciudad}',
							'${cliente.fechnac}',
							'${cliente.observaciones}',
							'${cliente.activo}'
							)
				`
             //   console.log("sql que inserta",sql)
        let response = { error: "No se pudo crear el cliente" }
        let rut = cliente.rutced;
        let existeCliente = await this.obtenerClientePorRut(rut);
        if (existeCliente.error) {
            try {
                let resultado = await conn.query(sql);
                if (resultado.code) {
                    response = { error: "Error en consulta SQL" };
                } else if (resultado.insertId) {
                    response = { response: "Cliente creado correctamente" }
                }
            } catch (error) {
           //    console.log(error);
            }
        } else {
            response = { error: `Ya existe cliente con ese número de RUT o Cedula : ${rut}` }
        }
        return response;
    },

    actualizarCliente: async function(cliente, id) {
        //console.log("lo que llega de app",cliente)
        let sql = `
							UPDATE clientes 
							SET 
                                rutced 			= '${cliente.rutced}',
								email 			= '${cliente.email}',
								nombres 		= '${cliente.nombres}',
								apellidos 		= '${cliente.apellidos}',
								telefono	 	= '${cliente.telefono}',
								direccion	 	= '${cliente.direccion}',
								ciudad			= '${cliente.ciudad}',
								fechnac			= '${cliente.fechnac}',
								observaciones 	= '${cliente.observaciones}',
								activo 			= '${cliente.activo}'
							WHERE
							clientes.idcli = '${id}'
						`
        let response = { error: "No se pudo actualizar cliente" }
        let existeCliente = await this.obtenerClientePorId(id);
        if (!existeCliente.error) {
            let resultado = await conn.query(sql);
            if (resultado.code) {
                response = { error: "Error en consulta SQL" };
            } else if (resultado.affectedRows > 0) {
                response = { response: "Cliente actualizado correctamente" }
            }
        } else {
            response = { error: `No existe cliente con Id: ${id}` }
        }
        return response;
    },

    eliminarCliente: async function(id) {
        let sql = `
							UPDATE clientes 
							SET 
							activo = 0 
							WHERE
							clientes.idcli = '${id}'
						`
        let response = { error: "No se pudo eliminar cliente" }
        let existeCliente = await this.obtenerClientePorId(id);
        if (!existeCliente.error) {
            let resultado = await conn.query(sql);
            if (resultado.code) {
                response = { error: "Error en consulta SQL" };
            } else if (resultado.affectedRows > 0) {
                response = { response: "Cliente eliminado correctamente" }
            }
        } else {
            response = { error: `No existe cliente con Id: ${id}` }
        }
        return response;
    },

}

module.exports = cliente;