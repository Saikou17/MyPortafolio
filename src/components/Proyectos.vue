<style>
@import '../assets/CssStyles/projects.css';
</style>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed, watch } from 'vue'
import ProyectoCard from './ProyectoCard.vue'
import ProjectsJson from '../Data/Projects.json'

const limitElements = ref(4)
const pages = ref(0)
const isMobile = ref(window.innerWidth < 640)

// Detecta si es vista móvil
const handleResize = () => {
  const currentlyMobile = window.innerWidth < 640
  if (isMobile.value !== currentlyMobile) {
    isMobile.value = currentlyMobile
    resetView() // Reinicia los valores al cambiar resolución
  }
}

// Reinicia los valores según la vista actual
const resetView = () => {
  limitElements.value = isMobile.value ? 2 : 4
  pages.value = Math.ceil(ProjectsJson.length / 4)
}

// Mostrar más elementos (solo en móvil)
const showMoreProjects = async () => {
  if (isMobile.value) {
    limitElements.value += 2
    await nextTick()
  }
}

// Proyectos visibles en vista móvil
const visibleProjects = computed(() => {
  return ProjectsJson.slice(0, limitElements.value)
})

// Obtener proyectos por página (para desktop)
const getProjectsForPage = (page) => {
  const itemsPerPage = 4
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return ProjectsJson.slice(startIndex, endIndex)
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('resize', handleResize)
  resetView()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <section id="proyectos" class="projects_container dark:bg-gray-900">
    <div class="projects_title dark:text-white">
      <h2>Proyectos</h2>
    </div>

    <!-- Vista móvil: muestra por bloques con botón "Mostrar más" -->
    <transition-group
      name="fade"
      tag="div"
      class="projects_display dark:text-white mobile:hidden"
    >
      <ProyectoCard
        v-for="project in visibleProjects"
        :key="project.id"
        :project="project"
      />
    </transition-group>

    <div
      v-if="isMobile && limitElements < ProjectsJson.length"
      class="flex justify-center mt-4 mx-auto mobile:hidden"
    >
      <button
        @click="showMoreProjects"
        class="bg-blue-950 text-white font-serif py-2 px-4 rounded m-4 hover:bg-blue-900 hover:shadow-[0_0_10px_rgba(0,0,0,1)]"
      >
        Mostrar más
      </button>
    </div>

    <!-- Vista desktop: carrusel de 4 en 4 -->
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide hidden mobile:block dark:bg-gray-900 dark:text-white"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="page in pages"
          :key="page"
          class="carousel-item"
          :class="{ active: page === 1 }"
        >
          <div class="projects_display">
            <ProyectoCard
              v-for="project in getProjectsForPage(page)"
              :key="project.id"
              :project="project"
            />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="carousel-indicators">
        <button
          v-for="page in pages"
          type="button"
          :class="{ active: page === 1 }"
          data-bs-target="#carouselExampleAutoplaying"
          :data-bs-slide-to="page - 1"
        ></button>
      </div>
    </div>
  </section>
</template>
