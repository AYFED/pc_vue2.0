<template lang="pug">
    #app
        div.ay-demos-layout
            Layout
                Header
                    Menu(mode="horizontal",theme="light",active-name="1")
                        div.layout-logo
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
                    Content(:style="{padding: '24px', minHeight: '280px', background: '#fff'}")
                        <router-view/>
                Footer.layout-footer-center 2011-2016 &copy; Aoyou
</template>

<script>
  import {
    Content,
    Footer,
    Header,
    Layout,
    Sider,
    Menu,
    MenuItem,
    Icon,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Submenu
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
      Submenu
    },
  }
</script>


<style lang="less">
    @import './styles/index.less';

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

        .@{css-prefix}layout,.@{css-prefix}layout-footer{
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
</style>