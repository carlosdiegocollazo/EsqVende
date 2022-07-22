let componentehome = Vue.component('home-component', function (resolve) {
    axios.get('./app/componentes/home/vistahome.html').then(function (view) {
        resolve({
            template: view.data,
            data: function () {
                return {
                    usuario: {
                        email: "",
                        password: ""
                    }
                }
            },

            methods: {
                loginUser: function () {
                    let usuario = {
                        usuarioEmail: this.usuario.email,
                        usuarioPass: this.usuario.password
                    }
                    console.log("usuario que manda", usuario)
                    axios.post(API + '/usuarios/login', usuario).then((res) => {
                        let resultado = res.data;
                        console.log("resulado del axios",resultado)

                        if (resultado.response) {
                            usuario = resultado;
                            console.log("Nombre de usuario:::", usuario.response.nombres)
                            localStorage.setItem("nombreusuario", usuario.response.nombres);
                            localStorage.setItem("seguridad", usuario.response.seguridad);
                            localStorage.setItem("idusuario", usuario.response.idusu);
                            localStorage.setItem("token", usuario.token)
                            router.push({ path: '/mesa' });
                        } else {
                            console.log(usuario)
                            alert("Usuario / Contraseña incorrectos");
                            this.usuario={};
                            localStorage.clear();
                        }
                    })
                },
                cerrarsesion: function () {
                    localStorage.clear();
                    router.push('/')
                }

            }
        })
    })
})
