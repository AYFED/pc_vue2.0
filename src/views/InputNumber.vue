<template lang="pug">
    div
        h2 InputNumber 计数器
        h5 仅允许输入标准的数字值，可定义范围
        br
        p 基础用法
        InputNumber(:max="10", :min="1", v-model="value1")
        br
        br
        p 小数用法
        InputNumber(:max="10", :min="1", :step="1.2", v-model="value2")
        br
        br
        p 格式化展示
        InputNumber(:max="10000", v-model="value9", :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')", :parser="value => value.replace(/$s?|(,*)/g, '')")
        br
        br
        InputNumber(:max="100", v-model="value10", :formatter="value => `${value}%`", :parser="value => value.replace('%', '')")
        br
        br
        p 尺寸
        Row
            Col(span="3")
                InputNumber(v-model="value3", size="small")
            Col(span="3")
                InputNumber(v-model="value4")
            Col(span="3")
                InputNumber(v-model="value5", size="large")
        br
        br
        p 不可用
        InputNumber(v-model="value6", disabled)
        br
        br
        p 只读
        InputNumber(v-model="value7", readonly)
        br
        br
        p 不可编辑
        InputNumber(v-model="value8", :editable="false")
</template>

<script>
  import { Col, InputNumber, Row } from '@/components'

  export default {
    components: {
      InputNumber,
      Col,
      Row,
    },
    data () {
      return {
        value1: 1,
        value2: 1,
        value3: 2,
        value4: 2,
        value5: 2,
        value6: 1,
        value7: 1,
        value8: 1,
        value9: 1000,
        value10: 100,
      }
    },

  }
</script>

<style lang="less" scoped>

    @css-prefix: ay-;

</style>