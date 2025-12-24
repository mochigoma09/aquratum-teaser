<script setup>
import { computed } from 'vue';
import { schedule } from '../data/schedule.js';
import GlobalHeader from '../components/GlobalHeader.vue';

// Group by Month (YYYY.MM)
const groupedSchedule = computed(() => {
    const groups = {};
    schedule.forEach(event => {
        const month = event.date.substring(0, 7); // "2026.01"
        if (!groups[month]) groups[month] = [];
        groups[month].push(event);
    });
    return groups;
});

const getMonthTitle = (monthKey) => {
    const [year, month] = monthKey.split('.');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();
};
</script>

<template>
    <div class="min-h-screen bg-slate-950 text-white relative">
        <GlobalHeader />

        <div class="fixed inset-0 pointer-events-none">
             <div class="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black"></div>
             <!-- Geometric shapes -->
             <div class="absolute top-[10%] left-[5%] w-[2px] h-[30vh] bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0"></div>
             <div class="absolute bottom-[20%] right-[10%] w-[1px] h-[40vh] bg-gradient-to-b from-purple-500/0 via-purple-500/30 to-purple-500/0"></div>
        </div>

        <main class="relative z-10 pt-32 px-4 md:px-6 max-w-5xl mx-auto pb-20">
            <h1 class="text-4xl md:text-6xl font-bold tracking-[0.2em] mb-16 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">SCHEDULE</h1>

            <div class="space-y-16">
                <section v-for="(events, monthKey) in groupedSchedule" :key="monthKey">
                    <!-- Month Header -->
                    <h2 class="text-2xl md:text-3xl font-thin tracking-[0.2em] mb-8 border-b border-white/10 pb-4 text-slate-400">
                        {{ getMonthTitle(monthKey) }}
                    </h2>

                    <!-- Event List -->
                    <div class="space-y-4">
                        <div 
                            v-for="event in events" 
                            :key="event.id"
                            class="relative group bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 p-6 rounded-sm flex flex-col md:flex-row gap-6 md:items-start"
                        >
                            <!-- Date Box -->
                            <div class="flex-shrink-0 flex md:flex-col items-baseline gap-2 md:gap-0 min-w-[80px]">
                                <span class="text-2xl md:text-3xl font-bold tracking-tighter">{{ event.date.slice(8) }}</span>
                                <span 
                                    class="text-sm font-bold uppercase tracking-wider"
                                    :class="{
                                        'text-red-500': event.day === 'Sun',
                                        'text-blue-500': event.day === 'Sat',
                                        'text-slate-500': !['Sun', 'Sat'].includes(event.day)
                                    }"
                                >{{ event.day }}</span>
                            </div>

                            <!-- Content -->
                            <div class="flex-grow">
                                <div class="flex flex-wrap gap-3 mb-2 items-center">
                                    <span class="text-sm text-slate-400 font-mono">{{ event.time }}</span>
                                    <span 
                                        class="px-2 py-[2px] text-[10px] border rounded tracking-widest uppercase"
                                        :class="event.typeColor"
                                    >
                                        {{ event.type }}
                                    </span>
                                </div>
                                <h3 class="text-xl md:text-2xl font-bold tracking-wide mb-3 group-hover:text-cyan-200 transition-colors">
                                    {{ event.title }}
                                </h3>
                                <div class="text-slate-400 text-sm flex items-center gap-2">
                                    <span class="opacity-50">@</span>
                                    {{ event.venue }}
                                </div>
                            </div>

                            <!-- Action -->
                            <div class="flex-shrink-0 md:self-center mt-4 md:mt-0">
                                <a 
                                    v-if="event.ticketUrl" 
                                    :href="event.ticketUrl" 
                                    class="inline-block px-6 py-2 bg-white text-black text-xs font-bold tracking-widest hover:bg-cyan-400 transition-colors clip-button"
                                >
                                    TICKET
                                </a>
                                <span v-else class="text-xs text-slate-600 tracking-widest border border-slate-800 px-4 py-2 block text-center min-w-[100px]">
                                    {{ event.status }}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<style scoped>
.clip-button {
    clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
}
</style>
