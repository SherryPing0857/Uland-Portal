import { createRouter, createWebHistory } from "vue-router";
import IntroView from "../views/IntroView.vue";
import FaqView from "../views/FaqView.vue";
import TrainingView from "../views/TrainingView.vue";
import FormsView from "../views/FormsView.vue"; 
import NewsView from "../views/NewsView.vue";
import NewsDetailView from "../views/NewsDetailView.vue";
import MeetingDetail from "../views/MeetingDetailView.vue";
import LoginView from "../views/LoginView.vue";
import ArticleView from "../views/ArticleView.vue";
import FormReadOnly from "../views/FormReadOnly.vue";

const routes = [
  { path: "/", name: "login", component: LoginView },
  { path: "/news", name: "news", component: NewsView },
  { path: "/news/:id", name: "news-detail", component: NewsDetailView },
  { path: "/meeting/:id", name: "meeting-detail", component: MeetingDetail },
  { path: "/faq", name: "faq", component: FaqView },
  { path: "/training", name: "training", component: TrainingView },
  { path: "/article/:id", name: "article", component: ArticleView },
  { path: "/forms", name: "FormssView", component: FormsView }, 
  { path: "/form/:id", name: "FormReadOnly", component: FormReadOnly, props: true },
  { path: "/intro", name: "intro", component: IntroView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
