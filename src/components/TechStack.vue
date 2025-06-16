<template>
  <section class="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-white mb-8 text-center animate-fade-in-up">Stack Tecnológico</h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
      <div
          v-for="(tech, index) in stack"
          :key="index"
          class="flex flex-col items-center bg-gray-800 rounded-xl p-4 hover:bg-teal-600 transition
                 opacity-0 translate-y-8 animate-fade-in-up-stagger" :style="{ 'animation-delay': `${index * 0.1}s` }" >
        <img :src="tech.icon" :alt="tech.name" class="w-24 h-24 mb-2" />
        <p class="text-sm text-white">{{ tech.name }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import GO from '../assets/go-lang.png'
import NODE from '../assets/node.png'
import SQL from '../assets/sql.png'
import Docker from '../assets/docker.png'
import Python from '../assets/python.png'
import Git from '../assets/git.png'
import Mongo from '../assets/mongo.png'

const stack = [
  { name: 'Go', icon: GO },
  { name: 'Node.js', icon: NODE },
  { name: 'SQL', icon: SQL },
  { name: 'MongoDB', icon: Mongo },
  { name: 'Docker', icon: Docker },
  { name: 'Python', icon: Python },
  { name: 'Git', icon: Git },
]
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

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}
</style>