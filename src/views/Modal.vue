<template lang="pug">
    div
        h2 Notification 通知
        h5 悬浮出现在页面角落，显示全局的通知提醒消息
        br
        p 基础用法
        XButton(type="primary", @click="modal1 = true") 显示对话框
        Modal(v-model="modal1", title="对话框标题", @on-ok="ok", @on-cancel="cancel")
            p 对话框内容
            p 对话框内容
            p 对话框内容
        br
        br
        p 自定义样式
        XButton(@click="modal2 = true") 自定义页头和页脚
        Modal(v-model="modal2", width="360")
            p 对话框内容
            p 对话框内容
            p 对话框内容


</template>

<script>
  import { XButton, Modal } from '@/components'

  export default {
    components: {
      XButton,
      Modal
    },
    data () {
      return {
        modal1: false,
        modal2: false,
        modal_loading: false,
        modal3: false,
        modal4: false,
        modal5: false
      }
    },
    methods: {
      ok () {
        this.$Message.info('点击成功');
      },
      cancel () {
        this.$Message.info('点击取消');
      }
    }
  }
</script>

<style lang="less" scoped>

</style>