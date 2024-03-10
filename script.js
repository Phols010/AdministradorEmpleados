// Definición de la clase Empleado
class Empleado {
    constructor(numeroEmpleado, nombre, apellido, edad, puesto, salario) {
        this.numeroEmpleado = numeroEmpleado;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.puesto = puesto;
        this.salario = salario;
    }
}

// Arreglo para almacenar los empleados
let empleados = [];

// Función para agregar un empleado
function agregarEmpleado() {
    const numeroEmpleado = parseInt(document.getElementById('numeroEmpleado').value);
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = parseInt(document.getElementById('edad').value);
    const puesto = document.getElementById('puesto').value;
    const salario = parseFloat(document.getElementById('salario').value);

    const empleado = new Empleado(numeroEmpleado, nombre, apellido, edad, puesto, salario);
    empleados.push(empleado);

    limpiarFormulario();
}

// Función para listar los empleados
function listarEmpleados() {
    const listaEmpleados = document.getElementById('lista-empleados');
    listaEmpleados.innerHTML = '';

    empleados.forEach(empleado => {
        const empleadoDiv = document.createElement('div');
        empleadoDiv.classList.add('empleado');
        empleadoDiv.innerHTML = `
            <p><span>Número de empleado:</span> ${empleado.numeroEmpleado}</p>
            <p><span>Nombre:</span> ${empleado.nombre}</p>
            <p><span>Apellido:</span> ${empleado.apellido}</p>
            <p><span>Edad:</span> ${empleado.edad}</p>
            <p><span>Puesto:</span> ${empleado.puesto}</p>
            <p><span>Salario:</span> ${empleado.salario}</p>
        `;
        listaEmpleados.appendChild(empleadoDiv);
    });
}

// Función para buscar empleados por apellido
function buscarPorApellido() {
    const apellido = document.getElementById('apellidoBusqueda').value;
    const empleadosEncontrados = empleados.filter(empleado => empleado.apellido.toLowerCase() === apellido.toLowerCase());

    if (empleadosEncontrados.length > 0) {
        mostrarEmpleados(empleadosEncontrados);
    } else {
        alert('No se encontraron empleados con ese apellido.');
    }
}

// Función para actualizar la información de un empleado
function actualizarEmpleado() {
    const nombre = document.getElementById('nombreActualizar').value;
    const apellido = document.getElementById('apellidoActualizar').value;

    const empleado = empleados.find(empleado => empleado.nombre.toLowerCase() === nombre.toLowerCase() && empleado.apellido.toLowerCase() === apellido.toLowerCase());

    if (empleado) {
        const nuevaEdad = parseInt(prompt('Ingrese la nueva edad:'));
        const nuevoPuesto = prompt('Ingrese el nuevo puesto:');
        const nuevoSalario = parseFloat(prompt('Ingrese el nuevo salario:'));
        
        empleado.edad = nuevaEdad;
        empleado.puesto = nuevoPuesto;
        empleado.salario = nuevoSalario;

        listarEmpleados();
    } else {
        alert('No se encontró ningún empleado con ese nombre y apellido.');
    }
}

// Función para eliminar un empleado por número de empleado
function eliminarEmpleado() {
    const numeroEmpleado = parseInt(document.getElementById('numeroEmpleadoEliminar').value);
    const empleadoIndex = empleados.findIndex(empleado => empleado.numeroEmpleado === numeroEmpleado);

    if (empleadoIndex !== -1) {
        empleados.splice(empleadoIndex, 1);
        listarEmpleados();
    } else {
        alert('No se encontró ningún empleado con ese número de empleado.');
    }
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById('numeroEmpleado').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('puesto').value = '';
    document.getElementById('salario').value = '';

    document.getElementById('formulario').style.display = 'none';
}

// Mostrar formulario para agregar empleado
function mostrarFormulario() {
    document.getElementById('formulario').style.display = 'block';
}
