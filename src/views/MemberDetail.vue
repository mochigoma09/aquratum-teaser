<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { members } from '../data/members.js';
import GlobalHeader from '../components/GlobalHeader.vue';

const route = useRoute();
const member = computed(() => members.find(m => m.id === route.params.id));
const selectedImageIndex = ref(null);
const currentSlide = ref(0);
let slideInterval;

const startSlideShow = () => {
    slideInterval = setInterval(() => {
        if (member.value && member.value.images.length > 0) {
            currentSlide.value = (currentSlide.value + 1) % member.value.images.length;
        }
    }, 4000);
};

const stopSlideShow = () => {
    clearInterval(slideInterval);
};

const openModal = (index) => {
  selectedImageIndex.value = index;
  stopSlideShow();
  window.addEventListener('keydown', handleKeydown);
};

const closeModal = () => {
  selectedImageIndex.value = null;
  startSlideShow();
  window.removeEventListener('keydown', handleKeydown);
};

const nextImage = () => {
  if (member.value && selectedImageIndex.value !== null) {
    selectedImageIndex.value = (selectedImageIndex.value + 1) % member.value.images.length;
  }
};

const prevImage = () => {
  if (member.value && selectedImageIndex.value !== null) {
    selectedImageIndex.value = (selectedImageIndex.value - 1 + member.value.images.length) % member.value.images.length;
  }
};

const handleKeydown = (e) => {
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'Escape') closeModal();
};

onMounted(() => {
    startSlideShow();
});

onUnmounted(() => {
    stopSlideShow();
    window.removeEventListener('keydown', handleKeydown);
});

const backLink = computed(() => {
  const from = route.query.from;
  if (from === 'members') {
    return { path: '/members', text: 'Back to Members' };
  }
  return { path: '/', text: 'Back to Top' };
});
</script>

<template>
  <div class="min-h-screen relative bg-slate-900 text-white overflow-y-auto md:overflow-hidden flex items-start md:items-center justify-center pt-24 md:pt-0">
    <!-- Global Header -->
    <GlobalHeader />

    <!-- Backgrounds -->
    <div v-if="member" class="fixed inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 to-black"></div>
      <div class="absolute inset-0 opacity-20" :style="{ background: `radial-gradient(circle at 70% 30%, ${member.colorCode}, transparent 70%)` }"></div>
    </div>

    <div v-if="member" class="relative z-10 max-w-4xl w-full p-8 grid md:grid-cols-2 gap-12 items-center">
      <!-- Image Side (Slideshow) -->
      <div class="relative w-full">
         <div class="relative w-full aspect-[3/4] rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl group cursor-pointer" @click="openModal(currentSlide)">
            <transition-group name="fade">
                <img 
                    v-for="(img, idx) in member.images" 
                    v-show="currentSlide === idx"
                    :key="img" 
                    :src="img" 
                    :alt="member.nameJa" 
                    class="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[4000ms] ease-out scale-100"
                    :class="{ 'scale-110': currentSlide === idx }"
                >
            </transition-group>
            
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            
            <!-- Indicators -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <button 
                    v-for="(_, idx) in member.images" 
                    :key="idx" 
                    @click.stop="currentSlide = idx"
                    class="w-2 h-2 rounded-full transition-all duration-300"
                    :class="currentSlide === idx ? 'bg-white w-4' : 'bg-white/30 hover:bg-white/50'"
                ></button>
            </div>
         </div>
        
        <!-- Decorative Circle -->
        <div class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-white/5 opacity-50 animate-spin-slow"></div>
      </div>

      <!-- Text Side -->
      <div>
         <div class="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-6 tracking-widest">
            MEMBER PROFILE
         </div>
         <h1 class="text-5xl md:text-6xl font-bold mb-2 tracking-wide">{{ member.nameJa }}</h1>
         <p class="text-2xl text-slate-400 font-light mb-4 font-mono">{{ member.nameEn }}</p>

         <div class="mb-4 text-slate-300 font-light tracking-wider">
           <span class="text-white/60 text-sm mr-2">BORN:</span>
           {{ member.birthday }}
         </div>

         <div class="flex flex-wrap gap-3 mb-6 text-sm tracking-widest text-slate-300">
           <div 
             v-for="rolePart in member.role" 
             :key="rolePart"
             class="px-3 py-1 border border-white/20 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
           >
             #{{ rolePart }}
           </div>
         </div>
         
         <div class="space-y-6">
            <div class="glass-panel pl-6 pt-4 pb-5 rounded-xl border border-white/5 bg-white/5">
                <span class="block text-xs uppercase tracking-widest text-slate-400 mb-1">Color</span>
                <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded-full shadow-lg" :style="{ backgroundColor: member.colorCode }"></div>
                    <span class="text-xl">{{ member.colorName }}</span>
                </div>
            </div>
            
            <p class="text-slate-300 leading-relaxed text-justify whitespace-pre-line">
              {{ member.bio }}
            </p>
         </div>

         <div class="mt-12">
            <router-link 
              :to="backLink.path" 
              class="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
            >
              <span class="group-hover:-translate-x-1 transition-transform">←</span> {{ backLink.text }}
            </router-link>
         </div>
      </div>
    </div>
    
    <div v-else class="text-center">
        <h1 class="text-2xl mb-4">Member Not Found</h1>
        <router-link to="/" class="text-blue-400 hover:text-blue-300">Return Home</router-link>
    </div>

    <!-- Image Modal -->
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="selectedImageIndex !== null" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-pointer"
        @click="closeModal"
      >
        <!-- Nav Buttons -->
        <button @click.stop="prevImage" class="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-4 z-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 md:w-16 md:h-16">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>

        <button @click.stop="nextImage" class="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-4 z-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 md:w-16 md:h-16">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </button>

        <!-- Image -->
        <transition name="fade-fast" mode="out-in">
            <img 
              :key="selectedImageIndex"
              :src="member.images[selectedImageIndex]" 
              alt="Expanded view" 
              class="max-h-[90vh] max-w-[85vw] object-contain rounded-lg shadow-2xl select-none"
              @click.stop
            >
        </transition>

        <!-- Close -->
        <button 
          class="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
          @click="closeModal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.glass-panel {
    background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
    backdrop-filter: blur(10px);
}
.animate-spin-slow {
    animation: spin 30s linear infinite;
}
@keyframes spin {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
}
/* Transition classes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Fast fade for modal image switching */
.fade-fast-enter-active,
.fade-fast-leave-active {
  transition: opacity 0.2s ease;
}

.fade-fast-enter-from,
.fade-fast-leave-to {
  opacity: 0;
}
</style>
