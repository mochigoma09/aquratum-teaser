<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const sectionRef = ref(null);
const isVisible = ref(false);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
    }
  });
}, { threshold: 0.3 });

onMounted(() => {
  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (sectionRef.value) {
    observer.unobserve(sectionRef.value);
  }
});
</script>

<template>
  <section ref="sectionRef" class="min-h-[80vh] flex items-center justify-center relative py-20">
    <div 
      class="max-w-4xl text-center px-6 transition-all duration-1000 transform"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
    >
      <h2 class="text-3xl md:text-5xl font-light leading-relaxed tracking-wider mb-8 text-white">
        160万年の眠りから覚めた、<br />
        <span class="text-cyan-300 font-bold">透明な衝撃</span>
      </h2>
      <p class="text-slate-400 text-lg md:text-xl leading-loose">
        深層地下水の純度<br>
        悠久の時が生んだ岩盤の記憶
      </p>
    </div>
    
    <!-- Decorative background line -->
    <div class="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent -translate-x-1/2 pointer-events-none"></div>
  </section>
</template>
