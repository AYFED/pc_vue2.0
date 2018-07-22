<template lang="pug">
    div
        h2 Rate 评分
        h5 评分组件
        br
        p 基础用法
        Rate(v-model="value")
        br
        br
        p 半星用法
        Rate(v-model="valueHalf", allow-half)
        br
        br
        p 显示提示
        Row
            Col(span="4")
                Rate(v-model="valueText", show-text)
            Col(span="4")
                Rate(v-model="valueCustomText", show-text, allow-half)
                    span(style="color: #f5a623") {{valueCustomText}}
        br
        br
        p 只读
        Rate(v-model="valueDisabled", allow-half, disabled, show-text)
</template>

<script>
  import { Rate, Row, Col } from '@/components'

  export default {
    components: {
      Rate,
      Row,
      Col
    },
    data () {
      return {
        value: 0,
        valueHalf: 2.5,
        valueText: 3,
        valueCustomText: 3.5,
        valueDisabled: 2.5
      }
    }
  }
</script>

<style lang="less" scoped>

</style>