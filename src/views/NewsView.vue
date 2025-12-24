<script setup>
import { ref, computed } from 'vue';
import { news } from '../data/news.js';
import { useRouter } from 'vue-router';
import GlobalHeader from '../components/GlobalHeader.vue';

const router = useRouter();
const selectedCategory = ref('ALL');

const filteredNews = computed(() => {
    if (selectedCategory.value === 'ALL') {
        return news;
    }
    return news.filter(item => item.category === selectedCategory.value);
});

const formatDate = (dateString) => {
    return dateString.replace(/\./g, '.');
};

const goToDetail = (id) => {
    router.push({ name: 'news-detail', params: { id } });
};
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

        <main class="relative z-10 pt-32 px-6 max-w-4xl mx-auto pb-20">
            <h1 class="text-4xl md:text-6xl font-bold tracking-[0.2em] mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">NEWS</h1>

            <!-- Filter -->
            <div class="flex flex-wrap gap-4 mb-12 text-sm tracking-widest">
                <button 
                    @click="selectedCategory = 'ALL'"
                    class="px-4 py-2 rounded-full border border-white/20 transition-all hover:bg-white/10"
                    :class="{ 'bg-white text-black border-white hover:bg-white': selectedCategory === 'ALL' }"
                >
                    ALL
                </button>
                <button 
                    v-for="cat in ['RELEASE', 'LIVE', 'EVENT', 'MEDIA', 'OTHER']" 
                    :key="cat"
                    @click="selectedCategory = cat"
                    class="px-4 py-2 rounded-full border border-white/20 transition-all hover:bg-white/10"
                    :class="{ 'bg-white text-black border-white hover:bg-white': selectedCategory === cat }"
                >
                    {{ cat }}
                </button>
            </div>

            <!-- List -->
            <div class="space-y-4">
                <article 
                    v-for="item in filteredNews" 
                    :key="item.id"
                    @click="goToDetail(item.id)"
                    class="group relative block p-6 md:p-8 bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.07] transition-all cursor-pointer overflow-hidden backdrop-blur-sm"
                >
                    <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                        <div class="flex items-center gap-4 min-w-[140px]">
                            <time class="text-slate-400 font-mono tracking-wider">{{ formatDate(item.date) }}</time>
                        </div>
                        
                        <div class="flex-shrink-0">
                            <span 
                                class="inline-block px-3 py-1 text-[10px] tracking-widest font-bold text-white rounded bg-slate-700"
                                :class="{
                                    '!bg-blue-600': item.category === 'RELEASE',
                                    '!bg-red-600': item.category === 'LIVE',
                                    '!bg-green-600': item.category === 'EVENT',
                                    '!bg-purple-600': item.category === 'MEDIA'
                                }"
                            >
                                {{ item.category }}
                            </span>
                        </div>

                        <h2 class="text-lg md:text-xl font-medium tracking-wide group-hover:text-cyan-300 transition-colors line-clamp-2">
                            {{ item.title }}
                        </h2>
                    </div>

                    <!-- Decoration -->
                    <div class="absolute right-[-20px] top-[-20px] w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors"></div>
                    <div class="absolute bottom-4 right-4 text-cyan-500/0 group-hover:text-cyan-500/100 transition-all transform translate-x-4 group-hover:translate-x-0">
                        →
                    </div>
                </article>
            </div>
        </main>
    </div>
</template>
