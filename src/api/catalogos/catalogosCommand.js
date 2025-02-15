import { apiUrl, autorizationJSON, sinAutorizationJSON } from '@/api/headers.js'
import axios from 'axios'
import { NotificacionesModal } from '@/helpers/notifications/NotificacionGeneral.js'

export const catalogosCommand = {
   /*ESPECIALIDADES*/
   agregarEspecialidad: async (descripcion) => {
      try {
         const JSON = {
            descripcion
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.post(apiUrl + '/Catalogo/Especialidades', data, config)
         NotificacionesModal.ExitosoSimple(response.data)
      } catch (error) {
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },

   editarEspecialidad: async (especialidadId,descripcion,status) => {
      try {
         const JSON ={
            especialidadId,
            descripcion,
            status
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.patch(apiUrl + '/Catalogo/Especialidades', data, config)
         return true
      }catch (error){
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },

   /*ESTADO CIVIL*/
   agregarEstadoCivil: async (descripcion) => {
      try {
         const JSON = {
            descripcion
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.post(apiUrl + '/Catalogo/EstadoCivil', data, config)
         NotificacionesModal.ExitosoSimple(response.data)
      } catch (error) {
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },

   editarEstadoCivil: async (estadoCivilId,descripcion,status) => {
      try {
         const JSON ={
            estadoCivilId,
            descripcion,
            status
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.patch(apiUrl + '/Catalogo/EstadoCivil', data, config)
         return true
      }catch (error){
         console.log(error)
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },

   /*FLUJO VAGINAL*/

   agregarFlujoVaginal: async (descripcion) => {
      try {
         const JSON = {
            descripcion
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.post(apiUrl + '/Catalogo/FlujoVaginal', data, config)
         NotificacionesModal.ExitosoSimple(response.data)
      } catch (error) {
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },

   editarFlujoVaginal: async (flujoVaginalId,descripcion,status) => {
      try {
         const JSON ={
            flujoVaginalId,
            descripcion,
            status
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.patch(apiUrl + '/Catalogo/FlujoVaginal', data, config)
         return true
      }catch (error){
         console.log(error)
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },
   /*MOTIVO ALTA*/

   agregarMotivoAlta: async (descripcion) => {
      try {
         const JSON = {
            descripcion
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.post(apiUrl + '/Catalogo/MotivoAlta', data, config)
         NotificacionesModal.ExitosoSimple(response.data)
      } catch (error) {
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },

   editarMotivoAlta: async (motivoAltaId,descripcion,status) => {
      try {
         const JSON ={
            motivoAltaId,
            descripcion,
            status
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.patch(apiUrl + '/Catalogo/MotivoAlta', data, config)
         return true
      }catch (error){
         console.log(error)
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },

   /*SERVICIOS*/

   agregarServicios: async (descripcion) => {
      try {
         const JSON = {
            descripcion
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.post(apiUrl + '/Catalogo/Servicios', data, config)
         NotificacionesModal.ExitosoSimple(response.data)
      } catch (error) {
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },

   editarServicios: async (servicioId,descripcion,status) => {
      try {
         const JSON ={
            servicioId,
            descripcion,
            status
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.patch(apiUrl + '/Catalogo/Servicios', data, config)
         console.log(response)
         return true
      }catch (error){
         console.log(error)
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },

   /*TIPO ANTICONCEPTIVO*/

   agregarAnticonceptivo: async (descripcion) => {
      try {
         const JSON = {
            descripcion
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.post(apiUrl + '/Catalogo/TipoAnticonceptivo', data, config)
         NotificacionesModal.ExitosoSimple(response.data)
      } catch (error) {
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },

   editarAnticonceptivo: async (anticonceptivoId,descripcion,status) => {
      try {
         const JSON ={
            anticonceptivoId,
            descripcion,
            status
         }
         const [data, config] = autorizationJSON(JSON)
         const response = await axios.patch(apiUrl + '/Catalogo/TipoAnticonceptivo', data, config)
         return true
      }catch (error){
         console.log(error)
         NotificacionesModal.PantallaError(error.response.data.Detail)
      }
   },
}