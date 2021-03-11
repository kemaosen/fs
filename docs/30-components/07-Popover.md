# Popover
### 基础用法
trigger属性用于设置何时触发 Popover，支持四种触发方式：hover，click
<ClientOnly>
  <Popover-Default></Popover-Default>
</ClientOnly>
### 嵌套操作
<ClientOnly>
  <Popover-Content></Popover-Content>
</ClientOnly>

### Attributes
<ClientOnly>
  <Popover-Attributes></Popover-Attributes>
</ClientOnly>

### 组件解析
1. trigger组件的触发状态是通过 addEventListener绑定事件来触发的
```vue
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", () => {this.open();});
    } else {
      this.$refs.popover.addEventListener("mouseenter", () => {this.open();});
      this.$refs.popover.addEventListener("mouseleave", () => {this.close();});
    }
  },
  destroyed() {
    if (this.trigger === "click") {
      this.$refs.popover.removeEventListener("click", () => {this.open();});
    } else {
      this.$refs.popover.removeEventListener("mouseenter", () => {this.open();});
      this.$refs.popover.removeEventListener("mouseleave", () => {this.close();});
    }
  },
  props: {
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      }
    },
  }
```
2. Popover弹出框显示出来的位置如何定位

