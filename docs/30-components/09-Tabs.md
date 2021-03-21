# Tabs
### 基础用法
基础的、简洁的标签页。  
通过设置disabled来禁用选项卡
<ClientOnly>
  <Tabs-Default></Tabs-Default>
</ClientOnly>

### 自定义标题
<ClientOnly>
  <Tabs-Title></Tabs-Title>
</ClientOnly>

### TabsAttributes
| 参数        | 说明           | 类型|可选值|默认值|
| ------------- |:-------------:| -----:| -----:| -----:|
|value/v-model      |绑定值，选中选项卡的 name|String|||
### TabsEvent
| 事件名称        | 说明           | 回调参数|
| ------------- |:-------------:| -----:|
|change      |选项卡发生改变|被选中的标签 tab 实例|
### TabsItemAttributes
| 参数        | 说明           | 类型|可选值|默认值|
| ------------- |:-------------:| -----:| -----:| -----:|
|name|绑定值|String|必填||
|disabled|是否禁用|Boolean|true/false|false|
### TabsPaneAttributes
| 参数        | 说明           | 类型|可选值|默认值|
| ------------- |:-------------:| -----:| -----:| -----:|
|name|绑定值|String|必填||
### 组件解析
深入的使用provide/inject的知识 
