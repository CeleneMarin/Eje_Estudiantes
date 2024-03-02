
let estudiantes = [
    { id: 1, nombre: 'Celene', apellido1:'Marin',apellido2:'Vera',nControl:'20400771', calif1:80,calif2:70,calif3:90},
    { id: 2, nombre: 'Jorge Alberto', apellido1:'Guzman',apellido2:'Alvarez',nControl:'20400751', calif1:90,calif2:90,calif3:90},
    { id: 3, nombre: 'Juan', apellido1:'Perez',apellido2:'Cruz',nControl:'20400701', calif1:88,calif2:88,calif3:88},
    { id: 4, nombre: 'Maria', apellido1:'Guzman',apellido2:'Vera',nControl:'20400777', calif1:90,calif2:90,calif3:90},
    { id: 5, nombre: 'Yahir', apellido1:'Huerta',apellido2:'Escobeda',nControl:'20400802', calif1:60,calif2:60,calif3:80}
];

function getAllEstudiantes() {
    return estudiantes;
}


function createEst(nombre, apellido1, apellido2,nControl, calif1, calif2, calif3) {
    const lastInv = estudiantes[estudiantes.length -1];
    const lastId = lastInv.id;

    const newInv = {
        id: lastId +1,
        nombre,
        apellido1,
        apellido2,
        nControl: parseInt(nControl),
        calif1: parseFloat (calif1),
        calif2: parseFloat (calif2),
        calif3: parseFloat (calif3)
    };

    estudiantes.push(newInv);
    return newInv;
}

function getEstID(id) {
    const idEstudiante = parseInt(id);
    const EstFound = estudiantes.find(a=> a.id === id);
    return EstFound;
}

function updateEst(id, nombre, apellido1, apellido2,nControl, calif1, calif2, calif3){
    const idEstudiante = parseInt(id);
    //const { nombre, apellido1, nControl, apellido2 } = req.body;
    const estudianteEncontrado = estudiantes.findIndex(a => a.id === idEstudiante);
    
    estudiantes[estudianteEncontrado].nombre = nombre; 
    estudiantes[estudianteEncontrado].apellido1 = apellido1; 
    estudiantes[estudianteEncontrado].apellido2 = apellido2;
    estudiantes[estudianteEncontrado].nControl = nControl;  
    estudiantes[estudianteEncontrado].calif1= calif1; 
    estudiantes[estudianteEncontrado].calif2= calif2;
    estudiantes[estudianteEncontrado].calif3 = calif3;  
    estudiantes[estudianteEncontrado].estado = estado;  
    return estudiantes;
}

function deleteEst(id){
    const idEstudiante = parseInt(id);
    const estIndex = estudiantes.findIndex(a=> a.id === idEstudiante); 
    estudiantes.splice(estIndex, 1);
    return estIndex;
}

function getPromedio() {
    const promedios = estudiantes.map(estudiante => {
        const sumaCalificaciones = estudiante.calif1 + estudiante.calif2 + estudiante.calif3;
        const promedio = sumaCalificaciones / 3;
        return { nombre: estudiante.nombre, promedio: promedio };
    });
    //Se muestran a los estudiantes con calificación mayor a 85
    const promedioMayor = promedios.filter(estudiante => estudiante.promedio > 85);
    return promedioMayor;
}

function ordenarPromedio(promedio = 'desc') {
    const promedios = estudiantes.map(estudiante => {
        const sumaCalificaciones = estudiante.calif1 + estudiante.calif2 + estudiante.calif3;
        const promedio = sumaCalificaciones / 3;
        return { nombre: estudiante.nombre, promedio: promedio };
    });
    const promOrdenado = promedios.filter(estudiante => estudiante.promedio);

    // Ordenar los promedios de mayor a menor
    promOrdenado.sort((a, b) => b.promedio - a.promedio);

    return promOrdenado;
}

function getReprobados() {
    const promedios = estudiantes.map(estudiante => {
        const sumaCalificaciones = estudiante.calif1 + estudiante.calif2 + estudiante.calif3;
        const promedio = sumaCalificaciones / 3;
        return { nombre: estudiante.nombre, promedio: promedio };
    });
    //Se muestran a los estudiantes con calificación mayor a 85
    const promedioMayor = promedios.filter(estudiante => estudiante.promedio < 70);
    return promedioMayor;
}


module.exports = {
    createEst,
    getAllEstudiantes,
    getEstID,
    deleteEst,
    updateEst,
    getPromedio,
    ordenarPromedio,
    getReprobados
}