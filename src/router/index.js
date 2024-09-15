import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Starships from "../views/Starships.vue";
import Search from "../views/Search.vue";
import Detail from "../views/Detail.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Main },
    { path: "/starships", component: Starships },
    { path: "/search", component: Search },
    { path: "/detail/:id", name:"detail", component: Detail },
  ],
});

export default router;
