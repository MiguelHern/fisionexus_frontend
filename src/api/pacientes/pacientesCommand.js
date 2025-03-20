import { apiUrl, autorizationFormData, autorizationJSON } from '@/api/headers.js'
import axios from 'axios'
import { globalCommand } from '@/api/global/globaCommand.js'
import { NotificacionesModal } from '@/helpers/notifications/NotificacionGeneral.js'
import { irDiagnosticos, irExpediente, irInterrogatorio, irPacientes } from '@/router/rutasUtiles.js'

export const pacientesCommand = {

   postPacientes: async (nombre, apellido, institucion, domicilio, ocupacion, telefono, notas,estadoCivilId,fisioterapeutaId, sexo, tipoPaciente, codigoPostal, edad,  foto) => {
      try {
         const formData = new FormData()

         // Agregar los campos al FormData
         formData.append('nombre', nombre)
         formData.append('apellido', apellido)
         formData.append('institucion', institucion)
         formData.append('domicilio', domicilio)
         formData.append('ocupacion', ocupacion)
         formData.append('telefono', telefono)
         formData.append('notas', notas)
         formData.append('sexo', sexo)
         formData.append('tipoPaciente', tipoPaciente)
         formData.append('edad', edad)
         formData.append('codigoPostal', codigoPostal)
         formData.append('estadoCivilId', estadoCivilId)
         formData.append('fisioterapeutaId', fisioterapeutaId)
         formData.append('foto', foto)
         console.log(formData)
         const [data, config] = autorizationFormData(formData)
         let response = await axios.post(apiUrl + '/Pacientes', data, config)

         await NotificacionesModal.ExitosoSimple('Paciente agregado con éxito', 'Aceptar')
         irInterrogatorio(response.data.pacienteId)

         return null
      } catch (error) {
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },

   actualizarDataPaciente: async (pacienteId, nombre, apellido, institucion, domicilio, ocupacion, telefono, notas,estadoCivilId,fisioterapeutaId, sexo, tipoPaciente, codigoPostal, edad,  foto) => {
      try {
         const formData = new FormData()

         // Agregar los campos al FormData
         formData.append('pacienteId', pacienteId)
         formData.append('nombre', nombre)
         formData.append('apellido', apellido)
         formData.append('institucion', institucion)
         formData.append('direccion', domicilio)
         formData.append('ocupacion', ocupacion)
         formData.append('telefono', telefono)
         formData.append('notas', notas)
         formData.append('sexo', sexo)
         formData.append('tipoPaciente', tipoPaciente)
         formData.append('fechaNacimiento', edad)
         formData.append('codigoPostal', codigoPostal)
         formData.append('estadoCivilId', estadoCivilId)
         formData.append('fisioterapeutaId', fisioterapeutaId)
         formData.append('foto', foto)
         console.log(formData)
         const [data, config] = autorizationFormData(formData)
         let response = await axios.patch(apiUrl + '/Pacientes', data, config)

         await NotificacionesModal.ExitosoSimple(response.data, 'Aceptar')
         return null
      } catch (error) {
         console.log(error)
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },

   postInterrogatorio: async (sexo, pacienteId, tipoInterrogatorio, responsable, padres, padresVivos, padresCausaMuerte, hermanos, hermanosVivos, hermanosCausaMuerte, hijos, hijosVivos, hijosCausaMuerte, dm, hta, cancer, alcoholismo, tabaquismo, drogas, antecedentesPatologicos, medioLaboral, medioSociocultural, medioFisicoambiental, fum, fpp, edadGestional, semanas, menarca, ritmo, gestas, partos, cesareas, abortos, cirugias, flujoVaginalId, tipoAnticonceptivoId) => {

      try {
         let interrogatorio = null
         if (sexo === 'Hombre') {
            interrogatorio = {
               pacienteId,
               tipoInterrogatorio,
               responsable,
               heredoFamiliar: {
                  padres,
                  padresVivos,
                  padresCausaMuerte,
                  hermanos,
                  hermanosVivos,
                  hermanosCausaMuerte,
                  hijos,
                  hijosVivos,
                  hijosCausaMuerte,
                  dm,
                  hta,
                  cancer,
                  alcoholismo,
                  tabaquismo,
                  drogas
               },
               antecedente: {
                  antecedentesPatologicos,
                  medioLaboral,
                  medioSociocultural,
                  medioFisicoambiental
               }
            }
         } else {
            interrogatorio = {
               pacienteId,
               tipoInterrogatorio,
               responsable,
               heredoFamiliar: {
                  padres,
                  padresVivos,
                  padresCausaMuerte,
                  hermanos,
                  hermanosVivos,
                  hermanosCausaMuerte,
                  hijos,
                  hijosVivos,
                  hijosCausaMuerte,
                  dm,
                  hta,
                  cancer,
                  alcoholismo,
                  tabaquismo,
                  drogas
               },
               antecedente: {
                  antecedentesPatologicos,
                  medioLaboral,
                  medioSociocultural,
                  medioFisicoambiental
               },
               ginecobstetricos: {
                  fum,
                  fpp,
                  edadGestional,
                  semanas,
                  menarca,
                  ritmo,
                  gestas,
                  partos,
                  cesareas,
                  abortos,
                  cirugias,
                  flujoVaginalId,
                  tipoAnticonceptivoId
               }
            }
         }

         console.log(interrogatorio)

         const [data, config] = autorizationJSON(interrogatorio)
         await axios.post(apiUrl + '/Expediente', data, config)

         await NotificacionesModal.ExitosoSimple('Datos del paciente guardados con éxito', 'Aceptar')
         irExpediente(pacienteId)

      } catch (error) {
         if (error.response.status === 400) {
            console.log('Error al cargar los archivos')
         }
      }

   },

   actualizarInterrogatorio: async (sexo, expedienteId, tipoInterrogatorio, responsable, padres, padresVivos, padresCausaMuerte, hermanos, hermanosVivos, hermanosCausaMuerte, hijos, hijosVivos, hijosCausaMuerte, dm, hta, cancer, alcoholismo, tabaquismo, drogas, antecedentesPatologicos, medioLaboral, medioSociocultural, medioFisicoambiental, fum, fpp,menarca,ritmo,  cirugias, edadGestional, semanas,  gestas, partos, cesareas, abortos, flujoVaginalId, tipoAnticonceptivoId) => {

      try {
         if (edadGestional === "No aplica") {
            edadGestional = 0;
         }
         if (semanas === "No aplica") {
            semanas = 0;
         }
         if (gestas === "No aplica") {
            gestas = 0;
         }
         if (partos === "No aplica") {
            partos = 0;
         }
         if (cesareas === "No aplica") {
            cesareas = 0;
         }
         if (abortos === "No aplica") {
            abortos = 0;
         }
         let interrogatorio = null

         if (sexo === 'Hombre') {
            interrogatorio = {
               expedienteId,
               tipoInterrogatorio,
               responsable,
               heredo: {
                  padres,
                  padresVivos,
                  padresCausaMuerte,
                  hermanos,
                  hermanosVivos,
                  hermanosCausaMuerte,
                  hijos,
                  hijosVivos,
                  hijosCausaMuerte,
                  dm,
                  hta,
                  cancer,
                  alcoholismo,
                  tabaquismo,
                  drogas
               },
               antecedente: {
                  antecedentesPatologicos,
                  medioLaboral,
                  medioSociocultural,
                  medioFisicoambiental
               }
            }
         } else {
            interrogatorio = {
               expedienteId,
               tipoInterrogatorio,
               responsable,
               heredo: {
                  padres,
                  padresVivos,
                  padresCausaMuerte,
                  hermanos,
                  hermanosVivos,
                  hermanosCausaMuerte,
                  hijos,
                  hijosVivos,
                  hijosCausaMuerte,
                  dm,
                  hta,
                  cancer,
                  alcoholismo,
                  tabaquismo,
                  drogas
               },
               antecedente: {
                  antecedentesPatologicos,
                  medioLaboral,
                  medioSociocultural,
                  medioFisicoambiental
               },
               gineco: {
                  fum,
                  fpp,
                  menarca,
                  ritmo,
                  cirugias,
                  edadGestional,
                  semanas,
                  gestas,
                  partos,
                  cesareas,
                  abortos,
                  flujoVaginalId,
                  tipoAnticonceptivoId
               }
            }
         }
         console.log(interrogatorio)
         const [data, config] = autorizationJSON(interrogatorio)
         await axios.patch(apiUrl + '/Expediente', data, config)
         await NotificacionesModal.ExitosoSimple('Datos actualizados con éxito', 'Aceptar')
         return true
      } catch (error) {
        NotificacionesModal.PantallaError(error.response.data.detail)
      }

   },

   crearCita: async (pacienteId,fecha,hora,motivo) => {
      try {
         const JSON ={
            pacienteId,
            fecha,
            hora: hora + ':00',
            motivo
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.post(apiUrl + '/Cita', data, config)
         NotificacionesModal.ExitosoSimple(response.data)
         return true
      }catch (error){
         NotificacionesModal.PantallaError(error.response.data.detail)
      }
   },

   editarCita: async (citaId,cancelar,fecha,hora,motivo) => {
      try {
         const JSON ={
            citaId,
            cancelar,
            fecha,
            hora,
            motivo
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.patch(apiUrl + '/Cita', data, config)
         NotificacionesModal.ExitosoSimple(response.data)
         return true
      }catch (error){
         NotificacionesModal.PantallaError(error.response.data.detail)
      }
   },

   archivarPaciente: async (pacienteId) => {
      try {
         const JSON ={
            pacienteId,
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.put(apiUrl + '/Pacientes/Estatus', data, config)
         NotificacionesModal.ExitosoSimple(response.data)
         return true
      }catch (error){
         console.log(error)
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },
   postDiagnostico: async (pacienteId, expedienteId,fr,fc,temperatura,peso,estatura,imc,indiceCinturaCadera,saturacionOxigeno,presionArterial,valores,rangoDolor,nota,descripcion,refiere,categoria,diagnosticoPrevio,terapeuticaEmpleada,diagnosticoFuncional,padecimientoActual,inspeccion,exploracionFisicaDescripcion,estudiosComplementarios,diagnosticoNosologico,cortoPlazo,medianoPlazo,largoPlazo,tratamientoFisioterapeutico,sugerencias,pronostico,notas,folioPago,servicioId) => {
      try {
         const JSON ={
            expedienteId,
            exploration:{
               fr,
               fc,
               temperatura,
               peso,
               estatura,
               imc,
               indiceCinturaCadera,
               saturacionOxigeno,
               presionArterial
            },
            map:{
               valores,
               rangoDolor,
               nota
            },
            diagnostic: {
               descripcion,
               refiere,
               categoria,
               diagnosticoPrevio,
               terapeuticaEmpleada,
               diagnosticoFuncional,
               padecimientoActual,
               inspeccion,
               exploracionFisicaDescripcion,
               estudiosComplementarios,
               diagnosticoNosologico
            },
            program : {
               cortoPlazo,
               medianoPlazo,
               largoPlazo,
               tratamientoFisioterapeutico,
               sugerencias,
               pronostico
            },
            review: {
               notas,
               folioPago,
               servicioId
            }
         }
         console.log(JSON)
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.post(apiUrl + '/Diagnostico', data, config)
         NotificacionesModal.ExitosoSimple('Se creo el diagnostico corretamente')
         await irExpediente(pacienteId)
      }catch (error){
         NotificacionesModal.PantallaError(error.response.data.detail)
      }
   },

   crearRevision: async (notas, folioPago, diagnosticoId, servicioId, fr, fc, temperatura, peso, estatura, imc, indiceCinturaCadera, saturacionOxigeno, presionArterial) => {
      try {
         const JSON = {
            notas,
            folioPago,
            diagnosticoId,
            servicioId,
            exploration: {
               fr,
               fc,
               temperatura,
               peso,
               estatura,
               imc,
               indiceCinturaCadera,
               saturacionOxigeno,
               presionArterial
            }
         }
         console.log(JSON)
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.post(apiUrl + '/Diagnostico/Revision', data, config)
         NotificacionesModal.ExitosoSimple(response.data)
         return true
      } catch (error) {
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },

   finalizarDiagnostico: async (pacienteId,diagnosticId,diagnosticoInicial,diagnosticoFinal,frecuenciaTratamiento,motivoAltaId) => {
      try {
         const JSON ={
            diagnosticId,
            diagnosticoInicial,
            diagnosticoFinal,
            frecuenciaTratamiento,
            motivoAltaId
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.put(apiUrl + '/Diagnostico/Finalizar', data, config)
         NotificacionesModal.ExitosoSimple(response.data)
         irDiagnosticos(pacienteId,diagnosticId)
         return true
      }catch (error){
         console.log(error)
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },
}