<template lang="pug">
    div
        div.ay-demo-layout
            h2 基本结构
            Layout
                Header Header
                Content Content
                Footer Footer
            Layout
                Header Header
                Layout
                    Sider(hide-trigger) Sider
                    Content Content
                Footer Footer
            Layout
                Header Header
                Layout
                    Content Content
                    Sider(hide-trigger) Sider
                Footer Footer
            Layout
                Sider(hide-trigger) Sider
                Layout
                    Header Header
                    Content Content
                    Footer Footer
        br
        br
        h2 上中下布局
        div.ay-demo2-layout
            Layout
                Header
                    Menu(mode="horizontal",theme="light",active-name="1")
                        div.layout-logo
                        div.layout-nav
                            MenuItem(name="1")
                                Icon(type="ios-navigate")
                                | Item 1
                            MenuItem(name="2")
                                Icon(type="ios-keypad")
                                | Item 2
                            MenuItem(name="3")
                                Icon(type="ios-analytics")
                                | Item 3
                            MenuItem(name="4")
                                Icon(type="ios-paper")
                                | Item 4
                Content(:style="{padding: '0 50px'}")
                    Breadcrumb(:style="{margin: '20px 0'}")
                        BreadcrumbItem Home
                        BreadcrumbItem Components
                        BreadcrumbItem Layout
                    Card
                        div(style="min-height: 200px;") Content
                Footer.layout-footer-center 2008-2017 &copy; Aoyou
        br
        br
        h2 顶部-侧边布局-通栏
        div.ay-demo2-1-layout
            Layout
                Header
                    Menu(mode="horizontal",theme="light",active-name="1")
                        div.layout-logo
                        div.layout-nav
                            MenuItem(name="1")
                                Icon(type="ios-navigate")
                                | Item 1
                            MenuItem(name="2")
                                Icon(type="ios-keypad")
                                | Item 2
                            MenuItem(name="3")
                                Icon(type="ios-analytics")
                                | Item 3
                            MenuItem(name="4")
                                Icon(type="ios-paper")
                                | Item 4
                Layout(:style="{padding: '0 50px'}")
                    Sider(hide-trigger, :style="{background: '#fff'}")
                        Menu(active-name="1-3", theme="light", width="auto", :open-names="['1']")
                            Submenu(name="1")
                                template(slot="title")
                                    Icon(type="ios-navigate")
                                    | Item 1
                                MenuItem(name="1-1") Option 1
                                MenuItem(name="1-2") Option 2
                                MenuItem(name="1-3") Option 3
                            Submenu(name="2")
                                template(slot="title")
                                    Icon(type="ios-keypad")
                                    | Item 2
                                MenuItem(name="2-1") Option 1
                                MenuItem(name="2-2") Option 2
                            Submenu(name="3")
                                template(slot="title")
                                    Icon(type="ios-analytics")
                                    | Item 3
                                MenuItem(name="3-1") Option 1
                                MenuItem(name="3-2") Option 2
                    Content(:style="{padding: '24px', minHeight: '280px', background: '#fff'}") Content
                Footer.layout-footer-center 2011-2016 &copy; Aoyou
        br
        br
        h2 侧边布局
        div.ay-demo3-layout
            Layout(:style="{minHeight: '100vh'}")
                Sider(collapsible,:collapsed-width="78",v-model="isCollapsed")
                    Menu(active-name="1-2",theme="dark",width="auto",:class="menuitemClasses")
                        MenuItem(name="1-1")
                            Icon(type="ios-navigate")
                            span Option 1
                        MenuItem(name="1-2")
                            Icon(type="ios-search")
                            span Option 2
                        MenuItem(name="1-3")
                            Icon(type="ios-settings")
                            span Option 3
                Layout
                    Header(:style="{background: '#495060', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}")
                    Content(:style="{padding: '0 16px 16px'}")
                        Breadcrumb(:style="{margin: '16px 0'}")
                            BreadcrumbItem Home
                            BreadcrumbItem Components
                            BreadcrumbItem Layout
                        Card
                            div(style="min-height: 600px;") Content
        br
        br
        h2 自定义触发器
        div.ay-demo3-1-layout
            Layout(:style="{minHeight: '100vh'}")
                Sider(ref="side1", hide-trigger, collapsible, :collapsed-width="78", v-model="isCollapsed")
                    Menu(active-name="1-2",theme="dark",width="auto",:class="menuitemClasses")
                        MenuItem(name="1-1")
                            Icon(type="ios-navigate")
                            span Option 1
                        MenuItem(name="1-2")
                            Icon(type="ios-search")
                            span Option 2
                        MenuItem(name="1-3")
                            Icon(type="ios-settings")
                            span Option 3
                Layout
                    Header(class="layout-header-bar",:style="{padding: 0}")
                        Icon(@click.native="collapsedSider", :class="rotateIcon", :style="{margin: '20px 20px 0'}", type="navicon-round", size="24")
                    Content(:style="{margin: '20px', background: '#fff', minHeight: '260px'}") Content
        br
        br
        h2 响应式布局
        div.ay-demo3-2-layout
            Layout
                Sider(breakpoint="md", collapsible, :collapsed-width="78", v-model="isCollapsed")
                    Menu(active-name="1-2",theme="dark",width="auto",:class="menuitemClasses")
                        MenuItem(name="1-1")
                            Icon(type="ios-navigate")
                            span Option 1
                        MenuItem(name="1-2")
                            Icon(type="ios-search")
                            span Option 2
                        MenuItem(name="1-3")
                            Icon(type="ios-settings")
                            span Option 3
                    div(slot="trigger")
                Layout
                    Header.layout-header-bar
                    Content(:style="{margin: '20px', background: '#fff', minHeight: '220px'}") Content
        br
        br
        h2 固定头部
        div.ay-demo4-layout
            Layout
                Header(:style="{position: 'absolute', width: '100%'}")
                    Menu(mode="horizontal",theme="light",active-name="1")
                        div.layout-logo
                        div.layout-nav
                            MenuItem(name="1")
                                Icon(type="ios-navigate")
                                span Option 1
                            MenuItem(name="2")
                                Icon(type="ios-keypad")
                                span Option 2
                            MenuItem(name="3")
                                Icon(type="ios-analytics")
                                span Option 3
                            MenuItem(name="4")
                                Icon(type="ios-paper")
                                span Option 4
                Content(:style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}") Content
                Footer.layout-footer-center 2011-2016 &copy; Aoyou

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
    data () {
      return {
        isCollapsed: false,
      }
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : '',
        ]
      },
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : '',
        ]
      },
    },
    methods: {
      collapsedSider () {
        this.$refs.side1.toggleCollapse()
      },
    },
  }
</script>


<style lang="less">
    @css-prefix: ay-;

    .@{css-prefix}demo3-layout {
        .@{css-prefix}layout-sider-trigger {
            position: absolute;
        }
    }
</style>

<style lang="less" scoped>
    @css-prefix: ay-;

    .@{css-prefix}demo-layout {

        .@{css-prefix}layout {
            font-size: 14px;
            color: #fff;
            text-align: center;
            margin-bottom: 48px;

            &.@{css-prefix}layout-has-sider {
                margin-bottom: 0;
            }

            &:last-child {
                margin-bottom: 0;

                .@{css-prefix}layout-sider {
                    background: #3a9fe8;
                    min-height: 253px;
                    line-height: 253px;
                }
            }
        }

        .@{css-prefix}layout-sider {
            background: #3a9fe8;
            min-height: 120px;
            line-height: 120px;
        }

        .@{css-prefix}layout-header {
            background: #7cbce9;
        }

        .@{css-prefix}layout-content {
            background: #0f8de9;
            min-height: 120px;
            line-height: 120px;
        }

        .@{css-prefix}layout-footer {
            background: #7cbce9;
            color: #fff;
        }
    }

    .@{css-prefix}demo2-layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;

        .@{css-prefix}layout-header {
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

    .@{css-prefix}demo2-1-layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;

        .@{css-prefix}layout-header {
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

    .@{css-prefix}demo3-layout {
        position: relative;
        .layout-con {
            height: 100%;
            width: 100%;
        }
        .@{css-prefix}layout-sider-trigger {
            position: absolute;
        }
        .menu-item span {
            display: inline-block;
            overflow: hidden;
            width: 69px;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: bottom;
            transition: width .2s ease .2s;
        }
        .menu-item i {
            transform: translateX(0px);
            transition: font-size .2s ease, transform .2s ease;
            vertical-align: middle;
            font-size: 16px;
        }
        .collapsed-menu span {
            width: 0px;
            transition: width .2s ease;
        }
        .collapsed-menu i {
            transform: translateX(5px);
            transition: font-size .2s ease .2s, transform .2s ease .2s;
            vertical-align: middle;
            font-size: 22px;
        }
    }

    .@{css-prefix}demo3-1-layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        .layout-header-bar {
            background: #fff;
            box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
        }
        .layout-logo-left {
            width: 90%;
            height: 30px;
            background: #5b6270;
            border-radius: 3px;
            margin: 15px auto;
        }
        .menu-icon {
            transition: all .3s;
        }
        .rotate-icon {
            transform: rotate(-90deg);
        }
        .menu-item span {
            display: inline-block;
            overflow: hidden;
            width: 69px;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: bottom;
            transition: width .2s ease .2s;
        }
        .menu-item i {
            transform: translateX(0px);
            transition: font-size .2s ease, transform .2s ease;
            vertical-align: middle;
            font-size: 16px;
        }
        .collapsed-menu span {
            width: 0px;
            transition: width .2s ease;
        }
        .collapsed-menu i {
            transform: translateX(5px);
            transition: font-size .2s ease .2s, transform .2s ease .2s;
            vertical-align: middle;
            font-size: 22px;
        }

        .ay-icon-navicon-round {
            cursor: pointer;

            &:before {
                content: "\F20D";
            }
        }
    }

    .@{css-prefix}demo3-2-layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        .layout-header-bar {
            background: #fff;
            box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
        }
        .menu-item span {
            display: inline-block;
            overflow: hidden;
            width: 69px;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: bottom;
            transition: width .2s ease .2s;
        }
        .menu-item i {
            transform: translateX(0px);
            transition: font-size .2s ease, transform .2s ease;
            vertical-align: middle;
            font-size: 16px;
        }
        .collapsed-menu span {
            width: 0px;
            transition: width .2s ease;
        }
        .collapsed-menu i {
            transform: translateX(5px);
            transition: font-size .2s ease .2s, transform .2s ease .2s;
            vertical-align: middle;
            font-size: 22px;
        }

        .@{css-prefix}icon-navicon-round {
            &:before {
                content: "\F20D";
            }
        }
    }

    .@{css-prefix}demo4-layout {
        position: relative;
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        border-radius: 4px;
        height: 360px;
        overflow: auto;
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
        .@{css-prefix}layout-header {
            background: #fff;
        }
        .layout-nav {
            width: 450px;
            margin: 0 auto;
            margin-right: 20px;
        }
        .layout-footer-center {
            text-align: center;
        }
    }
</style>
