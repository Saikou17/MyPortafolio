<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Inicio from './components/Inicio.vue'
import Proyectos from './components/Proyectos.vue'
import Habilidades from './components/Habilidades.vue'
import Certificados from './components/Certificados.vue'
import Contacto from './components/Contacto.vue'
import { usePopUp } from './components/Composites/popUp'

onMounted(() => {
  const hasVisited = localStorage.getItem('hasVisited')

  if (!hasVisited) {
    usePopUp("Bienvenidos a mi pagina web, por el momento es una version estable, sin embargo me falta conectar mis proyectos. Espero que tengan paciencia y muy pronto estara completa. Una disculpa y espero que les guste :)")
    localStorage.setItem('hasVisited', 'true')
  }
})


</script>

<template>
  <Navbar/>
  <Inicio id='inicio'/>
  <Proyectos id='proyectos'/>
  <Habilidades id='habilidades'/>
  <Certificados id='certificaciones'/>
  <Contacto id='contacto'/>
</template>
