let componentebanco = Vue.component('bancos-component', function (resolve) {
    axios.get('./app/componentes/bancos/vistabanco.html').then(function (view) {
        resolve({
            template: view.data,
            data: function () {
                return {
                    registro: {
                        idbanco: "",
                        banco: "",
                        moneda: "",
                        cuenta: "",
                        sucursal: "",
                        activo: 1
                    },
                    devuelvomoneda: {
                        idmon: "",
                        moneda: "",
                        divide: "",
                        activo: ""
                    },

                    bancos: {
                        idbanco: "",
                        banco: "",
                        moneda: "",
                        cuenta: "",
                        sucursal: "",
                        activo: 1
                    },
                    codigomoneda: "",
                }
            },
            methods: {
                crearbancos: function () {
                    registro = {
                        banco: this.registro.banco,
                        moneda: this.codigomoneda.idmon,
                        cuenta: this.registro.cuenta,
                        sucursal: this.registro.sucursal,
                        activo: this.registro.activo
                    }
                    ////console.log("regsitro uqe viene del thml", this.registro)
                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    if (this.registro.banco !== "" & this.registro.cuenta !== "" & this.codigomoneda.idmon !== "") {
                        axios.post(API + '/bancos/new', registro, headtoken).then((res) => {
                            let resultado = res.data;
                            alert("BANCO creado correctamente");
                            if (resultado.response) {
                                router.push({ path: '/mesa/' });
                            } else {
                                alert(res.data.error);
                            }
                        })
                    } else {
                        alert("Nombre de Banco, Número de cuenta y Moneda moneda de la misma");
                    }
                },
                eliminarbancos: function (res, res2) {
                    let idbanco = res
                    let idbanco2 = res2
                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    this.bancos.splice(idbanco, 1)
                    axios.put(API + '/bancos/delete/' + idbanco2, {}, headtoken).then((res) => {
                        alert("Tipo de banco eliminado correctamente");

                    })

                },
                actualizarbancos: function (res2) {
                    let modificobanco = {}
                    let bancos = this.bancos

                    for (let index = 0; index < bancos.length; index++) {
                        const element = bancos[index];
                        if (index == res2) {
                            modificobanco = {
                                idbanco: element.idbanco,
                                banco: element.banco,
                                moneda: element.idmon,
                                cuenta: element.cuenta,
                                sucursal: element.sucursal,
                                activo: 1
                            }
                        }
                    }

                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.put(API + '/bancos/edit/' + modificobanco.idbanco, modificobanco, headtoken).then((res) => {
                        axios.get(API + '/bancos/all', headtoken).then((res) => {
                            let bancos = res.data.response;
                            this.bancos = bancos
                            alert("BANCO, modificado y activo en forma correcta.");
                        })
                    })
                },
                mostrartodos: function () {
                    let token = localStorage.getItem("token");

                    this.seguridad = localStorage.getItem("seguridad")
                    let id = localStorage.getItem("idusuario")
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/bancos/allall', headtoken).then((res) => {
                        let bancos = res.data.response;

                        this.bancos = bancos
                    })
                },
                mostraractivos: function () {
                    let token = localStorage.getItem("token");
                    this.seguridad = localStorage.getItem("seguridad")
                    let id = localStorage.getItem("idusuario")
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/bancos/all', headtoken).then((res) => {
                        let bancos = res.data.response;

                        this.bancos = bancos
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
                axios.get(API + '/bancos/all', headtoken).then((res) => {
                    let bancos = res.data.response;
                    this.bancos = bancos

                }),
                    axios.get(API + '/monedas/all', headtoken).then((res) => {
                        devuelvomoneda = res.data.response;
                        this.devuelvomoneda = devuelvomoneda

                    })
            },//fin del mounted
        })
    })
})