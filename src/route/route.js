import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Page2 from "../views/Page2.vue";
import VElse from "../views/V-Else.vue";
import Key from "../views/Key.vue";
import VFor from "../views/V-For.vue";
import Computed from '../views/Computed.vue';
import Slot from '../views/Slot.vue'




const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page2",
    name: "Page2",
    component: Page2,
  },
  {
    path: "/v-else",
    name: "v-else",
    component: VElse,
  },
  {
    path: "/key",
    name: "key",
    component: Key,
  },
  {
    path: "/v-for",
    name: "v-for",
    component: VFor,
  },
  {
    path: "/computed",
      name: "computed",
      component: Computed,
    },
  {
      path: "/slot",
        name: "slot",
        component: Slot,
  },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
