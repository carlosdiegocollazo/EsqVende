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

                    modificoarticulo: {
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

                
                    devuelvoproveedor: {
                        idpro: "",
                        proveedor: "",
                        divide: "",
                        activo: 1
                    },

                    devuelvodeposito: {
                        iddep: "",
                        nombre: "",
                        localizacion: "",
                        Observaciones: "",
                        principal: "",
                        activo: 1
                    },

                    devuelvofamilia: {
                        idfam: "",
                        descripcion: "",
                        observaciones: "",
                        activo: 1
                    },


                    codigofamilia: "",  
                    codigoproveedor: "",
                    codigodeposito: "",  
                }

            },
            methods: {
                limpiar: function () {
                    this.registro = {
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
                    }
                },

                mostrartodos: function () {
                    let token = localStorage.getItem("token");
                    this.stock = localStorage.getItem("stock")
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/articulos/allall', headtoken).then((res) => {
                        let articulos = res.data.response;
                        //   //console.log("contenido del for", articulos)
                        this.articulos = articulos
                    })
                },
                mostraractivos: function () {
                    let token = localStorage.getItem("token");
                    this.stock = localStorage.getItem("stock")
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/articulos/all', headtoken).then((res) => {
                        let articulos = res.data.response;
                        // //console.log("contenido del for", articulos)
                        this.articulos = articulos
                    })
                },
                buscarxcodigo: function () {
                    let token = localStorage.getItem("token");
                    this.stock = localStorage.getItem("stock")
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/articulos/codigo/', headtoken).then((res) => {
                        let articulos = res.data.response;
                        //   //console.log("contenido del for", articulos)
                        this.articulos = articulos
                    })
                },

                buscarxbarra: function () {
                    let token = localStorage.getItem("token");
                    this.stock = localStorage.getItem("stock")
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/articulos/barra/', headtoken).then((res) => {
                        let articulos = res.data.response;
                        //   //console.log("contenido del for", articulos)
                        this.articulos = articulos
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
               
                axios.get(API + '/proveedores/all', headtoken).then((res) => {
                    let proveedores = res.data.response;
                    this.proveedores = proveedores
                })

                axios.get(API + '/proveedores/all', headtoken).then((res) => {
                    devuelvoproveedor = res.data.response;
                    this.devuelvoproveedor = devuelvoproveedor
                })

                
                axios.get(API + '/depositos/all', headtoken).then((res) => {
                let depositos = res.data.depositos;
                this.depositos = depositos
                })

                axios.get(API + '/depositos/all', headtoken).then((res) => {
                devuelvodeposito = res.data.response;
                this.devuelvodeposito = devuelvodeposito
                })
                
                axios.get(API + '/familias/all', headtoken).then((res) => {
                    let familias = res.data.familias;
                    this.familias = familias
                })

                axios.get(API + '/familias/all', headtoken).then((res) => {
                    devuelvofamilia = res.data.response;
                    this.devuelvofamilia = devuelvofamilia
                    //console.log("lo que guarda en articulo", this.devuelvofamilia)
                })

                axios.get(API + '/articulos/all', headtoken).then((res) => {
                    let articulos = res.data.articulos;
                    this.articulos = articulos
                })

                axios.get(API + '/articulos/all', headtoken).then((res) => {
                    devuelvoarticulo = res.data.response;
                    this.devuelvoarticulo = devuelvoarticulo
                    //console.log("lo que guarda en articulo", this.devuelvoarticulo)
                })

            },//fin del mounted

        }) //fin del resolve
    })
})