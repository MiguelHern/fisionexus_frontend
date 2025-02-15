import axios from "axios";
import {apiUrl, autorization} from "@/api/headers.js";

export const graficos = {

    nuevosPacientes: async () => {
        try{
            const response = await axios.get(apiUrl + "/Graficos/Pacientes", autorization())
            return response.data
        } catch (error){
        }
    },

    estadosCitas: async () => {
        try{
            const response = await axios.get(apiUrl + "/Graficos/Citas", autorization())
            return response.data
        } catch (error){
        }
    },

    topFisios: async () => {
        try{
            const response = await axios.get(apiUrl + "/Graficos/TopFisio", autorization())
            return response.data
        } catch (error){
        }
    },

    motivosAlta: async (mes) => {
        try{
            const response = await axios.get(apiUrl + "/Graficos/MotivosAlta?meses=" + mes, autorization())
            return response.data
        } catch (error){
        }
    },

    edadesPacientes: async (mes) => {
        try{
            const response = await axios.get(apiUrl + "/Graficos/Edades?meses=" + mes, autorization())
            return response.data
        } catch (error){
        }
    },

    sexoPacientes: async (mes) => {
        try{
            const response = await axios.get(apiUrl + "/Graficos/Sexo?meses=" + mes, autorization())
            return response.data
        } catch (error){
        }
    },

}