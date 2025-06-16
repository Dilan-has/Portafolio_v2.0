<template>
  <div class="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4 md:px-0">
    <div class="relative z-10">
      <img src="../assets/avatar.jpg" alt="Dilan" class="w-55 h-55 rounded-full border-4 border-purple-600 shadow-lg mx-auto mb-6 animate-pulse-slow">

      <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
        Hola, soy <span class="text-teal-400">Dilan</span>
        <span class="inline-block animate-wave origin-bottom-right">👋</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-300 font-light mb-8 animate-fade-in-up delay-100">
        Backend Developer apasionado por crear <span class="text-purple-400">soluciones eficientes, escalables y robustas</span> con Go, Java, Python y APIs.
      </p>

      <router-link to="/projects"
                   class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full
               shadow-lg transform transition-all duration-300 ease-in-out
               hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50">
        Ver mis proyectos
        <i class="fas fa-arrow-right ml-2"></i> </router-link>
    </div>

    <div class="mt-20 max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl animate-fade-in-up delay-200">
      <h2 class="text-3xl font-semibold text-white mb-4">Sobre mí</h2>
      <p class="text-gray-300 leading-relaxed">
        Soy Dilan Pérez, Ingeniero de Sistemas y Computación con sólida experiencia como Desarrollador Backend en Mercado Libre. Con más de año y medio impulsando soluciones robustas en este entorno dinámico, he profundizado mis conocimientos en el sector tecnológico y la construcción de sistemas a gran escala.
      <br><br>
        Domino lenguajes como Go (Golang), Node.js, Java, JavaScript y SQL, y he aplicado mi pasión por el desarrollo en proyectos personales, incluyendo una API en Go con arquitectura en capas. Mi enfoque se centra en el análisis y resolución de problemas complejos, y me destaco por mi capacidad para trabajar eficientemente en equipo para entregar resultados de alto impacto.
      </p>
    </div>

    <div class="mt-16 flex flex-wrap justify-center gap-4 animate-fade-in-up delay-300">
      <span class="bg-gray-700 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2">
        <i class="fab fa-go text-lg text-blue-400"></i> Go
      </span>
      <span class="bg-gray-700 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2">
        <i class="fab fa-python text-lg text-yellow-400"></i> Python
      </span>
      <span class="bg-gray-700 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2">
        <i class="fas fa-server text-lg text-green-400"></i> APIs REST
      </span>
    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>
@keyframes fadeInFromBottom {
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
  animation: fadeInFromBottom 0.6s ease-out forwards;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }

@keyframes pulseSlow {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7);
  }
  50% {
    transform: scale(1.03);
    box-shadow: 0 0 0 10px rgba(139, 92, 246, 0);
  }
}

.animate-pulse-slow {
  animation: pulseSlow 3s infinite ease-in-out;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.animate-wave {
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}
</style>