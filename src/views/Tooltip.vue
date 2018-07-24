<template lang="pug">
    div
        h2 Tooltip 文字提示
        h5 用于标记和选择
        br
        p 基础用法
        Tooltip(content="这里是提示文字") 当鼠标经过这段文字时，会显示一个气泡框
        br
        br
        p 位置
        Row
            Col(span="6")
                .top
                    Tooltip(content="上左文字提示", placement="top-start")
                        XButton 上左
                    Tooltip(content="上中文字提示", placement="top")
                        XButton 上边
                    Tooltip(content="上右文字提示", placement="top-end")
                        XButton 上右
                .center
                    .center-left
                        Tooltip(content="左上文字提示", placement="left-start")
                            XButton 左上
                        br
                        br
                        Tooltip(content="左边文字提示", placement="left")
                            XButton 左边
                        br
                        br
                        Tooltip(content="左下文字提示", placement="left-end")
                            XButton 左下
                    .center-right
                        Tooltip(content="右上文字提示", placement="right-start")
                            XButton 右上
                        br
                        br
                        Tooltip(content="右边文字提示", placement="right")
                            XButton 右边
                        br
                        br
                        Tooltip(content="右下文字提示", placement="right-end")
                            XButton 右下
                .bottom
                    Tooltip(content="下左文字提示", placement="bottom-start")
                        XButton 下左
                    Tooltip(content="下中文字提示", placement="bottom")
                        XButton 下边
                    Tooltip(content="下右文字提示", placement="bottom-end")
                        XButton 下右
        br
        br
        p 自定义内容
        Tooltip(placement="top")
            XButton 多行
            div(slot="content")
                p 显示多行信息
                p
                    i 显示多行信息
        br
        br
        p 禁用
        Tooltip(placement="top", content="禁用信息", :disabled="disabled")
            XButton(@click="disabled = true") 点击关闭提示
        br
        br
        p 延时
        Tooltip(placement="top", content="禁用信息", :delay="1000")
            XButton 延时1秒显示
</template>

<script>
  import { Tooltip, XButton, Row, Col } from '@/components'

  export default {
    components: {
      Tooltip,
      XButton,
      Row,
      Col
    },
    data () {
      return {
        disabled: false
      }
    }
  }
</script>

<style lang="less">

    @css-prefix: ay-;

    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }

    .@{css-prefix}tooltip-rel{
        margin-right: 10px;
    }

</style>