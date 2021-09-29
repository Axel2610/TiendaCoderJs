class CelularCompra {
    constructor(marca,modelo,precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}


const motoG100 = new CelularCompra ("Moto","G100",90000);
const motoG60s = new CelularCompra ("Moto","G60s",46000);
const motoG20 = new CelularCompra ("Moto","G20",29000);

const galaxyA72 = new CelularCompra ("Samsung","A72",67000);
const galaxyA52 = new CelularCompra ("Samsung","A52",58000);
const galaxyA21s = new CelularCompra ("Samsung","A21s",40000);

const mi10T = new CelularCompra ("Xiaomi","mi10T",70000);
const mi10Tpro = new CelularCompra ("Xiaomi","mi10Tpro",85000);
const mi10Tlite = new CelularCompra ("Xiaomi","mi10Tlite",65000);

const iPhone12pro = new CelularCompra ("Apple","12Pro",170000);
const iPhone12mini = new CelularCompra ("Apple","12Mini",120000);
const iPhoneX = new CelularCompra ("Apple","X",140000);

const productos = [];

productos.push(motoG100, motoG60s, motoG20, galaxyA72, galaxyA52, galaxyA21s, mi10T, mi10Tlite, mi10Tpro, iPhone12pro, iPhoneX, iPhone12mini);

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal("listaProductos", JSON.stringify(productos));