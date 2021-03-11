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
1. trigger组件的触发状态是通过 addEventListener绑定事件来触发的
```vue
```
2. Popover弹出框显示出来的位置如何定位
```vue
```
