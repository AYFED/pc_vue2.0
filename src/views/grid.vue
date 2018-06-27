<template>
    <div>
        <Row>
            <Col span="12">col-12</Col>
            <Col span="12">col-12</Col>
        </Row>
        <br>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
        </Row>
        <br>
        <Row>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
        </Row>
        <br>
        <Row class="ay-gutter" :gutter="16">
            <Col span="6">
                <div>col-6</div>
            </Col>
            <Col span="6">
                <div>col-6</div>
            </Col>
            <Col span="6">
                <div>col-6</div>
            </Col>
            <Col span="6">
                <div>col-6</div>
            </Col>
        </Row>
    </div>
</template>

<script>
  import { Row, Col} from '@/components'

  export default {
    components: {
      Row,
      Col
    },
    data () {
      return {
        n: 2,
      }
    },
    methods: {
      add () {
        this.n++
      },
    },
  }
</script>

<style lang="less">
    @import url("//unpkg.com/iview/dist/styles/iview.css");

    .view {
        height: 100px;
        width: 100px;
        background: yellow;
    }

    .ivu-col{
        color: #fff;
        text-align: center;
        background: rgba(0,153,229,.7);
        padding: 10px 0;

        &:nth-child(odd){
            background: rgba(0,153,229,.9);
        }
    }

    .ay-gutter{
        .ivu-col{
            color: #fff;
            text-align: center;
            background: transparent;
            padding: 10px 0;

            &:nth-child(odd){
                background: transparent;
            }
            div{
                color: #fff;
                text-align: center;
                background: rgba(0,153,229,.7);
                padding: 10px 0;

                &:nth-child(odd){
                    background: rgba(0,153,229,.9);
                }
            }
        }
    }

</style>
