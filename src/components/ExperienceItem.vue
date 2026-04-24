<template>
  <div class="relative mb-16 pl-8 md:pl-12 group">
    <!-- Node -->
    <div class="absolute -left-[6px] top-2 w-3 h-3 bg-[#f9f9f8] border-2 border-[#4b3d33] transition-colors group-hover:bg-[#4b3d33]"></div>

    <div class="flex flex-col">
      <div class="flex flex-wrap items-baseline gap-3 mb-2">
        <h3 class="text-2xl font-semibold text-[#1a1c1c] font-['Manrope',sans-serif]">{{ job.title }}</h3>
        <span class="text-[#80756e] font-['Space_Grotesk',monospace] text-xs uppercase tracking-wider">
          @ {{ job.company }}
        </span>
      </div>
      
      <p class="text-[#5f5e5e] font-['Space_Grotesk',monospace] text-xs uppercase tracking-widest mb-6">
        {{ job.period }}
      </p>
      
      <div class="text-[#4e453f] text-base leading-[1.8] mb-6">
        <ul class="list-none space-y-3">
          <li v-for="(task, i) in job.tasks" :key="i" class="flex">
            <span class="text-[#80756e] mr-3 mt-1 text-xs">◆</span>
            <span>{{ task }}</span>
          </li>
        </ul>
      </div>
      
      <div class="flex flex-wrap gap-2">
        <span
            v-for="(tech, index) in job.technologies"
            :key="index"
            class="bg-[#f4f4f3] text-[#4e453f] border border-[#d1c4bc] text-[10px] px-2 py-1 font-['Space_Grotesk',monospace] uppercase tracking-widest cursor-default hover:border-[#80756e] transition-colors"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  job: Object
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