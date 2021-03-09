# Container
container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：
```
<g-container>：外层容器。当子元素中包含 <g-header> 或 <g-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列。
<g-header>：顶栏容器。
<g-main>：主要区域容器。
<g-aside>：侧边栏容器。
<g-footer>：底栏容器。
```

### 常见页面布局
<ClientOnly>
  <Container-Default></Container-Default>
</ClientOnly>

### Container Attributes
子元素的排列方向默认是`flex-direction: column`;
若含有`<g-aside>`子组件 则子元素的排列方向`flex-direction: row`
### Aside Attributes
| 参数        | 说明           | 类型  |可选值|默认值|
| ------------- |:-------------:| -----:| -----:| -----:|
|width      |设置Aside的width值|Number|||
