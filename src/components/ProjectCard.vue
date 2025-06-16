<template>
  <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105
              opacity-0 translate-y-8 animate-fade-in-up-stagger">
    <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover">
    <div class="p-6">
      <h3 class="text-xl font-semibold text-white mb-2">{{ project.name }}</h3>
      <p class="text-gray-400 text-sm mb-4">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span
            v-for="(tech, index) in project.technologies"
            :key="index"
            class="bg-teal-700 text-white text-xs px-2 py-1 rounded-full"
        >
          {{ tech }}
        </span>
      </div>
      <div class="flex justify-between items-center">
        <a :href="project.repo" target="_blank" class="text-purple-400 hover:text-purple-300 transition-colors">
          Repositorio <i class="fab fa-github ml-1"></i>
        </a>
        <a v-if="project.demo" :href="project.demo" target="_blank" class="text-blue-400 hover:text-blue-300 transition-colors">
          Demo <i class="fas fa-external-link-alt ml-1"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object
});
</script>

<style scoped>

@keyframes fadeInUpStagger {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up-stagger {
  animation-name: fadeInUpStagger;
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
</style>