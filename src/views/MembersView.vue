<script setup>
import GlobalHeader from '../components/GlobalHeader.vue';
import MemberSection from '../components/MemberSection.vue';
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-white relative">
    <GlobalHeader />

    <!-- Background Elements -->
    <div class="fixed inset-0 pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-black to-slate-950"></div>
        <div class="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-cyan-900/20 rounded-full blur-[100px]"></div>
        <div class="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]"></div>
    </div>
    
    <main relative z-10>
        <MemberSection source="members" />
    </main>
  </div>
</template>
