<template lang="pug">
    div
        h2 Cascader 级联选择
        h5 当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择
        br
        p 基础用法
        Cascader(:data="data", v-model="value1", style="width: 200px")
        br
        br
        p 默认值
        Cascader(:data="data", v-model="value2", style="width: 200px")
        br
        br
        p 移入展开
        Cascader(:data="data", trigger="hover", style="width: 200px")





</template>

<script>
  import { Cascader } from '@/components'

  export default {
    components: {
      Cascader,
    },
    data () {
      return {
        value1: [],
        value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
        data: [{
          value: 'beijing',
          label: '北京',
          children: [
            {
              value: 'gugong',
              label: '故宫'
            },
            {
              value: 'tiantan',
              label: '天坛'
            },
            {
              value: 'wangfujing',
              label: '王府井'
            }
          ]
        }, {
          value: 'jiangsu',
          label: '江苏',
          children: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                {
                  value: 'fuzimiao',
                  label: '夫子庙',
                }
              ]
            },
            {
              value: 'suzhou',
              label: '苏州',
              children: [
                {
                  value: 'zhuozhengyuan',
                  label: '拙政园',
                },
                {
                  value: 'shizilin',
                  label: '狮子林',
                }
              ]
            }
          ],
        }]
      }
    }
  }
</script>

<style lang="less" scoped>

</style>