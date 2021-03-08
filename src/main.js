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

import Container from "@/components/container/container";
import Header from "@/components/container/header";
import Footer from "@/components/container/footer";
import Main from "@/components/container/main";
import Aside from "@/components/container/aside";
// import Toast from "@/components/toast";
// import Plugin from "@/components/plugin";

Vue.component("g-icon", Icon);
Vue.component("g-button", Button);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Input);
Vue.component("g-row", Row);
Vue.component("g-col", Col);
Vue.component("g-Container", Container);
Vue.component("g-header", Header);
Vue.component("g-footer", Footer);
Vue.component("g-main", Main);
Vue.component("g-aside", Aside);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
