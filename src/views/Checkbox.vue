<template lang="pug">
    div
        h2 Checkbox 多选框
        h5 一组备选项中进行多选
        br
        p 单独使用
        Checkbox(v-model="single") Checkbox
        p {{single}}
        br
        br
        p 组合使用
        CheckboxGroup(v-model="social")
            Checkbox(label="twitter")
                Icon(type="logo-twitter")
                span Twitter
            Checkbox(label="facebook")
                Icon(type="logo-facebook")
                span Facebook
            Checkbox(label="github")
                Icon(type="logo-github")
                span Github
            Checkbox(label="snapchat")
                Icon(type="logo-snapchat")
                span Snapchat
        p {{social}}
        CheckboxGroup(v-model="fruit")
            Checkbox(label="香蕉")
            Checkbox(label="苹果")
            Checkbox(label="西瓜")
        p {{fruit}}
        br
        br
        p 不可用状态
        Checkbox(v-model="disabledSingle", disabled) Checkbox
        br
        CheckboxGroup(v-model="disabledGroup")
            Checkbox(label="香蕉", disabled)
            Checkbox(label="苹果", disabled)
            Checkbox(label="西瓜")
        br
        br
        p 与其它组件通信
        Checkbox(v-model="checked", :disabled="disabled")
            span(v-if="checked") Checked
            span(v-else) Unchecked
            | -
            span(v-if="disabled") Usable
            span(v-else) Disabled
        XButton(type="primary", @click="checked = !checked")
            span(v-if="checked") Checked
            span(v-else) Unchecked
        XButton(type="primary", @click="disabled = !disabled")
            span(v-if="disabled") Usable
            span(v-else) Disabled
        br
        br
        p 全选交互
        div(style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;")
            Checkbox(:indeterminate="indeterminate", :value="checkAll", @click.prevent.native="handleCheckAll") 全选
        CheckboxGroup(v-model="checkAllGroup", @on-change="checkAllGroupChange")
            Checkbox(label="香蕉")
            Checkbox(label="苹果")
            Checkbox(label="西瓜")
</template>

<script>
  import { Checkbox, CheckboxGroup, Icon, XButton } from '@/components'

  export default {
    components: {
      Checkbox,
      CheckboxGroup,
      Icon,
      XButton,
    },
    data () {
      return {
        single: false,
        social: ['facebook', 'github'],
        fruit: ['苹果'],
        disabledSingle: true,
        disabledGroup: ['苹果'],
        checked: true,
        disabled: false,
        indeterminate: true,
        checkAll: false,
        checkAllGroup: ['香蕉', '西瓜'],
      }
    },
    methods: {
      handleCheckAll () {
        if (this.indeterminate) {
          this.checkAll = false;
        } else {
          this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;

        if (this.checkAll) {
          this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
        } else {
          this.checkAllGroup = [];
        }
      },
      checkAllGroupChange (data) {
        if (data.length === 3) {
          this.indeterminate = false;
          this.checkAll = true;
        } else if (data.length > 0) {
          this.indeterminate = true;
          this.checkAll = false;
        } else {
          this.indeterminate = false;
          this.checkAll = false;
        }
      }
    }
  }
</script>

<style lang="less">
    @css-prefix: ay-;

    .@{css-prefix}checkbox-inner {
        margin-right: 5px;
    }

    .@{css-prefix}icon {
        margin-right: 2px;
    }

    .@{css-prefix}btn {
        margin-right: 5px;
    }
</style>