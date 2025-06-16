<template>
  <div id="app" class="min-h-screen bg-gray-900 text-white font-sans antialiased flex">
    <NavBar :menuOpen="menuOpen" @close-menu="closeMenu" />

    <button @click="toggleMenu"
            class="fixed top-4 left-4 text-white z-50 md:hidden focus:outline-none bg-gray-800 p-2 rounded-md shadow-lg">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>

    <div class="flex-1 flex flex-col"> <div class="flex-1 overflow-y-auto pt-20 md:pt-4 md:pl-20">
      <div class="max-w-none xl:max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>