import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import "@/components/_var.scss";
import "@/style/index.scss";

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
import Plugin from "@/components/Plugins/message.js";
Vue.use(Plugin);
import Popover from "@/components/popover";
import CollapseItem from "@/components/collapse/collapse-item";
import Collapse from "@/components/collapse/collapse";

import Tabs from "@/components/tab/tabs";
import TabsBody from "@/components/tab/tabs-body";
import TabsHead from "@/components/tab/tabs-head";
import TabsItem from "@/components/tab/tabs-item";
import TabsPane from "@/components/tab/tabs-pane";
import Cascader from "@/components/cascader/cascader";
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
Vue.component("g-popover", Popover);
Vue.component("g-collapse-item", CollapseItem);
Vue.component("g-collapse", Collapse);
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-head", TabsHead);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-pane", TabsPane);
Vue.component("g-cascader", Cascader);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
