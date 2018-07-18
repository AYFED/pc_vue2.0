<template lang="pug">
    div
        h2 TimePicker 时间选择器
        h5 用于选择或输入日期
        br
        p 基础用法
        Row
            Col(span="4")
                TimePicker(type="time", placeholder="选择时间", style="width: 200px")
            Col(span="4")
                TimePicker(type="timerange", placeholder="选择时间", style="width: 200px")
        br
        br
        p 时间格式
        Row
            Col(span="4")
                TimePicker(type="time", :value="value1", format="hh点mm分ss秒", placeholder="选择时间", style="width: 200px")
            Col(span="4")
                TimePicker(type="timerange", :value="value2", format="hh:mm:ss", placeholder="选择时间", style="width: 200px")
        br
        br
        p 选择时分
        Row
            Col(span="4")
                TimePicker(type="time", format="hh:mm", placeholder="选择时间", style="width: 200px")
            Col(span="4")
                TimePicker(type="timerange", format="hh:mm", placeholder="选择时间", style="width: 200px")
        br
        br
        p 时间间隔
        Row
            Col(span="4")
                TimePicker(type="time", :steps="[1, 15, 15]", placeholder="选择时间", style="width: 200px")
        br
        br
        p 不可选时间
        Row
            Col(span="4")
                TimePicker(type="time", :disabled-hours="[1,5,10]", :disabled-minutes="[0,10,20]", placeholder="选择时间", style="width: 200px")
            Col(span="4")
                TimePicker(type="time", hide-disabled-options, :disabled-hours="[1,5,10]", :disabled-minutes="[0,10,20]", placeholder="选择时间", style="width: 200px")
        br
        br
        p 手动控制组件
        br
        TimePicker(:open="open", :value="value3", confirm, @on-change="handleChange", @on-clear="handleClear", @on-ok="handleOk")
            a(href="javascript:void(0)", @click="handleClick")
                Icon(type="ios-clock-outline")
                template(v-if="value3 === ''") 选择时间
                template(v-else) {{ value3 }}
        br
        br
        p 尺寸设置
        Row
            Col(span="4")
                TimePicker(size="small", type="time", placeholder="选择时间", style="width: 200px")
            Col(span="4")
                TimePicker(type="time", placeholder="选择时间", style="width: 200px")
            Col(span="4")
                TimePicker(size="large", type="time", placeholder="选择时间", style="width: 200px")
</template>

<script>
  import { TimePicker, Row, Col, Icon } from '@/components'

  export default {
    components: {
      TimePicker,
      Row,
      Col,
      Icon
    },
    data () {
      return {
        value1: '09:41:00',
        value2: ['09:41:00', '12:00:00'],
        open: false,
        value3: ''
      }
    },
    methods: {
      handleClick () {
        this.open = !this.open;
      },
      handleChange (time) {
        this.value3 = time;
      },
      handleClear () {
        this.open = false;
      },
      handleOk () {
        this.open = false;
      }
    }
  }
</script>

<style lang="less">
    @css-prefix: ay-;

    .@{css-prefix}picker-confirm{
        .@{css-prefix}btn-ghost{
            margin-right: 10px;
        }
    }
</style>

<style lang="less" scoped>
    @css-prefix: ay-;

    .@{css-prefix}icon-ios-clock-outline{
        margin-right: 5px;
    }
</style>