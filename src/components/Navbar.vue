<script setup>
    //Importamos funciones y modos
    import {ref} from 'vue';
    import VueScrollTo from 'vue-scrollto';
    import {useDark, useToggle} from '@vueuse/core';

    const isDark = useDark(); //Modo oscuro
    const toggleDark = useToggle(isDark); //Función para alternar entre modos
    const actualIcon = () => {return isDark.value ? 'bi-sun' : 'bi-moon-stars'}; //Icono que cambia dependiendo del modo

    //Creamos un objeto de referencia (muestra el valor en tiempo real)
    const navIconOpen = ref(false);

    //Creamos un diccionario de routeo
    const link = {
        Inicio : '#inicio',
        Proyectos : '#proyectos',
        Habilidades : '#habilidades',
        Certificaciones : '#certificaciones',
        Contacto : '#contacto',
    };

    /// Función para manejar el clic en los enlaces
    const handleLinkClick = (href) => {

        // Desplázate a la sección después de la navegación
        VueScrollTo.scrollTo(href, {
            duration: 150,
            easing: 'ease-in-out',
            offset: -50,
        });  
    };

</script>

<style>
@import '../assets/CssStyles/nav.css';
</style>

<template>
    <div class="sticky top-0 z-50">
        <!-- Vista para móvil -->
        <div class="mobile:hidden flex items-center px-4 py-2 h-14 nav_bar relative dark:bg-gray-950">
            <!-- Botón de menú -->
            <div>
                <button @click="navIconOpen = !navIconOpen" class="mr-4">
                    <!-- Ícono de abrir menú -->
                    <svg :class="navIconOpen ? 'hidden' : ''"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 dark:text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <!-- Ícono de cerrar menú -->
                    <svg :class="navIconOpen ? '' : 'hidden'"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 dark:text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Contenedor para el título -->
            <div class="flex-1 text-center">
                <p class="font-bold dark:text-white">My Portfolio</p>
            </div>

            <!--Botón para cambiar entre modos-->
            <button @click="toggleDark()" class="dark:text-white">
                    <v-icon :name= "actualIcon()"/>
            </button>

            <!-- Menú desplegable -->
            <nav :class="navIconOpen ? 'absolute left-0 top-full w-full nav_bar py-2 z-50' : 'hidden'"
                class="dark:text-white  dark:bg-blue-950">
                <!-- Lista de links -->
                <a v-for="(href, name) in link" :key="name" @click="handleLinkClick(href)"  
                   class="cursor-pointer block px-4 py-2 font-bold hover:bg-white dark:hover:bg-blue-950 dark:hover:underline">
                    {{ name }}
                </a>
            </nav>
        </div>


        <!--Vista para desktop-->
        <div class="px-2 py-2 nav_bar hidden mobile:flex dark:bg-gray-900">
            <!--Div para el icono-->
            <div class="flex justify-center w-1/12">
                <!--Agregamos un icono-->
                <img class="object-scale-down  h-10 rounded-full" 
                src="/src/assets/WebPageIcon.jpeg"
                alt="My Web Page Icon"/>
            </div>
            <!--Div para los links-->
            <div class="px-8 w-11/12 flex flex-auto items-center justify-between dark:text-white">
                <!--Mostramos la lista de links-->
                <a v-for="(href,name) in link" :key="name" @click="handleLinkClick(href)"
                class="cursor-pointer font-bold hover:text-white dark:hover:underline">
                    {{name}}
                </a>
                <!--Botón para cambiar entre modos-->
                <button @click="toggleDark()">
                    <v-icon :name= "actualIcon()"/>
                </button>
            </div>
            <nav></nav>
        </div>
     

    </div>
</template>
