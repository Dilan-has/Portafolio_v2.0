<template>
  <div id="app" class="min-h-screen bg-[#f9f9f8] text-[#1a1c1c] font-sans antialiased flex">
    <NavBar :menuOpen="menuOpen" @close-menu="closeMenu" />

    <button @click="toggleMenu"
            class="fixed top-4 left-4 text-[#f9f9f8] z-50 md:hidden focus:outline-none bg-[#1a1c1c] border border-[#1a1c1c] p-2 shadow-md">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>

    <div class="flex-1 flex flex-col min-w-0">
      <div class="flex-1 overflow-y-auto pt-16 md:pt-0 md:pl-20">
        <div class="w-full h-full">
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