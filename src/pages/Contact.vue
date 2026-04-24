<template>
  <div class="min-h-screen bg-[#f9f9f8] text-[#1a1c1c] px-6 md:px-12 py-24 selection:bg-[#34271e] selection:text-white font-['Inter',sans-serif]">
    <section class="max-w-[800px] mx-auto mt-4 md:mt-12">
      
      <!-- Header -->
      <div class="mb-16">
        <div class="mb-4 inline-block border border-[#d1c4bc] px-3 py-1 text-[#5f5e5e] font-['Space_Grotesk',monospace] text-xs uppercase tracking-widest bg-[#f4f4f3]">
          Network
        </div>
        <h2 class="text-4xl md:text-6xl font-bold text-[#1a1c1c] font-['Manrope',sans-serif] tracking-tighter mb-6">
          Establish Connection
        </h2>
        <p class="text-lg text-[#4e453f] font-['Inter',sans-serif] max-w-2xl leading-[1.8]">
          Whether you have an architectural problem to solve, a system to scale, or just want to discuss software engineering, my inbox is open.
        </p>
      </div>

      <!-- Contact Card -->
      <div class="bg-[#f4f4f3] border border-[#d1c4bc] p-8 md:p-12 shadow-[8px_8px_0px_rgba(26,28,28,0.1)]">
        
        <div class="flex flex-col md:flex-row gap-6 mb-12">
          <a href="mailto:dilperezing@gmail.com?subject=Interesado%20en%20tu%20Portafolio"
             class="flex-1 flex justify-center items-center bg-[#34271e] text-white font-['Space_Grotesk',monospace] uppercase tracking-widest text-sm py-4 px-8 border border-[#34271e] transition-all duration-300 ease-in-out hover:bg-[#4b3d33] hover:-translate-y-1 shadow-[4px_4px_0px_rgba(44,42,37,0.1)] hover:shadow-[6px_6px_0px_rgba(44,42,37,0.15)]">
            <font-awesome-icon :icon="['fas', 'envelope']" class="mr-3 text-lg" /> Send Email
          </a>

          <a href="https://www.linkedin.com/in/dilan-perez/" target="_blank"
             class="flex-1 flex justify-center items-center bg-[#f9f9f8] text-[#1a1c1c] font-['Space_Grotesk',monospace] uppercase tracking-widest text-sm py-4 px-8 border border-[#d1c4bc] transition-all duration-300 ease-in-out hover:bg-[#e4e2e1] hover:-translate-y-1 shadow-[4px_4px_0px_rgba(209,196,188,0.3)] hover:shadow-[6px_6px_0px_rgba(209,196,188,0.4)]">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="mr-3 text-lg" /> Connect
          </a>
        </div>

        <div class="border-t border-[#d1c4bc] pt-8 flex flex-col items-center">
          <h3 class="text-sm font-['Space_Grotesk',monospace] text-[#5f5e5e] uppercase tracking-widest mb-6">System Links</h3>
          <div class="flex justify-center gap-8">
            <a href="https://github.com/Dilan-has" target="_blank"
               class="flex flex-col items-center text-[#4e453f] hover:text-[#1a1c1c] transition-colors duration-200 group">
              <font-awesome-icon :icon="['fab', 'github']" class="text-3xl mb-2 group-hover:-translate-y-1 transition-transform" />
              <span class="text-[10px] font-['Space_Grotesk',monospace] uppercase tracking-widest">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/dilan-perez/" target="_blank"
               class="flex flex-col items-center text-[#4e453f] hover:text-[#1a1c1c] transition-colors duration-200 group">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="text-3xl mb-2 group-hover:-translate-y-1 transition-transform" />
              <span class="text-[10px] font-['Space_Grotesk',monospace] uppercase tracking-widest">LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>