import "./assets/main.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "element-plus/dist/index.css";
import router from "./router";
// import ElementPlus from 'element-plus' para hacer la importancion completa de element plus

const app = createApp(App);
const pinia = createPinia();

// app.use(ElementPlus) para hacer la importancion completa de element plus
app.use(pinia);
app.use(router);

app.mount("#app");
