<template lang="pug">
    div
        h2 Page 分页
        h5 当数据量较多时，使用分页可以快速进行数据切换
        br
        p 基础用法
        Page(:total="100")
        br
        br
        p 每页数量
        Page(:total="100", show-sizer)
        br
        br
        p 电梯
        Page(:total="100", show-elevator)
        br
        br
        p 总数
        Page(:total="100", show-total)
        br
        br
        p 迷你型
        Page(:total="100", size="small")
        br
        Page(:total="100", size="small", show-elevator, show-sizer)
        br
        Page(:total="100", size="small", show-total)
        br
        br
        p 简洁
        Page(:current="2", :total="50", simple)


</template>

<script>
  import { Page } from '@/components'

  export default {
    components: {
      Page
    },
  }
</script>

<style lang="less" scoped>

</style>