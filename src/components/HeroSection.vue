<script setup>
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 1000);
});
</script>

<template>
  <section class="h-screen flex flex-col items-center justify-center relative overflow-hidden">
    <!-- Bubble Particles -->
    <div class="particles absolute inset-0 pointer-events-none">
      <div v-for="n in 20" :key="n" class="bubble"></div>
    </div>

    <!-- Main Title -->
    <h1 
      class="text-6xl md:text-9xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-500 z-10 animate-float transition-all duration-1000 delay-300 ease-out transform"
      :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
    >
      Aquratum
    </h1>
    <p 
      class="mt-4 text-cyan-100/50 tracking-[0.5em] text-sm md:text-base z-10 transition-all duration-1000 delay-1000 ease-out transform"
      :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
    >
      DEEP STREAM IDOL UNIT
    </p>
  </section>
</template>

<style scoped>
.bubble {
  position: absolute;
  bottom: -20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: rise 10s infinite ease-in;
}

/* Generate random positions and sizes for bubbles */
.bubble:nth-child(1) { left: 10%; width: 20px; height: 20px; animation-duration: 8s; animation-delay: 0s; }
.bubble:nth-child(2) { left: 20%; width: 10px; height: 10px; animation-duration: 12s; animation-delay: 2s; }
.bubble:nth-child(3) { left: 35%; width: 15px; height: 15px; animation-duration: 10s; animation-delay: 4s; }
.bubble:nth-child(4) { left: 50%; width: 25px; height: 25px; animation-duration: 15s; animation-delay: 1s; }
.bubble:nth-child(5) { left: 65%; width: 12px; height: 12px; animation-duration: 11s; animation-delay: 3s; }
.bubble:nth-child(6) { left: 80%; width: 18px; height: 18px; animation-duration: 9s; animation-delay: 5s; }
.bubble:nth-child(7) { left: 90%; width: 8px; height: 8px; animation-duration: 14s; animation-delay: 2s; }
/* Add more randomization as needed */
.bubble:nth-child(n+8) {
  left: 50%; /* Just a fallback to avoid listing all 20 manually here for brevity, usually we'd use SCSS loop or inline styles */
  width: 5px; height: 5px; opacity: 0;
}

@keyframes rise {
  0% {
    bottom: -20px;
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    bottom: 100vh;
    transform: translateX(-20px);
    opacity: 0;
  }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
