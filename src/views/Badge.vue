<template lang="pug">
    div
        h2 Badge 标记
        h5 出现在按钮、图标旁的数字或状态标记
        br
        p 基础用法
        Badge(:count="3")
            a.demo-badge(href="http://www.aoyou.com")
        br
        br
        p 小红点
        Badge(dot)
            a.demo-badge(href="http://www.aoyou.com")
        span(style="margin-right:40px;")
        Badge(dot)
            Icon(type="ios-book-outline", size="42")
        span(style="margin-right:40px;")
        Badge(dot)
            a(href="#") 一个链接
        br
        br
        p 封顶数字
        Badge(:count="100")
            a.demo-badge(href="http://www.aoyou.com")
        span(style="margin-right:40px;")
        Badge(count="1000", overflow-count="555")
            a.demo-badge(href="http://www.aoyou.com")
        br
        br
        p 独立使用及自定义样式
        Badge(:count="10")
        span(style="margin-right:20px;")
        Badge(:count="10", class-name="demo-badge-alone")


</template>

<script>
  import { Badge, XButton, Icon } from '@/components'

  export default {
    components: {
      Badge,
      XButton,
      Icon
    },
  }
</script>

<style lang="less">

    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }

    .demo-badge-alone{
        background: #5cb85c !important;
    }


</style>