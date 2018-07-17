<template lang="pug">
    div
        h2 Radio 单选框
        h5 在一组备选项中进行单选
        br
        p 基础用法
        Radio(v-model="single") Radio
        span {{single}}
        br
        br
        p 组合使用
        RadioGroup(v-model="phone")
            Radio(label="apple")
                Icon(type="logo-apple")
                span Apple
            Radio(label="android")
                Icon(type="logo-android")
                span Android
            Radio(label="windows")
                Icon(type="logo-windows")
                span Windows
        span {{phone}}
        br
        RadioGroup(v-model="animal")
            Radio(label="金斑蝶")
            Radio(label="爪哇犀牛")
            Radio(label="印度黑羚")
        span {{animal}}
        br
        br
        p 不可用
        Radio(v-model="disabledSingle", disabled) Radio
        RadioGroup(v-model="disabledGroup")
            Radio(label="金斑蝶", disabled)
            Radio(label="爪哇犀牛")
            Radio(label="印度黑羚")
        br
        br
        p 垂直排列
        RadioGroup(v-model="vertical", vertical)
            Radio(label="apple")
                Icon(type="logo-apple")
                span Apple
            Radio(label="android")
                Icon(type="logo-android")
                span Android
            Radio(label="windows")
                Icon(type="logo-windows")
                span Windows
        br
        br
        p 按钮样式
        RadioGroup(v-model="button1", type="button")
            Radio(label="北京")
            Radio(label="上海")
            Radio(label="深圳")
            Radio(label="杭州")
        p {{button1}}
        br
        RadioGroup(v-model="button2", type="button")
            Radio(label="北京")
            Radio(label="上海", disabled)
            Radio(label="深圳")
            Radio(label="杭州")
        p {{button2}}
        br
        RadioGroup(v-model="button3", type="button")
            Radio(label="北京", disabled)
            Radio(label="上海", disabled)
            Radio(label="深圳", disabled)
            Radio(label="杭州", disabled)
        p {{button3}}
        br
        br
        p 尺寸样式
        RadioGroup(v-model="button4", type="button", size="large")
            Radio(label="北京")
            Radio(label="上海")
            Radio(label="深圳")
            Radio(label="杭州")
        p {{button4}}
        RadioGroup(v-model="button5", type="button")
            Radio(label="北京")
            Radio(label="上海")
            Radio(label="深圳")
            Radio(label="杭州")
        p {{button5}}
        RadioGroup(v-model="button6", type="button", size="small")
            Radio(label="北京")
            Radio(label="上海")
            Radio(label="深圳")
            Radio(label="杭州")
        p {{button6}}

</template>

<script>
  import { Radio, RadioGroup, Icon} from '@/components'

  export default {
    components: {
      Radio,
      RadioGroup,
      Icon
    },
    data () {
      return {
        single: false,
        phone: 'apple',
        animal: '爪哇犀牛',
        disabledSingle: true,
        disabledGroup: '爪哇犀牛',
        vertical: 'apple',
        button1: '北京',
        button2: '北京',
        button3: '北京',
        button4: '北京',
        button5: '北京',
        button6: '北京',
      }
    },
  }
</script>

<style scoped lang="less">

</style>