//switchery codigo
var elem = document.querySelector('.js-switch');
var init = new Switchery(elem,{
    color: 'green',
    secondaryColor:'red',
    jackColor:'white'
});

//window.mostrarCard = ()=>{
    
//}

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
window.registro = [];

window.crearRegistro = ()=>{
    let cardRegistro = document.querySelector("#card-registro");
    cardRegistro.classList("row","col-md-4","mx-auto");
    cardRegistro.innerHTML = "";

    window.registro.forEach((e)=>{
        let card = document.createElement("div");
        card.innerHTML = "";
        card.classList("card","mt-4");

        let cardHeader = document.createElement("div");
        cardHeader.classList("card-header","bg-success","bg-gradient","text-withe","text-cemter");
        cardHeader.innerText('Sus Datos de registro han sido agregados correctamente');

        let cardBody = document.createElement("div");
        cardBody.classList("card-body","text-center");
        if(planes === "1"){
            cardBody.innerText('Plan 2 veces por semana, total a pagar $14.000');
        }else if(planes === "2"){
            cardBody.innerText('Plan 4 veces por semana, total a pagar $17.000');
        }else if(planes === "3"){
            cardBody.innerText('Plan Ilimitado, total a pagar $20.000');
        }
    })
}

const boton = document.querySelector("#registrar-btn");


boton.addEventListener('click', ()=>{
    let erroresDiv = document.querySelector("#errores-div").innerHTML = "";

    let nombre = document.querySelector("#nombre-txt").value.trim();
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
        let registro = {};
        registro.nombre = nombre;
        registro.planes = planes;
        registro.pago = pago;
        registro.estado = check;

        window.registros.push(registro);
        window.cargarTabla(registro);
    }else {
        window.mostrarErrores(errores);

    }


});
