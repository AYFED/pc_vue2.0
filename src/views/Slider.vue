<template lang="pug">
    div
        h2 AutoComplete 自动完成
        h5 输入框自动完成功能
        br
        p 基础用法
        Slider(v-model="value1")
        Slider(v-model="value2", range)
        Slider(v-model="value3", range, disabled)
        br
        br
        p 离散值用法
        Slider(v-model="value4", :step="10")
        Slider(v-model="value5", :step="10", range)
        br
        br
        p 显示间断点
        Slider(v-model="value6", :step="10", show-stops)
        Slider(v-model="value7", :step="10", range, show-stops)
        br
        br
        p 带有输入框
        Slider(v-model="value8", show-input)
        br
        br
        p 自定义提示
        Slider(v-model="value9", :tip-format="format", @on-change="changeValue")
        Slider(v-model="value10", :tip-format="hideFormat", @on-input="inputValue")
</template>

<script>
  import { Slider, } from '@/components'

  export default {
    components: {
      Slider
    },
    data () {
      return {
        value1: 25,
        value2: [20, 50],
        value3: [20, 50],
        value4: 30,
        value5: [20, 50],
        value6: 30,
        value7: [20, 50],
        value8: 25,
        value9: 25,
        value10: 15
      }
    },
    methods: {
      format (val) {
        return '百分比: ' + val + '%';
      },
      hideFormat () {
        return null;
      },
      changeValue(val){
        console.log(val)
      },
      inputValue(val){
        console.log(val)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>