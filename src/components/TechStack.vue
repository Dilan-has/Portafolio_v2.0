<template>
  <div>
    <div class="mb-16">
      <div class="mb-4 inline-block border border-[#d1c4bc] px-3 py-1 text-[#5f5e5e] font-['Space_Grotesk',monospace] text-xs uppercase tracking-widest bg-[#f4f4f3]">
        Infrastructure
      </div>
      <h2 class="text-4xl md:text-6xl font-bold text-[#1a1c1c] font-['Manrope',sans-serif] tracking-tighter">
        Technology Stack
      </h2>
    </div>

    <!-- Tech Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      <div
          v-for="(tech, index) in stack"
          :key="index"
          class="flex flex-col items-center bg-[#f4f4f3] border border-[#d1c4bc] p-8 hover:bg-[#e4e2e1] hover:border-[#80756e] transition-all duration-300 group hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(26,28,28,0.1)]" >
        <img :src="tech.icon" :alt="tech.name" class="w-16 h-16 mb-6 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
        <p class="text-sm font-['Space_Grotesk',monospace] uppercase tracking-widest text-[#5f5e5e] group-hover:text-[#1a1c1c]">{{ tech.name }}</p>
      </div>
    </div>

    <!-- Soft Skills Section -->
    <div class="mt-32">
      <div class="mb-10 flex items-center gap-4">
        <h3 class="text-2xl font-bold text-[#1a1c1c] font-['Manrope',sans-serif]">
          Human Competencies
        </h3>
        <div class="h-px bg-[#d1c4bc] flex-1"></div>
      </div>
      <div class="flex flex-wrap gap-3">
        <span
            v-for="(skill, index) in softSkills"
            :key="index"
            class="px-4 py-2 bg-[#f9f9f8] border border-[#d1c4bc] text-[#4e453f] text-sm font-['Space_Grotesk',monospace] uppercase tracking-wider hover:border-[#1a1c1c] hover:bg-[#1a1c1c] hover:text-[#f9f9f8] transition-all duration-300 cursor-default"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
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

const softSkills = [
  'Problem Solving',
  'Effective Communication',
  'Team Collaboration',
  'Adaptability',
  'Critical Thinking',
  'Mentorship',
  'Time Management',
  'Agile Methodologies'
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