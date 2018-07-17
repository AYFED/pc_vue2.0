<template lang="pug">
    div
        h2 DatePicker 日期选择器
        h5 选择或输入日期，支持年、月、日期等类型，支持选择范围
        br
        h3 基础用法
        Row
            Col(span="12")
                DatePicker(v-model="value1", type="date", placeholder="选择日期", style="width: 200px")
            Col(span="12")
                DatePicker(v-model="value2", type="daterange", placement="bottom-end", placeholder="选择日期", style="width: 200px")


</template>

<script>
  import { Col, DatePicker, Row } from '@/components'

  export default {
    components: {
      DatePicker,
      Row,
      Col,
    },
    data () {
      return {
        value1: '',
      }
    },
  }
</script>

<style lang="less" scoped>

</style>