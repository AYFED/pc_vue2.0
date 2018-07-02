<template lang="pug">
    div
        p.ay-row-title 水平排列基础用法
        Row
            Col(span="12") col-12
            Col(span="12") col-12
        br
        Row
            Col(span="8") col-8
            Col(span="8") col-8
            Col(span="8") col-8
        br
        Row
            Col(span="6") col-6
            Col(span="6") col-6
            Col(span="6") col-6
            Col(span="6") col-6
        br
        p.ay-row-title 水平排列区块间隔
        Row.ay-gutter(:gutter="16")
            Col(span="6")
                div col-6
            Col(span="6")
                div col-6
            Col(span="6")
                div col-6
            Col(span="6")
                div col-6
        br
        p.ay-row-title 水平排列栅格顺序
        Row(type="flex")
            Col(span="6",order="4") 1 | order-4
            Col(span="6",order="3") 2 | order-3
            Col(span="6",order="2") 3 | order-2
            Col(span="6",order="1") 4 | order-1
        br
        p.ay-row-title 水平排列栅格排序
        Row
            Col(span="18",push="6") col-18 | push-6
            Col(span="6",pull="18") col-6 | pull-18
        br
        p.ay-row-title 水平排列左右偏移
        Row
            Col(span="8") col-8
            Col(span="8",offset="8") col-8 | offset-8
        br
        Row
            Col(span="6",offset="8") col-6 | offset-8
            Col(span="6",offset="4") col-6 | offset-4
        br
        Row
            Col(span="12",offset="8") col-12 | offset-8
        br
        p.ay-row-title 子元素向左排列
        Row(type="flex",justify="start",class="ay-row-bg")
            Col(span="4") col-4
            Col(span="4") col-4
            Col(span="4") col-4
            Col(span="4") col-4
        br
        p.ay-row-title 子元素向右排列
        Row(type="flex",justify="end",class="ay-row-bg")
            Col(span="4") col-4
            Col(span="4") col-4
            Col(span="4") col-4
            Col(span="4") col-4
        br
        p.ay-row-title 子元素居中排列
        Row(type="flex",justify="center",class="ay-row-bg")
            Col(span="4") col-4
            Col(span="4") col-4
            Col(span="4") col-4
            Col(span="4") col-4
        br
        p.ay-row-title 子元素等宽排列
        Row(type="flex",justify="space-between",class="ay-row-bg")
            Col(span="4") col-4
            Col(span="4") col-4
            Col(span="4") col-4
            Col(span="4") col-4
        br
        p.ay-row-title 子元素分散排列
        Row(type="flex",justify="space-around",class="ay-row-bg")
            Col(span="4") col-4
            Col(span="4") col-4
            Col(span="4") col-4
            Col(span="4") col-4
        br
        p.ay-row-title 顶部对齐
        Row(type="flex",justify="center",align="top",class="ay-row-bg")
            Col(span="4")
                p(style="height: 80px") col-4
            Col(span="4")
                p(style="height: 30px") col-4
            Col(span="4")
                p(style="height: 100px") col-4
            Col(span="4")
                p(style="height: 60px") col-4

        br
        p.ay-row-title 底部对齐
        Row(type="flex",justify="center",align="bottom",class="ay-row-bg")
            Col(span="4")
                p(style="height: 80px") col-4
            Col(span="4")
                p(style="height: 30px") col-4
            Col(span="4")
                p(style="height: 100px") col-4
            Col(span="4")
                p(style="height: 60px") col-4
        br
        p.ay-row-title 居中对齐
        Row(type="flex",justify="center",align="middle",class="ay-row-bg")
            Col(span="4")
                p(style="height: 80px") col-4
            Col(span="4")
                p(style="height: 30px") col-4
            Col(span="4")
                p(style="height: 100px") col-4
            Col(span="4")
                p(style="height: 60px") col-4
        br
        p.ay-row-title 响应式布局
        Row
            Col(:xs="2" :sm="4" :md="6" :lg="8") Col
            Col(:xs="20" :sm="16" :md="12" :lg="8") Col
            Col(:xs="2" :sm="4" :md="6" :lg="8") Col
        br
        p.ay-row-title 其它属性的响应式
        Row
            Col(:xs="{ span: 5, offset: 1 }",:lg="{ span: 6, offset: 2 }") Col
            Col(:xs="{ span: 11, offset: 1 }",:lg="{ span: 6, offset: 2 }") Col
            Col(:xs="{ span: 5, offset: 1 }",:lg="{ span: 6, offset: 2 }") Col

</template>

<script>
  import { Col, Row } from '@/components'

  export default {
    components: {
      Row,
      Col,
    },
  }
</script>

<style lang="less" scoped>
    @css-prefix: ay-;

    .view {
        height: 100px;
        width: 100px;
        background: yellow;
    }

    .@{css-prefix}col {
        color: #fff;
        text-align: center;
        background: rgba(0, 153, 229, .7);
        padding: 10px 0;

        &:nth-child(odd) {
            background: rgba(0, 153, 229, .9);
        }
    }

    .ay-gutter {
        .ivu-col {
            color: #fff;
            text-align: center;
            background: transparent;
            padding: 10px 0;

            &:nth-child(odd) {
                background: transparent;
            }
            div {
                color: #fff;
                text-align: center;
                background: rgba(0, 153, 229, .7);
                padding: 10px 0;

                &:nth-child(odd) {
                    background: rgba(0, 153, 229, .9);
                }
            }
        }
    }

    .ay-row-title {
        font-size: 16px;
        line-height: 1.5;
        color: #623fed;
    }

    .ay-row-bg {
        background: rgba(0, 0, 0, .05);
    }

</style>
