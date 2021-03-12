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
```js
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
```js
    // 显示弹出内容 并定位到当前点击位置
    positionContent() {
      // 获取内容区域El, 获取触发区域El
      const { contentWrapper, triggerWrapper } = this.$refs;
      // 将内容区域挂在到body上
      document.body.appendChild(contentWrapper);
      // 获取触发元素距离左上原点的 left top 的值
      let { width, height, left, top } = triggerWrapper.getBoundingClientRect();

      let { height: height2 } = contentWrapper.getBoundingClientRect();
      // 计算出每一种this.position 的 contentWrapper的位置
      // window.scrollY 页面沿Y轴滚动的距离
      // window.scrollX 页面沿X轴滚动的距离
      let positionType = {
        top: { top: top + window.scrollY, left: left + window.scrollX },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          left: left + window.scrollX,
          top: top + window.scrollY + (height - height2) / 2
        },
        right: {
          left: left + window.scrollX + width,
          top: top + window.scrollY + (height - height2) / 2
        }
      };
      contentWrapper.style.top = positionType[this.position].top + "px";
      contentWrapper.style.left = positionType[this.position].left + "px";
      document.addEventListener("click", this.onClickDocument);
    },
```
