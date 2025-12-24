<script setup>
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};

const closeMenu = () => {
    isOpen.value = false;
};

watch(isOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});
</script>

<template>
  <header 
    class="fixed top-0 left-0 w-full z-50 p-6 transition-colors duration-300"
    :class="isOpen ? 'text-slate-900' : 'text-white'"
  >
    <div class="flex justify-between items-center">
      <!-- Logo / Home Link -->
      <RouterLink to="/" class="text-xl font-bold tracking-[0.2em] relative z-50 hover:opacity-70 transition-opacity" @click="closeMenu">
        AQURATUM
      </RouterLink>

      <!-- Hamburger Button -->
      <button @click="toggleMenu" class="relative z-50 w-10 h-10 flex flex-col justify-center gap-2 group cursor-pointer focus:outline-none">
        <span 
          class="w-full h-[1px] transition-all duration-300"
          :class="[
            isOpen ? 'rotate-45 translate-y-[9px] bg-slate-900' : 'bg-white'
          ]"
        ></span>
        <span 
          class="w-full h-[1px] transition-all duration-300"
          :class="[
            isOpen ? 'opacity-0 bg-slate-900' : 'bg-white'
          ]"
        ></span>
        <span 
          class="w-full h-[1px] transition-all duration-300"
          :class="[
            isOpen ? '-rotate-45 -translate-y-[9px] bg-slate-900' : 'bg-white'
          ]"
        ></span>
      </button>

      <!-- Full Screen Menu Overlay -->
      <Transition name="fade">
        <nav v-if="isOpen" class="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-2xl tracking-[0.3em] font-light text-slate-900">
          <RouterLink to="/" @click="closeMenu" class="hover:text-cyan-600 transition-colors">TOP</RouterLink>
          <RouterLink to="/news" @click="closeMenu" class="hover:text-cyan-600 transition-colors">NEWS</RouterLink>
          <RouterLink to="/members" @click="closeMenu" class="hover:text-cyan-600 transition-colors">MEMBER</RouterLink>
          <RouterLink to="/schedule" @click="closeMenu" class="hover:text-cyan-600 transition-colors">SCHEDULE</RouterLink>
          
          <!-- Socials (Mock) -->
          <div class="flex gap-6 mt-8 text-sm opacity-50">
             <a href="#" class="hover:text-cyan-600 transition-colors">X</a>
             <a href="#" class="hover:text-cyan-600 transition-colors">INSTAGRAM</a>
             <a href="#" class="hover:text-cyan-600 transition-colors">YOUTUBE</a>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
