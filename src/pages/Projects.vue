<template>
  <section class="px-4 py-12 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">Proyectos</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
      <ProjectCard
          v-for="(project, index) in projects.slice(0, 6)"
          :key="index"
          :project="project"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
      />
    </div>
  </section>
</template>


<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import GPAPI from '../assets/gp_api.png'
import PLATAFORM from '../assets/plataforma.png'
import NSIMULATOR from '../assets/network_simulator.png'
import SPECTRAL from '../assets/spectral.png'
import PSTATICS from '../assets/pstatics.png'
import POKE from '../assets/pokedex.png'

const projects = [
  {
    name: 'Api para consulta de datos',
    description: 'Api diseñada para consulta de datos eficiente en bases de datos, diseñada siguiendo los principios solid y arquitectura en 3 capas.',
    image: GPAPI,
    repo: 'https://github.com/Dilan-has/clientes_grupo_proteger-api',
    demo: '',
    technologies: ['Go']
  },
  {
    name: 'Front para la api de datos',
    description: 'Front que permite interactuar con la API para consulta de datos',
    image: PLATAFORM,
    repo: 'https://github.com/Dilan-has/clientes_grupo_proteger',
    demo: '',
    technologies: ['Node', 'Vue']
  },
  {
    name: 'Simulador de Redes',
    description: 'Simulador gráfico en Python para fines educativos.',
    image: NSIMULATOR,
    repo: 'https://github.com/Dilan-has/network-simulator',
    demo: '',
    technologies: ['Python', 'Tkinter', 'Algorithms']
  },
  {
    name: 'Identificacion de espectros para imagenes satelitales',
    description: 'Una app que realiza identificacion de espectros en imagenes satelitales y devuelve un resultado de la imagen satelital con la capa espectral.',
    image: SPECTRAL,
    repo: 'https://github.com/Dilan-has/satelital_image_spectral_identifier',
    demo: '',
    technologies: ['Python']
  },
  {
    name: 'Dashboard para consultar datos de futbolistas',
    description: 'Dashboard para consultar datos de futbolistas por medio del consumo de una API.',
    image: PSTATICS,
    repo: 'https://github.com/Dilan-has/Proyectos/tree/main/P_Statics',
    demo: '',
    technologies: ['Node.js']
  },
  {
    name: 'Pokedex',
    description: 'Una pokedex que consulta la informacion de los pokemon por medio de una API.',
    image: POKE,
    repo: 'https://github.com/Dilan-has/Proyectos/tree/main/Pokedex',
    demo: '',
    technologies: ['javascript']
  }
]
</script>

<style scoped>
</style>