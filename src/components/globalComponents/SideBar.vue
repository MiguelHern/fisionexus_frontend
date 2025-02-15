<script setup>
    import { CerrarSesion } from '@/router/rutasUtiles.js'
</script>

<template>
    <nav class="flex flex-col items-center w-16 h-screen space-y-8 bg-white border-r border-gray-300 telefono:hidden">
        <div class="flex flex-col items-center w-16 py-3 space-y-5">
            <a href="https://fe.uacam.mx/" target="_blank">
                <img class="w-auto h-10" src="https://fe.uacam.mx/view/view_image?imagen=logo_micrositio.png&tipo=logo"
                     alt="">
            </a>
            <router-link :to="{name:'Inicio'}" active-class="active_item border-l-4 border-blue-600"
                         data-tooltip-target="Inicio" data-tooltip-placement="right"
                         class="w-full p-1.5 text-gray-500 duration-100 hover:text-blue-600 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </router-link>
            <div id="Inicio" role="tooltip"
                 class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-blue-600 rounded-lg shadow-sm opacity-0 tooltip">
                Inicio
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <router-link :to="{name:'Pacientes'}"
                         active-class="active_item border-l-4 border-blue-600 text-blue-600"
                         data-tooltip-target="Pacientes" data-tooltip-placement="right"
                         class="w-full p-1.5 duration-100 text-gray-500 hover:text-blue-600 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
            </router-link>
            <div id="Pacientes" role="tooltip"
                 class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-blue-600 rounded-lg shadow-sm opacity-0 tooltip">
                Pacientes
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <router-link :to="{name:'Calendario'}" active-class="active_item border-l-4 border-blue-600"
                         data-tooltip-target="Calendario"
                         data-tooltip-placement="right"
                         class="w-full p-1.5 text-gray-500 duration-100 hover:text-blue-600 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
            </router-link>
            <div id="Calendario" role="tooltip"
                 class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-blue-600 rounded-lg shadow-sm opacity-0 tooltip">
                Calendario
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <router-link :to="{name:'Metricas'}" active-class="active_item border-l-4 border-blue-600"
                         data-tooltip-target="Metricas"
                         data-tooltip-placement="right"
                         class="w-full p-1.5 text-gray-500 duration-100 hover:text-blue-600 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
            </router-link>
            <div id="Metricas" role="tooltip"
                 class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-blue-600 rounded-lg shadow-sm opacity-0 tooltip">
                Métricas
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <router-link :to="{name:'Ajustes'}" active-class="active_item border-l-4 border-blue-600"
                         data-tooltip-target="Ajustes"
                         data-tooltip-placement="right"
                         class="w-full p-1.5 text-gray-500 duration-100 hover:text-blue-600 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </router-link>
            <div id="Ajustes" role="tooltip"
                 class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-blue-600 rounded-lg shadow-sm opacity-0 tooltip">
                Ajustes
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>

        <div class="flex items-end w-16 h-screen py-4 cursor-pointer">
            <div @click="CerrarSesion()" data-tooltip-target="Sesion" data-tooltip-placement="right"
                 class="w-full p-1.5 text-gray-500 duration-200 hover:text-blue-600 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                </svg>
            </div>
            <div id="Sesion" role="tooltip"
                 class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-blue-600 rounded-lg shadow-sm opacity-0 tooltip">
                Cerrar Sesión
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.active_item {
    color: #0062FF !important;
}

.disabled {
    pointer-events: none;
}
</style>