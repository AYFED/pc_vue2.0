<template lang="pug">
    div
        h2 NavMenu 导航菜单
        h5 为网站提供导航功能的菜单
        br
        p 基础用法
        Menu(mode="horizontal", :theme="theme1", active-name="1")
            MenuItem(name="1")
                Icon(type="ios-paper")
                | 内容管理
            MenuItem(name="2")
                Icon(type="ios-people")
                | 用户管理
            Submenu(name="3")
                template(slot="title")
                    Icon(type="ios-stats")
                    | 统计分析
                MenuGroup(title="使用")
                    MenuItem(name="3-1") 新增和启动
                    MenuItem(name="3-2") 活跃分析
                    MenuItem(name="3-3") 时段分析
                MenuGroup(title="留存")
                    MenuItem(name="3-4") 用户留存
                    MenuItem(name="3-5") 流失用户
            MenuItem(name="4")
                Icon(type="ios-settings")
                | 综合设置
        br
        p 切换主题
        RadioGroup(v-model="theme1")
            Radio(label="light")
            Radio(label="dark")
            Radio(label="primary")
        br
        br
        p 侧栏导航
        Row
            Col(span="8")
                Menu(:theme="theme2", active-name="1")
                    Submenu(name="1")
                        template(slot="title")
                            Icon(type="ios-paper")
                            | 内容管理
                        MenuItem(name="1-1") 文章管理
                        MenuItem(name="1-2") 评论管理
                        MenuItem(name="1-3") 举报管理
                    Submenu(name="2")
                        template(slot="title")
                            Icon(type="ios-people")
                            | 用户管理
                        MenuItem(name="2-1") 新增用户
                        MenuItem(name="2-2") 活跃用户
                    Submenu(name="3")
                        template(slot="title")
                            Icon(type="ios-stats")
                            | 统计分析
                        MenuGroup(title="使用")
                            MenuItem(name="3-1") 新增和启动
                            MenuItem(name="3-2") 活跃分析
                            MenuItem(name="3-3") 时段分析
                        MenuGroup(title="留存")
                            MenuItem(name="3-4") 用户留存
                            MenuItem(name="3-5") 流失用户
            Col(span="8")
                Menu(:theme="theme2", active-name="1-2" :open-names="['1']")
                    Submenu(name="1")
                        template(slot="title")
                            Icon(type="ios-paper")
                            | 内容管理
                        MenuItem(name="1-1") 文章管理
                        MenuItem(name="1-2") 评论管理
                        MenuItem(name="1-3") 举报管理
                    Submenu(name="2")
                        template(slot="title")
                            Icon(type="ios-people")
                            | 用户管理
                        MenuItem(name="2-1") 新增用户
                        MenuItem(name="2-2") 活跃用户
                    Submenu(name="3")
                        template(slot="title")
                            Icon(type="ios-stats")
                            | 统计分析
                        MenuGroup(title="使用")
                            MenuItem(name="3-1") 新增和启动
                            MenuItem(name="3-2") 活跃分析
                            MenuItem(name="3-3") 时段分析
                        MenuGroup(title="留存")
                            MenuItem(name="3-4") 用户留存
                            MenuItem(name="3-5") 流失用户
            Col(span="8")
                Menu(:theme="theme2", :open-names="['1']", accordion)
                    Submenu(name="1")
                        template(slot="title")
                            Icon(type="ios-paper")
                            | 内容管理
                        MenuItem(name="1-1") 文章管理
                        MenuItem(name="1-2") 评论管理
                        MenuItem(name="1-3") 举报管理
                    Submenu(name="2")
                        template(slot="title")
                            Icon(type="ios-people")
                            | 用户管理
                        MenuItem(name="2-1") 新增用户
                        MenuItem(name="2-2") 活跃用户
                    Submenu(name="3")
                        template(slot="title")
                            Icon(type="ios-stats")
                            | 统计分析
                        MenuGroup(title="使用")
                            MenuItem(name="3-1") 新增和启动
                            MenuItem(name="3-2") 活跃分析
                            MenuItem(name="3-3") 时段分析
                        MenuGroup(title="留存")
                            MenuItem(name="3-4") 用户留存
                            MenuItem(name="3-5") 流失用户
        br
        p 切换主题
        RadioGroup(v-model="theme2")
            Radio(label="light")
            Radio(label="dark")
            Radio(label="primary")
        br
        br
        p 内嵌菜单
        Menu(active-name="1-2", :open-names="['1']")
            Submenu(name="1")
                template(slot="title")
                    Icon(type="ios-paper")
                    | 内容管理
                MenuItem(name="1-1") 文章管理
                MenuItem(name="1-2") 评论管理
                MenuItem(name="1-3") 举报管理
            Submenu(name="2")
                template(slot="title")
                    Icon(type="ios-people")
                    | 用户管理
                MenuItem(name="2-1") 新增用户
                MenuItem(name="2-2") 活跃用户
            Submenu(name="3")
                template(slot="title")
                    Icon(type="ios-stats")
                    | 统计分析
                MenuGroup(title="使用")
                    MenuItem(name="3-1") 新增和启动
                    MenuItem(name="3-2") 活跃分析
                    MenuItem(name="3-3") 时段分析
                MenuGroup(title="留存")
                    MenuItem(name="3-4") 用户留存
                    MenuItem(name="3-5") 流失用户
        br
        br
        p 分组
        Menu(:theme="theme3", active-name="1")
            MenuGroup(title="内容管理")
                MenuItem(name="1")
                    Icon(type="ios-document")
                    | 文章管理
                MenuItem(name="2")
                    Icon(type="ios-chatbubbles")
                    | 评论管理
            MenuGroup(title="统计分析")
                MenuItem(name="3")
                    Icon(type="ios-heart")
                    | 用户留存
                MenuItem(name="4")
                    Icon(type="ios-broken")
                    | 流失用户
        br
        p 切换主题
        RadioGroup(v-model="theme3")
            Radio(label="light")
            Radio(label="dark")
</template>

<script>
  import { Row, Col, Menu, MenuItem, XButton, Icon, Submenu, MenuGroup, RadioGroup, Radio } from '@/components'

  export default {
    components: {
      Row,
      Col,
      Menu,
      MenuItem,
      XButton,
      Icon,
      Submenu,
      MenuGroup,
      RadioGroup,
      Radio
    },
    data () {
      return {
        theme1: 'light',
        theme2: 'light',
        theme3: 'light'
      }
    }
  }
</script>

<style lang="less">
    @css-prefix: ay-;

    .@{css-prefix}icon-ios-arrow-down{
        margin-left: 5px;
    }

</style>