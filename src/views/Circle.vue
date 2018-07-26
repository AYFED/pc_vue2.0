<template lang="pug">
    div
        h2 Circle 进度环
        h5 图表类组件。一般有两种用途：显示某项任务进度的百分比；统计某些指标的占比
        br
        p 基础用法
        XCircle(:percent="80")
            span(class="demo-circle-inner" style="font-size:24px") 80%
        span(style="margin-right: 20px;")
        XCircle(:percent="100", stroke-color="#5cb85c")
            Icon(type="ios-checkmark", size="80", style="color:#5cb85c")
        span(style="margin-right: 20px;")
        XCircle(:percent="35", stroke-color="#ff5500")
            Icon(type="ios-close", size="80", style="color:#ff5500")
        br
        br
        p 配合外部组件使用
        XCircle(:percent="percent", :stroke-color="color")
            Icon(v-if="percent == 100", type="ios-checkmark", size="60", style="color:#5cb85c")
            span(v-else, style="font-size:24px") {{ percent }}%
        ButtonGroup
            XButton(@click="add") +
            XButton(@click="minus") -
        br
        br
        p 自定义更多样式
        XCircle(:size="250", :trail-width="4", :stroke-width="5", :percent="75", stroke-linecap="square", stroke-color="#43a3fb")
            .demo-Circle-custom
                h1 42,001,776
                p 消费人群规模
                span 总占人数
                    i 75%
</template>

<script>
  import { XCircle, Icon, ButtonGroup, XButton } from '@/components'

  export default {
    components: {
      XCircle,
      Icon,
      ButtonGroup,
      XButton
    },
    data () {
      return {
        percent: 0
      }
    },
    computed: {
      color () {
        let color = '#2db7f5';
        if (this.percent == 100) {
          color = '#5cb85c';
        }
        return color;
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

<style lang="less">

    .demo-circle-inner{
        color: #28b4eb;
    }

    .demo-Circle-custom{
        & h1{
            color: #3f414d;
            font-size: 28px;
            font-weight: normal;
        }
        & p{
            color: #657180;
            font-size: 14px;
            margin: 10px 0 15px;
        }
        & span{
            display: block;
            padding-top: 15px;
            color: #657180;
            font-size: 14px;
            &:before{
                content: '';
                display: block;
                width: 50px;
                height: 2px;
                margin: 0 auto;
                background: #e0e3e6;
                position: relative;
                top: -15px;
            };
        }
        & span i{
            font-style: normal;
            color: #3f414d;
        }
    }

</style>