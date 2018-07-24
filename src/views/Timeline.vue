<template lang="pug">
    div
        h2 Timeline 时间轴
        h5 对一系列信息进行时间排序时，垂直地展示
        br
        p 基础用法
        Timeline
            TimelineItem
                p.time 1980年
                p.content 遨游网
            TimelineItem
                p.time 1980年
                p.content 遨游网
            TimelineItem
                p.time 1980年
                p.content 遨游网
            TimelineItem
                p.time 1980年
                p.content 遨游网
        br
        br
        p 圆圈颜色
        Timeline
            TimelineItem(color="green") 发布1.0版本
            TimelineItem(color="red") 发布1.0版本
            TimelineItem(color="blue") 发布1.0版本
            TimelineItem(color="yellow") 发布1.0版本
        br
        br
        p 自定义时间轴点
        Timeline
            TimelineItem(color="green")
                Icon(type="ios-trophy",size="16", slot="dot")
                span 发布1.0版本
            TimelineItem(color="red") 发布1.0版本
            TimelineItem(color="blue") 发布1.0版本
            TimelineItem(color="yellow") 发布1.0版本
</template>

<script>
  import { Timeline, TimelineItem, Icon } from '@/components'

  export default {
    components: {
      Timeline,
      TimelineItem,
      Icon
    },
  }
</script>

<style lang="less" scoped>

    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }

</style>