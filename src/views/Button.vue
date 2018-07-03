<template lang="pug">
    div
        .ay-button-view
            h2 按钮类型
            XButton Default
            XButton(type="primary") Primary
            XButton(type="ghost") Ghost
            XButton(type="dashed") Dashed
            XButton(type="text") Text
            br
            br
            XButton(type="info") Info
            XButton(type="success") Success
            XButton(type="warning") Warning
            XButton(type="error") Error
            br
            br
            br
            br
        .ay-other-view
            h2 图标按钮及按钮形状
            XButton(type="primary", shape="circle", icon="ios-search")
            XButton(type="primary", icon="ios-search") Search
            XButton(type="primary", shape="circle", icon="ios-search") Search
            XButton(type="primary", shape="circle") Circle
            br
            br
            XButton(type="ghost", shape="circle", icon="ios-search")
            XButton(type="ghost", icon="ios-search") Search
            XButton(type="ghost", shape="circle", icon="ios-search") Search
            XButton(type="ghost", shape="circle") Circle
            br
            br
            br
            br
            h2 按钮尺寸
            XButton(type="primary", size="large") Large
            XButton(type="primary") Default
            XButton(type="primary", size="small") Small
            br
            br
            XButton(type="primary", shape="circle", size="large") Large
            XButton(type="primary", shape="circle") Default
            XButton(type="primary", shape="circle", size="small") Small
            br
            br
            br
            br
            h2 长按钮
            XButton(type="success", long) SUBMIT
            br
            br
            XButton(type="error", long) DELETE
            br
            br
            br
            br
            h2 不可用状态
            XButton Default
            XButton(disabled) Default
            br
            XButton(type="primary") Primary
            XButton(type="primary", disabled) Primary
            br
            XButton(type="ghost") Ghost
            XButton(type="ghost", disabled) Ghost
            br
            XButton(type="dashed") Dashed
            XButton(type="dashed", disabled) Dashed
            br
            XButton(type="text") Text
            XButton(type="text", disabled) Text
            br
            br
            br
            br
            h2 加载中状态
            XButton(type="primary", loading) Loading...
            XButton(type="primary", :loading="loading", @click="toLoading")
                span(v-if="!loading") Click me!
                span(v-else) Loading...
            XButton(type="primary", :loading="loading2", icon="ios-arrow-back", @click="toLoading2")
                span(v-if="!loading2") Click me!
                span(v-else) Loading...
            br
            br
            br
            br
            h2 按钮组合
            h4 Basic
            br
            br
            ButtonGroup
                XButton Cancel
                XButton(type="primary") Confirm
            ButtonGroup
                XButton(disabled) Yesterday
                XButton(disabled) Today
                XButton(disabled) Tomorrow
            ButtonGroup
                XButton(type="primary") L
                XButton M
                XButton(type="ghost") XL
                XButton(type="dashed") XXL
            br
            br
            h2 Icons
            ButtonGroup
                XButton(type="primary")
                    Icon(type="ios-arrow-back")
                    | Backward
                XButton(type="primary")
                    | Forward
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
            h2 Circle
            ButtonGroup(shape="circle")
                XButton(type="primary")
                    Icon(type="ios-arrow-back")
                    | Backward
                XButton(type="primary")
                    | Forward
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
            h2 Size
            ButtonGroup(size="large")
                XButton(type="ghost") Large
                XButton(type="ghost") Large
            ButtonGroup
                XButton(type="ghost") Default
                XButton(type="ghost") Default
            ButtonGroup(size="small")
                XButton(type="ghost") Small
                XButton(type="ghost") Small
            br
            br
            ButtonGroup(size="large", shape="circle")
                XButton(type="ghost") Large
                XButton(type="ghost") Large
            ButtonGroup(shape="circle")
                XButton(type="ghost") Default
                XButton(type="ghost") Default
            ButtonGroup(size="small", shape="circle")
                XButton(type="ghost") Small
                XButton(type="ghost") Small
            br
            br
            h2 按钮组纵向排列
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
        var _this = this
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

        & > h2 {
            margin-bottom: 20px;
        }

        & > button {
            min-width: 120px;
            height: 44px;
            margin-right: 10px;
        }
    }

    .@{css-prefix}other-view {
        & > h2 {
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