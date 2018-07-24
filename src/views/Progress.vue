<template lang="pug">
    div
        h2 Notification 通知
        h5 悬浮出现在页面角落，显示全局的通知提醒消息
        br
        p 基础用法
        Row
            Col(span="6")
                Progress(:percent="25")
        Row
            Col(span="6")
                Progress(:percent="45", status="active")
        Row
            Col(span="6")
                Progress(:percent="65", status="wrong")
        Row
            Col(span="6")
                Progress(:percent="100")
        Row
            Col(span="6")
                Progress(:percent="25", hide-info)
        br
        br
        p 垂直方向
        Row
            Col(span="3", style="height: 100px;")
                Progress(vertical, :percent="25")
            Col(span="3", style="height: 100px;")
                Progress(vertical, :percent="45", status="active")
            Col(span="3", style="height: 100px;")
                Progress(vertical, :percent="65", status="wrong")
            Col(span="3", style="height: 100px;")
                Progress(vertical, :percent="100")
            Col(span="3", style="height: 100px;")
                Progress(vertical, :percent="25", hide-info)
        br
        br
        p 配合外部组件使用
        Row
            Col(span="6")
                Progress(:percent="percent")
        ButtonGroup(size="large")
            XButton(icon="ios-add", @click="add")
            XButton(icon="ios-add", @click="minus")
        br
        br
        p 自定义更多样式
        Row
            Col(span="6")
                Progress(:percent="25", :stroke-width="5")
        br
        Row
            Col(span="6")
                Progress(:percent="100")
                    Icon(type="ios-checkmark-circle", size="14")
                    span 成功
</template>

<script>
  import { Progress, Row, Col, ButtonGroup, XButton, Icon } from '@/components'

  export default {
    components: {
      Progress,
      Row,
      Col,
      ButtonGroup,
      XButton,
      Icon
    },
    data () {
      return {
        percent: 0
      }
    },
    methods: {
      add () {
        if (this.percent >= 100) {
          return false;
        }
        this.percent += 10;
      },
      minus () {
        if (this.percent <= 0) {
          return false;
        }
        this.percent -= 10;
      }
    }
  }
</script>

<style lang="less" scoped>

</style>