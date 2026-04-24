<template>
  <div class="bg-[#f9f9f8] border border-[#d1c4bc] overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(26,28,28,0.1)] flex flex-col font-['Inter',sans-serif] group h-full">
    
    <!-- Window Bar -->
    <div class="flex items-center px-4 py-2.5 border-b border-[#d1c4bc] bg-[#f4f4f3]">
      <div class="flex gap-2">
        <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
        <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
        <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
      </div>
      <div class="ml-4 text-[10px] text-[#5f5e5e] uppercase tracking-widest font-['Space_Grotesk',monospace]">
        {{ project.name.toLowerCase().replace(/ /g, '_') }}.exe
      </div>
    </div>

    <!-- Image -->
    <div class="relative border-b border-[#d1c4bc] overflow-hidden bg-[#e4e2e1] p-1.5">
      <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 border border-[#d1c4bc]">
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-1 bg-[#f9f9f8]">
      <h3 class="text-xl font-semibold text-[#1a1c1c] font-['Manrope',sans-serif] mb-3">{{ project.name }}</h3>
      <p class="text-[#4e453f] text-sm mb-6 flex-1 leading-[1.6]">{{ project.description }}</p>
      
      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-8 mt-auto">
        <span
            v-for="(tech, index) in project.technologies"
            :key="index"
            class="bg-[#f4f4f3] text-[#4e453f] border border-[#d1c4bc] text-xs px-2 py-1 font-['Space_Grotesk',monospace] uppercase tracking-wider"
        >
          {{ tech }}
        </span>
      </div>
      
      <!-- Links -->
      <div class="flex justify-between items-center border-t border-[#d1c4bc] pt-4 mt-auto">
        <a :href="project.repo" target="_blank" class="text-[#1a1c1c] hover:text-[#5f5e5e] transition-colors font-['Space_Grotesk',monospace] text-[11px] uppercase tracking-widest flex items-center">
          <font-awesome-icon :icon="['fab', 'github']" class="mr-2 text-sm" /> Source
        </a>
        <a v-if="project.demo" :href="project.demo" target="_blank" class="text-[#1a1c1c] hover:text-[#5f5e5e] transition-colors font-['Space_Grotesk',monospace] text-[11px] uppercase tracking-widest flex items-center">
          Demo <font-awesome-icon :icon="['fas', 'external-link-alt']" class="ml-2 text-sm" />
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