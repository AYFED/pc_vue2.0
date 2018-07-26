<template lang="pug">
    div
        h2 Affix 图钉
        h5 使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等
        br
        p 基础用法
        Affix
            span(class="demo-affix") 固定在最顶部
        br
        br
        p 偏移
        Affix(:offset-top="50")
            span(class="demo-affix") 固定在最顶部50px的位置
        br
        br
        p 固定在底部
        Affix(:offset-bottom="20")
            span(class="demo-affix") 固定在最底部20px的位置
        br
        br
        p 固定状态改变时的回调
        Affix(:offset-top="100", @on-change="change")
            span(class="demo-affix") 固定在最顶部100px的位置
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
</template>

<script>
  import { Affix } from '@/components'

  export default {
    components: {
      Affix,
    },
    methods: {
      change (status) {
        this.$Message.info(`Status: ${status}`);
      }
    }
  }
</script>

<style lang="less" scoped>

    .demo-affix{
        display: inline-block;
        color: #fff;
        padding: 10px 30px;
        text-align: center;
        background: rgba(0,153,229,.9);
    }

</style>