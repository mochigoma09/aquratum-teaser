import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MemberDetail from '../views/MemberDetail.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/member/:id',
        name: 'member-detail',
        component: () => import('../views/MemberDetail.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('../views/NewsView.vue')
    },
    {
        path: '/news/:id',
        name: 'news-detail',
        component: () => import('../views/NewsDetail.vue')
    },
    {
        path: '/schedule',
        component: () => import('../views/ScheduleView.vue')
    },
    {
        path: '/members',
        component: () => import('../views/MembersView.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory('/aquratum/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;
