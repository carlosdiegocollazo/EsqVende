let componentefamilia = Vue.component('familias-component', function (resolve) {
    axios.get('./app/componentes/familias/vistafamilia.html').then(function (view) {
        resolve({
            template: view.data,
            data: function () {
                return {
                    registro: {
                        idfam: "",
                        descripcion: "",
                        observaciones: "",
                        activo: 1
                    },
                    familias: {},
                    limpiar: {},
                }
            },
            methods: {
                crearfamilias: function () {
                    let registro = {
                        descripcion: this.registro.descripcion,
                        observaciones: this.registro.observaciones,
                        activo: this.registro.activo
                    }
                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    if (this.registro.familias !== "") {
                        axios.post(API + '/familias/new', registro, headtoken).then((res) => {
                            let resultado = res.data;
                            axios.get(API + '/familias/all', headtoken).then((res) => {
                                let familias = res.data.response;
                                this.familias = familias
                            })
                            alert("Familia creada en forma correcta");
                            if (resultado.response) {
                                router.push({ path: '/familias' });
                            } else {
                                alert(res.data.error);
                            }
                        })
                    } else {
                        alert("Descripcion de familias no puede estar vacia");
                    }
                },
                eliminarfamilia: function (res, res2) {
                    let idfam = res
                    let idfam2 = res2
                    ////console.log("recooro el data", idfam, idfam2)

                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    this.familias.splice(idfam, 1) //elimina la linea de la table y espues de la base
                    axios.put(API + '/familias/delete/' + idfam2, {}, headtoken).then((res) => {
                        alert("Familia eliminada correctamente.");
                        //    //console.log("resdat delntro del xios", res.data)
                    })

                },
                actualizarfamilias: function (res2) {
                    let modificofamilia = {}
                    let familias = this.familias

                    for (let index = 0; index < familias.length; index++) {
                        const element = familias[index];
                        if (element.observaciones == true) {
                            element.observaciones = 1
                        }
                        if (element.activo == true) {
                            element.activo = 1
                        }
                        if (index == res2) {
                            modificofamilia = {
                                idfam: element.idfam,
                                descripcion: element.descripcion,
                                observaciones: element.observaciones,
                                activo: 1
                            }
                        }
                    }
                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.put(API + '/familias/edit/' + modificofamilia.idfam, modificofamilia, headtoken).then((res) => {
                        axios.get(API + '/familias/all', headtoken).then((res) => {
                            alert("Familia", modificofamilia, descripcion, "modificada correctamente");
                            alert("Familia modificada correctamente.");
                        })
                    })
                },
                mostrartodos: function () {
                    let token = localStorage.getItem("token");

                    this.seguridad = localStorage.getItem("seguridad")
                    let id = localStorage.getItem("idusuario")
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/familias/allall', headtoken).then((res) => {
                        let familias = res.data.response;
                        this.familias = familias
                    })
                },
                mostraractivos: function () {
                    let token = localStorage.getItem("token");
                    this.seguridad = localStorage.getItem("seguridad")
                    let id = localStorage.getItem("idusuario")
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/familias/all', headtoken).then((res) => {
                        let familias = res.data.response;
                        this.familias = familias
                    })
                },

                limpiar: function () {
                    this.registro = {
                        idfam: "",
                        descripcion: "",
                        observaciones: "",
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
                axios.get(API + '/familias/all', headtoken).then((res) => {
                    let familias = res.data.response;
                    this.familias = familias
                })
            },//fin del mounted
        })
    })
})