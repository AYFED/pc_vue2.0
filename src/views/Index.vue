<template lang="pug">
    div.ay-demo-layout

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
    name: 'Index',
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

<style lang="less" scoped>
    @css-prefix: ay-;

</style>