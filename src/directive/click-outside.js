export default {
  bind: function(el, binding) {
    document.addEventListener("click", e => {
      console.log(111);
      let { target } = e;
      if (el === target || el.contains(target)) return;
      binding.value();
    });
  }
};
