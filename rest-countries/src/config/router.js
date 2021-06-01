import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Country from "@/views/Country.vue"

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      name: "country",
      path: "/country/:name",
      component: Country,
      props: true
    }
  ],
});

export default router;
