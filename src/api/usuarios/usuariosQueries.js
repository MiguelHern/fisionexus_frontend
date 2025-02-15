import axios from 'axios'
import { apiUrl, autorization } from '@/api/headers.js'

export const usuariosQueries = {

   verifyUser: async (token) => {
      try{
         const response = await axios.get(apiUrl + "/Cuenta/verifyUser/" + token, autorization())

         return response.data
      } catch (error){
      }
   },

   getFisios: async (pagina, estado) => {
      try{
         const response = await axios.get(apiUrl + "/Fisio/"+ pagina + "?onlyActive=" + estado, autorization())
         return response.data
      } catch (error){
         console.log(error)
      }
   },
   getSearcherFisio: async (page, name, status) => {
      try {
         const response = await axios.get(apiUrl + '/Fisio/Buscador?pagina=' + page + '&nombre=' + name + '&onlyActive=' + status, autorization())
         console.log(response.data)
         return response.data
      } catch (error) {
         console.log(error)
      }
   },
  
   getFisiosCat: async () => {
      try{
         const response = await axios.get(apiUrl + "/Fisio/List", autorization())
         return response.data
      } catch (error){
         console.log(error)
      }
   },
     
   getLastsFisios: async () => {
      try{
         const response = await axios.get(apiUrl + "/Fisio/Ultimos", autorization())
         return response.data
      } catch (error){
         console.log(error)
      }
   },

   esAdmin: async (clave) => {
      try{
         const response = await axios.get(apiUrl + "/Usuario/ClaveAdmin/" + clave, autorization())
         return response.data
      } catch (error){
         console.log(error)
      }
   },

   getUserDetails: async () => {
      try {
         const response = await axios.get(apiUrl + "/Usuario", autorization());
         console.log(response.data)
         return response.data;
      } catch (error) {
         console.log(error);
         throw error;
      }
   },


   equipoFisio: async () =>{
      try {
         const response = await axios.get(apiUrl + '/Fisio/team', autorization())
         return response.data
      } catch (error) {
         console.log(error)
      }
   },

}