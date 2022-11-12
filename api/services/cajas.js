let cajas = {

	getRecordById: async function (tabla, idTabla, id) {
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

	obtenercajas: async function () {
		let sql = `
		SELECT cajas.idcaja,cajas.nombre,cajas.cajmon as idmon,monedas.moneda,cajas.observaciones,cajas.cajprin,cajas.activo FROM cajas INNER JOIN monedas ON cajas.cajmon = monedas.idmon where CAJAS.activo =1 order by CAJAS.idcaja asc
						`
		let response = { error: "No se encontraron cajas" }
		let resultado = await conn.query(sql);
		if (resultado.code) {
			response = { error: "Error en consulta SQL" };
		} else if (resultado.length > 0) {
			response = { response: resultado }
		}
		return response;
	},

	obtenercajasall: async function () {
		let sql = `
		SELECT cajas.idcaja,cajas.nombre,cajas.cajmon as idmon,monedas.moneda,cajas.observaciones,cajas.cajprin,cajas.activo FROM cajas INNER JOIN monedas ON cajas.cajmon = monedas.idmon  order by CAJAS.idcaja asc
						`
		let response = { error: "No se encontraron cajas" }
		let resultado = await conn.query(sql);
		if (resultado.code) {
			response = { error: "Error en consulta SQL" };
		} else if (resultado.length > 0) {
			response = { response: resultado }
		}
		return response;
	},

	obtenercajasPorId: async function (id) {
		let sql = `
							SELECT * FROM cajas
							WHERE
							cajas.idcaja = '${id}' 
							&& cajas.activo = 1
						`
		let response = { error: `No se encontró cajas con Id: ${id}` }
		let resultado = await conn.query(sql);
		if (resultado.code) {
			response = { error: "Error en consulta SQL" };
		} else if (resultado.length > 0) {
			response = { response: resultado[0] }
		}
		return response;
	},

	crearcajas: async function (cajas) {
		////console.log("viene de html",this.crearcajas)
		let sql = `
					INSERT INTO cajas
					(
						nombre,
						cajmon,
						observaciones,
						cajprin,					
						activo
					)
					VALUES
					(
					"${cajas.nombre}",
					'${cajas.cajmon}',
					'${cajas.observaciones}',
					'${cajas.cajprin}',
					1
					)		
				`
		let response = { error: "No se pudo crear cajas" }
		let resultado = await conn.query(sql);
		////console.log(resultado);
		if (resultado.code) {
			response = { error: "Error en consulta SQL" };
		} else if (resultado.insertId) {
			response = { response: "cajas creada correctamente" }
		}
		return response;
	},

	actualizarcajas: async function (cajas, id) {
		let sql = `
					UPDATE cajas
					SET
					caja		= '${cajas.nombre}',
					moneda		= '${cajas.cajmon}',
					cuenta		= '${cajas.observaciones}',
					sucursal	= '${cajas.cajprin}',
					activo	 	= 1			
					WHERE
					cajas.idcaja = '${id}'
				`
		let response = {};
		let existecajas = await this.obtenercajasPorId(id);
		if (!existecajas.error) {
			let resultado = await conn.query(sql);

			if (resultado.code) {
				response = { error: "Error en consulta SQL" };
			} else if (resultado.affectedRows > 0) {
				response = { response: "cajas actualizado correctamente" }
			} else {
				response = { error: "No se pudo actualizar el cajas" }
			}
		} else {
			response = { error: `No existe cajas con Id: ${id}` }
		}
		return response;
		////console.log("respose de api",response)
	},


	eliminarcajas: async function (id) {
		let sql = `
							UPDATE cajas 
							SET 
							activo = 0 
							WHERE
							cajas.idcaja = '${id}'
						`
		let response = {};
		let existecajas = await this.obtenercajasPorId(id);
		if (!existecajas.error) {
			let resultado = await conn.query(sql);
			if (resultado.code) {
				response = { error: "Error en consulta SQL" };
			} else if (resultado.affectedRows > 0) {
				response = { response: "cajas eliminado correctamente" }
			}
		} else {
			response = { error: `No existe cajas con Id: ${id}` }
		}
		return response;
	},


	abrocaja: async function (movcaj) {
		////console.log("viene de html",this.abrircajas)
		let sql = `
					INSERT INTO cajas
					(
					mcfec,
					mcmon,
					mcusu,
					mccaj,
					mcsin,					
					mcsac,
					mcdif,
					mc1,
					mc2,
					mc5,
					mc10,
					mc20,
					mc50,
					mc100,
					mc200,
					mc500,
					mc1000,
					mc2000,
					mcsde,
					mctot,
					mcobs,
					mccer,
					mcact
					)
					VALUES
					(
						"${movcaj.mcfec}",
						'${movcaj.mcmon}',
						'${movcaj.mcusu}',
						'${movcaj.mccaj}',
						'${movcaj.mcsin}',
						"${movcaj.mcsac}",
						'${movcaj.mcdif}',
						'${movcaj.mc1}',
						'${movcaj.mc2}',
						"${movcaj.mc5}",
						"${movcaj.mc10}",
						'${movcaj.mc20}',
						'${movcaj.mc50}',
						'${movcaj.mc100}',
						"${movcaj.mc200}",
						'${movcaj.mc500}',
						'${movcaj.mc1000}',
						'${movcaj.mc2000}',
						'${movcaj.mcsde}',
						'${movcaj.mctot}',
						'${movcaj.mcobs}',
						1,
						1
					)		
				`
		let response = { error: "No se pudo crear apertura de caja" }
		let resultado = await conn.query(sql);
		////console.log(resultado);
		if (resultado.code) {
			response = { error: "Error en consulta SQL" };
		} else if (resultado.insertId) {
			response = { response: "cajas creada correctamente" }
		}
		return response;
	},

	cajasabiertasall: async function () {
		let sql = `
		SELECT 
        movcaj.idmc,
		movcaj.mcfec as fecha,
		movcaj.mcmon as idmon,monedas.moneda,
		movcaj.mcusu as idusu,usuarios.nombres,
        movcaj.mccaj as idcaj,cajas.nombre,
        movcaj.mcsin as saldoini,
        movcaj.mcsac as saldoact,
        movcaj.mcdif as diferencia,
        movcaj.mc1,movcaj.mc2,movcaj.mc5,movcaj.mc10,movcaj.mc20,movcaj.mc50,movcaj.mc100,movcaj.mc200,movcaj.mc500,movcaj.mc1000,movcaj.mc2000,
        movcaj.mcsde as sindesgloce,
		movcaj.mctot as total,
        movcaj.mcobs as observaciones,
        movcaj.mccer as estacerrada,
        movcaj.mcact as activo 
		FROM movcaj 
		INNER JOIN monedas ON movcaj.mcmon = monedas.idmon
		INNER JOIN usuarios ON movcaj.mcusu = usuarios.idusu
		INNER JOIN cajas ON movcaj.mccaj = cajas.idcaja  
		order by movcaj.idmc asc;
						`
		let response = { error: "No se encontraron cajas" }
		let resultado = await conn.query(sql);
		if (resultado.code) {
			response = { error: "Error en consulta SQL" };
		} else if (resultado.length > 0) {
			response = { response: resultado }
		}
		return response;
	},


	cajasabiertas: async function () {
		let sql = `
		SELECT 
        movcaj.idmc,
		movcaj.mcfec as fecha,
		movcaj.mcmon as idmon,monedas.moneda,
		movcaj.mcusu as idusu,usuarios.nombres,
        movcaj.mccaj as idcaj,cajas.nombre,
        movcaj.mcsin as saldoini,
        movcaj.mcsac as saldoact,
        movcaj.mcdif as diferencia,
        movcaj.mc1,movcaj.mc2,movcaj.mc5,movcaj.mc10,movcaj.mc20,movcaj.mc50,movcaj.mc100,movcaj.mc200,movcaj.mc500,movcaj.mc1000,movcaj.mc2000,
        movcaj.mcsde as sindesgloce,
		movcaj.mctot as total,
        movcaj.mcobs as observaciones,
        movcaj.mccer as estacerrada,
        movcaj.mcact as activo 
		FROM movcaj 
		INNER JOIN monedas ON movcaj.mcmon = monedas.idmon
		INNER JOIN usuarios ON movcaj.mcusu = usuarios.idusu
		INNER JOIN cajas ON movcaj.mccaj = cajas.idcaja  
		where mccer=1
		order by movcaj.idmc asc;
						`
		let response = { error: "No se encontraron cajas" }
		let resultado = await conn.query(sql);
		if (resultado.code) {
			response = { error: "Error en consulta SQL" };
		} else if (resultado.length > 0) {
			response = { response: resultado }
		}
		return response;
	},


}

module.exports = cajas;