<template>
  <div class="input-text-custom" :class="{active}">
    <h3 :class="{required}">{{ alias }}</h3>

    <el-input :value="value" :readonly="readonly" v-bind="$attrs" v-on="$listeners" @focus="inputFocus" @blur="inputBlur" />
    <div class="line" />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  inheritAttrs: false,
  props: [
    'alias',
    'value',
    'required',
    'focusCallback',
    'readonly'
  ],
  data() {
    return {
      active: false
    }
  },
  methods: {
    inputFocus() {
      this.active = true
      if (this.focusCallback) {
        this.focusCallback()
      }
    },
    inputBlur() {
      this.active = false
    }
  }
}
</script>

<style lang="scss" >
.input-text-custom {
  border-bottom: solid 1px rgba(0, 0, 0, 0.15);
  position: relative;
  .el-textarea__inner{
    border: none;
    resize: none;
  }
  h3 {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    line-height: 1em;
    color: rgba(0, 0, 0, 0.45);
    &.required:after {
      content: " *";
      color: #f56c6c;
      margin-right: 4px;
    }
  }
  input {
    width: 100%;
    border: none;
    height: 32px;
    line-height: 32px;
    text-indent: 0;
    padding: 0;
    display: block;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(0, 0, 0, 0.45);
    opacity: 1; /* Firefox */
    font-size: 14px;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
  .line {
    height: 2px;
    width: 0;
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translate(-50%, 0);
    background: #4886ff;
    transition: width 0.5s;
  }
  &.active {
    h3 {
      color: #3f72d6 !important;
    }
    .line {
      width: 100%;
    }
  }
}
</style>
