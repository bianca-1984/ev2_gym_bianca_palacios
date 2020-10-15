window.registro = [];
//switchery codigo
var elem = document.querySelector('.js-switch');
var init = new Switchery(elem,{
    color: 'green',
    secondaryColor:'red',
    jackColor:'white'
});

window.mostrarCard = ()=>{
    
}

window.mostrarErrores = (errores)=>{
    let erroresDiv = document.querySelector("#errores-div");
    let ul = document.createElement("ul");
    ul.classList.add("alert","alert-warning");
    errores.forEach(e=> {
        let li = document.createElement("li");
        li.innerText = e;
        ul.appendChild(li);
    });
    erroresDiv.appendChild(ul);
    
}

const boton = document.querySelector("#registrar-btn");


boton.addEventListener('click', ()=>{
    
    document.querySelector("#errores-div").innerHTML = "";
    let nombre = document.querySelector("#nombre-txt").value;
    let planes = document.querySelector("#planes-select").value;
    let pago = document.querySelector("#pagos-select").value;
    let check = document.querySelector("#estado-pago").checked;

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
