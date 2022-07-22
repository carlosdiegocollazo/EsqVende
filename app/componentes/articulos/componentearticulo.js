let componentearticulo = Vue.component('articulo-component', function (resolve) {
    axios.get('./app/componentes/articulos/vistaarticulo.html').then(function (view) {
        resolve({
            template: view.data,
            data: function () {
                return {
                    registro: {
                        codigo: "",
                        barras: "",
                        descripcion: "",
                        costo: "",
                        pvp: "",
                        pvps: "",
                        stock: "",
                        unidad: "",
                        familia: "",
                        proveedor: "",
                        observaciones: "",
                        activo: 1
                    },
                    articulos: {
                        codigo: "",
                        barras: "",
                        descripcion: "",
                        costo: "",
                        pvp: "",
                        pvps: "",
                        stock: "",
                        unidad: "",
                        familia: "",
                        proveedor: "",
                        observaciones: "",
                        activo: ""
                    },

                    modificoarticulo: {
                        codigo: "",
                        barras: "",
                        descripcion: "",
                        costo: "",
                        pvp: "",
                        pvps: "",
                        stock: "",
                        unidad: "",
                        familia: "",
                        proveedor: "",
                        observaciones: "",
                        activo: ""
                    },
                    devuelvoproveedor: {
                        idpro: "",
                        proveedor: "",
                        divide: "",
                        activo: 1
                    },

                    devuelvofamilia: {
                        idfam: "",
                        descripcion: "",
                        observaciones: "",
                        activo: 1
                    },


                    codigoproveedor: "",
                    codigofamilia: "",  
                }

            },
            methods: {
                registArticulo: function () {
                    let registro = {
                        codigo: this.registro.codigo,
                        barras: this.registro.barras,
                        descripcion: this.registro.descripcion,
                        costo: this.registro.costo,
                        pvp: this.registro.pvp,
                        pvps: this.registro.pvps,
                        unidad: this.registro.unidad,
                        stock: this.registro.stock,
                        familia: this.devuelvofamilia.idfam,
                        proveedor: this.devuelvoproveedor.idpro,
                        observaciones: this.registro.observaciones,
                        activo: 1,
                    }
                    console.log("lo que guarda en articulo", registro)
                    if (this.registro.descripcion !== "" & this.registro.costo !== "" & this.registro.codigo !== "") {
                            axios.post(API + '/articulos/new/', registro).then((res) => {
                                let resultado = res.data;
                                if (!res.data.error) {
                                    router.push({ path: '/mesa/' });
                                } else {
                                    alert(res.data.error);
                                }
                            })
                        } else {
                        alert("Debe ingresar Codigo, Descripcion, Costo");
                    }
                },
                limpiar: function () {
                    this.registro = {
                        codigo: "",
                        barras: "",
                        descripcion: "",
                        costo: "",
                        pvp: "",
                        pvps: "",
                        stock: "",
                        unidad: "",
                        familia: "",
                        proveedor: "",
                        observaciones: "",
                        activo: ""
                    }
                },

                eliminararticulo: function (res, res2) {
                    let idart = res
                    let idart2 = res2
                    ////console.log("recorro el data", idart, idart2)
                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    this.articulos.splice(idart, 1) //elimina la linea de la table y espues de la base
                    axios.put(API + '/articulos/delete/' + idart2, {}, headtoken).then((res) => {

                        //    //console.log("resdat delntro del xios", res.data)
                    })
                },

                actualizararticulo: function (res2) {
                    let articulos = this.articulos
                    //console.log("esto devuelve de ususarios", articulos)
                    for (let index = 0; index < articulos.length; index++) {
                        const element = articulos[index];
                        //console.log("contenido de element codigo", element.codigo)
                        if (element.activo == true) {
                            element.activo = 1
                        }
                        if (index == res2) {
                            ////console.log("contenido de element codigo dentro del if", element,index,res2)
                            modificoarticulo = {
                                codigo: this.registro.codigo,
                                barras: this.registro.barras,
                                descripcion: this.registro.descripcion,
                                costo: this.registro.costo,
                                pvp: this.registro.pvp,
                                pvps: this.registro.pvps,
                                unidad: this.registro.unidad,
                                stock: this.resgistro.stock,
                                familia: this.devuelvofamilia.idfam,
                                proveedor: this.devuelvoproveedor.idpro,
                                observaciones: this.registro.observaciones,
                                activo: 1,
                            }
                        }
                    }
                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    //console.log("antes del axios", modificoarticulo, modificoarticulo.idart, modificoarticulo.codigo)
                    axios.put(API + '/articulos/edit/' + modificoarticulo.idart, modificoarticulo, headtoken).then((res) => {
                            //console.log("dentro del put",res)
                        axios.get(API + '/articulos/all', headtoken).then((res) => {
                            //console.log("dentro del get",res)
                        })
                    })
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

                axios.get(API + '/familias/all', headtoken).then((res) => {
                    let familias = res.data.familias;
                    this.familias = familias
                })

                axios.get(API + '/familias/all', headtoken).then((res) => {
                    devuelvofamilia = res.data.response;
                    this.devuelvofamilia = devuelvofamilia

                })


            },//fin del mounted

        }) //fin del resolve
    })
})