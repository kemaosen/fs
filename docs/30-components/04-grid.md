# Grid
通过基础的 24 分栏，迅速简便地创建布局。

### 基础布局
使用单一分栏创建基础的栅格布局。
通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。
<ClientOnly>
  <Grid-Default></Grid-Default>
</ClientOnly>

### 分栏间隔
分栏之间存在间隔。
<ClientOnly>
  <Grid-Gutter></Grid-Gutter>
</ClientOnly>

### 混合布局
通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
<ClientOnly>
  <Grid-Hybrid></Grid-Hybrid>
</ClientOnly>

### 分栏偏移
支持偏移指定的栏数。
<ClientOnly>
  <Grid-Offset></Grid-Offset>
</ClientOnly>

### 响应式布局
预设了五个响应尺寸：xs、sm、md、lg 和 xl。

xs	<768px  响应式栅格数或者栅格属性对象	object (例如： {span: 4, offset: 4})  
sm	≥768px  响应式栅格数或者栅格属性对象	object (例如： {span: 4, offset: 4})  
md	≥992px  响应式栅格数或者栅格属性对象	object (例如： {span: 4, offset: 4})  
lg	≥1200px 响应式栅格数或者栅格属性对象	object (例如： {span: 4, offset: 4})  
xl	≥1920px 响应式栅格数或者栅格属性对象	object (例如： {span: 4, offset: 4})  
<ClientOnly>
  <Grid-Responsive></Grid-Responsive>
</ClientOnly>
