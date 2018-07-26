<template lang="pug">
    div
        h2 Spin 加载中
        h5 当区块正在获取数据中时可使用，适当的等待动画可以提升用户体验
        br
        p 基础用法
        Spin
        br
        br
        p 各种尺寸
        Spin(size="small")
        br
        Spin
        br
        Spin(size="large")
        br
        br
        p 居中固定
        .demo-spin-container
            Spin(fix)
        br
        br
        p 自定义内容
        Row
            Col(class="demo-spin-col", span="4")
                Spin(fix) 加载中...
            Col(class="demo-spin-col", span="4")
                Spin(fix)
                    Icon(type="ios-refresh", size=24, class="demo-spin-icon-load")
                    div 加载中
            Col(class="demo-spin-col", span="4")
                Spin(fix)
                    .demo-loader
                        svg(class="circular", viewBox="25 25 50 50")
                            circle(class="path", cx="50", cy="50", r="20", fill="none", stroke-width="5", stroke-miterlimit="10")
</template>

<script>
  import { Col, Icon, Row, Spin } from '@/components'

  export default {
    components: {
      Spin,
      Row,
      Col,
      Icon,
    },
  }
</script>

<style lang="less" scoped>

    .demo-spin-container {
        display: inline-block;
        width: 200px;
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }

    .demo-spin-icon-load {
        animation: ani-demo-spin 1s linear infinite;
    }

    @keyframes ani-demo-spin {
        from {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .demo-spin-col {
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }

    .demo-loader {
        width: 30px;
        height: 30px;
        position: relative;
        margin: 0 auto;
    }

    .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @-webkit-keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
        }

        to {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
        }

        to {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
        }
    }

    @-webkit-keyframes color {
        0%, to {
            stroke: #d62d20;
        }

        40% {
            stroke: #0057e7;
        }

        66% {
            stroke: #008744;
        }

        80%, 90% {
            stroke: #ffa700;
        }
    }

    @keyframes color {
        0%, to {
            stroke: #d62d20;
        }

        40% {
            stroke: #0057e7;
        }

        66% {
            stroke: #008744;
        }

        80%, 90% {
            stroke: #ffa700;
        }
    }


</style>