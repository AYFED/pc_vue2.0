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
        div.ay-demo2-layout
            Layout
                Header
                    Menu(mode="horizontal",theme="dark",active-name="1")
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
                    Header(:style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}")
                    Content(:style="{padding: '0 16px 16px'}")
                        Breadcrumb(:style="{margin: '16px 0'}")
                            BreadcrumbItem Home
                            BreadcrumbItem Components
                            BreadcrumbItem Layout
                        Card
                            div(style="min-height: 600px;") Content
        br
        br
        div.ay-demo4-layout
            Layout
                Header
                    Menu(mode="horizontal",theme="dark",active-name="1")
                        div.layout-logo
                        div.layout-nav
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
                    Header(:style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}")
                    Content(:style="{padding: '0 16px 16px'}")
                        Breadcrumb(:style="{margin: '16px 0'}")
                            BreadcrumbItem Home
                            BreadcrumbItem Components
                            BreadcrumbItem Layout
                        Card
                            div(style="min-height: 600px;") Content


</template>

<script>
  import { Content, Footer, Header, Layout, Sider, Menu, MenuItem, Icon, Breadcrumb, BreadcrumbItem, Card } from '@/components'

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
    },
    data () {
      return {
        isCollapsed: false
      };
    },
    computed: {
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    }
  }
</script>

<style lang="less">
    @css-prefix: ay-;

    .@{css-prefix}demo-layout{

        .@{css-prefix}layout{
            font-size: 14px;
            color: #fff;
            text-align: center;
            margin-bottom: 48px;

            &.@{css-prefix}layout-has-sider{
                margin-bottom: 0;
            }

            &:last-child{
                margin-bottom: 0;

                .@{css-prefix}layout-sider{
                    background: #3a9fe8;
                    min-height: 253px;
                    line-height: 253px;
                }
            }
        }

        .@{css-prefix}layout-sider{
            background: #3a9fe8;
            min-height: 120px;
            line-height: 120px;
        }

        .@{css-prefix}layout-header{
            background: #7cbce9;
        }

        .@{css-prefix}layout-content{
            background: #0f8de9;
            min-height: 120px;
            line-height: 120px;
        }

        .@{css-prefix}layout-footer{
            background: #7cbce9;
            color: #fff;
        }
    }

    .@{css-prefix}demo2-layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;

        .layout-logo{
            width: 100px;
            height: 30px;
            background: #5b6270;
            border-radius: 3px;
            float: left;
            position: relative;
            top: 15px;
            left: 20px;
        }
        .layout-nav{
            width: 420px;
            margin: 0 auto;
            margin-right: 20px;
        }
        .layout-footer-center{
            text-align: center;
        }
    }

    .@{css-prefix}demo3-layout{
        .layout-con{
            height: 100%;
            width: 100%;
        }
        .menu-item span{
            display: inline-block;
            overflow: hidden;
            width: 69px;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: bottom;
            transition: width .2s ease .2s;
        }
        .menu-item i{
            transform: translateX(0px);
            transition: font-size .2s ease, transform .2s ease;
            vertical-align: middle;
            font-size: 16px;
        }
        .collapsed-menu span{
            width: 0px;
            transition: width .2s ease;
        }
        .collapsed-menu i{
            transform: translateX(5px);
            transition: font-size .2s ease .2s, transform .2s ease .2s;
            vertical-align: middle;
            font-size: 22px;
        }
    }

</style>
