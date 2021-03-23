const expect = chai.expect;
import Vue from "vue";
import Tabs from "@/components/tab/tabs";
import TabsBody from "@/components/tab/tabs-body";
import TabsHead from "@/components/tab/tabs-head";
import TabsItem from "@/components/tab/tabs-item";
import TabsPane from "@/components/tab/tabs-pane";
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-head", TabsHead);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-pane", TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("TabsItem", () => {
  it("存在.", () => {
    expect(TabsItem).to.be.ok;
  });

  it("接收 name props", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        name: "xxx"
      }
    }).$mount();
    expect(vm.$el.getAttribute("data-name")).to.eq("xxx");
  });
  it("接收 disabled props", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount();
    // expect(vm.$el.classList.contains('disabled')).to.eq(true)
    const callback = sinon.fake();
    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.not.been.called;
  });
});
