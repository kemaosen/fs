import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "index" */ "@/views/carousel.vue")
  },
  {
    path: "/collapse",
    name: "collapse",
    component: () =>
      import(/* webpackChunkName: "collapse" */ "@/views/collapse.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
