<template>
  <nav class="fixed top-0 left-0 h-screen bg-gray-900 text-white flex flex-col py-4 shadow-lg
              w-20 hover:w-64 transition-all duration-300 ease-in-out group">
    <div class="mb-8 flex justify-center">
      <img src="../assets/avatar.jpg" alt="Avatar" class="w-12 h-12 rounded-full border-2 border-purple-500">
    </div>

    <ul class="flex flex-col gap-6 w-full">
      <li v-for="link in navLinks" :key="link.name">
        <router-link :to="link.path" class="flex items-center py-2 px-4 rounded-lg
                                        hover:bg-gray-700 transition-colors duration-200">
          <font-awesome-icon :icon="link.icon" class="text-2xl mr-4" />
          <span class="whitespace-nowrap opacity-0 group-hover:opacity-100
                       translate-x-full group-hover:translate-x-0
                       transition-all duration-300 ease-in-out delay-100">
            {{ link.name }}
          </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
// Asegúrate de que las importaciones de Font Awesome sean correctas si las usas
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const navLinks = ref([
  { name: 'Inicio', path: '/', icon: ['fas', 'home'] }, // Ejemplo de icono Font Awesome con array
  { name: 'Proyectos', path: '/projects', icon: ['fas', 'project-diagram'] },
  { name: 'Experiencia', path: '/experience', icon: ['fas', 'briefcase'] },
  { name: 'Stack', path: '/stack', icon: ['fas', 'code'] },
  { name: 'Contacto', path: '/contact', icon: ['fas', 'envelope'] },
]);
</script>

<style scoped>
/* Estilo para el enlace activo de router-link (si usas Vue Router) */
.router-link-exact-active {
  @apply bg-purple-600 text-white; /* O tu color de acento */
}
</style>