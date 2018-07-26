<template lang="pug">
    div
        h2 Tabs 标签页
        h5 分隔内容上有关联但属于不同类别的数据集合
        br
        p 基础用法
        Tabs(value="name1")
            TabPane(label="标签一", name="name1") 标签一的内容
            TabPane(label="标签二", name="name2") 标签二的内容
            TabPane(label="标签三", name="name3") 标签三的内容
        br
        br
        p 禁用
        Tabs
            TabPane(label="标签一") 标签一的内容
            TabPane(label="标签二", disabled) 标签二的内容
            TabPane(label="标签三") 标签三的内容
        br
        br
        p 图标
        Tabs
            TabPane(label="macOS", icon="logo-apple") 标签一的内容
            TabPane(label="Windows", icon="logo-windows") 标签二的内容
            TabPane(label="Linux", icon="logo-tux") 标签三的内容
        br
        br
        p 图标
        Tabs(size="small")
            TabPane(label="标签一") 标签一的内容
            TabPane(label="标签二") 标签二的内容
            TabPane(label="标签三") 标签三的内容
        br
        br
        p 卡片样式
        Tabs(type="card")
            TabPane(label="标签一") 标签一的内容
            TabPane(label="标签二") 标签二的内容
            TabPane(label="标签三") 标签三的内容
        br
        br
        p 可关闭
        Tabs( type="card", closable, @on-tab-remove="handleTabRemove")
            TabPane(label="标签一", v-if="tab0") 标签一的内容
            TabPane(label="标签二", v-if="tab1") 标签二的内容
            TabPane(label="标签三", v-if="tab2") 标签三的内容
        br
        br
        p 自定义标签页
        Tabs( type="card", closable, @on-tab-remove="handleTabRemove")
            TabPane(:label="label", v-if="tab0") 标签一的内容
            TabPane(label="标签二", v-if="tab1") 标签二的内容
            TabPane(label="标签三", v-if="tab2") 标签三的内容
        br
        br
        p 附加内容
        Tabs( type="card")
            TabPane( v-for="tab in tabs", :key="tab", :label="'标签' + tab") 标签{{ tab }}
            XButton(type="ghost", @click="handleTabsAdd", size="small", slot="extra") 增加
        br
        br
        p 不使用动画
        Tabs(:animated="false")
            TabPane(label="标签一") 标签一的内容
            TabPane(label="标签二") 标签二的内容
            TabPane(label="标签三") 标签三的内容
        br
        br
        p 其它样式
        Row(:gutter="32")
            Col(span="12", class="demo-tabs-style1", style="background: #e3e8ee;padding:16px;")
                Tabs(type="card")
                    TabPane(label="标签一") 标签一的内容
                    TabPane(label="标签二") 标签二的内容
                    TabPane(label="标签三") 标签三的内容
            Col(span="12", class="demo-tabs-style2")
                Tabs(type="card")
                    TabPane(label="标签一") 标签一的内容
                    TabPane(label="标签二") 标签二的内容
                    TabPane(label="标签三") 标签三的内容
</template>

<script>
  import { Badge, TabPane, Tabs, XButton, Row, Col } from '@/components'

  export default {
    components: {
      Tabs,
      TabPane,
      Badge,
      XButton,
      Row,
      Col
    },
    data () {
      return {
        tab0: true,
        tab1: true,
        tab2: true,
        tabs: 2,
        label: (h) => {
          return h('span', '标签Function')
        },
      }
    },
    methods: {
      handleTabRemove (name) {
        this['tab' + name] = false
      },
      handleTabsAdd () {
        this.tabs++
      },
    },
  }
</script>

<style lang="less" scoped>

    .demo-tabs-style1 > .ay-tabs-card > .ay-tabs-content {
        height: 120px;
        margin-top: -16px;
    }

    .demo-tabs-style1 > .ay-tabs-card > .ay-tabs-content > .ay-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    .demo-tabs-style1 > .ay-tabs.ay-tabs-card > .ay-tabs-bar .ay-tabs-tab {
        border-color: transparent;
    }

    .demo-tabs-style1 > .ay-tabs-card > .ay-tabs-bar .ay-tabs-tab-active {
        border-color: #fff;
    }

    .demo-tabs-style2 > .ay-tabs.ay-tabs-card > .ay-tabs-bar .ay-tabs-tab {
        border-radius: 0;
        background: #fff;
    }

    .demo-tabs-style2 > .ay-tabs.ay-tabs-card > .ay-tabs-bar .ay-tabs-tab-active {
        border-top: 1px solid #3399ff;
    }

    .demo-tabs-style2 > .ay-tabs.ay-tabs-card > .ay-tabs-bar .ay-tabs-tab-active:before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
    }

</style>