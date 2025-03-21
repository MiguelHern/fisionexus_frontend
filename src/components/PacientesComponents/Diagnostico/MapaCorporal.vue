<script setup>
import { ref, reactive } from 'vue'
import {
  areasAnterior,
  areasAnteriorMujer,
  areasLateral,
  areasLateralMujer,
  areasPosterior, areasPosteriorMujer
} from '@/helpers/mapaCorporal.js'

const props = defineProps({
  sexo: String,
  loader: Boolean
})

const areaSeleccionada = ref([])
const painLevels = reactive({})

let mapa =  reactive({
  valores:[],
  rangoDolor:[],
  notas:null,
  rangos: []
})

const emit = defineEmits(['mapaC'])

const handleClick = (area) => {
  console.log('Área clickeada:', area.name)

  if (!areaSeleccionada.value.includes(area.name)) {
    areaSeleccionada.value.push(area.name)
    painLevels[area.name] = 0

    //Agregamos el id de la parte del cuerpo
    const areaEncontrada = BuscadorArea(area.name)
    mapa.valores.push(areaEncontrada.id)
  } else {
    const index = areaSeleccionada.value.indexOf(area.name)
    areaSeleccionada.value.splice(index, 1)
    delete painLevels[area.name]

    //Eliminamos el id de la parte del cuerpo
    const areaEncontrada = BuscadorArea(area.name)
    mapa.valores = mapa.valores.filter(x => x !== areaEncontrada.id)
  }
}

const BuscadorArea = (nombre) => {
  let map = null

  map = areasAnterior.find(x => x.name === nombre)

  if(map === undefined)
    map = areasPosterior.find(x => x.name === nombre)

  if(map === undefined)
    map = areasLateral.find(x => x.name === nombre)

  return map
}

const isSelected = (areaName) => {
  return areaSeleccionada.value.includes(areaName)
}

//Este metodo se ejecuta al final, porque te convierte los rangos a una lista de enteros cuando ya estan listos
const enviar = () => {

  mapa.rangos = []

  for (let key in painLevels) {
    const nivel = parseInt(painLevels[key], 10)
    mapa.rangos.push(nivel)
  }

  // Asignar directamente los rangos calculados
  mapa.rangoDolor = [...mapa.rangos]
}

const enviarMapa = () => {
  enviar()
  console.log('Datos del mapa a enviar:', mapa)
  emit('mapaC', mapa)
}

defineExpose({
  enviarMapa
})
</script>
<template>
    <div v-if="props.loader" class="h-[402px] flex justify-center items-center text-gray-600">
        <svg aria-hidden="true" role="status" class="inline w-10 h-10 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
        </svg>
        Cargando mapa corporal...
    </div>
    <div v-else class="animate-fade">
        <div v-if="sexo=== 'Mujer'">
            <div class="flex justify-around telefono:flex-wrap border rounded-sm">
                <!-- Vista Anterior -->
                <section class="relative">
                    <img src="/src/assets/CuerpoHumano/AnteriorMujer.png" alt="Cuerpo Humano" class="w-[225px] h-[400px]">
                    <div v-for="area in areasAnteriorMujer" :key="'anterior-' + area.name"
                         :style="{ left: area.x + 'px', top: area.y + 'px', width: area.width + 'px', height: area.height + 'px', backgroundColor: isSelected(area.name) ? '#0d6efd' : 'transparent' }"
                         class="absolute border-2 border-blue-300 cursor-pointer rounded-full hover:border-blue-500 hover:animate-pulse"
                         @click="handleClick(area)"
                         :title="area.name">
                    </div>
                </section>
                <!-- Vista Posterior -->
                <section class="relative">
                    <img src="/src/assets/CuerpoHumano/PosteriorMujer.png" alt="Otra Vista del Cuerpo"
                         class="w-[225px] h-[400px]">
                    <div v-for="area in areasPosteriorMujer" :key="'otra-' + area.name"
                         :style="{ left: area.x + 'px', top: area.y + 'px', width: area.width + 'px', height: area.height + 'px', backgroundColor: isSelected(area.name) ? '#0d6efd' : 'transparent' }"
                         class="absolute border-2 border-blue-300 cursor-pointer rounded-full hover:border-blue-500 hover:animate-pulse"
                         @click="handleClick(area)"
                         :title="area.name">
                    </div>
                </section>
                <!-- Vista Lateral-->
                <section class="relative">
                    <img src="/src/assets/CuerpoHumano/LateralMujer.png" alt="Otra Vista del Cuerpo"
                         class="w-[125px] h-[400px]">
                    <div v-for="area in areasLateralMujer" :key="'otra-' + area.name"
                         :style="{ left: area.x + 'px', top: area.y + 'px', width: area.width + 'px', height: area.height + 'px', backgroundColor: isSelected(area.name) ? '#0d6efd' : 'transparent' }"
                         class="absolute border-2 border-blue-300 cursor-pointer rounded-full hover:border-blue-500 hover:animate-pulse"
                         @click="handleClick(area)"
                         :title="area.name">
                    </div>
                </section>
            </div>

            <!--Escala del dolor-->
            <section v-if="areaSeleccionada.length > 0"
                     class="rounded-sm border shadow mt-6">
                <details open class="group">
                    <summary
                        class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
                        Escala del dolor<span class="text-blue-600">*</span>
                        <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                        </svg>
                    </summary>
                    <div class="px-6 py-3 text-gray-500 flex flex-col gap-3 animate-fade-down">
                        <div v-for="(selectedAreas, index) in [areaSeleccionada]" :key="index">
                            <div v-if="selectedAreas.length > 0">
                                <section v-for="area in selectedAreas" :key="(index === 0 ? 'anterior-' : 'otra-') + area"
                                         class="">
                                    <header class="text-center">
                                        <h3>{{ area }}</h3>
                                    </header>
                                    <div class="relative">
                                        <input type="range" v-model="painLevels[area]" min="0" max="10"
                                               class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
                                        <span
                                            class="absolute top-0 left-0 transform -translate-y-full bg-gray-100 px-2 py-1 text-xs rounded shadow-lg">{{ painLevels[area]
                                            }}</span>
                                    </div>
                                    <div class="flex justify-between text-xs font-medium text-gray-500">
                                        <span>Sin dolor</span>
                                        <span>Dolor insoportable</span>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div class="px-6 py-3">
                <textarea v-model="mapa.notas"
                          class=" input-primary resize-none"
                          placeholder="Ingrese su nota"
                ></textarea>
                    </div>
                </details>
            </section>
        </div>

        <div v-if="sexo=== 'Hombre'">
            <div class="flex justify-around telefono:flex-wrap border rounded-sm">
                <!-- Vista Anterior -->
                <section class="relative">
                    <img src="/src/assets/CuerpoHumano/VistaAnterior.jpeg" alt="Cuerpo Humano" class="w-[225px] h-[400px]">
                    <div v-for="area in areasAnterior" :key="'anterior-' + area.name"
                         :style="{ left: area.x + 'px', top: area.y + 'px', width: area.width + 'px', height: area.height + 'px', backgroundColor: isSelected(area.name) ? '#0d6efd' : 'transparent' }"
                         class="absolute border-2 border-blue-300 cursor-pointer rounded-full hover:border-blue-500 hover:animate-pulse"
                         @click="handleClick(area)"
                         :title="area.name">
                    </div>
                </section>
                <!-- Vista Posterior -->
                <section class="relative">
                    <img src="/src/assets/CuerpoHumano/VistaPosterior.jpeg" alt="Otra Vista del Cuerpo"
                         class="w-[225px] h-[400px]">
                    <div v-for="area in areasPosterior" :key="'otra-' + area.name"
                         :style="{ left: area.x + 'px', top: area.y + 'px', width: area.width + 'px', height: area.height + 'px', backgroundColor: isSelected(area.name) ? '#0d6efd' : 'transparent' }"
                         class="absolute border-2 border-blue-300 cursor-pointer rounded-full hover:border-blue-500 hover:animate-pulse"
                         @click="handleClick(area)"
                         :title="area.name">
                    </div>
                </section>
                <!-- Vista Lateral-->
                <section class="relative">
                    <img src="/src/assets/CuerpoHumano/VistaLateral.jpeg" alt="Otra Vista del Cuerpo"
                         class="w-[125px] h-[400px]">
                    <div v-for="area in areasLateral" :key="'otra-' + area.name"
                         :style="{ left: area.x + 'px', top: area.y + 'px', width: area.width + 'px', height: area.height + 'px', backgroundColor: isSelected(area.name) ? '#0d6efd' : 'transparent' }"
                         class="absolute border-2 border-blue-300 cursor-pointer rounded-full hover:border-blue-500 hover:animate-pulse"
                         @click="handleClick(area)"
                         :title="area.name">
                    </div>
                </section>
            </div>

            <!--Escala del dolor-->
            <section v-if="areaSeleccionada.length > 0"
                     class="rounded-sm border shadow mt-6">
                <details open class="group">
                    <summary
                        class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
                        Escala del dolor<span class="text-blue-600">*</span>
                        <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                        </svg>
                    </summary>
                    <div class="px-6 py-3 text-gray-500 flex flex-col gap-3 animate-fade-down">
                        <div v-for="(selectedAreas, index) in [areaSeleccionada]" :key="index">
                            <div v-if="selectedAreas.length > 0">
                                <section v-for="area in selectedAreas" :key="(index === 0 ? 'anterior-' : 'otra-') + area"
                                         class="">
                                    <header class="text-center">
                                        <h3>{{ area }}</h3>
                                    </header>
                                    <div class="relative">
                                        <input type="range" v-model="painLevels[area]" min="0" max="10"
                                               class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
                                        <span
                                            class="absolute top-0 left-0 transform -translate-y-full bg-gray-100 px-2 py-1 text-xs rounded shadow-lg">{{ painLevels[area]
                                            }}</span>
                                    </div>
                                    <div class="flex justify-between text-xs font-medium text-gray-500">
                                        <span>Sin dolor</span>
                                        <span>Dolor insoportable</span>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div class="px-6 py-3">
                <textarea v-model="mapa.notas"
                          class=" input-primary resize-none"
                          placeholder="Ingrese su nota"
                ></textarea>
                    </div>
                </details>
            </section>
        </div>
    </div>
</template>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
    background-color: #0d6efd; /* Tailwind 'green-500' color */
}

input[type="range"]::-moz-range-thumb {
    background-color: #0d6efd; /* Tailwind 'green-500' color */
}

input[type="range"]::-ms-thumb {
    background-color: #0d6efd; /* Tailwind 'green-500' color */
}
</style>