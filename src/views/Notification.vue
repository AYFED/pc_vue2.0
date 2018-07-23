<template lang="pug">
    div
        h2 Notification 通知
        h5 悬浮出现在页面角落，显示全局的通知提醒消息
        br
        p 基础用法
        XButton(type="primary", @click="open(false)") 打开提醒
        span(style="margin-right: 10px;")
        XButton(type="primary", @click="open(true)") 打开提醒(仅标题)
        br
        br
        p 提醒类型
        h5(style="margin-bottom: 10px;") 带描述信息
        XButton(@click="info(false)") 消息
        span(style="margin-right: 10px;")
        XButton(@click="success(false)") 成功
        span(style="margin-right: 10px;")
        XButton(@click="warning(false)") 警告
        span(style="margin-right: 10px;")
        XButton(@click="error(false)") 错误
        h5(style="margin-bottom: 10px;") 仅标题
        XButton(@click="info(true)") 消息
        span(style="margin-right: 10px;")
        XButton(@click="success(true)") 成功
        span(style="margin-right: 10px;")
        XButton(@click="warning(true)") 警告
        span(style="margin-right: 10px;")
        XButton(@click="error(true)") 错误
        br
        br
        p 自定义时长
        XButton(type="primary", @click="time") 打开提醒
        br
        br
        p Render 函数
        XButton(type="primary", @click="renderFunc") 打开提醒
</template>

<script>
  import { XButton } from '@/components'

  export default {
    components: {
      XButton,
    },
    methods: {
      open (nodesc) {
        this.$Notice.open({
          title: '提示标题',
          desc: nodesc ? '' : '这是提示标题，这是提示标题 '
        });
      },
      info (nodesc) {
        this.$Notice.info({
          title: '提示标题',
          desc: nodesc ? '' : '这是提示标题，这是提示标题 '
        });
      },
      success (nodesc) {
        this.$Notice.success({
          title: '提示标题',
          desc: nodesc ? '' : '这是提示标题，这是提示标题 '
        });
      },
      warning (nodesc) {
        this.$Notice.warning({
          title: '提示标题',
          desc: nodesc ? '' : '这是提示标题，这是提示标题 '
        });
      },
      error (nodesc) {
        this.$Notice.error({
          title: '提示标题',
          desc: nodesc ? '' : '这是提示标题，这是提示标题 '
        });
      },
      time () {
        this.$Notice.open({
          title: '提示标题',
          desc:  '这是提示标题，这是提示标题 ',
          duration: 0
        });
      },
      renderFunc () {
        this.$Notice.success({
          title: '提示标题',
          desc:  '这是提示标题，这是提示标题 ',
          render: h => {
            return h('span', [
              '这是一个 ',
              h('a', 'render'),
              ' 函数'
            ])
          }
        });
      }
    }
  }
</script>

<style lang="less" scoped>

</style>