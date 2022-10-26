
const notfound = componentenotfound;
const home = componentehome;
const mesa = componentemesa;
const usuario = componenteusuario;
const cliente = componentecliente;
const articulo = componentearticulo;
const articuloconsulta = articulosconsulta;
const monedas = componentemoneda;
const cajas = componentecaja;
const familias = componentefamilia;
const cheques = componentecheque;
const seguridad = componenteseguridad;
const documento = componentedocumento;
const banco = componentebanco;
const deposito = componentedeposito;
const proveedores = componenteproveedores;
const movimientos = componentemovimientos;
const cotizacion = componentecotizacion;

const API = "http://127.0.0.1:3000"
//const API = "http://34.195.112.254:3000";

const routes = [
    { path: '*',name:"NotFound", component: notfound },
    { path: '/',name:"Login", component: home },
    { path: '/usuarios',name:"Personas", component: usuario },
    { path: '/articulos',name:"Articulos", component: articulo },
    { path: '/articulosconsulta',name:"Consulta Articulos", component: articulosconsulta },
    { path: '/clientes',name:"Clientes", component: cliente },
    { path: '/proveedores',name:"Proveedores", component: proveedores },
    { path: '/monedas',name:"Monedas", component: monedas },
    { path: '/cajas',name:"Cajas", component: cajas },
    { path: '/familias',name:"Familias", component: familias },
    { path: '/cheques',name:"Cheques", component: cheques },
    { path: '/seguridad',name:"Seguridad", component: seguridad },
    { path: '/mesa',name:"Home", component: mesa,},
    { path: '/documentos',name:"Documentos", component: documento,},
    { path: '/bancos',name:"Banco", component: banco,},
    { path: '/depositos',name:"Deposito", component: deposito,},
    { path: '/movimientos',name:"Movimientos", component: movimientos,},
    { path: '/cotizaciones',name:"Cotizacion", component: cotizacion,},
]

const router = new VueRouter({
    routes
})

let app = new Vue({
    router,
    data: {
        currentRoute: window.location.pathname
    }
}).$mount('#app')
