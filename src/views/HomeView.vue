<script setup>
import { ref } from 'vue';
import GlobalHeader from '../components/GlobalHeader.vue';
import HeroSection from '../components/HeroSection.vue';
import ConceptSection from '../components/ConceptSection.vue';
import MemberSection from '../components/MemberSection.vue';
import FooterSection from '../components/FooterSection.vue';
import LoadingScreen from '../components/LoadingScreen.vue';

const isLoading = ref(!sessionStorage.getItem('aquratum_visited'));

const handleLoadingFinished = () => {
    isLoading.value = false;
    sessionStorage.setItem('aquratum_visited', 'true');
};
</script>

<template>
  <div class="bg-slate-900 min-h-screen">
      <Transition name="fade-slow">
        <LoadingScreen v-if="isLoading" @finished="handleLoadingFinished" />
      </Transition>

      <Transition name="fade-slow">
          <main v-if="!isLoading" class="relative w-full overflow-hidden bg-slate-900 text-white selection:bg-cyan-500 selection:text-white">
            <GlobalHeader />
            
            <!-- Global Background Elements -->
            <div class="fixed inset-0 z-0 pointer-events-none">
              <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black"></div>
              <div class="absolute w-[500px] h-[500px] -top-20 -left-20 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
              <div class="absolute w-[700px] h-[700px] bottom-0 right-0 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slower"></div>
              
              <!-- Grid Overlay -->
              <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
            </div>

            <HeroSection />
            <ConceptSection />
            <MemberSection />
            <FooterSection />
          </main>
      </Transition>
  </div>
</template>

<style>
.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.animate-pulse-slower {
  animation: pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.fade-slow-enter-active,
.fade-slow-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.fade-slow-enter-from,
.fade-slow-leave-to {
  opacity: 0;
}
</style>
