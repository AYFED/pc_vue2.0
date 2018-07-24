<template lang="pug">
    div
        h2 Tag 标签
        h5 用于标记和选择
        br
        p 基础用法
        Tag 标签一
        Tag(v-if="show", closable, @on-close="handleClose") 标签二
        br
        br
        p 样式类型
        Tag(type="border") 标签一
        Tag(type="border", closable) 标签二
        Tag(type="dot") 标签三
        Tag(type="dot", closable) 标签四
        br
        br
        p 各种颜色
        Tag(closable, color="blue") 标签一
        Tag(closable, color="green") 标签二
        Tag(closable, color="red") 标签三
        Tag(closable, color="#cdcdcd") 标签四
        br
        br
        Tag(type="border", closable, color="blue") 标签一
        Tag(type="border", closable, color="green") 标签二
        Tag(type="border", closable, color="red") 标签三
        Tag(type="border", closable, color="#cdcdcd") 标签四
        br
        br
        Tag(type="dot", closable, color="blue") 标签一
        Tag(type="dot", closable, color="green") 标签二
        Tag(type="dot", closable, color="red") 标签三
        Tag(type="dot", closable, color="#cdcdcd") 标签四
        br
        br
        Tag(closable, color="#EF6AFF", checkable) 标签一
        Tag(type="border", closable, color="#EF6AFF", checkable) 标签二
        Tag(type="dot", closable, color="#EF6AFF", checkable) 标签三
        Tag(closable, color="default", checkable) 标签四
        br
        br
        p 可选择
        Tag(checkable, color="blue") 标签一
        Tag(checkable, color="green") 标签二
        Tag(checkable, color="red") 标签三
        Tag(checkable, color="orange") 标签四
        br
        br
        p 动态添加和删除
        Tag(v-for="item in count", :key="item", :name="item", closable, @on-close="handleClose2") 标签{{ item + 1 }}
        XButton(icon="ios-plus-empty", type="dashed", size="small", @click="handleAdd") 添加标签
</template>

<script>
  import { Tag, XButton } from '@/components'

  export default {
    components: {
      Tag,
      XButton
    },
    data () {
      return {
        show: true,
        count: [0, 1, 2]
      }
    },
    methods: {
      handleClose () {
        this.show = false;
      },
      handleAdd () {
        if (this.count.length) {
          this.count.push(this.count[this.count.length - 1] + 1);
        } else {
          this.count.push(0);
        }
      },
      handleClose2 (event, name) {
        const index = this.count.indexOf(name);
        this.count.splice(index, 1);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>