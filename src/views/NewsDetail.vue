<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { news } from '../data/news.js';
import GlobalHeader from '../components/GlobalHeader.vue';

const route = useRoute();
const router = useRouter();

const item = computed(() => news.find(n => n.id === route.params.id));

const goBack = () => {
    router.push('/news');
};
</script>

<template>
    <div class="min-h-screen bg-slate-900 text-white relative">
        <GlobalHeader />
        
        <!-- Background Elements -->
        <div class="fixed inset-0 pointer-events-none">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 to-black"></div>
             <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
        </div>

        <main class="relative z-10 pt-32 px-6 max-w-3xl mx-auto pb-20" v-if="item">
            <!-- Header -->
            <div class="mb-12 border-b border-white/10 pb-8">
                <div class="flex items-center gap-4 mb-6">
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
                    <time class="text-slate-400 font-mono tracking-wider">{{ item.date }}</time>
                </div>
                <h1 class="text-2xl md:text-4xl font-bold leading-relaxed tracking-wide">{{ item.title }}</h1>
            </div>

            <!-- Content -->
            <div class="prose prose-invert prose-lg max-w-none text-slate-300 font-light leading-loose tracking-wide" v-html="item.content"></div>

            <!-- Footer -->
            <div class="mt-20 pt-10 border-t border-white/10 text-center">
                <button 
                    @click="goBack"
                    class="px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-all tracking-[0.2em] text-sm"
                >
                    BACK TO LIST
                </button>
            </div>
        </main>
        
        <div v-else class="pt-40 text-center text-slate-500">
            Article not found.
        </div>
    </div>
</template>
