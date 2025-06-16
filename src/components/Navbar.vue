<template>
  <div v-if="menuOpen"
       @click="closeMenu"
       class="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"></div>

  <nav :class="{ 'translate-x-0': menuOpen }"
       class="fixed top-0 left-0 h-screen bg-gray-900 text-white flex flex-col py-4 shadow-lg z-40
              w-20 hover:w-64 transition-all duration-300 ease-in-out group
              md:translate-x-0 md:relative md:flex md:w-20 md:hover:w-64">
    <div class="mb-8 flex justify-center">
      <img src="../assets/avatar.jpg" alt="Avatar" class="w-12 h-12 rounded-full border-2 border-purple-500">
    </div>

    <ul class="flex flex-col gap-6 w-full">
      <li v-for="link in navLinks" :key="link.name">
        <router-link :to="link.path"
                     @click="closeMenu"
                     class="flex items-center py-2 px-4 rounded-lg
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

    <button v-if="menuOpen"
            @click="closeMenu"
            class="absolute top-4 right-4 text-white md:hidden focus:outline-none">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </nav>
</template>

<script setup>
import {ref, watch} from 'vue';
import { useRoute } from 'vue-router'; // Importa useRoute para observar cambios de ruta

// Prop para controlar la visibilidad del menú desde App.vue
const props = defineProps({
  menuOpen: Boolean
});

// Emitir evento para cerrar el menú desde App.vue
const emit = defineEmits(['close-menu']);

const navLinks = ref([
  { name: 'Inicio', path: '/', icon: ['fas', 'home'] },
  { name: 'Proyectos', path: '/projects', icon: ['fas', 'project-diagram'] },
  { name: 'Experiencia', path: '/experience', icon: ['fas', 'briefcase'] },
  { name: 'Stack', path: '/stack', icon: ['fas', 'code'] },
  { name: 'Contacto', path: '/contact', icon: ['fas', 'envelope'] },
]);

const closeMenu = () => {
  emit('close-menu'); // Emite un evento para que App.vue cierre el menú
};

// Opcional: Cerrar el menú si la ruta cambia (si el usuario navega sin cerrar explícitamente)
const route = useRoute();
watch(route, () => {
  if (props.menuOpen) { // Solo cierra si el menú está abierto
    closeMenu();
  }
});
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-purple-600 text-white;
}

/* Transición para el deslizamiento del menú móvil */
nav {
  transform: translateX(-100%); /* Oculta el menú por defecto en móviles */
}

/* Clases específicas de Tailwind aplicadas directamente en el template para la responsividad */
/* md:translate-x-0 y md:relative aseguran que en desktop siempre esté visible y no fijo */
</style>