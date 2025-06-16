<template>
  <div class="bg-gray-950 min-h-screen text-white font-sans">
    <Navbar />
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>
