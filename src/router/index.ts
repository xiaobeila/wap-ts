import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/index.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { isNav: true },
    component: Home
  },
  {
    path: "/category",
    name: "category",
    meta: { isNav: true },
    component: () => import("@/views/Category/index.vue")
  },
  {
    path: "/cart",
    name: "cart",
    meta: { isNav: true },
    component: () => import("@/views/Cart/index.vue")
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("@/views/Detail/index.vue")
  },
  {
    path: "/me",
    name: "me",
    meta: { isNav: true },
    component: () => import("@/views/Me/index.vue")
  }
];

const router = new Router({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.addRoutes([
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/User/Login.vue")
  }
]);

export default router;
