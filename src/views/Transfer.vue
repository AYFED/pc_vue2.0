<template lang="pug">
    div
        h2 Transfer 穿梭框
        h5
        br
        p 基础用法
        Transfer(:data="data1", :target-keys="targetKeys1", :render-format="render1", @on-change="handleChange1")
        br
        br
        p 搜索用法
        Transfer(:data="data2", :target-keys="targetKeys2", filterable, :filter-method="filterMethod", @on-change="handleChange2")
        br
        br
        p 高级用法
        Transfer(:data="data3", :target-keys="targetKeys3", :list-style="listStyle", :render-format="render3", :operations="['左移','右移']", filterable, @on-change="handleChange3")
            div(:style="{float: 'right', margin: '5px'}")
                XButton(type="ghost", size="small", @click="reloadMockData") 刷新
</template>

<script>
  import { Transfer, XButton } from '@/components'

  export default {
    components: {
      Transfer,
      XButton
    },
    data () {
      return {
        data1: this.getMockData(),
        targetKeys1: this.getTargetKeys(),
        data2: this.getMockData(),
        targetKeys2: this.getTargetKeys(),
        data3: this.getMockData(),
        targetKeys3: this.getTargetKeys(),
        listStyle: {
          width: '250px',
          height: '300px'
        }
      }
    },
    methods: {
      getMockData () {
        let mockData = [];
        for (let i = 1; i <= 20; i++) {
          mockData.push({
            key: i.toString(),
            label: '内容 ' + i,
            description: '描述内容  ' + i,
            disabled: Math.random() * 3 < 1
          });
        }
        return mockData;
      },
      getTargetKeys () {
        return this.getMockData()
        .filter(() => Math.random() * 2 > 1)
        .map(item => item.key);
      },
      render1 (item) {
        return item.label;
      },
      handleChange1 (newTargetKeys, direction, moveKeys) {
        console.log(newTargetKeys);
        console.log(direction);
        console.log(moveKeys);
        this.targetKeys1 = newTargetKeys;
      },
      handleChange2 (newTargetKeys) {
        this.targetKeys2 = newTargetKeys;
      },
      filterMethod (data, query) {
        return data.label.indexOf(query) > -1;
      },
      handleChange3 (newTargetKeys) {
        this.targetKeys3 = newTargetKeys;
      },
      render3 (item) {
        return item.label + ' - ' + item.description;
      },
      reloadMockData () {
        this.data3 = this.getMockData();
        this.targetKeys3 = this.getTargetKeys();
      }
    }
  }
</script>

<style lang="less" scoped>

</style>