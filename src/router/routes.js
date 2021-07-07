import Swipe from '../pages/Swipe.vue';
import Summary from '../pages/Summary.vue';
import Login from '../pages/Login.vue';

const routes = [
    { path: '/', component: Swipe, name: 'swipe' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/summary', component: Summary, name: 'summary' },
];

export default routes;