<template lang="pug">
    div
        h2 Scroll 无限滚动
        h5 常用于滚动至底部时，触发加载更多数据
        br
        p 基础用法
        Scroll(:on-reach-bottom="handleReachBottom")
            Card(dis-hover, v-for="(item, index) in list1", :key="index", style="margin: 32px 0")
                Content {{item}}
        br
        br
        p 顶部触发
        Scroll(:on-reach-bottom="handleReachTop")
            Card(dis-hover, v-for="(item, index) in list1", :key="index", style="margin: 32px 0")
                Content {{item}}
        br
        br
        p 边缘触发
        Scroll(:on-reach-bottom="handleReachEdge")
            Card(dis-hover, v-for="(item, index) in list1", :key="index", style="margin: 32px 0")
                Content {{item}}
</template>

<script>
  import { Scroll, Card } from '@/components'

  export default {
    components: {
      Scroll,
      Card
    },
    data () {
      return {
        list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        list2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        list3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    methods: {
      handleReachBottom () {
        return new Promise(resolve => {
          setTimeout(() => {
            const last = this.list1[this.list1.length - 1];
            for (let i = 1; i < 11; i++) {
              this.list1.push(last + i);
            }
            resolve();
          }, 2000);
        });
      },
      handleReachTop () {
        return new Promise(resolve => {
          setTimeout(() => {
            const first = this.list2[0];
            for (let i = 1; i < 11; i++) {
              this.list2.unshift(first - i);
            }
            resolve();
          }, 2000);
        });
      },
      handleReachEdge (dir) {
        return new Promise(resolve => {
          setTimeout(() => {
            if (dir > 0) {
              const first = this.list3[0];
              for (let i = 1; i < 11; i++) {
                this.list3.unshift(first - i);
              }
            } else {
              const last = this.list3[this.list3.length - 1];
              for (let i = 1; i < 11; i++) {
                this.list3.push(last + i);
              }
            }
            resolve();
          }, 2000);
        });
      }
    }
  }
</script>

<style lang="less" scoped>

</style>