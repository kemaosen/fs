(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{449:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"grid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grid"}},[t._v("#")]),t._v(" Grid")]),t._v(" "),a("p",[t._v("通过基础的 24 分栏，迅速简便地创建布局。")]),t._v(" "),a("h3",{attrs:{id:"基础布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础布局"}},[t._v("#")]),t._v(" 基础布局")]),t._v(" "),a("p",[t._v("使用单一分栏创建基础的栅格布局。\n通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。\n"),a("ClientOnly",[a("Grid-Default")],1)],1),t._v(" "),a("h3",{attrs:{id:"分栏间隔"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分栏间隔"}},[t._v("#")]),t._v(" 分栏间隔")]),t._v(" "),a("p",[t._v("分栏之间存在间隔。\n"),a("ClientOnly",[a("Grid-Gutter")],1)],1),t._v(" "),a("h3",{attrs:{id:"混合布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混合布局"}},[t._v("#")]),t._v(" 混合布局")]),t._v(" "),a("p",[t._v("通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。\n"),a("ClientOnly",[a("Grid-Hybrid")],1)],1),t._v(" "),a("h3",{attrs:{id:"分栏偏移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分栏偏移"}},[t._v("#")]),t._v(" 分栏偏移")]),t._v(" "),a("p",[t._v("支持偏移指定的栏数。\n"),a("ClientOnly",[a("Grid-Offset")],1)],1),t._v(" "),a("h3",{attrs:{id:"响应式布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式布局"}},[t._v("#")]),t._v(" 响应式布局")]),t._v(" "),a("p",[t._v("预设了五个响应尺寸：xs、sm、md、lg 和 xl。")]),t._v(" "),a("p",[t._v("xs\t<768px  响应式栅格数或者栅格属性对象\tobject (例如： {span: 4, offset: 4})"),a("br"),t._v("\nsm\t≥768px  响应式栅格数或者栅格属性对象\tobject (例如： {span: 4, offset: 4})"),a("br"),t._v("\nmd\t≥992px  响应式栅格数或者栅格属性对象\tobject (例如： {span: 4, offset: 4})"),a("br"),t._v("\nlg\t≥1200px 响应式栅格数或者栅格属性对象\tobject (例如： {span: 4, offset: 4})"),a("br"),t._v("\nxl\t≥1920px 响应式栅格数或者栅格属性对象\tobject (例如： {span: 4, offset: 4})"),a("br"),t._v(" "),a("ClientOnly",[a("Grid-Responsive")],1)],1),t._v(" "),a("h3",{attrs:{id:"row-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-attributes"}},[t._v("#")]),t._v(" Row-Attributes")]),t._v(" "),a("ClientOnly",[a("Grid-RowAttributes")],1),t._v(" "),a("h3",{attrs:{id:"col-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#col-attributes"}},[t._v("#")]),t._v(" Col-Attributes")]),t._v(" "),a("ClientOnly",[a("Grid-ColAttributes")],1),t._v(" "),a("h3",{attrs:{id:"组件解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件解析"}},[t._v("#")]),t._v(" 组件解析")]),t._v(" "),a("p",[t._v("Grid组件需要注意的地方就是"),a("br"),t._v("\n在"),a("code",[t._v("<g-row ></g-row>")]),t._v("组件设置gutter，如何给每个子元素"),a("code",[t._v("<g-col></g-col>")]),t._v("都添加一个值为gutter的间距"),a("br"),t._v("\n最后的方案是通过设置在父元素"),a("code",[t._v("<g-row />")]),t._v("中通过mounted传递给子元素")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// row\nmounted() {\n  this.$children.forEach(vm => {\n    vm.gutter = this.gutter;\n  });\n},\n// 因为给每个子元素设置padding  那么最左右的那个元素都会空出gutter/2的空白。\n// 为了去除空白 可以在<g-row>上添加左右的margin(gutter/2) 来平衡\ncomputed: {\n  rowStyle() {\n    let { gutter } = this;\n    return {\n      marginLeft: -gutter / 2 + "px",\n      marginRight: -gutter / 2 + "px"\n    };\n  }\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("如此在子元素中col中设置,并添加左右的一个padding")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// col\ndata() {\n  return {\n    gutter: 0\n  }\n},\ncomputed: {\n  colStyle() {\n    return {\n      paddingLeft: this.gutter / 2 + 'px',\n      paddingRight: this.gutter / 2 + 'px'\n    }\n  }\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);