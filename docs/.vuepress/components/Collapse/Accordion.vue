<!-- 页面 -->
<template>
  <div class="container">
    <g-collapse :selected="[]" accordion>
      <g-collapse-item name="1" title="一致性 Consistency">
        <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
        <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
      </g-collapse-item>
      <g-collapse-item name="2" title="反馈 Feedback">
        <p>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</p>
        <p>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</p>
      </g-collapse-item>
      <g-collapse-item name="3" title="效率 Efficiency">
        <p>简化流程：设计简洁直观的操作流程；</p>
        <p>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</p>
        <p>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</p>
      </g-collapse-item>
      <g-collapse-item name="4" title="可控 Controllability">
        <p>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</p>
        <p>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</p>
      </g-collapse-item>
    </g-collapse>
    <pre>
      <code>
      {{ html }}
      </code>
    </pre>
  </div>
</template>
<script>
import CollapseItem from "~/src/components/collapse/collapse-item";
import Collapse from "~/src/components/collapse/collapse";
export default {

  name: 'Default',
  components: { 'g-collapse': Collapse,'g-collapse-item':CollapseItem },
  mounted() {

  },
  data() {
    return {
      html: `
    <g-collapse :selected="[]" accordion>
      <g-collapse-item name="1" title="一致性 Consistency">
        <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
        <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
      </g-collapse-item>
      <g-collapse-item name="2" title="反馈 Feedback">
        <p>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</p>
        <p>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</p>
      </g-collapse-item>
      <g-collapse-item name="3" title="效率 Efficiency">
        <p>简化流程：设计简洁直观的操作流程；</p>
        <p>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</p>
        <p>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</p>
      </g-collapse-item>
      <g-collapse-item name="4" title="可控 Controllability">
        <p>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</p>
        <p>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</p>
      </g-collapse-item>
    </g-collapse>
      `
    }
  },
  methods: {}
}
</script>
<style lang='scss' scoped></style>
