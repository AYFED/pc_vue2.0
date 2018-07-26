<template lang="pug">
    div
        h2 Dropdown 下拉菜单
        h5 将动作或菜单折叠到下拉菜单中
        br
        p 基础用法
        Dropdown
            a(href="javascript:void(0)") 下拉菜单
                Icon(type="ios-arrow-down")
            DropdownMenu(slot="list")
                DropdownItem 驴打滚
                DropdownItem 炸酱面
                DropdownItem(disabled) 豆汁儿
                DropdownItem 冰糖葫芦
                DropdownItem(divided) 北京烤鸭
        Dropdown(style="margin-left: 20px")
            XButton(type="primary") 下拉菜单
                Icon(type="ios-arrow-down")
            DropdownMenu(slot="list")
                DropdownItem 驴打滚
                DropdownItem 炸酱面
                DropdownItem(disabled) 豆汁儿
                DropdownItem 冰糖葫芦
                DropdownItem(divided) 北京烤鸭
        br
        br
        p 触发方式
        Dropdown
            a(href="javascript:void(0)") hover 触发
                Icon(type="ios-arrow-down")
            DropdownMenu(slot="list")
                DropdownItem 驴打滚
                DropdownItem 炸酱面
                DropdownItem 豆汁儿
                DropdownItem 冰糖葫芦
                DropdownItem 北京烤鸭
        Dropdown(trigger="click", style="margin-left: 20px")
            a(href="javascript:void(0)") click 触发
                Icon(type="ios-arrow-down")
            DropdownMenu(slot="list")
                DropdownItem 驴打滚
                DropdownItem 炸酱面
                DropdownItem 豆汁儿
                DropdownItem 冰糖葫芦
                DropdownItem 北京烤鸭
        Dropdown(trigger="custom", :visible="visible", style="margin-left: 20px")
            a(href="javascript:void(0)", @click="handleOpen") custom 触发
                Icon(type="ios-arrow-down")
            DropdownMenu(slot="list")
                p 常用于各种自定义下拉内容的场景。
                div(style="text-align: right;margin:10px;")
                    XButton(type="primary", @click="handleClose") 关闭
        br
        br
        p 触发方式
        Dropdown(placement="bottom-start")
            a(href="javascript:void(0)") 菜单(左)
                Icon(type="ios-arrow-down")
            DropdownMenu(slot="list")
                DropdownItem 驴打滚
                DropdownItem 炸酱面
                DropdownItem 豆汁儿
                DropdownItem 冰糖葫芦
                DropdownItem 北京烤鸭
        Dropdown(style="margin-left: 20px")
            a(href="javascript:void(0)") 菜单(居中)
                Icon(type="ios-arrow-down")
            DropdownMenu(slot="list")
                DropdownItem 驴打滚
                DropdownItem 炸酱面
                DropdownItem 豆汁儿
                DropdownItem 冰糖葫芦
                DropdownItem 北京烤鸭
        Dropdown(style="margin-left: 20px", placement="bottom-end")
            a(href="javascript:void(0)") 菜单(右)
                Icon(type="ios-arrow-down")
            DropdownMenu(slot="list")
                DropdownItem 驴打滚
                DropdownItem 炸酱面
                DropdownItem 豆汁儿
                DropdownItem 冰糖葫芦
                DropdownItem 北京烤鸭
        br
        br
        p 触发方式
        Dropdown
            a(href="javascript:void(0)") 北京小吃
                Icon(type="ios-arrow-down")
            DropdownMenu(slot="list")
                DropdownItem 驴打滚
                DropdownItem 炸酱面
                Dropdown(placement="right-start")
                    DropdownItem 北京烤鸭
                        Icon(type="ios-arrow-dropright",style="margin-left: 10px",)
                    DropdownMenu(slot="list")
                        DropdownItem 驴打滚
                        DropdownItem 炸酱面



</template>

<script>
  import { Col, Dropdown, DropdownItem, DropdownMenu, Icon, Row, XButton } from '@/components'

  export default {
    components: {
      Dropdown,
      DropdownMenu,
      DropdownItem,
      XButton,
      Row,
      Col,
      Icon,
    },
    data () {
      return {
        visible: false,
      }
    },
    methods: {
      handleOpen () {
        this.visible = true
      },
      handleClose () {
        this.visible = false
      },
    },
  }
</script>

<style lang="less" scoped>

    .ay-icon-ios-arrow-down {
        margin-left: 5px;
    }

    .ay-dropdown-menu {

        p {
            margin: 10px;
        }
    }
</style>