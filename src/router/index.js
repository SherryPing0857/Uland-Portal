import { createRouter, createWebHistory } from "vue-router";
import IntroView from "../views/IntroView.vue";
import FaqView from "../views/FaqView.vue";
import TrainingView from "../views/TrainingView.vue";
import FormsView from "../views/FormsView.vue";
import NewsView from "../views/NewsView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
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
