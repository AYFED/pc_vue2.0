<template lang="pug">
    div
        h2 DatePicker 日期选择器
        h5 选择或输入日期，支持年、月、日期等类型，支持选择范围
        br
        p 基础用法
        Row
            Col(span="4")
                DatePicker(type="date", placeholder="选择日期", style="width: 200px")
            Col(span="4")
                DatePicker(type="daterange", placement="bottom-end", placeholder="选择日期", style="width: 200px")
        br
        br
        p 快捷方式
        Row
            Col(span="4")
                DatePicker(type="date", :options="options1", placeholder="选择日期", style="width: 200px")
            Col(span="4")
                DatePicker(type="daterange", :options="options2", placement="bottom-end", placeholder="选择日期", style="width: 200px")
        br
        br
        p 面板不联动
        Row
            Col(span="4")
                DatePicker(type="daterange", split-panels, placeholder="选择日期", style="width: 200px")
        br
        br
        p 多选联动
        Row
            Col(span="4")
                DatePicker(type="date", multiple, placeholder="多选日期", style="width: 200px")
        br
        br
        p 显示星期数
        Row
            Col(span="4")
                DatePicker(type="date", show-week-numbers, placeholder="选择日期", style="width: 200px")
            Col(span="4")
                DatePicker(type="daterange", show-week-numbers, placeholder="选择日期", style="width: 200px")
        br
        br
        p 起始日期
        Row
            Col(span="4")
                DatePicker(type="date", :start-date="new Date(1991, 4, 14)", placeholder="选择日期", style="width: 200px")
            Col(span="4")
                DatePicker(type="daterange", :start-date="new Date(1991, 4, 14)", placeholder="选择日期", style="width: 200px")
        br
        br
        p 日期格式
        Row
            Col(span="4")
                DatePicker(:value="value1", format="YYYY年MM月dd日", type="date", placeholder="选择日期", style="width: 200px")
            Col(span="4")
                DatePicker(:value="value2", format="YYYY/MM/dd", type="daterange", placeholder="选择日期", style="width: 200px")
        br
        br
        p 日期时间选择
        br
        DatePicker(type="datetime", placeholder="选择日期和时间", style="width: 200px")
        br
        br
        DatePicker(type="datetime", format="YYYY年MM月DD日 hh时mm分", placeholder="选择日期和时间(带时间)", style="width: 200px")
        br
        br
        DatePicker(type="datetimerange", placeholder="选择日期和时间", style="width: 300px")
        br
        br
        DatePicker(type="datetimerange", format="YYY年MM月DD日 hh时mm分", placeholder="选择日期和时间(带时间)", style="width: 300px")
        br
        br
        p 年和月
        Row
            Col(span="4")
                DatePicker(type="year", placeholder="选择年份", style="width: 200px")
            Col(span="4")
                DatePicker(type="month", placeholder="选择月份", style="width: 200px")
        br
        br
        p 不可选日期
        Row
            Col(span="4")
                DatePicker(type="date", :options="options3", placeholder="选择日期", style="width: 200px")
            Col(span="4")
                DatePicker(type="date", :options="options4", placeholder="选择日期", style="width: 200px")
        br
        br
        p 带有确认操作
        Row
            Col(span="4")
                DatePicker(type="date", confirm, placeholder="选择日期", style="width: 200px")
            Col(span="4")
                DatePicker(type="daterange", confirm, placeholder="选择日期", style="width: 200px")
        br
        br
        p 手动控制组件
        DatePicker(:open="open", :value="value3", confirm, type="date", @on-change="handleChange", @on-clear="handleClear", @on-ok="handleOk")
            a(href="javascript:void(0)", @click="handleClick")
                Icon(type="ios-calendar-outline")
                template(v-if="value3 === ''") 选择日期
                template(v-else) {{ value3 }}
        br
        br
        p 带有不同尺寸
        Row
            Col(span="4")
                DatePicker(size="small", type="date", placeholder="选择日期", style="width: 200px")
            Col(span="4")
                DatePicker(type="date", confirm, placeholder="选择日期", style="width: 200px")
            Col(span="4")
                DatePicker(size="large", type="date", placeholder="选择日期", style="width: 200px")



</template>

<script>
  import { Col, DatePicker, Row, Icon } from '@/components'

  export default {
    components: {
      DatePicker,
      Row,
      Col,
      Icon
    },
    data () {
      return {
        value1: '2016-01-01',
        value2: ['2016-01-01', '2016-02-15'],
        value3: '',
        open: false,
        options1: {
          shortcuts: [
            {
              text: '今天',
              value () {
                return new Date();
              },
              onClick: (picker) => {
                alert('点击今天');
              }
            },
            {
              text: '昨天',
              value () {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                return date;
              },
              onClick: (picker) => {
                alert('点击昨天');
              }
            },
            {
              text: '一周前',
              value () {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                return date;
              },
              onClick: (picker) => {
                alert('点击一周前');
              }
            }
          ]
        },
        options2: {
          shortcuts: [
            {
              text: '一周',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                return [start, end];
              }
            },
            {
              text: '一个月',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                return [start, end];
              }
            },
            {
              text: '三个月',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                return [start, end];
              }
            }
          ]
        },
        options3: {
          disabledDate (date) {
            return date && date.valueOf() < Date.now() - 86400000;
          }
        },
        options4: {
          disabledDate (date) {
            const disabledDay = date.getDate();
            return disabledDay === 15;
          }
        }
      }
    },
    methods: {
      handleClick () {
        this.open = !this.open;
      },
      handleChange (date) {
        this.value3 = date;
        this.open = false;
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

    .@{css-prefix}icon-ios-calendar-outline{
        margin-right: 5px;
    }

</style>