import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Page2 from "../views/Page2.vue";
import VElse from "../views/V-Else.vue";
import VModel from '../views/V-Model& V-Bind.vue'
import Key from "../views/Key.vue";
import VFor from "../views/V-For.vue";
import Computed from '../views/Computed.vue';
import Slot from '../views/Slot.vue'
import LifeCicleComponents from '../views/LifieCylcleComponents.vue';
import ComponentiDinamici from '../views/ComponentiDinamici.vue';
import Form from '../views/Form.vue'



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
    path: "/v-model&v-bind",
    name: "v-model&v-bind",
    component: VModel,
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
  {
    path: "/lifecycle-components",
      name: "lifecycle-components",
      component: LifeCicleComponents,
  },
  {
    path: "/componenti-dinamici",
      name: "componenti-dinamici",
      component: ComponentiDinamici,
  },
  {
    path: "/form",
      name: "Form",
      component: Form,
  },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
