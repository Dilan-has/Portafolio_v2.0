<template>
  <div class="min-h-screen bg-[#f9f9f8] text-[#1a1c1c] px-6 md:px-12 py-24 flex flex-col items-center selection:bg-[#34271e] selection:text-white font-['Inter',sans-serif]">
    
    <main class="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mt-12 md:mt-24">
      
      <!-- Text Section -->
      <div class="flex-1 text-left">
        <div class="mb-6 inline-block border border-[#d1c4bc] px-3 py-1 text-[#5f5e5e] font-['Space_Grotesk',monospace] text-xs uppercase tracking-widest">
          Systems & Infrastructure
        </div>
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1a1c1c] mb-8 font-['Manrope',sans-serif] tracking-tighter leading-[1.1]">
          Hi, I'm Dilan.
        </h1>
        <div class="mb-12 w-full max-w-3xl bg-[#2a2a2a] font-['Space_Grotesk',monospace] overflow-hidden border border-[#1a1c1c] shadow-[6px_6px_0px_rgba(26,28,28,0.1)]">
          <!-- Terminal Status Bar -->
          <div class="flex items-center px-4 py-2.5 bg-[#1a1c1c] border-b border-[#4e453f]">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
              <div class="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
              <div class="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
            </div>
            <div class="ml-4 text-[11px] text-[#80756e] uppercase tracking-[0.2em]">
              sys_profile.sh
            </div>
          </div>
          <!-- Terminal Content -->
          <div class="p-6 md:p-8 text-[#f9f9f8] text-base md:text-lg leading-[1.8]">
            <div class="flex items-start">
              <span class="text-[#80756e] mr-4 mt-0.5 font-bold">></span>
              <p>
                Backend Developer passionate about <strong class="text-white font-bold">Software Architecture</strong> and designing scalable systems with DDD, Go, and Java.🚀<span class="inline-block w-2.5 h-5 bg-[#d7c3b5] animate-[pulse_1s_ease-in-out_infinite] ml-2 align-middle -mt-1"></span>
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
          <router-link to="/projects"
            class="inline-flex justify-center items-center bg-[#34271e] text-white font-['Space_Grotesk',monospace] uppercase tracking-[0.05em] text-sm py-4 px-8 border border-[#34271e] transition-all duration-200 ease-in-out hover:bg-[#4b3d33] hover:-translate-y-1 shadow-[4px_4px_0px_rgba(44,42,37,0.1)] hover:shadow-[6px_6px_0px_rgba(44,42,37,0.15)] rounded-none">
            View Projects
          </router-link>
          
          <a href="#about"
            class="inline-flex justify-center items-center bg-transparent text-[#1a1c1c] font-['Space_Grotesk',monospace] uppercase tracking-[0.05em] text-sm py-4 px-8 border border-[#80756e] transition-all duration-200 ease-in-out hover:border-[#1a1c1c] hover:text-[#1a1c1c] rounded-none">
            About Me
          </a>
        </div>
      </div>
      
      <!-- Visual Section -->
      <div class="w-full lg:w-[450px] flex justify-center lg:justify-end">
        <div class="relative w-full max-w-[450px] aspect-square border border-[#d1c4bc] p-3 flex items-center justify-center transition-transform hover:scale-[1.02] duration-500">
          <img src="../assets/avatar.jpg" alt="Dilan" class="w-full h-full object-cover border border-[#d1c4bc]">
          <div class="absolute -bottom-4 -right-4 bg-[#f9f9f8] px-3 py-1.5 border border-[#80756e] text-xs font-['Space_Grotesk',monospace] uppercase tracking-widest text-[#1a1c1c] shadow-[2px_2px_0px_rgba(44,42,37,0.1)]">
            [ARCHITECT_MODE]
          </div>
        </div>
      </div>
      
    </main>

    <!-- About Section -->
    <section id="about" class="mt-40 max-w-[1200px] w-full mx-auto border-t border-[#d1c4bc] pt-24 pb-24">
      <div class="flex flex-col md:flex-row justify-between items-baseline mb-16">
        <h2 class="text-4xl md:text-5xl font-semibold text-[#1a1c1c] font-['Manrope',sans-serif] tracking-tight">
          <font-awesome-icon :icon="['fas', 'user-tie']" class="mr-4 text-[#80756e] text-3xl md:text-4xl" />About the Architect
        </h2>
        <span class="text-[#5f5e5e] font-['Space_Grotesk',monospace] text-sm uppercase tracking-widest mt-4 md:mt-0">SYS_ID: 0x9A</span>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div class="lg:col-span-8 text-[#4e453f] leading-[1.8] text-xl font-['Inter',sans-serif]">
          <p class="mb-8">
            I am a Software Developer specializing in backend solutions with a strong focus on high-availability systems. My expertise lies in Go (Golang), Java, and Node.js, complemented by a solid foundation in Hexagonal Architecture, Domain-Driven Design, and scalable microservices.
          </p>
          <p class="mb-8">
            I also have experience in mobile development using React Native, along with integrating AI models and open-source code agents to enhance workflows. I excel at tackling complex concurrency challenges and prioritize delivering clean, maintainable code that adheres to enterprise standards.
          </p>
          <p>
            If you're seeking a developer who can streamline your backend processes and improve system performance, let's connect to discuss how I can collaborate on your core infrastructure.
          </p>
        </div>
        
        <!-- Stack Architecture Tags -->
        <div class="lg:col-span-4 flex flex-col gap-4">
          <div class="border border-[#d1c4bc] p-8">
            <h3 class="font-['Space_Grotesk',monospace] text-sm uppercase text-[#1a1c1c] tracking-widest mb-6 border-b border-[#d1c4bc] pb-3 flex items-center">
              <font-awesome-icon :icon="['fas', 'server']" class="mr-3 text-[#80756e] text-lg" /> Core Tech Stack
            </h3>
            <div class="flex flex-wrap gap-3">
              <span class="text-[#4e453f] px-4 py-1.5 font-['Space_Grotesk',monospace] text-sm border border-[#d1c4bc] hover:border-[#80756e] transition-colors cursor-default flex items-center gap-2"><font-awesome-icon :icon="['fab', 'golang']" class="text-[#80756e]" /> Go</span>
              <span class="text-[#4e453f] px-4 py-1.5 font-['Space_Grotesk',monospace] text-sm border border-[#d1c4bc] hover:border-[#80756e] transition-colors cursor-default flex items-center gap-2"><font-awesome-icon :icon="['fab', 'java']" class="text-[#80756e]" /> Java</span>
              <span class="text-[#4e453f] px-4 py-1.5 font-['Space_Grotesk',monospace] text-sm border border-[#d1c4bc] hover:border-[#80756e] transition-colors cursor-default flex items-center gap-2"><font-awesome-icon :icon="['fab', 'node-js']" class="text-[#80756e]" /> Node.js</span>
            </div>
            
            <h3 class="font-['Space_Grotesk',monospace] text-sm uppercase text-[#1a1c1c] tracking-widest mt-10 mb-6 border-b border-[#d1c4bc] pb-3 flex items-center">
              <font-awesome-icon :icon="['fas', 'layer-group']" class="mr-3 text-[#80756e] text-lg" /> Methodologies
            </h3>
            <div class="flex flex-wrap gap-3">
              <span class="text-[#4e453f] px-4 py-1.5 font-['Space_Grotesk',monospace] text-sm border border-[#d1c4bc] hover:border-[#80756e] transition-colors cursor-default flex items-center gap-2"><font-awesome-icon :icon="['fas', 'sitemap']" class="text-[#80756e]" /> Hexagonal Arch</span>
              <span class="text-[#4e453f] px-4 py-1.5 font-['Space_Grotesk',monospace] text-sm border border-[#d1c4bc] hover:border-[#80756e] transition-colors cursor-default flex items-center gap-2"><font-awesome-icon :icon="['fas', 'cubes']" class="text-[#80756e]" /> DDD</span>
              <span class="text-[#4e453f] px-4 py-1.5 font-['Space_Grotesk',monospace] text-sm border border-[#d1c4bc] hover:border-[#80756e] transition-colors cursor-default flex items-center gap-2"><font-awesome-icon :icon="['fas', 'network-wired']" class="text-[#80756e]" /> Microservices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Components and logic for Home view
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>