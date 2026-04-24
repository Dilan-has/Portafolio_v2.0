<template>
  <div v-if="menuOpen"
       @click="closeMenu"
       class="fixed inset-0 bg-[#1a1c1c] bg-opacity-30 backdrop-blur-sm z-30 md:hidden"></div>

  <nav :class="menuOpen ? 'translate-x-0' : '-translate-x-full'"
       class="fixed top-0 left-0 h-screen bg-[#f4f4f3] text-[#5f5e5e] flex flex-col py-6 border-r border-[#d1c4bc] z-40
              w-64 md:w-20 md:hover:w-64 transition-all duration-300 ease-in-out group
              md:translate-x-0 md:flex font-['Space_Grotesk',monospace] overflow-hidden">
    <div class="mb-12 flex flex-col items-center shrink-0">
      <div class="w-10 h-10 bg-[#34271e] flex items-center justify-center border border-[#1a1c1c] md:group-hover:-translate-y-0.5 md:group-hover:-translate-x-0.5 transition-transform duration-300 shadow-[2px_2px_0px_#1a1c1c] md:group-hover:shadow-[4px_4px_0px_#1a1c1c]">
        <span class="text-white font-bold text-lg tracking-widest ml-1">DP</span>
      </div>
    </div>

    <ul class="flex flex-col gap-2 w-full mt-4">
      <li v-for="link in navLinks" :key="link.name">
        <router-link :to="link.path"
                     @click="closeMenu"
                     class="flex items-center py-4 px-0 hover:bg-[#e4e2e1] hover:text-[#1a1c1c] transition-colors duration-200 border-r-4 border-transparent">
          <div class="w-20 flex justify-center items-center shrink-0">
            <font-awesome-icon :icon="link.icon" class="text-lg" />
          </div>
          <span class="whitespace-nowrap opacity-100 md:opacity-0 md:group-hover:opacity-100
                       translate-x-0 md:translate-x-4 md:group-hover:translate-x-0
                       transition-all duration-300 ease-in-out text-sm uppercase tracking-widest">
            {{ link.name }}
          </span>
        </router-link>
      </li>
    </ul>

    <button v-if="menuOpen"
            @click="closeMenu"
            class="absolute top-4 right-4 text-[#1a1c1c] md:hidden focus:outline-none">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </nav>
</template>

<script setup>
import {ref, watch} from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  menuOpen: Boolean
});

const emit = defineEmits(['close-menu']);

const navLinks = ref([
  { name: 'Terminal', path: '/', icon: ['fas', 'terminal'] },
  { name: 'Projects', path: '/projects', icon: ['fas', 'folder-tree'] },
  { name: 'Experience', path: '/experience', icon: ['fas', 'code-commit'] },
  { name: 'Stack', path: '/stack', icon: ['fas', 'server'] },
  { name: 'Contact', path: '/contact', icon: ['fas', 'at'] },
]);

const closeMenu = () => {
  emit('close-menu');
};

const route = useRoute();
watch(route, () => {
  if (props.menuOpen) {
    closeMenu();
  }
});
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-[#e4e2e1] text-[#1a1c1c] border-[#34271e];
}
</style>