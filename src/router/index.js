import { createRouter, createWebHistory } from "vue-router";
import IntroView from "../views/IntroView.vue";
import FaqView from "../views/FaqView.vue";
import TrainingView from "../views/TrainingView.vue";
import ApplyAndForm from "../views/ApplyAndForm.vue"; 
import NewsView from "../views/NewsView.vue";
import NewsDetailView from "../views/NewsDetailView.vue";
import MeetingDetail from "../views/MeetingDetailView.vue";
import LoginView from "../views/LoginView.vue";
import ArticleView from "../views/ArticleView.vue";
import DocumentReadOnly from "../views/DocumentReadOnly.vue";
import FeedBackView from "../views/FeedBackView.vue";
import SettingView from "../views/SettingView.vue";

const routes = [
  { path: "/", name: "login", component: LoginView },
  { path: "/news", name: "news", component: NewsView },
  { path: "/news/:id", name: "news-detail", component: NewsDetailView, props: true },
  { path: "/meeting/:id", name: "meeting-detail", component: MeetingDetail, props: true },
  { path: "/faq", name: "faq", component: FaqView },
  { path: "/training", name: "training", component: TrainingView },
  { path: "/article/:id", name: "article", component: ArticleView, props: true },
  { path: "/forms", name: "ApplyAndFormView", component: ApplyAndForm }, 
  { path: "/document/:id", name: "DocumentReadOnly", component: DocumentReadOnly, props: true },
  { path: "/intro", name: "intro", component: IntroView },
  { path: "/feedback", name: "feedback", component: FeedBackView },  
  { path: "/setting", name: "setting", component: SettingView },  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
