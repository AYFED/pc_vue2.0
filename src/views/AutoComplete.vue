<template lang="pug">
    div
        h2 AutoComplete 自动完成
        h5 输入框自动完成功能
        br
        p 基础用法
        AutoComplete(v-model="value1", :data="data1", @on-search="handleSearch1", placeholder="请输入", style="width:200px")
        br
        br
        p 自定义选项用法
        AutoComplete(v-model="value2", @on-search="handleSearch2", placeholder="请输入", style="width:200px")
            XOption(v-for="item in data2" :value="item" :key="item") {{item}}
        br
        br
        p 不区分大小写
        AutoComplete(v-model="value3", :data="data3", :filter-method="filterMethod", placeholder="请输入", style="width:200px")
        br
        br
        p 查询模式
        AutoComplete(v-model="value4", icon="ios-search", placeholder="请输入",@on-change="filterMethod1", style="width:200px")
            .demo-auto-complete-item(v-for="item in data4")
                .demo-auto-complete-group
                    Icon(type="ios-ionic",size="14",style="margin-right:4px;")
                    span {{ item.title }}
                    a(href="https://www.baidu.com/s?wd=遨游网", target="_blank") 更多
                XOption(v-for="option in item.children" :value="option.title" :key="option.title")
                    span.demo-auto-complete-title {{option.title}}
                    span.demo-auto-complete-count {{option.count}}
            a.demo-auto-complete-more(href="https://www.baidu.com/s?wd=遨游网", target="_blank") 查看所有结果
</template>

<script>
  import { AutoComplete, XOption, Icon } from '@/components'

  export default {
    components: {
      AutoComplete,
      XOption,
      Icon
    },
    data () {
      return {
        value1: '',
        data1: [],
        value2: '',
        data2: [],
        value3: '',
        data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive'],
        value4: '',
        data4: [
          {
            title: 'Steve Jobs',
            children: [
              {
                title: 'AYView',
                count: 100,

              },
              {
                title: 'AYView UI',
                count: 600,

              }
            ]
          },
          {
            title: 'Stephen Gary Wozniak',
            children: [
              {
                title: 'AYView UI 有多好',
                count: 100,

              },
              {
                title: 'AYView 是啥',
                count: 10,

              }
            ]
          },
          {
            title: 'Jonathan Paul Ive',
            children: [
              {
                title: 'AYView 是一个设计语言',
                count: 10,

              }
            ]
          }
        ]
      }
    },
    methods: {
      handleSearch1 (value) {
        this.data1 = !value ? [] : [value, value + value, value + value + Math.floor(Math.random() * (100 - 1)) + 1];
      },
      handleSearch2 (value) {
        this.data2 = !value || value.indexOf('@') >= 0 ? [] : [value + '@qq.com', value + '@sina.com', value + '@163.com'
        ];
      },
      filterMethod (value, option) {
        return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
      },
      filterMethod1 (value) {
        this.data4 = this.data4.filter(item =>{
          return item.title.toUpperCase().indexOf(value.toUpperCase()) !== -1;
        })
      },
    }
  }
</script>

<style lang="less">

    .demo-auto-complete-item{
        padding: 4px 0;
        border-bottom: 1px solid #F6F6F6;
    }
    .demo-auto-complete-group{
        font-size: 12px;
        padding: 4px 6px;
    }
    .demo-auto-complete-group span{
        color: #666;
        font-weight: bold;
    }
    .demo-auto-complete-group a{
        float: right;
    }
    .demo-auto-complete-count{
        float: right;
        color: #999;
    }
    .demo-auto-complete-more{
        display: block;
        margin: 0 auto;
        padding: 4px;
        text-align: center;
        font-size: 12px;
    }

</style>