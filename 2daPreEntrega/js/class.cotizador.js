 class Cotizador {
    constructor(cantidad, factorproductos, factorkilos, costoKilo) {
        this.cantidad = parseInt(cantidad) || 1
        this.factorPr = parseFloat(factorproductos) || 1
        this.factorKg = parseFloat(factorkilos) || 1
        this.costoKG = parseFloat(CostoKilo) || 1
    }
    calcular() {
        let resultado = (this.cantidad * this.costoKG * this.factorPr * this.factorKg).toFixed(2)
            return resultado.toLocaleString()
    }
} 