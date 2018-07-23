<template lang="pug">
    div
        h2 Message 消息提示
        h5 常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒
        br
        p 基础用法
        XButton(type="primary", @click="info") 显示普通提示
        br
        br
        p 提示类型
        XButton(type="success", @click="success") 显示成功提示
        span(style="margin-right: 10px;")
        XButton(type="warning", @click="warning") 显示警告提示
        span(style="margin-right: 10px;")
        XButton(type="error", @click="error") 显示错误提示
        br
        br
        p 提示类型
        XButton(@click="loading") 显示加载中...
        br
        br
        p 自定义时长
        XButton(@click="time") 显示10秒提示
        br
        br
        p 可关闭
        XButton(@click="closable") 显示一个可关闭提示
        br
        br
        p 自定义 Render 函数
        XButton(@click="renderFunc") 显示Render函数的内容
</template>

<script>
  import { XButton } from '@/components'

  export default {
    components: {
      XButton,
    },
    methods: {
      info () {
        this.$Message.info('这是一个提示');
      },
      success () {
        this.$Message.success('这是一个成功提示');
      },
      warning () {
        this.$Message.warning('这是一个警告提示');
      },
      error () {
        this.$Message.error('这是一个错误提示');
      },
      loading () {
        const msg = this.$Message.loading({
          content: '加载中...',
          duration: 0
        });
        setTimeout(msg, 3000);
      },
      time(){
        this.$Message.info({
          content: '提示显示10秒',
          duration: 10
        });
      },
      closable () {
        this.$Message.info({
          content: '提示可关闭',
          duration: 10,
          closable: true
        });
      },
      renderFunc () {
        this.$Message.info({
          render: h => {
            return h('span', [
              '这是一个渲染 ',
              h('a', 'render'),
              ' 函数'
            ])
          },
          duration: 10
        });
      }
    }
  }
</script>

<style lang="less" scoped>

</style>