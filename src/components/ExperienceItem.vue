<template>
  <div class="relative mb-8 pl-10 opacity-0 translate-y-8 animate-fade-in-up-stagger">
    <div class="absolute left-0 top-0 h-full w-0.5 bg-gray-700"></div>

    <div class="absolute -left-1.5 top-0 w-4 h-4 bg-teal-500 rounded-full border-2 border-gray-900 z-10"></div>

    <div class="border-l-4 border-teal-500 pl-4">
      <h3 class="text-xl font-semibold text-white">{{ job.title }}</h3>
      <p class="text-gray-400 text-sm">{{ job.company }} — {{ job.period }}</p>
      <ul class="list-disc ml-5 mt-2 text-gray-300 text-sm space-y-1">
        <li v-for="(task, i) in job.tasks" :key="i">{{ task }}</li>
      </ul>
      <div class="flex flex-wrap mt-3 gap-2">
        <span
            v-for="(tech, index) in job.technologies"
            :key="index"
            class="bg-teal-700 text-white text-xs px-2 py-1 rounded-full"
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