<template lang="pug">
    div
        h2 Avatar 头像
        h5 用来代表用户或事物，支持图片、图标或字符展示
        br
        p 基础用法
        .demo-avatar
            Avatar(icon="ios-person", size="large")
            Avatar(icon="ios-person")
            Avatar(icon="ios-person", size="small")
        br
        .demo-avatar
            Avatar(shape="square", icon="ios-person", size="large")
            Avatar(shape="square", icon="ios-person")
            Avatar(shape="square", icon="ios-person", size="small")
        br
        br
        p 类型
        .demo-avatar
            Avatar(icon="ios-person")
            Avatar 用户
            Avatar(style="color: #f56a00;background-color: #fde3cf") 用户
            Avatar(style="background-color: #87d068", icon="ios-person")
        br
        br
        p 带徽标的头像
        .demo-avatar-badge
            Badge(:count=1)
                Avatar(shape="square", icon="ios-person")
            Badge(dot)
                Avatar(shape="square", icon="ios-person")
        br
        br
        p 自动调整字符大小
        .demo-avatar
            Avatar(:style="{background: color}") {{ user }}
            XButton(size="small", @click="handleChange") 修改
</template>

<script>
  import { Avatar, Badge, XButton } from '@/components'

  const UserList = ['用户', '伟华', '其他', 'Tiny'];
  const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

  export default {
    components: {
      Avatar,
      Badge,
      XButton
    },
    data () {
      return {
        user: UserList[0],
        color: ColorList[0]
      }
    },
    methods: {
      handleChange () {
        const index = UserList.indexOf(this.user);
        this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
        this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
      }
    }
  }
</script>

<style lang="less" scoped>

    @css-prefix: ay-;

    .demo-avatar {

        .@{css-prefix}avatar {
            margin-right: 16px;
        }
    }

    .demo-avatar-badge {
        .@{css-prefix}badge {
            margin-right: 16px;
        }
    }

</style>