const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/EstController');


  //1. Obtener todos los promedios
  router.get('/', (req,res) => {
    res.json(estudiantesController.getAllEstudiantes());
  }); 

  //2. Agregar nuevo promedio
  router.post('/',(req, res)=> {  
    const { nombre, apellido1, apellido2,nControl, calif1, calif2, calif3 } = req.body;
    const newEst = estudiantesController.createEst(nombre, apellido1, apellido2, nControl, calif1, calif2, calif3);
    res.status(201).json(newEst);
  });

  //3. Obtener un estudiante por su ID
  router.get('/:id', (req, res)=> {
    const idEstudiantes = parseInt(req.params.id);
    const eliminarEst = estudiantesController.getEstID(idEstudiantes);

    if (eliminarEst) {
      res.json(eliminarEst);
    } else {
      res.status(404).json({ error: 'No se encontro la tarea (consulta ID)' });
    }
  });

  //4. Actualizar un estudiante por su ID
  router.put('/:id', (req,res)=>{
    const idEstudiante = parseInt(req.params.id) //id a numero
    const { nombre, apellido1, apellido2,nControl, calif1, calif2, calif3} = req.body;
    const eliminarEst = estudiantesController.updateEst(idEstudiante, nombre, apellido1, apellido2,nControl, calif1, calif2, calif3); 
    if (eliminarEst){
        res.json(eliminarEst);
    } else {
        res.status(404).json({ error: 'No se encontro la tarea (actualizar)'  });
    } 
  });

  //5. Eliminar un estudiante
  router.delete('/:id', (req,res)=>{
    const idEstudiante = parseInt(req.params.id);
    const estudianteEncontrado = estudiantesController.deleteEst(idEstudiante);
    if (estudianteEncontrado) {
      res.json(estudianteEncontrado);
    } else {
      res.status(404).json({ error: 'No se encontro el estudiante' });
    }
  });

  //6. Cálculo el promedio de cada estudiante
  router.get('/promedio/mejor', (req, res) => {
    const mejorPromedio = estudiantesController.getPromedio();
    if (mejorPromedio && mejorPromedio.length > 0) {
      res.json(mejorPromedio);
    } else {
      res.status(404).json({ error: 'No hay ningun estudiante con calificacion mayor a 85'});
    }

  });

  //7. Ordenar promedios del mas alto al mas bajo
  router.get('/promedio/ordenado', (req, res) => {
    const promOrdenado = estudiantesController.ordenarPromedio();
    if (promOrdenado && promOrdenado.length > 0) {
      res.json(promOrdenado);
    } else {
      res.status(404).json({ error: 'No hay ningun estudiante registrado'});
    }

  });

  //8. Ordenar estudiantes reprobados (menor a 70)
  router.get('/promedio/reprobado', (req, res) => {
    const estReprobados = estudiantesController.getReprobados();
    if (estReprobados && estReprobados.length > 0) {
      res.json(estReprobados);
    } else {
      res.status(404).json({ error: 'No hay ningun estudiante reprobado'});
    }

  });

module.exports = router;

