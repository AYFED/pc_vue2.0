<template lang="pug">
    div
        .ay-button-view
            h2 Button 按钮
            h5 常用的操作按钮
            br
            p 按钮类型
            XButton 默认按钮
            XButton(type="primary") 主要按钮
            XButton(type="ghost") 朴素按钮
            XButton(type="dashed") 虚线按钮
            XButton(type="text") 文字按钮
            br
            br
            XButton(type="info") 信息按钮
            XButton(type="success") 成功按钮
            XButton(type="warning") 警告按钮
            XButton(type="error") 危险按钮
            br
            br
            br
            br
        .ay-other-view
            p 图标按钮及按钮形状
            XButton(type="primary", shape="circle", icon="ios-search")
            XButton(type="primary", icon="ios-search") 搜索
            XButton(type="primary", shape="circle", icon="ios-search") 搜索
            XButton(type="primary", shape="circle") 搜索
            br
            br
            XButton(type="ghost", shape="circle", icon="ios-search")
            XButton(type="ghost", icon="ios-search") 搜索
            XButton(type="ghost", shape="circle", icon="ios-search") 搜索
            XButton(type="ghost", shape="circle") 搜索
            br
            br
            br
            br
            p 按钮尺寸
            XButton(type="primary", size="large") 大型按钮
            XButton(type="primary") 默认按钮
            XButton(type="primary", size="small") 小型按钮
            br
            br
            XButton(type="primary", shape="circle", size="large") 大型按钮
            XButton(type="primary", shape="circle") 默认按钮
            XButton(type="primary", shape="circle", size="small") 小型按钮
            br
            br
            br
            br
            p 长按钮
            XButton(type="success", long) 提交按钮
            br
            br
            XButton(type="error", long) 删除按钮
            br
            br
            br
            br
            p 不可用状态
            XButton 默认按钮
            XButton(disabled) 默认按钮
            br
            XButton(type="primary") 主要按钮
            XButton(type="primary", disabled) 主要按钮
            br
            XButton(type="ghost") 朴素按钮
            XButton(type="ghost", disabled) 朴素按钮
            br
            XButton(type="dashed") 虚线按钮
            XButton(type="dashed", disabled) 虚线按钮
            br
            XButton(type="text") 文字按钮
            XButton(type="text", disabled) 文字按钮
            br
            br
            br
            br
            p 加载中状态
            XButton(type="primary", loading) 加载中
            XButton(type="primary", :loading="loading", @click="toLoading")
                span(v-if="!loading") 点击按钮
                span(v-else) 加载中
            XButton(type="primary", :loading="loading2", icon="ios-arrow-back", @click="toLoading2")
                span(v-if="!loading2") 点击按钮
                span(v-else) 加载中
            br
            br
            br
            br
            p 按钮组合
            p Basic
            br
            br
            ButtonGroup
                XButton 取消按钮
                XButton(type="primary") 提交按钮
            ButtonGroup
                XButton(disabled) 昨天
                XButton(disabled) 今天
                XButton(disabled) 明天
            ButtonGroup
                XButton(type="primary") L
                XButton M
                XButton(type="ghost") XL
                XButton(type="dashed") XXL
            br
            br
            p Icons
            ButtonGroup
                XButton(type="primary")
                    Icon(type="ios-arrow-back")
                    | 上一页
                XButton(type="primary")
                    | 下一页
                    Icon(type="ios-arrow-forward")
            ButtonGroup
                XButton(type="primary", icon="ios-skip-backward")
                XButton(type="primary", icon="ios-skip-forward")
            ButtonGroup
                XButton(type="ghost", icon="ios-color-wand-outline")
                XButton(type="ghost", icon="ios-sunny-outline")
                XButton(type="ghost", icon="ios-crop")
                XButton(type="ghost", icon="ios-color-filter-outline")
            br
            br
            p Circle
            ButtonGroup(shape="circle")
                XButton(type="primary")
                    Icon(type="ios-arrow-back")
                    | 上一页
                XButton(type="primary")
                    | 下一页
                    Icon(type="ios-arrow-forward")
            ButtonGroup(shape="circle")
                XButton(type="primary", icon="ios-skip-backward")
                XButton(type="primary", icon="ios-skip-forward")
            ButtonGroup(shape="circle")
                XButton(type="ghost", icon="ios-color-wand-outline")
                XButton(type="ghost", icon="ios-sunny-outline")
                XButton(type="ghost", icon="ios-crop")
                XButton(type="ghost", icon="ios-color-filter-outline")
            br
            br
            p Size
            ButtonGroup(size="large")
                XButton(type="ghost") 大型按钮
                XButton(type="ghost") 大型按钮
            ButtonGroup
                XButton(type="ghost") 默认按钮
                XButton(type="ghost") 默认按钮
            ButtonGroup(size="small")
                XButton(type="ghost") 小型按钮
                XButton(type="ghost") 小型按钮
            br
            br
            ButtonGroup(size="large", shape="circle")
                XButton(type="ghost") 大型按钮
                XButton(type="ghost") 大型按钮
            ButtonGroup(shape="circle")
                XButton(type="ghost") 默认按钮
                XButton(type="ghost") 默认按钮
            ButtonGroup(size="small", shape="circle")
                XButton(type="ghost") 小型按钮
                XButton(type="ghost") 小型按钮
            br
            br
            p 按钮组纵向排列
            ButtonGroup(vertical)
                XButton(type="ghost",icon="logo-facebook")
                XButton(type="ghost",icon="logo-twitter")
                XButton(type="ghost",icon="logo-googleplus")
                XButton(type="ghost",icon="logo-tumblr")

</template>

<script>
  import { XButton, ButtonGroup, Icon } from '@/components'

  export default {
    components: {
      XButton,
      ButtonGroup,
      Icon,
    },
    data () {
      return {
        loading: false,
        loading2: false,
      }
    },
    methods: {
      toLoading () {
        this.loading = true
      },
      toLoading2 () {
        this.loading2 = true
        window.setTimeout(() => {
          this.loading2 = false
        },1000)
      },
    },
  }
</script>

<style lang="less">
    @css-prefix: ay-;

    .@{css-prefix}button-view {

        & > p {
            margin-bottom: 20px;
        }

        & > button {
            min-width: 120px;
            height: 44px;
            margin-right: 10px;
        }
    }

    .@{css-prefix}other-view {
        & > p {
            margin-bottom: 20px;
        }

        & > button {
            margin-right: 10px;
            margin-bottom: 10px;
        }

        .@{css-prefix}btn-group{
            margin-right: 10px;
        }

        .@{css-prefix}icon-ios-arrow-back{
            margin-right: 4px;
        }

        .@{css-prefix}icon-ios-arrow-forward{
            margin-left: 4px;
        }
    }
</style>