import Comment from '@/pages/Comment.vue';
import Login from '@/User/Login.vue';
import Registration from '@/User/Registration.vue';

const routes = [


    {
        path: '/',
        component: Comment,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/comment',
        component: Comment,
    },
    {
        path: '/registration',
        component: Registration,
    },
];

export default routes;
