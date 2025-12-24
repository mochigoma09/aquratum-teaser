<script setup>
import { computed } from 'vue';

const props = defineProps({
  member: {
    type: Object,
    required: true
  },
  delay: {
    type: Number,
    default: 0
  },
  source: {
    type: String,
    default: 'home'
  }
});

// Map colors to tailwind classes or style strings
// Since we have custom names in valid tailwind, we can try to use them or raw hex
const colorStyles = computed(() => {
  return {
    '--member-color': props.member.colorCode
  };
});

const getMemberImage = (id) => {
  return new URL(`../assets/images/${id}/1.png`, import.meta.url).href;
};
</script>

<template>
  <router-link 
    :to="`/members/${member.id}?from=${source}`"
    class="member-card block relative group w-72 h-96 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:scale-105 cursor-pointer"
    :style="{ animationDelay: `${delay}s`, ...colorStyles }"
  >
    <!-- Glow Effect -->
    <div class="absolute -inset-1 bg-gradient-to-br from-transparent to-[var(--member-color)] opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl"></div>
    
    <!-- Member Image -->
    <div class="absolute inset-0 z-0">
      <img 
        :src="getMemberImage(member.id)" 
        :alt="member.name"
        class="w-full h-full object-cover object-top opacity-80 group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
    </div>
    
    <div class="relative z-10 h-full flex flex-col justify-between">
      <div>
        <div class="text-xs font-mono tracking-widest opacity-60 mb-2">MEMBER</div>
        <h3 class="text-2xl font-bold tracking-wider text-white mb-1">
          {{ member.nameEn.split(' ')[0] }}
        </h3>
        <span class="text-sm font-light text-slate-300">{{ member.nameEn.split(' ')[1] }}</span>
      </div>

      <div class="flex items-end justify-between">
        <div class="w-8 h-1 rounded-full bg-[var(--member-color)] shadow-[0_0_10px_var(--member-color)]"></div>
        <span class="text-[10px] uppercase tracking-widest opacity-50">{{ member.colorNameEn }}</span>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.member-card {
  animation: float-card 6s ease-in-out infinite;
}

@keyframes float-card {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
</style>
