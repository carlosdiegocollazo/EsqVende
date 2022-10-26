let componentecaja = Vue.component('cajas-component', function (resolve) {
    axios.get('./app/componentes/cajas/vistacaja.html').then(function (view) {
        resolve({
            template: view.data,
            data: function () {
                return {
                            registro: {
                                idcaja: "",
                                nombre: "",
                                cajmon: "",
                                observaciones: "",
                                cajprin: "",
                                activo: 1
                            },
                            devuelvomoneda: {
                                idmon: "",
                                moneda: "",
                                divide: "",
                                activo: ""
                            },

                            cajas: {
                                idcaja: "",
                                nombre: "",
                                cajmon: "",
                                observaciones: "",
                                cajprin: "",
                                activo: 1
                            },
                            codigomoneda: "",
                        }
                    },
            methods: {
                crearcajas: function () {
                    registro = {
                        nombre: this.registro.nombre,
                        cajmon: this.codigomoneda.idmon,
                        observaciones: this.registro.observaciones,
                        cajprin: this.registro.cajprin,
                        activo: this.registro.activo
                    }
                    ////console.log("regsitro uqe viene del thml", this.registro)
                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    if (this.registro.caja !== "" & this.registro.observaciones !== "" & this.codigomoneda.idmon !== "") {
                        axios.post(API + '/cajas/new', registro, headtoken).then((res) => {
                            let resultado = res.data;
                            alert("CAJA creado correctamente");
                            if (resultado.response) {
                                router.push({ path: '/mesa/' });
                            } else {
                                alert(res.data.error);
                            }
                        })
                    } else {
                        alert("Nombre de Caja, Número de observaciones y Moneda moneda de la misma");
                    }
                },
                eliminarcajas: function (res, res2) {
                    let idcaja = res
                    let idcaja2 = res2
                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    this.cajas.splice(idcaja, 1)
                    axios.put(API + '/cajas/delete/' + idcaja2, {}, headtoken).then((res) => {
                        alert("Tipo de caja eliminado correctamente");

                    })

                },
                actualizarcajas: function (res2) {
                    let modificocaja = {}
                    let cajas = this.cajas

                    for (let index = 0; index < cajas.length; index++) {
                        const element = cajas[index];
                        if (index == res2) {
                            modificocaja = {
                                idcaja: element.idcaja,
                                nombre: element.nombre,
                                cajmon: element.idmon,
                                observaciones: element.observaciones,
                                cajprin: element.cajprin,
                                activo: 1
                            }
                        }
                    }

                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.put(API + '/cajas/edit/' + modificocaja.idcaja, modificocaja, headtoken).then((res) => {
                        axios.get(API + '/cajas/all', headtoken).then((res) => {
                            let cajas = res.data.response;
                            this.cajas = cajas
                            alert("CAJA, modificada y activa en forma correcta.");
                        })
                    })
                },
                mostrartodos: function () {
                    let token = localStorage.getItem("token");

                    this.seguridad = localStorage.getItem("seguridad")
                    let id = localStorage.getItem("idusuario")
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/cajas/allall', headtoken).then((res) => {
                        let cajas = res.data.response;

                        this.cajas = cajas
                    })
                },
                mostraractivos: function () {
                    let token = localStorage.getItem("token");
                    this.seguridad = localStorage.getItem("seguridad")
                    let id = localStorage.getItem("idusuario")
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/cajas/all', headtoken).then((res) => {
                        let cajas = res.data.response;

                        this.cajas = cajas
                    })
                },
                obtenermoneda: function () {
                    let token = localStorage.getItem("token");
                    this.seguridad = localStorage.getItem("seguridad")
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/monedas/all', headtoken).then((res) => {
                        devuelvomoneda = res.data.response;
                        this.devuelvomoneda = devuelvomoneda

                    })

                },

                cerrarsesion: function () {
                    router.push('/mesa')
                }
            },// fin el method

            mounted: function () {
                let token = localStorage.getItem("token");
                this.seguridad = localStorage.getItem("seguridad")
                const headtoken = { headers: { "mytoken": `${token}` } }
                axios.get(API + '/cajas/all', headtoken).then((res) => {
                    let cajas = res.data.response;
                    this.cajas = cajas

                }),
                    axios.get(API + '/monedas/all', headtoken).then((res) => {
                        devuelvomoneda = res.data.response;
                        this.devuelvomoneda = devuelvomoneda

                    })
            },//fin del mounted
        })
    })
})