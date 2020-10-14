window.registro = [];
//switchery codigo
var elem = document.querySelector('.js-switch');
var init = new Switchery(elem,{
    color: 'green',
    secondaryColor:'red',
    jackColor:'white'
});

const boton = document.querySelector("#registrar-btn");

boton.addEventListener('click', ()=>{
    let erroresDiv = document.querySelector("#errores-div");
    erroresDiv.innerHTML = "";
    //aca me marca un error en console
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let planes = document.querySelector("#planes-select").value;
    let pago = document.querySelector("#pagos-select").value;
    let estado = document.querySelector("#estado-pago").checked;

    let errores = [];

    if(nombre===''){
        errores.push("Debe ingregar su nombre");
    }
    if(planes===''){
        errores.push("Debe elegir tipo de plan");
    }
    if(pago===''){
        errores.push("Debe elegir medio de pago");
    }
    if(errores.length === 0){
        let registro ={};
        registro.nombre = nombre;
        registro.planes = planes;
        registro.pago = pago;
        window.registros.push(registro);
        window.cargarTabla();
    }else {
        window.mostrarErrores(errores);

    }


});
