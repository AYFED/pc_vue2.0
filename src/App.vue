<template lang="pug">
    #app
        div.ay-demos-layout
            Layout
                Header
                    Menu(mode="horizontal",theme="light",active-name="1")
                        div.layout-logo
                Layout(:style="{padding: '0 50px'}")
                    Sider(hide-trigger, :style="{background: '#fff'}")
                        Menu(active-name="", theme="light", width="auto", :open-names="['1']",@on-select="changeMenu")
                            Submenu(name="1")
                                template(slot="title")
                                    Icon(type="ios-navigate")
                                    | Basic
                                MenuItem(name="1-1") Grid 栅格
                                MenuItem(name="1-2") Layout 布局
                                MenuItem(name="1-3") Button 按钮
                                MenuItem(name="1-4") Icon 图标
                            Submenu(name="2")
                                template(slot="title")
                                    Icon(type="ios-keypad")
                                    | From
                                MenuItem(name="2-1") Input 输入框
                                MenuItem(name="2-2") Select 选择器
                                MenuItem(name="2-3") Radio 单选框
                                MenuItem(name="2-4") Checkbox 多选框
                                MenuItem(name="2-5") Switch 开关
                                MenuItem(name="2-6") Table 表格
                                MenuItem(name="2-7") AutoComplete 自动完成
                                MenuItem(name="2-8") Slider 滑块
                                MenuItem(name="2-9") DatePicker 日期选择器
                                MenuItem(name="2-10") TimePicker 时间选择器
                                MenuItem(name="2-11") Cascader 级联选择
                                MenuItem(name="2-12") Transfer 穿梭框
                                MenuItem(name="2-13") InputNumber 数字输入框
                                MenuItem(name="2-14") Rate 评分
                                MenuItem(name="2-15") Upload 上传
                                MenuItem(name="2-16") ColorPicker 颜色选择器
                                MenuItem(name="2-17") Form 表单
                            Submenu(name="3")
                                template(slot="title")
                                    Icon(type="ios-analytics")
                                    | View
                                MenuItem(name="3-1") Alert 警告提示
                                MenuItem(name="3-2") Card 卡片
                                MenuItem(name="3-3") Message 消息提示
                                MenuItem(name="3-4") Notification 通知
                                MenuItem(name="3-5") Modal 对话框
                                MenuItem(name="3-6") Progress 进度条
                                MenuItem(name="3-7") Avatar 头像
                                MenuItem(name="3-8") Badge 标记
                                MenuItem(name="3-9") Collapse 折叠面板
                                MenuItem(name="3-10") Timeline 时间轴
                                MenuItem(name="3-11") Tag 标签
                                MenuItem(name="3-12") Tooltip 文字提示
                                MenuItem(name="3-13") Poptip 气泡提示
                                MenuItem(name="3-14") Carousel 走马灯
                                MenuItem(name="3-15") Tree 树形控件
                            Submenu(name="4")
                                template(slot="title")
                                    Icon(type="ios-apps")
                                    | Navigation
                                MenuItem(name="4-1") NavMenu 导航菜单
                                MenuItem(name="4-2") Tabs 标签页
                                MenuItem(name="4-3") Dropdown 下拉菜单
                                MenuItem(name="4-4") Page 分页
                                MenuItem(name="4-5") Breadcrumb 面包屑
                                MenuItem(name="4-6") Steps 步骤条
                                MenuItem(name="4-7") LoadingBar 加载进度条
                            Submenu(name="5")
                                template(slot="title")
                                    Icon(type="ios-happy")
                                    | Chart
                                MenuItem(name="5-1") Circle 进度环
                            Submenu(name="6")
                                template(slot="title")
                                    Icon(type="ios-medal")
                                    | Other
                                MenuItem(name="6-1") Affix 图钉
                                MenuItem(name="6-2") BackTop 返回顶部
                                MenuItem(name="6-3") Spin 加载中
                                MenuItem(name="6-4") Scroll 无限滚动

                    Content(:style="{padding: '24px', minHeight: '280px', background: '#fff'}")
                        <router-view/>
                Footer.layout-footer-center 2016-2018 &copy; Aoyou
</template>

<script>
  import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Content,
    Footer,
    Header,
    Icon,
    Layout,
    Menu,
    MenuItem,
    Sider,
    Submenu,
  } from '@/components'

  export default {
    name: 'App',
    components: {
      Layout,
      Header,
      Sider,
      Content,
      Footer,
      Menu,
      MenuItem,
      Icon,
      Breadcrumb,
      BreadcrumbItem,
      Card,
      Submenu,
    },
    methods: {
      changeMenu(active) {
        switch (active) {
          case '1-1':
            this.$router.push({path: 'grid'})
            break
          case '1-2':
            this.$router.push({path: 'layout'})
            break
          case '1-3':
            this.$router.push({path: 'button'})
            break
          case '1-4':
            this.$router.push({path: 'icon'})
            break
          case '2-1':
            this.$router.push({path: 'input'})
            break
          case '2-2':
            this.$router.push({path: 'select'})
            break
          case '2-3':
            this.$router.push({path: 'radio'})
            break
          case '2-4':
            this.$router.push({path: 'checkbox'})
            break
          case '2-5':
            this.$router.push({path: 'switch'})
            break
          case '2-6':
            this.$router.push({path: 'table'})
            break
          case '2-7':
            this.$router.push({path: 'auto-complete'})
            break
          case '2-8':
            this.$router.push({path: 'slider'})
            break
          case '2-9':
            this.$router.push({path: 'date-picker'})
            break
          case '2-10':
            this.$router.push({path: 'time-picker'})
            break
          case '2-11':
            this.$router.push({path: 'cascader'})
            break
          case '2-12':
            this.$router.push({path: 'transfer'})
            break
          case '2-13':
            this.$router.push({path: 'input-number'})
            break
          case '2-14':
            this.$router.push({path: 'rate'})
            break
          case '2-15':
            this.$router.push({path: 'upload'})
            break
          case '2-16':
            this.$router.push({path: 'color-picker'})
            break
          case '2-17':
            this.$router.push({path: 'form'})
            break
          case '3-1':
            this.$router.push({path: 'alert'})
            break
          case '3-2':
            this.$router.push({path: 'card'})
            break
          case '3-3':
            this.$router.push({path: 'message'})
            break
          case '3-4':
            this.$router.push({path: 'notification'})
            break
          case '3-5':
            this.$router.push({path: 'modal'})
            break
          case '3-6':
            this.$router.push({path: 'progress'})
            break
          case '3-7':
            this.$router.push({path: 'avatar'})
            break
          case '3-8':
            this.$router.push({path: 'badge'})
            break
          case '3-9':
            this.$router.push({path: 'collapse'})
            break
          case '3-10':
            this.$router.push({path: 'timeline'})
            break
          case '3-11':
            this.$router.push({path: 'tag'})
            break
          case '3-12':
            this.$router.push({path: 'tooltip'})
            break
          case '3-13':
            this.$router.push({path: 'poptip'})
            break
          case '3-14':
            this.$router.push({path: 'carousel'})
            break
          case '3-15':
            this.$router.push({path: 'tree'})
            break
          case '4-1':
            this.$router.push({path: 'menu'})
            break
          case '4-2':
            this.$router.push({path: 'tabs'})
            break
          case '4-3':
            this.$router.push({path: 'dropdown'})
            break
          case '4-4':
            this.$router.push({path: 'page'})
            break
          case '4-5':
            this.$router.push({path: 'breadcrumb'})
            break
          case '4-6':
            this.$router.push({path: 'steps'})
            break
          case '4-7':
            this.$router.push({path: 'loading-bar'})
            break
          case '5-1':
            this.$router.push({path: 'circle'})
            break
          case '6-1':
            this.$router.push({path: 'affix'})
            break
          case '6-2':
            this.$router.push({path: 'back-top'})
            break
          case '6-3':
            this.$router.push({path: 'spin'})
            break
          case '6-4':
            this.$router.push({path: 'scroll'})
            break
        }
      },
    },
  }
</script>


<style lang="less">
    @import './styles/index.less';

    p {
        font-size: 14px;
        margin-bottom: 10px;
    }

    @css-prefix: ay-;

    .@{css-prefix}demos-layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;

        .@{css-prefix}layout-header {
            background: #fff;
        }

        .@{css-prefix}layout, .@{css-prefix}layout-footer {
            background: #fff;
        }

        .layout-logo {
            width: 120px;
            height: 40px;
            border-radius: 3px;
            float: left;
            position: relative;
            background: url(http://pic2.aoyou.com/logo/2018/main-logo2x.png) no-repeat;
            background-size: 100%;
            top: 15px;
            left: 20px;
        }
        .layout-nav {
            width: 420px;
            margin: 0 auto;
            margin-right: 20px;
        }
        .layout-footer-center {
            text-align: center;
        }
    }

    .@{css-prefix}layout.@{css-prefix}layout-has-sider > .@{css-prefix}layout-content {
        overflow-x: initial;
    }

</style>