<template lang="pug">
    div
        h2 LoadingBar 加载进度条
        h5 全局创建一个显示页面加载、异步请求、文件上传等的加载进度条
        br
        p 基础用法
        XButton(@click="start") 开始
        span(style="margin-right: 10px;")
        XButton(@click="finish") 完成
        span(style="margin-right: 10px;")
        XButton(@click="error") 错误
</template>

<script>
  import { XButton } from '@/components'

  export default {
    components: {
      XButton
    },
    methods: {
      start () {
        this.$Loading.start();
      },
      finish () {
        this.$Loading.finish();
      },
      error () {
        this.$Loading.error();
      }
    }
  }
</script>

<style lang="less" scoped>

</style>