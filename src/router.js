import vueRouter from 'vue-router'
import User from './components/User'
import App from './App'
import Inventario from './components/Inventario'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
        path: '/',
        name: "root",
        component: App
        },
        {
            path: '/user/:username',
            name: "user",
            component: User
            },
        {
            path: '/inventario/:username',
            name: "inventario",
            component: Inventario
            },
            ]
        })
export default router