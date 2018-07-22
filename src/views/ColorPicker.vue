<template lang="pug">
    div
        h2 ColorPicker 颜色选择器
        h5 用于颜色选择，支持多种格式
        br
        p 基础用法
        Row
            Col(span="4")
                span.ay-span-left 有默认值
                ColorPicker(v-model="color1" )
            Col(span="4")
                span.ay-span-left 无默认值
                ColorPicker(v-model="color2" )
        br
        br
        p 透明度用法
        Row
            Col(span="4")
                span.ay-span-left 有透明度
                ColorPicker(v-model="color3", alpha)
        br
        br
        p 色彩用法
        Row
            Col(span="4")
                span.ay-span-left 色彩
                ColorPicker(v-model="color7", :hue="false")
        br
        br
        p 颜色预设
        Row
            Col(span="4")
                span.ay-span-left 预设
                ColorPicker(v-model="color4", recommend)
            Col(span="4")
                span.ay-span-left 预设
                ColorPicker(v-model="color5", :colors="colors")
        br
        br
        p 尺寸
        Row
            Col(span="4")
                span.ay-span-left 大尺寸
                ColorPicker(v-model="color6", size="large", recommend)
            Col(span="4")
                span.ay-span-left 默认尺寸
                ColorPicker(v-model="color6", recommend)
            Col(span="4")
                span.ay-span-left 小尺寸
                ColorPicker(v-model="color6", size="small", recommend)
</template>

<script>
  import { Col, ColorPicker, Row } from '@/components'

  export default {
    components: {
      Row,
      Col,
      ColorPicker,
    },
    data () {
      return {
        color1: '#19be6b',
        color2: '',
        color3: 'rgba(25, 190,107, .5)',
        color4: '#19be6b',
        color5: '#19be6b',
        colors: ['#311B92', '#512DA8', '#673AB7', '#9575CD', '#D1C4E9'],
        color6: '#19be6b',
        color7: '#be2b29',
      }
    },
  }
</script>

<style lang="less">
    @css-prefix: ay-;

    .@{css-prefix}color-picker-picker {
        .@{css-prefix}btn-ghost {
            margin-right: 10px;
        }
    }
</style>

<style lang="less" scoped>

    @css-prefix: ay-;

    .@{css-prefix}span-left {
        margin-right: 10px;
    }

</style>