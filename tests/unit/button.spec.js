import chai, { expect } from "chai";
import Button from "@/components/button";
// eslint-disable-next-line no-unused-vars
import sinon from "sinon";
import sinonchai from "sinon-chai";
chai.use(sinonchai);

import { mount } from "@vue/test-utils";

describe("button", () => {
  it("存在.", () => {
    // const wrapper = shallowMount(Button, {
    //   propsData: { icon: "settings" }
    // });
    // expect(wrapper.text()).to.include(msg);
    expect(Button).to.be.ok;
  });
  it("可以设置icon.", () => {
    // const Constructor = Vue.extend(Button);
    // const vm = new Constructor({
    //   propsData: {
    //     icon: "settings"
    //   }
    // }).$mount();
    let wepper = mount(Button, {
      propsData: {
        icon: "settings"
      }
    });
    const useElement = wepper.find("use");
    expect(useElement.attributes("href")).to.equal("#i-settings");
    wepper.destroy();
  });
  it("可以设置loading.", () => {
    let { vm } = mount(Button, {
      propsData: {
        icon: "settings",
        loading: true
      }
    });
    const useElements = vm.$el.querySelectorAll("use");
    expect(useElements.length).to.equal(1);
    expect(useElements[0].getAttribute("xlink:href")).to.equal("#i-loading");
    vm.$destroy();
  });
  // it("icon 默认的 order 是 1", () => {
  //   const div = document.createElement("div");
  //   document.body.appendChild(div);
  //   const Constructor = Vue.extend(Button);
  //   const vm = new Constructor({
  //     propsData: {
  //       icon: "settings"
  //     }
  //   }).$mount(div);
  //   const icon = vm.$el.querySelector("svg");
  //   expect(getComputedStyle(icon).order).to.eq("1");
  //   vm.$el.remove();
  //   vm.$destroy();
  // });
  // it("设置 iconPosition 可以改变 order", () => {
  //   const div = document.createElement("div");
  //   document.body.appendChild(div);
  //   const Constructor = Vue.extend(Button);
  //   const vm = new Constructor({
  //     propsData: {
  //       icon: "settings",
  //       iconPosition: "right"
  //     }
  //   }).$mount(div);
  //   const icon = vm.$el.querySelector("svg");
  //   expect(getComputedStyle(icon).order).to.eq("2");
  //   vm.$el.remove();
  //   vm.$destroy();
  // });
  it("点击 button 触发 click 事件", () => {
    let wepper = mount(Button);
    let vm = wepper.vm;
    const callback = sinon.fake();
    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.been.called;
  });
});
