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
### Row-Attributes
<ClientOnly>
  <Grid-RowAttributes></Grid-RowAttributes>
</ClientOnly>

### Col-Attributes
<ClientOnly>
  <Grid-ColAttributes></Grid-ColAttributes>
</ClientOnly>

### 组件解析
Grid组件需要注意的地方就是  
在`<g-row ></g-row>`组件设置gutter，如何给每个子元素`<g-col></g-col>`都添加一个值为gutter的间距  
最后的方案是通过设置在父元素`<g-row />`中通过mounted传递给子元素
```
// row
mounted() {
  this.$children.forEach(vm => {
    vm.gutter = this.gutter;
  });
},
// 因为给每个子元素设置padding  那么最左右的那个元素都会空出gutter/2的空白。
// 为了去除空白 可以在<g-row>上添加左右的margin(gutter/2) 来平衡
computed: {
  rowStyle() {
    let { gutter } = this;
    return {
      marginLeft: -gutter / 2 + "px",
      marginRight: -gutter / 2 + "px"
    };
  }
}
```
如此在子元素中col中设置,并添加左右的一个padding    
```
// col
data() {
  return {
    gutter: 0
  }
},
computed: {
  colStyle() {
    return {
      paddingLeft: this.gutter / 2 + 'px',
      paddingRight: this.gutter / 2 + 'px'
    }
  }
}
```
