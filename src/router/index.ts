import { createRouter, createWebHistory } from 'vue-router';
import Devices from '@/views/Devices.vue';
import DeviceDetail from '@/views/DeviceDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'devices', component: Devices },
    { path: '/device/:id', name: 'device-detail', component: DeviceDetail },
  ],
});

export default router;
