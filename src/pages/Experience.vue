<template>
  <section class="py-8 px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">Mi Trayectoria Profesional</h2>

    <div class="max-w-3xl mx-auto">
      <ExperienceItem
          v-for="(job, index) in experiences"
          :key="index"
          :job="job"
          :style="{ 'animation-delay': `${index * 0.15}s` }"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ExperienceItem from '@/components/ExperienceItem.vue';

const experiences = ref([
  {
    title: 'Desarrollador Backend',
    company: 'Mercado Libre.',
    period: 'Enero 2023 – Actualidad',
    tasks: [
      'Liderar el desarrollo de microservicios utilizando Golang y Java.',
      'Participar en revisiones de código.',
      'Realizar documentacion de APIs aplicando casos de uso, diagramos de flujo etc..',
      'Desarrollar soluciones para mejorar la eficiencia de los microservicios.',
    ],
    technologies: ['Node.js', 'Golang', 'Java', 'SQL', 'Docker']
  },
  {
    title: 'Desarrollador Full-Stack',
    company: 'Grupo proteger SAS.',
    period: 'Septiembre 2021 – Septiembre 2022',
    tasks: [
      'Desarrollar y mantener componentes de interfaz de usuario para aplicaciones web.',
      'Optimizar el rendimiento de las aplicaciones web para una mejor experiencia de usuario.',
      'Realizar consultas complejas a las bases de datos utilizando SQL'
    ],
    technologies: ['SQL', 'JavaScript', 'HTML', 'CSS', 'Sass', 'Webpack']
  },
]);
</script>

<style scoped>
</style>