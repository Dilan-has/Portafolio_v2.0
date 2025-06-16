<template>
  <section class="py-8 px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold text-white mb-4 animate-fade-in-up">Contacto</h2>
    <p class="text-lg text-gray-300 mb-8 animate-fade-in-up delay-100">
      ¿Tienes una idea, proyecto o simplemente quieres saludar? Estoy disponible para colaboraciones y oportunidades.
    </p>

    <div class="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-xl animate-fade-in-up delay-200">

      <div class="mb-8 text-teal-400">
        <i class="fas fa-handshake text-6xl animate-bounce-subtle"></i>
      </div>

      <a href="mailto:dilperezing@gmail.com?subject=Interesado%20en%20tu%20Portafolio"
         class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full
                shadow-lg transform transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50 mb-8">
        <i class="fas fa-envelope mr-2"></i> Enviarme un correo
      </a>

      <div class="mt-8 pt-8 border-t border-gray-700 animate-fade-in-up delay-300">
        <h3 class="text-xl font-semibold text-white mb-4">Encuéntrame en:</h3>
        <div class="flex justify-center space-x-6">
          <a href="https://github.com/Dilan-has" target="_blank"
             class="text-gray-400 hover:text-white transition-colors duration-200">
            <i class="fab fa-github text-4xl">gitHub</i>
          </a>
          <a href="https://www.linkedin.com/in/dilan-perez/" target="_blank"
             class="text-gray-400 hover:text-white transition-colors duration-200">
            <i class="fab fa-linkedin text-4xl">Linkedin</i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No hay cambios en el script
</script>

<style scoped>
/*
  Define esta animación en tu style.css (global) para poder usarla en cualquier parte,
  o asegúrate de que esté definida en App.vue si solo la usas ahí y en Contact.
*/
@keyframes bounceSubtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px); /* Pequeño rebote */
  }
}

.animate-bounce-subtle {
  animation: bounceSubtle 2s infinite ease-in-out;
}
</style>