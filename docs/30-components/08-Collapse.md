# Collapse
### 基础用法
可同时展开多个面板，面板之间不影响
<ClientOnly>
  <Collapse-Default></Collapse-Default>
</ClientOnly>

### 手风琴效果
设置accordion即可
<ClientOnly>
  <Collapse-Accordion></Collapse-Accordion>
</ClientOnly>

### 自定义标题
<ClientOnly>
  <Collapse-Title></Collapse-Title>
</ClientOnly>

### Attributes
| 参数        | 说明           | 类型  |可选值|默认值|
| ------------- |:-------------:| -----:| -----:| -----:|
|selected      |当前激活的面板|Array|||
|accordion      |是否手风琴模式|Boolean||false|
### 组件解析
Collapse组件是如何做到手风琴效果的  
[关于provide/inject的知识](https://www.yuque.com/docs/share/53a75c55-2f73-46d4-a569-00332a0f2ee0)  
[关于事件总线eventBus](https://www.yuque.com/docs/share/43cabce5-56f0-4bf5-bc21-31c072a0fde9)
```vue
通过依赖注入将事件注入到子组件并在父组件设置监听.
<script >
import Vue from "vue";
export default {
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    // 页面加载通知子组件 显示那个
    this.eventBus.$emit("update:selected", this.selected);
    // 在父组件使用变量控制的时候 需要实时对接数据  父组件与当前组件(本页面) 值同步
    // 深拷贝
    let selectCopy = JSON.parse(JSON.stringify(this.selected));
    // 开启一个
    this.eventBus.$on("update:addSelected", name => {
      // accordion 判断是否保留之前已经开启过的折叠面板
      if (this.accordion) {
        selectCopy = [name];
      } else {
        selectCopy.push(name);
      }
      this.eventBus.$emit("update:selected", selectCopy);
      this.$emit("update:selected", selectCopy);
    });
    // 关闭一个
    this.eventBus.$on("update:removeSelected", name => {
      let index = selectCopy.indexOf(name);
      selectCopy.splice(index, 1);
      this.eventBus.$emit("update:selected", selectCopy);
      this.$emit("update:selected", selectCopy);
    });
  },
  data() {
    return {
      eventBus: new Vue()
    };
  }
}
</script>

子组件
<script >
export default{
  inject: ["eventBus"],
  methods:{
    //  触发事件 来决定是开启还是关闭
    toggle() {
      if (this.open) {
        this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus.$emit("update:addSelected", this.name);
      }
    }
  },
  // 设置页面已加载就要展开哪些折叠面板 的方法
  mounted() {
    this.eventBus.$on("update:selected", names => {
      if (names.indexOf(this.name) >= 0) {
        // 当前组件的this 与传进来的this 不相等  关闭当前组件的手风琴
        this.open = true;
      } else {
        this.open = false;
      }
    });
  },
}
</script>
```
