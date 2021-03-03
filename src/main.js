import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import "@/components/_var.scss";
import Button from "@/components/button";
import Icon from "@/components/icon";
import ButtonGroup from "@/components/button-group";
import Input from "@/components/input";
import Row from "@/components/row";
import Col from "@/components/col";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Content from "@/components/content";
import Slider from "@/components/sider";
// import Toast from "@/components/toast";
// import Plugin from "@/components/plugin";

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Input);
Vue.component("g-row", Row);
Vue.component("g-col", Col);
Vue.component("g-layout", Layout);
Vue.component("g-header", Header);
Vue.component("g-footer", Footer);
Vue.component("g-content", Content);
Vue.component("g-slider", Slider);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
