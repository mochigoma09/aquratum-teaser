<script setup>
import { onMounted } from 'vue';

const emit = defineEmits(['finished']);

onMounted(() => {
  setTimeout(() => {
    emit('finished');
  }, 2000); // 2 seconds loading time
});
</script>

<template>
  <div class="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-slate-900 to-black pointer-events-none"></div>

    <!-- Rising Bubbles -->
    <div class="particles absolute inset-0 pointer-events-none">
       <div v-for="n in 30" :key="n" class="bubble"></div>
    </div>

    <!-- Loading Content -->
    <div class="relative z-10 flex flex-col items-center">
      <div class="text-4xl md:text-6xl font-bold tracking-[0.5em] text-cyan-200/80 animate-pulse-glow mb-8">
        Aquratum
      </div>
      
      <!-- Progress Line -->
      <div class="w-48 h-[1px] bg-slate-800 overflow-hidden relative">
        <div class="absolute inset-0 bg-cyan-400 w-full -translate-x-full animate-progress"></div>
      </div>
      
      <p class="mt-4 text-xs tracking-[0.3em] text-cyan-400/50 uppercase">Loading System...</p>
    </div>
  </div>
</template>

<style scoped>
.bubble {
  position: absolute;
  bottom: -20px;
  background: rgba(165, 243, 252, 0.1); /* Cyan-200 with low opacity */
  border-radius: 50%;
  animation: rise-and-fade 4s infinite ease-in;
}

/* Randomize bubbles via Nth-child (simplified set for loading screen) */
.bubble:nth-child(2n) { width: 8px; height: 8px; left: 20%; animation-duration: 3s; animation-delay: 0.5s; }
.bubble:nth-child(2n+1) { width: 12px; height: 12px; left: 80%; animation-duration: 4s; animation-delay: 1s; }
.bubble:nth-child(3n) { width: 6px; height: 6px; left: 50%; animation-duration: 2.5s; animation-delay: 0s; }
.bubble:nth-child(5n) { width: 15px; height: 15px; left: 35%; animation-duration: 5s; animation-delay: 2s; }
.bubble:nth-child(7n) { width: 4px; height: 4px; left: 65%; animation-duration: 3.5s; animation-delay: 1.5s; }
/* Random positions */
.bubble:nth-child(1) { left: 10%; }
.bubble:nth-child(2) { left: 90%; }
.bubble:nth-child(3) { left: 25%; }
.bubble:nth-child(4) { left: 75%; }
.bubble:nth-child(5) { left: 45%; }

@keyframes rise-and-fade {
  0% { transform: translateY(0); opacity: 0; }
  20% { opacity: 0.5; }
  100% { transform: translateY(-100vh); opacity: 0; }
}

@keyframes progress {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0); }
  100% { transform: translateX(100%); }
}

.animate-progress {
  animation: progress 2s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; text-shadow: 0 0 10px rgba(34, 211, 238, 0.2); }
  50% { opacity: 1; text-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
}
</style>
