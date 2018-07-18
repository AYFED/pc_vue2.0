<template lang="pug">
    div
        h2 Input 输入框
        h5 通过鼠标或键盘输入字符
        br
        p 基础用法
        Input(v-model="value", placeholder="Enter something...", style="width: 300px")
        br
        br
        p 尺寸
        Input(v-model="value1", size="large", placeholder="large size", style="width: 200px;margin-right:10px;")
        Input(v-model="value2", placeholder="default size", style="width: 200px;margin-right:10px;")
        Input(v-model="value3", size="small", placeholder="small size", style="width: 200px;")
        br
        br
        p 可清空
        Input(v-model="value14", placeholder="Enter something...", clearable, style="width: 200px")
        br
        br
        p 带Icon的输入框
        Input(v-model="value4", icon="ios-clock-outline", placeholder="Enter something...", style="width: 200px")
        br
        br
        p 文本域
        Input(v-model="value5", type="textarea", placeholder="Enter something...", style="width: 200px;margin-right:10px;")
        Input(v-model="value6", type="textarea", :rows="4", placeholder="Enter something...", style="width: 200px;")
        br
        br
        p 适应文本高度的文本域
        Input(v-model="value7", type="textarea", :autosize="true", placeholder="Enter something...", style="width: 200px;margin-right:10px;")
        Input(v-model="value8", type="textarea", :autosize="{minRows: 2,maxRows: 5}", placeholder="Enter something...", style="width: 200px;margin-right:10px;")
        br
        br
        p 禁用状态
        Input(v-model="value9", disabled, placeholder="Enter something...", style="width: 200px;margin-right:10px;")
        Input(v-model="value10", type="textarea", disabled, placeholder="Enter something...", style="width: 200px;")
        br
        br
        p 复合型输入框
        Input(v-model="value11", style="width: 400px;")
            span(slot="prepend") http://
            span(slot="append") .com
        br
        br
        Input(v-model="value12", style="width: 400px;")
            XSelect(v-model="select1", slot="prepend", style="width: 80px")
                XOption(value="http") http://
                XOption(value="https") https://
            XSelect(v-model="select2", slot="append", style="width: 70px")
                XOption(value="com") .com
                XOption(value="org") .org
                XOption(value="io") .io
        br
        br
        Input(v-model="value13", style="width: 400px;")
            XSelect(v-model="select3", slot="prepend", style="width: 80px")
                XOption(value="day") Day
                XOption(value="month") Month
            XButton(slot="append", icon="ios-search")

</template>

<script>

  import { Input, XOption, XSelect, XButton } from '@/components'

  export default {
    components: {
      Input,
      XSelect,
      XOption,
      XButton
    },
    data () {
      return {
        value: '',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: '',
        value13: '',
        select1: 'http',
        select2: 'com',
        select3: 'day',
        value14: '',
      }
    },
  }
</script>

<style lang="less" scoped>

</style>