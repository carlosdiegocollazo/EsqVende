let articulosconsulta = Vue.component('articuloconsulta-component', function (resolve) {
    axios.get('./app/componentes/articulos/consulta.html').then(function (view) {
        resolve({
            template: view.data,
            data: function () {
                return {
                    registro: {
                        codigo: "",
                        barras: "",
                        descripcion: "",
                        costo: "",
                        iva: "",
                        costoiva: "",
                        ganancia: "",
                        pvp: "",
                        stock: "",
                        familia: "",
                        proveedor: "",
                        deposito: "",
                        observaciones: "",
                        activo: 1
                    },
                    articulos: {
                        codigo: "",
                        barras: "",
                        descripcion: "",
                        costo: "",
                        iva: "",
                        costoiva: "",
                        ganancia: "",
                        pvp: "",
                        stock: "",
                        familia: "",
                        proveedor: "",
                        deposito: "",
                        observaciones: "",
                        activo: ""
                    },

                    devuelvoarticulo: {
                        codigo: "",
                        barras: "",
                        descripcion: "",
                        costo: "",
                        iva: "",
                        costoiva: "",
                        ganancia: "",
                        pvp: "",
                        stock: "",
                        familia: "",
                        proveedor: "",
                        deposito: "",
                        observaciones: "",
                        activo: ""
                    },
                    codigofamilia: "",  
                    codigoproveedor: "",
                    codigodeposito: "",  
                }

            },
            methods: {
                buscarxcodigo: function (res) {
                    let idart = res
                    console.log("codigo que recibo", idart)
                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    //this.articulos.splice(idart, 1) //elimina la linea de la table y espues de la base
                    axios.get(API + '/articulos/codigo/' + idart, headtoken).then((res) => {

                        let devuelvoarticulo = res.data.response;
                        //console.log("contenido del for", devuelvoarticulo)
                        this.devuelvoarticulo = devuelvoarticulo
                        //console.log("lo que se lleva en el this", this.devuelvoarticulo.descripcion)
                    })
                },

                cerrarsesion: function () {
                    router.push('/mesa')
                }
            },// fin el method


            mounted: function () {
                let token = localStorage.getItem("token");
                this.seguridad = localStorage.getItem("seguridad")
                let id = localStorage.getItem("idusuario")
                const headtoken = { headers: { "mytoken": `${token}` } }
               

            },//fin del mounted

        }) //fin del resolve
    })
})