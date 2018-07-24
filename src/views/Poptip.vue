<template lang="pug">
    div
        h2 Poptip 气泡提示
        h5 Poptip 与 Tooltip 类似，具有很多相同配置，不同点是 Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等
        br
        p 基础用法
        Poptip(trigger="hover", title="标题", content="内容内容")
            XButton hover激活
        Poptip(title="标题", content="内容内容")
            XButton click激活
        Poptip(title="标题", content="内容内容", trigger="focus")
            XButton focus激活
        Poptip(title="标题", content="内容内容", trigger="focus")
            Input(placeholder="输入框聚焦")
        br
        br
        p 位置
        Row
            Col(span="6")
                .top
                    Poptip(content="上左文字提示", placement="top-start")
                        XButton 上左
                    Poptip(content="上中文字提示", placement="top")
                        XButton 上边
                    Poptip(content="上右文字提示", placement="top-end")
                        XButton 上右
                .center
                    .center-left
                        Poptip(content="左上文字提示", placement="left-start")
                            XButton 左上
                        br
                        br
                        Poptip(content="左边文字提示", placement="left")
                            XButton 左边
                        br
                        br
                        Poptip(content="左下文字提示", placement="left-end")
                            XButton 左下
                    .center-right
                        Poptip(content="右上文字提示", placement="right-start")
                            XButton 右上
                        br
                        br
                        Poptip(content="右边文字提示", placement="right")
                            XButton 右边
                        br
                        br
                        Poptip(content="右下文字提示", placement="right-end")
                            XButton 右下
                .bottom
                    Poptip(content="下左文字提示", placement="bottom-start")
                        XButton 下左
                    Poptip(content="下中文字提示", placement="bottom")
                        XButton 下边
                    Poptip(content="下右文字提示", placement="bottom-end")
                        XButton 下右
        br
        br
        p 从浮层内关闭
        Poptip(v-model="visible")
            a click激活
            div(slot="title") 自定义标题
            div(slot="content")
                a(@click="close") 关闭
        br
        br
        p 嵌套复杂内容
        Poptip(placement="right", width="400")
            XButton(type="ghost") 点击激活
            .api(slot="content")
                table(border="1")
                    thead
                        tr
                            th 标题
                            th 标题
                            th 标题
                    tbody
                        tr
                            td 0,0,0
                            td 0,0,0
                            td 0,0,0
                        tr
                            td 0,0,0
                            td 0,0,0
                            td 0,0,0
                        tr
                            td 0,0,0
                            td 0,0,0
                            td 0,0,0
        br
        br
        p 确认框
        Poptip(confirm, title="你确定删除", @on-ok="ok", @on-cancel="cancel")
            XButton 删除
        Poptip(confirm, title="你确定删除", @on-ok="ok", @on-cancel="cancel", ok-text="yes", cancel-text="no")
            XButton 删除
</template>

<script>
  import { Poptip, XButton, Input, Row, Col } from '@/components'

  export default {
    components: {
      Poptip,
      XButton,
      Input,
      Row,
      Col
    },
    data () {
      return {
        visible: false
      }
    },
    methods: {
      close () {
        this.visible = false;
      },
      ok () {
        this.$Message.info('点击确定');
      },
      cancel () {
        this.$Message.info('点击取消');
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

    .@{css-prefix}poptip-rel{
        margin-right: 10px;
    }

</style>