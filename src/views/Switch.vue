<template lang="pug">
    div
        h2 Switch 开关
        h5 表示两种相互对立的状态间的切换，多用于触发「开/关」
        br
        p 基本用法
        XSwitch(v-model="switch1", @on-change="change")
        br
        br
        p 尺寸用法
        XSwitch(size="large")
        XSwitch()
        XSwitch(size="small")
        br
        br
        p 文字和图标
        XSwitch
            span(slot="open") 开
            span(slot="close") 关
        XSwitch
            Icon(type="ios-checkmark", slot="open")
            Icon(type="ios-close", slot="close")
        br
        br
        XSwitch(size="large")
            span(slot="open") 开
            span(slot="close") 关
        XSwitch(size="large")
            span(slot="open") ON
            span(slot="close") OFF
        br
        br
        p 不可用切换
        XSwitch(:disabled="disabled")
        XButton(type="primary", @click="disabled = !disabled") Toggle Disabled



</template>

<script>
  import { XSwitch, Icon, XButton } from '@/components'

  export default {
    components: {
      XSwitch,
      Icon,
      XButton
    },
    data () {
      return {
        switch1: false,
        disabled: true
      }
    },
    methods: {
      change (status) {
        console.log(status)
      }
    }
  }
</script>

<style lang="less" scoped>

    @css-prefix: ay-;

    .@{css-prefix}switch{
        margin-right: 5px;
    }

    .@{css-prefix}switch-checked .@{css-prefix}switch-inner{
        left: 10px;
    }
</style>