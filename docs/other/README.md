# YAML front matter

- prev: ./some-other-page
	> 设置 推荐上一篇文章
- next: false
  > 设置关闭下一篇文章推荐
- editLink: false
	> 禁止页面编辑
- pageClass: custom-page-class
> 给当前页面添加特定的css
```
/* .vuepress/override.styl */
.theme-container.custom-page-class {
  /* 特定页面的 CSS */
}
```
