<template>
  <div class="min-h-screen bg-[#f9f9f8] text-[#1a1c1c] px-6 md:px-12 py-24 selection:bg-[#34271e] selection:text-white font-['Inter',sans-serif]">
    <section class="max-w-[1200px] mx-auto mt-4 md:mt-12">
      <div class="mb-16">
        <div class="mb-4 inline-block border border-[#d1c4bc] px-3 py-1 text-[#5f5e5e] font-['Space_Grotesk',monospace] text-xs uppercase tracking-widest bg-[#f4f4f3]">
          Portfolio
        </div>
        <h2 class="text-4xl md:text-6xl font-bold text-[#1a1c1c] font-['Manrope',sans-serif] tracking-tighter">
          Selected Projects
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
            v-for="(project, index) in projects.slice(0, 6)"
            :key="index"
            :project="project"
        />
      </div>
    </section>
  </div>
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
    name: 'Data Query API',
    description: 'API designed for efficient data querying, built following SOLID principles and a 3-layer architecture.',
    image: GPAPI,
    repo: 'https://github.com/Dilan-has/clientes_grupo_proteger-api',
    demo: '',
    technologies: ['Go']
  },
  {
    name: 'Data API Frontend',
    description: 'Frontend interface that allows users to interact seamlessly with the data query API.',
    image: PLATAFORM,
    repo: 'https://github.com/Dilan-has/clientes_grupo_proteger',
    demo: '',
    technologies: ['Node', 'Vue']
  },
  {
    name: 'Network Simulator',
    description: 'Graphical network simulator developed in Python for educational and analytical purposes.',
    image: NSIMULATOR,
    repo: 'https://github.com/Dilan-has/network-simulator',
    demo: '',
    technologies: ['Python', 'Tkinter', 'Algorithms']
  },
  {
    name: 'Satellite Image Spectral ID',
    description: 'Application that performs spectral identification on satellite imagery and overlays spectral layers on results.',
    image: SPECTRAL,
    repo: 'https://github.com/Dilan-has/satelital_image_spectral_identifier',
    demo: '',
    technologies: ['Python']
  },
  {
    name: 'Football Data Dashboard',
    description: 'Interactive dashboard for querying football player statistics by consuming external REST APIs.',
    image: PSTATICS,
    repo: 'https://github.com/Dilan-has/Proyectos/tree/main/P_Statics',
    demo: '',
    technologies: ['Node.js']
  },
  {
    name: 'Pokedex App',
    description: 'A classic Pokedex application that retrieves and displays Pokémon data via an API.',
    image: POKE,
    repo: 'https://github.com/Dilan-has/Proyectos/tree/main/Pokedex',
    demo: '',
    technologies: ['javascript']
  }
]
</script>

<style scoped>
</style>