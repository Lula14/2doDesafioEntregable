 const cargarCombo = (select, array)=> { 
    if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
        });
    } else {
        console.error("No existen elementos en el Array :(")
        btnCalcular.disabled = true
    }
}

cargarCombo(productos, datosProductos)
cargarCombo(kilos, datosKilos)

const datosCompletos = ()=> { 
    if (productos.value !== "..." && kilos.value !== "..." && parseInt(cantidad.value) && cantidad.value >= 0) {
        return true
    } else {
        return false 
    }
}


const realizarCotizacion = ()=> { 

    if (datosCompletos()) {
        const total = new Cotizador(cantidad.value, productos.value, kilos.value, CostoKilo)
        console.log(total.calcular())
        total.innerText = total.calcular()
        btnEnviar.classList.remove("ocultar")
        
    } else {
        alert("⛔️ Completa todos los valores solicitados.")
    }
}

const enviarPorEmail = ()=> { 
    const cotizacion = {
        fechaCotizacion: new Date().toLocaleString(),
        productos: productos[productos.selectedIndex].text,
        kilos: kilos[kilos.selectedIndex].text,
        CostoKilo: datosKilos.value,
        poliza: total.innerText
        
    }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion))
    alert("✅ Cotización enviada. ¡Muchas gracias por elegirnos!")
    btnEnviar.classList.add("ocultar")
}

btnCalcular.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarPorEmail) 

realizarCotizacion()