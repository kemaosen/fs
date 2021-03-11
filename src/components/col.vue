<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true; // 默认合法
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "DistanceCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    xs: { type: Object, validator },
    sm: { type: Object, validator },
    md: { type: Object, validator },
    lg: { type: Object, validator },
    xl: { type: Object, validator }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colClasses() {
      let { span, offset, xs, sm, md, lg, xl } = this;
      // 版本一
      // let phoneClass = [];
      // let ipadClass = [];
      // let narrowPcClass = [];
      // let pcClass = [];
      // let widePcClass = [];
      // if(phone){
      //    phoneClass =  [phone.span && `col-phone-${phone.span}`,phone.offset && `offset-phone-${phone.offset}`]
      // }
      // if(ipad){
      //     ipadClass = [ipad.span && `col-ipad-${ipad.span}`,ipad.offset && `offset-ipad-${ipad.offset}`];
      // }
      // if(narrowPc){
      //     narrowPcClass = [narrowPc.span && `col-narrow-pc-${narrowPc.span}`,narrowPc.offset &&`offset-narrow-pc-${narrowPc.offset}`]
      // }
      // if(pc){
      //     pcClass = [pc.span && `col-pc-${pc.span}`,pc.offset && `offset-pc-${pc.offset}`];
      // }
      // if(widePc){
      //     widePcClass = [ widePc.span && `col-wide-pc-${widePc.span}`,widePc.offset && `offset-wide-pc-${widePc.offset}`];
      // }
      // 版本二：
      // 版本三：使用函数返回
      let creatClasses = (obj, str) => {
        if (!obj) return [];
        let array = [];
        if (obj.span) {
          array.push(`col-${str}${obj.span}`);
        }
        if (obj.offset || obj.offset === 0) {
          array.push(`offset-${str}${obj.offset}`);
        }
        return array;
      };
      // <!-- 有就显示  -->
      return [
        span && `col-${span}`,
        offset && `offset-${offset || 0}`,
        // 版本一
        // phoneClass,
        // ipadClass,
        // narrowPcClass,
        // pcClass,
        // widePcClass,
        // 版本二
        // ...(phone ? [`col-phone-${phone.span}`,`offset-phone-${phone.offset}`] : []),
        // ... (ipad ? [`col-ipad-${ipad.span}`,`offset-ipad-${ipad.offset}`] : []),
        // ... (narrowPc ? [`col-narrow-pc-${narrowPc.span}`,`offset-narrow-pc-${narrowPc.offset}`] : []),
        // ... (pc ? [`col-pc-${pc.span}`,`offset-pc-${pc.offset}`] : []),
        // ... (widePc ? [`col-wide-pc-${widePc.span}`,`offset-wide-pc-${widePc.offset}`] : []),
        // 版本三: 使用函数返回
        ...creatClasses(xs, "xs-"),
        ...creatClasses(sm, "sm-"),
        ...creatClasses(md, "md-"),
        ...creatClasses(lg, "lg-"),
        ...creatClasses(xl, "xl-")
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    }
  }
};
</script>

<style scoped lang="scss">
.col {
  box-sizing: border-box;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }

  // xs
  @media (min-width: 556px) {
    $class-prefix: col-xs-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-xs-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  // xs
  @media (min-width: 768px) {
    $class-prefix: col-sm-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-sm-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  // md
  @media (min-width: 992px) {
    $class-prefix: col-md-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-md-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    &.offset-md-0 {
      margin-left: 0;
    }
  }
  // lg
  @media (min-width: 1200px) {
    $class-prefix: col-lg-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-lg-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  // xl
  @media (min-width: 1920px) {
    $class-prefix: col-xl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-xl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
