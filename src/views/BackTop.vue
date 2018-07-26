<template lang="pug">
    div
        h2 BackTop 返回顶部
        h5 当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置
        br
        p 基础用法
        BackTop
        br
        br
        br
        br
        br
        br
        p 自定义样式
        BackTop(:height="100", :bottom="200")
            .top 返回顶端
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
  import { BackTop } from '@/components'

  export default {
    components: {
      BackTop,
    },
  }
</script>

<style lang="less" scoped>

    .top {
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }

</style>