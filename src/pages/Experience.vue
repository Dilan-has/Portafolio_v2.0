<template>
  <div class="min-h-screen bg-[#f9f9f8] text-[#1a1c1c] px-6 md:px-12 py-24 selection:bg-[#34271e] selection:text-white font-['Inter',sans-serif]">
    <section class="max-w-[800px] mx-auto mt-4 md:mt-12">
      <div class="mb-16">
        <div class="mb-4 inline-block border border-[#d1c4bc] px-3 py-1 text-[#5f5e5e] font-['Space_Grotesk',monospace] text-xs uppercase tracking-widest bg-[#f4f4f3]">
          Commit History
        </div>
        <h2 class="text-4xl md:text-6xl font-bold text-[#1a1c1c] font-['Manrope',sans-serif] tracking-tighter">
          Professional Experience
        </h2>
      </div>

      <div class="relative ml-2 md:ml-4 border-l border-[#4b3d33] pt-12 pb-8">
        <!-- Gradient fade to make the line disappear at the top -->
        <div class="absolute top-0 left-[-1px] w-[3px] h-24 bg-gradient-to-b from-[#f9f9f8] to-transparent z-0"></div>

        <!-- "To be continued..." node -->
        <div class="relative pl-8 md:pl-12 mb-16 z-10">
          <div class="absolute -left-[6px] top-1.5 w-3 h-3 bg-[#f9f9f8] border-2 border-[#d1c4bc] animate-pulse"></div>
          <div class="flex items-center text-[#80756e] font-['Space_Grotesk',monospace] uppercase tracking-widest text-xs">
            <span class="opacity-70 font-bold bg-[#f9f9f8] px-1 -ml-1">Compiling next stage...</span>
          </div>
        </div>

        <ExperienceItem
            v-for="(job, index) in experiences"
            :key="index"
            :job="job"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ExperienceItem from '@/components/ExperienceItem.vue';

const experiences = ref([
  {
    title: 'Backend Developer',
    company: 'Mercado Libre.',
    period: 'January 2023 – Present',
    tasks: [
      'Lead the development of microservices using Golang and Java.',
      'Participate in code reviews and technical discussions.',
      'Document APIs using use cases, flowcharts, and architectural diagrams.',
      'Develop solutions to improve microservice efficiency and scalability.',
    ],
    technologies: ['Node.js', 'Golang', 'Java', 'SQL', 'Docker']
  },
  {
    title: 'Full-Stack Developer',
    company: 'Grupo proteger SAS.',
    period: 'September 2021 – September 2022',
    tasks: [
      'Develop and maintain UI components for web applications.',
      'Optimize web application performance for better user experience.',
      'Perform complex database queries and optimization using SQL.'
    ],
    technologies: ['SQL', 'JavaScript', 'HTML', 'CSS', 'Sass', 'Webpack']
  },
]);
</script>