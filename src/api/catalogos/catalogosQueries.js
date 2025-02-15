import axios from 'axios'
import { apiUrl, autorization } from '@/api/headers.js'

export const catalogosQueries = {
   /*ESPECIALIDADES*/
   getEspecialidad: async (boolean) => {
      try {
         const response = await axios.get(apiUrl + '/Catalogo/Especialidades?onlyActive=' + boolean, autorization())
         return response.data
      } catch (error) {

      }
   },

   /*ESTADO CIVIL*/
   getEstadoCivil: async (boolean) => {
      try {
         const response = await axios.get(apiUrl + '/Catalogo/EstadoCivil?onlyActive=' + boolean, autorization())
         return response.data
      } catch (error) {
      }
   },

   /*FLUJO VAGINAL*/
   getFlujo: async (boolean) => {
      try {
         const response = await axios.get(apiUrl + '/Catalogo/FlujoVaginal?onlyActive=' + boolean, autorization())
         return response.data
      } catch (error) {
      }
   },

   /*MOTIVOS DE ALTA*/
   getMotivAlta: async (boolean) => {
      try {
         const response = await axios.get(apiUrl + '/Catalogo/MotivoAlta?onlyActive=' + boolean, autorization())
         return response.data
      } catch (error) {
      }
   },

   /*SERVICIOS*/
   getServicios: async (boolean) => {
      try {
         const response = await axios.get(apiUrl + '/Catalogo/Servicios?onlyActive=' + boolean, autorization())
         return response.data
      } catch (error) {
      }
   },

   /*ANTICONCEPTIVOS*/
   getAnticonceptivos: async (boolean) => {
      try {
         const response = await axios.get(apiUrl + '/Catalogo/TipoAnticonceptivo?onlyActive=' + boolean, autorization())
         return response.data
      } catch (error) {
      }
   }

}