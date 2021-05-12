import Home from "@/pages/Home";
import Soccer from '@/pages/Soccer'
import Article from "@/pages/Article";
import Tech from "@/pages/Tech";
import VueRouter from "vue-router";
const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/soccer',
        component: Soccer
    },
    {
        path: '/article',
        component: Article
    },
    {
        path: '/tech',
        component: Tech
    },
]
const router = new VueRouter({
    routes
})
export default router
