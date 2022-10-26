let componentedeposito = Vue.component('depositos-component', function (resolve) {
    axios.get('./app/componentes/depositos/vistadepositos.html').then(function (view) {
        resolve({
            template: view.data,
            data: function () {
                return {
                    registro: {
                        iddep: "",
                        nombre: "",
                        localizacion: "",
                        observaciones: "",
                        principal: 0,
                        activo: 1
                    },
                    depositos: {},
                    limpiar: {},
                }
            },
            methods: {
                creardepositos: function () {
                    let registro = {
                        nombre: this.registro.nombre,
                        localizacion: this.registro.localizacion,
                        observaciones: this.registro.observaciones,                       
                        principal: this.registro.principal,
                        activo: this.registro.activo
                    }
                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    if (this.registro.depositos !== "") {
                        axios.post(API + '/depositos/new', registro, headtoken).then((res) => {
                            let resultado = res.data;
                            axios.get(API + '/depositos/all', headtoken).then((res) => {
                                let depositos = res.data.response;
                                this.depositos = depositos
                            })
                            alert("Deposito creada en forma correcta");
                            if (resultado.response) {
                                router.push({ path: '/depositos' });
                            } else {
                                alert(res.data.error);
                            }
                        })
                    } else {
                        alert("Descripcion de depositos no puede estar vacia");
                    }
                },
                eliminardeposito: function (res, res2) {
                    let iddep = res
                    let iddep2 = res2
                    ////console.log("recooro el data", iddep, iddep2)

                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    this.depositos.splice(iddep, 1) //elimina la linea de la table y espues de la base
                    axios.put(API + '/depositos/delete/' + iddep2, {}, headtoken).then((res) => {
                        alert("Deposito eliminada correctamente.");
                        //    //console.log("resdat delntro del xios", res.data)
                    })

                },
                actualizardepositos: function (res2) {
                    let modificodeposito = {}
                    let depositos = this.depositos

                    for (let index = 0; index < depositos.length; index++) {
                        const element = depositos[index];
                        if (element.principal == true) {
                            element.principal = 0
                        }
                        if (element.activo == true) {
                            element.activo = 1
                        }
                        if (index == res2) {
                            modificodeposito = {
                                iddep: element.iddep,
                                nombres: element.nombres,
                                localizacion:element.localizacion,
                                observaciones: element.observaciones,      
                                principal: element.principal,
                                activo: 1
                            }
                        }
                    }
                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.put(API + '/depositos/edit/' + modificodeposito.iddep, modificodeposito, headtoken).then((res) => {
                        axios.get(API + '/depositos/all', headtoken).then((res) => {
                            alert("Deposito", modificodeposito, deposito, " modificada correctamente");
                            alert("Deposito modificada correctamente.");
                        })
                    })
                },
                mostrartodos: function () {
                    let token = localStorage.getItem("token");

                    this.seguridad = localStorage.getItem("seguridad")
                    let id = localStorage.getItem("idusuario")
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/depositos/allall', headtoken).then((res) => {
                        let depositos = res.data.response;
                        this.depositos = depositos
                    })
                },
                mostraractivos: function () {
                    let token = localStorage.getItem("token");

                    this.seguridad = localStorage.getItem("seguridad")
                    let id = localStorage.getItem("idusuario")
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/depositos/all', headtoken).then((res) => {
                        let depositos = res.data.response;
                        this.depositos = depositos
                    })
                },

                limpiar: function () {
                    this.registro = {
                        iddep: "",
                        nombre: "",
                        localizacion: "",
                        observaciones: "",
                        principal: 0,
                        activo: 1
                    }
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
                axios.get(API + '/depositos/all', headtoken).then((res) => {
                    let depositos = res.data.response;
                    this.depositos = depositos
                })
            },//fin del mounted
        })
    })
})