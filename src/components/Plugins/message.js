import Message from "./message.vue";
let currentToast;
export default {
  install(Vue) {
    Vue.prototype.$message = function(message, propsData = {}) {
      if (currentToast) {
        currentToast.close();
      }
      if (typeof message === "string") {
        // 用户没有设置propsData.message 就将第一个参数的message 赋值进去
        !propsData["message"] && (propsData.message = message);
      } else {
        propsData = message;
      }
      currentToast = creatToast({
        Vue,
        message: propsData.message,
        propsData,
        onClose: () => {
          currentToast = null;
        }
      });
    };
  }
};
function creatToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Message);
  let messageComponent = new Constructor({ propsData });
  messageComponent.$slots.default = [message];
  messageComponent.$mount();
  // 理解为在父组件使用子组件 子组件向父组件通信
  messageComponent.$on("close", onClose);
  document.body.appendChild(messageComponent.$el);
  return messageComponent;
}
