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
            p(slot="header", style="color:#f60;text-align:center")
                Icon(type="information-circled")
                span 删除确认
            div(style="text-align:center")
                p 此任务删除后，下游 10 个任务将无法执行。
                p 是否继续删除？
            div(slot="footer")
                XButton(type="error", size="large", long, :loading="modal_loading", @click="del") 删除
        span(style="margin-right: 10px;")
        XButton(@click="modal3 = true") 不带标题栏
        Modal(v-model="modal3")
            p 对话框内容
            p 对话框内容
            p 对话框内容
        span(style="margin-right: 10px;")
        XButton(@click="modal4 = true") 国际化
        Modal(v-model="modal4", title="国际化标题", ok-text="OK", cancel-text="Cancel")
            p 对话框内容
            p 对话框内容
            p 对话框内容
        span(style="margin-right: 10px;")
        XButton(@click="modal5 = true") 设置宽度
        Modal(v-model="modal5", title="自定义标题", width="300")
            p 对话框内容
            p 对话框内容
            p 对话框内容
        br
        br
        p 异步关闭
        XButton(type="primary", @click="modal6 = true") 显示对话框
        Modal(v-model="modal6", title="自定义标题", :loading="loading", @on-ok="asyncOK")
            p 点击确定后，对话框将在 2秒 后关闭。
        br
        br
        p 禁用关闭
        XButton(@click="modal7 = true") 禁用右上角关闭(含Esc键)
        Modal(v-model="modal7", title="禁用右上角关闭", :closable="false")
            p 对话框内容
            p 对话框内容
            p 对话框内容
        span(style="margin-right: 10px;")
        XButton(@click="modal8 = true") 禁用遮罩关闭
        Modal(v-model="modal8", title="禁用遮罩关闭", :mask-closable="false")
            p 对话框内容
            p 对话框内容
            p 对话框内容
        br
        br
        p 自定义位置
        XButton(@click="modal9 = true") 距离顶部20px
        Modal(v-model="modal9", title="自定义标题", :styles="{top: '20px'}")
            p 对话框内容
            p 对话框内容
            p 对话框内容
        span(style="margin-right: 10px;")
        XButton(@click="modal10 = true") 垂直居中
        Modal(v-model="modal10", title="垂直居中", class-name="vertical-center-modal")
            p 对话框内容
            p 对话框内容
            p 对话框内容
        br
        br
        p 实例化使用方法
        p 基本用法
        XButton(@click="instance('info')") 消息
        span(style="margin-right: 10px;")
        XButton(@click="instance('success')") 成功
        span(style="margin-right: 10px;")
        XButton(@click="instance('warning')") 警告
        span(style="margin-right: 10px;")
        XButton(@click="instance('error')") 错误
        span(style="margin-right: 10px;")
        br
        br
        p 确认对话框
        XButton(@click="confirm") 标准
        span(style="margin-right: 10px;")
        XButton(@click="custom") 自定义按钮
        span(style="margin-right: 10px;")
        XButton(@click="async") 异步关闭
        span(style="margin-right: 10px;")
        br
        br
        p 自定义内容
        h5 姓名: {{ value }}
        XButton(@click="handleRender") 自定义内容
</template>

<script>
  import { XButton, Modal, Icon, Input } from '@/components'

  export default {
    components: {
      XButton,
      Modal,
      Icon,
      Input
    },
    data () {
      return {
        modal1: false,
        modal2: false,
        modal_loading: false,
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false,
        loading: true,
        modal7: false,
        modal8: false,
        modal9: false,
        modal10: false,
        value: ''
      }
    },
    methods: {
      ok () {
        this.$Message.info('点击成功');
      },
      cancel () {
        this.$Message.info('点击取消');
      },
      del () {
        this.modal_loading = true;
        setTimeout(() => {
          this.modal_loading = false;
          this.modal2 = false;
          this.$Message.success('成功删除');
        }, 2000);
      },
      asyncOK () {
        setTimeout(() => {
          this.modal6 = false;
        }, 2000);
      },
      instance (type) {
        const title = '标题';
        const content = '<p>Content of dialog</p><p>Content of dialog</p>';
        switch (type) {
          case 'info':
            this.$Modal.info({
              title: title,
              content: content
            });
            break;
          case 'success':
            this.$Modal.success({
              title: title,
              content: content
            });
            break;
          case 'warning':
            this.$Modal.warning({
              title: title,
              content: content
            });
            break;
          case 'error':
            this.$Modal.error({
              title: title,
              content: content
            });
            break;
        }
      },
      confirm () {
        this.$Modal.confirm({
          title: '标题',
          content: '<p>电话内容</p><p>电话内容</p>',
          onOk: () => {
            this.$Message.info('点击确认');
          },
          onCancel: () => {
            this.$Message.info('点击取消');
          }
        });
      },
      custom () {
        this.$Modal.confirm({
          title: '标题',
          content: '<p>电话内容</p><p>电话内容</p>',
          okText: 'OK',
          cancelText: 'Cancel'
        });
      },
      async () {
        this.$Modal.confirm({
          title: '标题',
          content: '<p>这个对话框2秒关闭</p>',
          loading: true,
          onOk: () => {
            setTimeout(() => {
              this.$Modal.remove();
              this.$Message.info('异步关闭');
            }, 2000);
          }
        });
      },
      handleRender () {
        this.$Modal.confirm({
          render: (h) => {
            return h('Input', {
              props: {
                value: this.value,
                autofocus: true,
                placeholder: '请输入你的名字...'
              },
              on: {
                input: (val) => {
                  this.value = val;
                }
              }
            })
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>

    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ay-modal{
            top: 0;
        }
    }
</style>