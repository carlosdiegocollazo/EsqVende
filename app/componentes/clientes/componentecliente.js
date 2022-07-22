let componentecliente = Vue.component('cliente-component', function (resolve) {
    axios.get('./app/componentes/clientes/vistacliente.html').then(function (view) {
        resolve({
            template: view.data,
            data: function () {
                return {
                    registro: {
                        rutced: "",
                        email: "",
                        apellidos: "",
                        nombres: "",
                        telefono: "",
                        direccion: "",
                        ciudad: "",
                        seguridad: "",
                        fechnac: "",
                        observaciones: "",
                        activo: 1
                    },

                    clientes: {
                        rutced: "",
                        email: "",
                        apellidos: "",
                        nombres: "",
                        telefono: "",
                        direccion: "",
                        ciudad: "",
                        seguridad: "",
                        fechnac: "",
                        observaciones: "",
                        activo: ""
                    },

                    modificoCliente: {
                        rutced: "",
                        email: "",
                        apellidos: "",
                        nombres: "",
                        telefono: "",
                        direccion: "",
                        ciudad: "",
                        seguridad: "",
                        fechnac: "",
                        observaciones: "",
                        activo: ""
                    },

                    codigoseguridad: ""
                }

            },
            methods: {
                registCli: function () {
                    let registro = {
                        rutced: this.registro.rutced,
                        email: this.registro.email,
                        apellidos: this.registro.apellidos,
                        nombres: this.registro.nombres,
                        telefono: this.registro.telefono,
                        direccion: this.registro.direccion,
                        ciudad: this.registro.ciudad,
                        fechnac: this.registro.fechnac,
                        observaciones: this.registro.observaciones,
                        activo: 1,
                    }
                    //console.log("lo que guarda en cliente del html", registro)
                    if (this.registro.nombres !== "" & this.registro.apellidos !== "" & this.registro.email !== "" & this.registro.rutced !== "") {
                        if (this.registro.activo == true) {
                                this.registro.activo = 1
                                        //console.log("lo que quiere meter en el axios", registro)
                            axios.post(API + '/Clientes/new/', registro).then((res) => {
                                let resultado = res.data;
                                if (!res.data.error) {
                                    router.push({ path: '/mesa/' });
                                } else {
                                    alert(res.data.error);
                                }//console.log("lo que guarda en cliente", registro)
                            })
                        } else {alert("Debe ingresar mínimo un Nombre, Apellido, Rut o Cedula y E-mail");
                    }
                        /*else {
                            alert("No puede dejar campos estan vacios");
                        }*/
                    } else {
                        alert("Debe ingresar mínimo un Nombre, Apellidos, Rut o CED y E-mail");
                    }
                },
                limpiar: function () {
                    this.registro = {
                        rutced: "",
                        email: "",
                        apellidos: "",
                        nombres: "",
                        telefono: "",
                        direccion: "",
                        ciudad: "",
                        seguridad: "",
                        fechnac: "",
                        observaciones: "",
                        activo: ""
                    }
                },

                eliminarCliente: function (res, res2) {
                    let idcli = res
                    let idcli2 = res2
                    ////console.log("recorro el data", idcli, idcli2)
                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    this.clientes.splice(idcli, 1) //elimina la linea de la table y espues de la base
                    axios.put(API + '/Clientes/delete/' + idcli2, {}, headtoken).then((res) => {

                        //    //console.log("resdat delntro del xios", res.data)
                    })
                },

                actualizarCliente: function (res2) {
                    let Clientes = this.clientes
                    //console.log("esto devuelve de clisarios", Clientes)
                    for (let index = 0; index < Clientes.length; index++) {
                        const element = Clientes[index];
                        //console.log("contenido de element email", element.email)
                        if (element.activo == true) {
                            element.activo = 1
                        }
                        if (index == res2) {
                            ////console.log("contenido de element email dentro del if", element,index,res2)
                            modificoCliente = {
                                idcli: element.idcli,
                                email: element.email,
                                feching: element.rutced,
                                apellidos: element.apellidos,
                                nombres: element.nombres,
                                telefono: element.telefono,
                                direccion: element.direccion,
                                ciudad: element.ciudad,
                                fechnac: element.fechnac,
                                observaciones: element.observaciones,
                                activo: 1
                            }
                        }
                    }
                    let token = localStorage.getItem("token");
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    //console.log("antes del axios", modificoCliente, modificoCliente.idcli, modificoCliente.email)
                    axios.put(API + '/Clientes/edit/' + modificoCliente.idcli, modificoCliente, headtoken).then((res) => {
                            //console.log("dentro del put",res)
                        axios.get(API + '/Clientes/all', headtoken).then((res) => {
                            //console.log("dentro del get",res)
                        })
                    })
                },
                mostrartodos: function () {
                    let token = localStorage.getItem("token");

                    this.seguridad = localStorage.getItem("seguridad")

                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/Clientes/allall', headtoken).then((res) => {
                        let Clientes = res.data.response;
                     //console.log("contenido del for", Clientes)
                        this.clientes = Clientes
                    })
                },
                mostraractivos: function () {
                    let token = localStorage.getItem("token");
                    this.seguridad = localStorage.getItem("seguridad")
                    const headtoken = { headers: { "mytoken": `${token}` } }
                    axios.get(API + '/Clientes/all', headtoken).then((res) => {
                        let Clientes = res.data.response;
                        //console.log("contenido del for", Clientes)
                        this.clientes = Clientes
                    })
                },
                cerrarsesion: function () {
                    router.push('/mesa')
                }
            },// fin el method

            mounted: function () {
                ////console.log(this.$router)
                let token = localStorage.getItem("token");
                this.seguridad = localStorage.getItem("seguridad")
                const headtoken = { headers: { "mytoken": `${token}` } }

                axios.get(API + '/Clientes/all', headtoken).then((res) => {
                    let Clientes = res.data.response;
                    ////console.log("contenido del for", Clientes)
                    this.clientes = Clientes
                })

                axios.get(API + '/seguridad/all', headtoken).then((res) => {
                    devuelvoseguridad = res.data.response;
                    // //console.log("contenido del for devuelvo", devuelvoseguridad)
                    this.devuelvoseguridad = devuelvoseguridad
                })

            },//fin del mounted





        }) //fin del resolve
    })
})