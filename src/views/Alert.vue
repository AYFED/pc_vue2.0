<template lang="pug">
    div
        h2 Alert 警告
        h5 用于页面中展示重要的提示信息
        br
        p 基础用法
        Alert 一个信息提示
        Alert(type="success") 一个信息提示
        Alert(type="warning") 一个信息提示
        Alert(type="error") 一个信息提示
        br
        br
        p 基础用法
        Alert 一个信息提示
            template(slot="desc") 内容提醒,内容提醒
        Alert(type="success") 一个信息提示
            template(slot="desc") 内容提醒,内容提醒
        Alert(type="warning") 一个信息提示
            template(slot="desc") 内容提醒,内容提醒
        Alert(type="error") 一个错误提示
            template(slot="desc") 内容提醒,内容提醒
                Icon(type="ios-help-circle", size="14")
        br
        br
        p 图标
        Alert(show-icon) 一个信息提示
        Alert(type="success", show-icon) 一个信息提示
        Alert(type="warning", show-icon) 一个信息提示
        Alert(type="error", show-icon) 一个信息提示
        Alert(show-icon) 一个信息提示
            template(slot="desc")


</template>

<script>
  import { Alert, Icon } from '@/components'

  export default {
    components: {
      Alert,
      Icon
    },
  }
</script>

<style lang="less" scoped>
    @css-prefix: ay-;

    .@{css-prefix}icon-ios-help-circle{
        margin-left: 6px;
    }

</style>