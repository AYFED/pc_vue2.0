<template lang="pug">
    div
        h2 Steps 步骤条
        h5 拆分某项流程的步骤，引导用户按流程完成任务
        br
        p 基础用法
        Steps(:current="1")
            Step(title="已完成", content="这里是该步骤的描述信息")
            Step(title="进行中", content="这里是该步骤的描述信息")
            Step(title="待进行", content="这里是该步骤的描述信息")
            Step(title="待进行", content="这里是该步骤的描述信息")
        br
        br
        p 迷你版
        Steps(:current="2", size="small")
            Step(title="已完成", content="这里是该步骤的描述信息")
            Step(title="进行中", content="这里是该步骤的描述信息")
            Step(title="待进行", content="这里是该步骤的描述信息")
            Step(title="待进行", content="这里是该步骤的描述信息")
        br
        br
        p 带图标的步骤条
        Steps(:current="1")
            Step(icon="ios-person", title="已完成", content="这里是该步骤的描述信息")
            Step(icon="ios-camera", title="进行中", content="这里是该步骤的描述信息")
            Step(icon="ios-cart", title="待进行", content="这里是该步骤的描述信息")
            Step(icon="ios-cloud", title="待进行", content="这里是该步骤的描述信息")
        br
        br
        p 切换步骤
        p 当前正在进行第 {{ current + 1 }} 步
        Steps(:current="current")
            Step(icon="ios-person", title="步骤1", content="这里是该步骤的描述信息")
            Step(icon="ios-camera", title="步骤2", content="这里是该步骤的描述信息")
            Step(icon="ios-cart", title="步骤3", content="这里是该步骤的描述信息")
            Step(icon="ios-cloud", title="步骤4", content="这里是该步骤的描述信息")
        br
        XButton(type="primary", @click="next") 下一步
        br
        br
        p 垂直方向
        Steps(:current="1", direction="vertical")
            Step(icon="ios-person", title="已完成", content="这里是该步骤的描述信息")
            Step(icon="ios-camera", title="进行中", content="这里是该步骤的描述信息")
            Step(icon="ios-cart", title="待进行", content="这里是该步骤的描述信息")
            Step(icon="ios-cloud", title="待进行", content="这里是该步骤的描述信息")
        br
        br
        p 步骤运行错误
        Steps(:current="1", status="error")
            Step(title="已完成", content="这里是该步骤的描述信息")
            Step(title="进行中", content="这里是该步骤的描述信息")
            Step(title="待进行", content="这里是该步骤的描述信息")
            Step(title="待进行", content="这里是该步骤的描述信息")
</template>

<script>
  import { Steps, Step, Icon, XButton } from '@/components'

  export default {
    components: {
      Steps,
      Step,
      Icon,
      XButton
    },
    data () {
      return {
        current: 0
      }
    },
    methods: {
      next () {
        if (this.current == 3) {
          this.current = 0;
        } else {
          this.current += 1;
        }
      }
    }
  }
</script>

<style scoped>

</style>