<template lang="pug">
    div
        Row
            Col(span="4")
                Icon(type="ios-ionic",size="24")
            Col(span="4")
                Icon(type="ios-arrow-up",size="24")
            Col(span="4")
                Icon(type="ios-ionic",size="24")
            Col(span="4")
                Icon(type="ios-ionic",size="24")
            Col(span="4")
                Icon(type="ios-ionic",size="24")
            Col(span="4")
                Icon(type="ios-ionic",size="24")

</template>

<script>
  import { Col, Row, Icon } from '@/components'

  export default {
    components: {
      Icon,
      Col,
      Row
    },
  }
</script>

<style lang="less">
    @css-prefix: ay-;

</style>