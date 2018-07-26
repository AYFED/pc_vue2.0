<template lang="pug">
    div
        h2 Breadcrumb 面包屑
        h5 显示当前页面的路径，快速返回之前的任意页面
        br
        p 基础用法
        Breadcrumb
            BreadcrumbItem(to="http://www.aoyou.com") 首页
            BreadcrumbItem(to="http://www.aoyou.com") 组件
            BreadcrumbItem(to="http://www.aoyou.com") 面包屑
        br
        br
        p 带图标的
        Breadcrumb
            BreadcrumbItem(to="http://www.aoyou.com")
                Icon(type="ios-home-outline")
                | 首页
            BreadcrumbItem(to="http://www.aoyou.com")
                Icon(type="ios-ice-cream")
                | 组件
            BreadcrumbItem(to="http://www.aoyou.com")
                Icon(type="ios-laptop")
                | 面包屑
        br
        br
        p 分隔符
        Breadcrumb(separator=">")
            BreadcrumbItem(to="http://www.aoyou.com") 首页
            BreadcrumbItem(to="http://www.aoyou.com") 组件
            BreadcrumbItem(to="http://www.aoyou.com") 面包屑
        Breadcrumb(separator="<b class='demo-breadcrumb-separator'>=></b>")
            BreadcrumbItem(to="http://www.aoyou.com") 首页
            BreadcrumbItem(to="http://www.aoyou.com") 组件
            BreadcrumbItem(to="http://www.aoyou.com") 面包屑
</template>

<script>
  import { Breadcrumb, BreadcrumbItem, Icon } from '@/components'

  export default {
    components: {
      Breadcrumb,
      BreadcrumbItem,
      Icon,
    },
  }
</script>

<style lang="less">
    @css-prefix: ay-;

    .@{css-prefix}breadcrumb {
        .@{css-prefix}icon {
            margin-right: 5px;
        }
    }

    .demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
    }

</style>