import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/ClientesView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "inicio",
            component: Inicio,
            props:{ titulo:'Listado De Clientes' }
        },
        {
            path: "/agregar-cliente",
            name: "agregar-cliente",
            component: () => import("../views/NuevoClienteView.vue"),
            props:{ titulo:'Agregar Cliente' }
        },
    ],
});

export default router;
