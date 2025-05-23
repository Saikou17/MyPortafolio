<script setup>

//Arrow function para el desplegar una ventana emergente
const popUp = (texto) => {
    //Verificamos el parametro que recibimos si es mision o vision
    if (texto === "mision") {
        document.getElementById("popup_text").textContent = "Mision: Ser un profesional en tecnologías de la información, con habilidades y conocimientos que me permitan desarrollar soluciones innovadoras y eficientes, que contribuyan al crecimiento de la empresa y a la mejora de la calidad de vida de las personas.";
    } else if (texto === "vision") {
        document.getElementById("popup_text").textContent = "Vision: Ser un líder en el campo tecnológico, inspirando a otros a perseguir sus pasiones y metas, y contribuyendo al desarrollo de soluciones tecnológicas que mejoren la calidad de vida de las personas.";
    }
    //Verificamos el estado en el que esta el boton
    const pop = document.getElementById("popup_window");
    if (pop.style.display === "none") {
        pop.style.display = "block";
    } else {
        pop.style.display = "none";
    }
};

</script>

<!--Usmaos el css que esta en CssStyles-->
<style>
@import '../assets/CssStyles/home.css';
</style>

<template>
    <section id="inicio">
            <div class="back_home overscroll-auto dark:bg-gray-900"> 
            <div class="home_text dark:text-white">
                <span class="dynamic_txt dark:before:bg-gray-900 dark:text-white">!Bienvenido¡</span>
            </div>
            <div class="home_description">
                <!-- <svg src="../assets/SvgIncio/SVGHome.svg" alt="Home Description SVG" class="flex hidden mobile:block fill-red-100"></svg> -->
                <img src="../assets/SvgIncio/SVGHome.svg" alt="Image Home Description" class="home_image hidden mobile:block dark:fill-white" />
                <div class="home_description_text dark:text-white">
                    <h2 class="flex text-left font-bold text-1xl mobile:text-2xl">Juan Pablo Cruz Rodriguez</h2>
                    <h1 class="flex text-left font-bold text-2xl break-words mobile:text-4xl ">Ingeniero en Tecnologias Computacionales</h1>
                    <p class="flex text-justify pt-4">
                        Mis intereses incluyen videojuegos, desarrollo de aplicaciones web/móvil, cloud computing y
                        seguridad informática. Aspiro a seguir aprendiendo, enfrentando nuevos
                        desafíos, y convertirme en un líder en el campo tecnológico, inspirando a otros a perseguir sus
                        pasiones y metas.
                    </p>
                    <div class="home_buttons">
                        <button @click="popUp('mision')" class="button_home_interaction">Mision</button>
                        <button @click="popUp('vision')" class="button_home_interaction">Vision</button>
                        <div id="popup_window" style="display: none;">
                            <p id="popup_text"></p>
                            <button @click="popUp()" class="button_home_interaction">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>