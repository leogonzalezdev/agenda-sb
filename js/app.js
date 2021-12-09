// Variables
const agenda = document.querySelector('#agenda');
const formulario = document.querySelector('#formAdd');
// Objeto
let clientes = [];
// Escucha de eventos
formulario.addEventListener('submit', añadirCliente);
// Clases
class UI{
    imprimirAlerta(mensaje, tipo){
        const divAlerta = document.createElement('div');
        divAlerta.classList.add('alert', 'mt-2', 'text-center');
        divAlerta.textContent = mensaje;
        if (tipo === 'error') {
            divAlerta.classList.add('alert-danger');
        }else{
            divAlerta.classList.add('alert-success');
        }
        formulario.appendChild(divAlerta);
        setTimeout(() => {
            divAlerta.remove();
        }, 2000);
    }
    imprimirClientes(clientes){
        clientes.forEach((cliente, index) => {
            const {nombre, pulgar, indice, mayor, anular, menique, largo} = cliente;
            const divCard = document.createElement('div');
            divCard.classList.add('card', 'ml-3','mt-1', 'col-md-6', 'p-0','text-light', 'bg-warning');
            divCard.innerHTML = `
                <div class="card-header">
                    <p>${nombre}</p>
                </div>
                <div class="card-body">
                    <p class="text-wrap">
                        Pulgar: ${pulgar} cm
                        Indice: ${indice} cm
                        Mayor: ${mayor} cm
                        Anular: ${anular} cm
                        Menique: ${menique} cm
                        Largo: ${largo} cm
                    </p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary" id="${index}">
                        <i class="gg-pen"></i></button>
                    </button>
                    <button class="btn btn-danger" id="${index}">
                        <i class="gg-trash"></i></button>
                    </button>
                </div>
            `;
            agenda.appendChild(divCard);
        });
    }
    limpiarHTML(){
        while (agenda.firstChild){
            agenda.removeChild(agenda.firstChild);
        };
    }
}
const ui = new UI();
// Funciones
function añadirCliente(e){
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value,
          pulgar = document.querySelector('#pulgar').value,
          indice = document.querySelector('#indice').value,
          mayor = document.querySelector('#mayor').value,
          anular = document.querySelector('#anular').value,
          menique = document.querySelector('#menique').value,
          largo = document.querySelector('#largo').value;
    const cliente = {nombre,pulgar, indice, mayor, anular, menique, largo};
    clientes = [...clientes, cliente];
    ui.limpiarHTML();
    ui.imprimirClientes(clientes);
    ui.imprimirAlerta('Cliente Añadido');
    formulario.reset();

}












// function addCita(e){
//     e.preventDefault();
//     citas.nombre = e.target[0].value;
//     citas.img = e.target[1].value;
//     citas.pulgar = e.target[2].value;
//     citas.indice = e.target[3].value;
//     citas.mayor = e.target[4].value;
//     citas.anular = e.target[5].value;
//     citas.menique = e.target[6].value;
//     citas.largo = e.target[7].value;
//     mostrarCitas();
// }
// function mostrarCitas(){
//     const {nombre,img,pulgar,indice,mayor,anular,menique,largo} = citas;
//     const parrafo = document.createElement('p');
//     parrafo.textContent =`Nombre: ${nombre} - Pulgar: ${pulgar}cm - Indice: ${indice}cm - Mayor: ${mayor}cm - Anular: ${anular}cm - Meñique: ${menique}cm - Largo: ${largo}cm`;
//     card.appendChild(parrafo);
//     agenda.appendChild(card);
// }
// cardHeader.classList.add('card-header')
// card.classList.add('card','row','p-4','bg-light','text-dark');
// clienteAdd.addEventListener('submit',addCita);