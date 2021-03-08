<!-- 页面 -->
<template>
  <div class="warpper" :class="{ error }">
    <input
      type="text"
      :value="value"
      v-bind="$attrs"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMassage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";

export default {
  inheritAttrs: false,
  name: "fs-input",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
@import "_var.scss";

.warpper {
  display: inline-flex;
  align-items: center;
  font-size: $font-size;

  > :not(:last-child) {
    margin-right: 0.5em;
  }

  > input {
    height: $input-height;
    border: 1px solid $border-color;
    padding: 0 8px;
    border-radius: $border-radius;

    &:hover {
      border: 1px solid $border-color-hover;
    }

    &:focus {
      border: 1px solid #409eff;
      outline: none;
    }
    &::placeholder{
      color: $input-placeholder-color;
    }
    &[disabled],
    &[readonly] {
      border-color: $border-color;
      color: #aaa;
      cursor: not-allowed;
    }
  }

  &.error {
    > input {
      border: 1px solid $red;
      &:focus {
        outline: none;
      }
    }
  }

  .icon-error {
    fill: $red;
  }

  .errorMassage {
    color: $red;
  }
}
</style>
