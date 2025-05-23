<style>
@import '../assets/CssStyles/projectsCard.css';
</style>

<script setup>

import { usePopUp } from './Composites/popUp'

const props = defineProps({
    project: {
        type: Object,
        required: true
    }

});

</script>

<template>
    <!-- Desktop View && Mobile View-->
    <div class="project_card">
        <figure>
            <button @click="usePopUp(project.desarrollo)" id="project_preview">
                <img :src="project.image" alt="Project Preview">
                <div id="vynil">
                    <div id="print_vynil"></div>
                </div>
            </button>
            <div id="popup_window" style="display: none;">
                <p id="popup_text"></p>
                <button @click="" class="button_project_interaction">Proyecto</button>
                <button @click="popUp()" class="button_home_interaction">Cerrar</button>
            </div>
            <figcaption class = "hidden mobile:block">
                {{ project.description }}
                <span class="credit">{{ project.name }}</span>
            </figcaption>
        </figure>
    </div>
</template>