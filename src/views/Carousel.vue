<template lang="pug">
    div
        h2 Carousel 走马灯
        h5 在有限空间内，循环播放同一类型的图片、文字等内容
        br
        p 基础用法
        Row
            Col(span="6")
                Carousel(v-model="value1", loop)
                    CarouselItem
                        .demo-carousel 1
                    CarouselItem
                        .demo-carousel 2
                    CarouselItem
                        .demo-carousel 3
                    CarouselItem
                        .demo-carousel 4
        br
        br
        p 自动切换
        Row
            Col(span="6")
                Carousel(v-model="value2", loop, autoplay)
                    CarouselItem
                        .demo-carousel 1
                    CarouselItem
                        .demo-carousel 2
                    CarouselItem
                        .demo-carousel 3
                    CarouselItem
                        .demo-carousel 4
        br
        br
        p 综合设置
        Row
            Col(span="8")
                Form(:model="setting", :label-width="100")
                    FormItem(label="自动切换")
                        XSwitch(v-model="setting.autoplay")
                            span(slot="open") 开
                            span(slot="close") 关
                    FormItem(label="圆形指示器")
                        XSwitch(v-model="setting.radiusDot")
                            span(slot="open") 开
                            span(slot="close") 关
                    FormItem(label="自动切换速度")
                        Slider(v-model="setting.autoplaySpeed", :min="300", :max="10000", :step="100")
                    FormItem(label="指示器位置")
                        RadioGroup(v-model="setting.dots", type="button")
                            Radio(label="inside") 内部
                            Radio(label="outside") 外部
                            Radio(label="none") 不显示
                    FormItem(label="切换箭头")
                        RadioGroup(v-model="setting.arrow", type="button")
                            Radio(label="hover") 悬停时显示
                            Radio(label="always") 一直线束
                            Radio(label="never") 不显示
                    FormItem(label="指示器触发方式")
                        RadioGroup(v-model="setting.trigger", type="button")
                            Radio(label="click") 点击
                            Radio(label="hover") 悬停
        Row
            Col(span="6")
                Carousel(v-model="value3", :autoplay="setting.autoplay", :autoplay-speed="setting.autoplaySpeed", :dots="setting.dots", :radius-dot="setting.radiusDot", :trigger="setting.trigger", :arrow="setting.arrow")
                    CarouselItem
                        .demo-carousel 1
                    CarouselItem
                        .demo-carousel 2
                    CarouselItem
                        .demo-carousel 3
                    CarouselItem
                        .demo-carousel 4
</template>

<script>
  import { Carousel, CarouselItem, XButton, Input, Row, Col, Form, FormItem, XSwitch, Slider, RadioGroup, Radio  } from '@/components'

  export default {
    components: {
      Carousel,
      CarouselItem,
      XButton,
      Input,
      Row,
      Col,
      Form,
      FormItem,
      XSwitch,
      Slider,
      RadioGroup,
      Radio
    },
    data () {
      return {
        value1: 0,
        value2: 0,
        value3: 0,
        setting: {
          autoplay: false,
          autoplaySpeed: 2000,
          dots: 'inside',
          radiusDot: false,
          trigger: 'click',
          arrow: 'hover'
        }
      }
    }
  }
</script>

<style lang="less" scoped>

    .demo-carousel {
        height: 200px;
        line-height: 200px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        background: #506b9e;
    }

</style>