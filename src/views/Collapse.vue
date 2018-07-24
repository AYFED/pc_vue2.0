<template lang="pug">
    div
        h2 Collapse 折叠面板
        h5 通过折叠面板收纳内容区域
        br
        p 基础用法
        Collapse(v-model="value1")
            Panel(name="1") 遨游网1
                p(slot="content") 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容
            Panel(name="2") 遨游网2
                p(slot="content") 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容
            Panel(name="3") 遨游网3
                p(slot="content") 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容
        br
        br
        p 手风琴
        Collapse(v-model="value2", accordion)
            Panel(name="1") 遨游网1
                p(slot="content") 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容
            Panel(name="2") 遨游网2
                p(slot="content") 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容
            Panel(name="3") 遨游网3
                p(slot="content") 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容
        br
        br
        p 面板嵌套
        Collapse(v-model="value3", accordion)
            Panel(name="1") 遨游网1
                div(slot="content") 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容
                    Collapse(v-model="value4", accordion)
                        Panel(name="1-1") 遨游网1-1
                            p(slot="content") 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容
                        Panel(name="1-2") 遨游网1-2
                            p(slot="content") 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容
                        Panel(name="1-3") 遨游网1-3
                            p(slot="content") 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容
            Panel(name="2") 遨游网2
                p(slot="content") 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容
            Panel(name="3") 遨游网3
                p(slot="content") 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容
</template>

<script>
  import { Collapse, Panel } from '@/components'

  export default {
    components: {
      Collapse,
      Panel
    },
    data () {
      return {
        value1: '1',
        value2: '1',
        value3: '1',
        value4: '1-1'
      }
    }
  }
</script>

<style lang="less" scoped>

</style>