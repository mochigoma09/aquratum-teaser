<script setup>
import MemberCard from './MemberCard.vue';
import { members } from '../data/members.js';

// Layout configuration to create "scattered" look
const getCardClasses = (index) => {
  if (index % 2 === 0) return 'mt-0 md:mt-12';
  return 'mt-12 md:mt-0';
};
</script>

<template>
  <section class="min-h-screen py-32 px-4 relative z-10 w-full max-w-7xl mx-auto">
    <h2 class="text-4xl font-bold text-center mb-24 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
      MEMBERS
    </h2>
    
    <div class="flex flex-wrap justify-center gap-12 md:gap-20">
      <div 
        v-for="(member, index) in members" 
        :key="member.name"
        :class="getCardClasses(index)"
      >
        <MemberCard 
          :member="member" 
          :delay="index * 0.5"
        />
      </div>
    </div>
  </section>
</template>
