<template lang="html">
    <div :class="wrapperClasses">
        <div :class="spinnerClasses">
            <Spin fix>
                <Icon type="ios-sync" size="18" :class="iconClasses"></Icon>
                <div v-if="text" :class="textClasses">{{text}}</div>
            </Spin>

        </div>
    </div>
</template>

<script>
  const prefixCls = 'ay-scroll'

  import { Icon, Spin } from '@/components'

  export default {
    props: ['text', 'active', 'spinnerHeight'],
    components: {
      Icon,
      Spin
    },
    computed: {
      wrapperClasses () {
        return [
          `${prefixCls}-loader-wrapper`,
          {
            [`${prefixCls}-loader-wrapper-active`]: this.active,
          },
        ]
      },
      spinnerClasses () {
        return `${prefixCls}-spinner`
      },
      iconClasses () {
        return `${prefixCls}-spinner-icon`
      },
      textClasses () {
        return `${prefixCls}-loader-text`
      },
    },
  }
</script>
