import { createRouter, createWebHashHistory } from "vue-router";
import IntroView from "../views/IntroView.vue";
import FaqView from "../views/FaqView.vue";
import TrainingView from "../views/TrainingView.vue";
import FormsView from "../views/FormsView.vue";
import News from "../views/NewsView.vue";
import LoginView from "../views/LoginView.vue"

const router = createRouter({
  // 這裡改用 hash 模式
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/news",
      name: "news",
      component: News,
    },
    {
      path: "/faq",
      name: "faq",
      component: FaqView,
    },
    {
      path: "/training",
      name: "training",
      component: TrainingView,
    },
    {
      path: "/forms",
      name: "forms",
      component: FormsView,
    },
    {
      path: "/intro",
      name: "intro",
      component: IntroView,
    },
  ],
});

export default router;
