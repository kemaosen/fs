# Button

### 基础用法 
基础按钮的用法
<ClientOnly>
  <Button-Default></Button-Default>
</ClientOnly>

### Icon
添加Icon图标
<ClientOnly>
  <Button-Icon></Button-Icon>
</ClientOnly>

### 按钮大小
设置按钮大小
<ClientOnly>
  <Button-Size></Button-Size>
</ClientOnly>


### 按钮组
以按钮组的方式出现，常用于多项类似操作。
<ClientOnly>
  <Button-Group></Button-Group>
</ClientOnly>

### Attributes
<ClientOnly>
  <Button-Attributes></Button-Attributes>
</ClientOnly>

### 组件解析
1. iconPosition
iconPosition属性通过设置left | right来设置icon在左侧还是右侧.这是是通过flex-order来设置的.
2. 组件难点
button组件在于不同状态下样式会有些冲突.写的时候要注意 组织好每种状态的样式
