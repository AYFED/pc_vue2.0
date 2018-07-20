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
        br
        br
        p 自定义显示
        p {{ text }}
        Cascader(:data="data", @on-change="handleChange", trigger="hover", style="width: 200px")
            a(href="javascript:void(0)") 选择
        br
        br
        p 禁用
        Cascader(:data="data2", disabled, style="width: 200px")
        br
        Cascader(:data="data2",  trigger="hover", style="width: 200px")
        br
        br
        p 选择即改变
        Cascader(:data="data", change-on-select, style="width: 200px")
        br
        br
        p 自定义已选项
        Cascader(:data="data3", :render-format="format", style="width: 200px")
        br
        br
        p 尺寸选项
        Cascader(:data="data", size="large", style="width: 200px")
        br
        Cascader(:data="data", style="width: 200px")
        br
        Cascader(:data="data", size="small", style="width: 200px")
        br
        br
        p 动态加载选项
        Cascader(:data="data4", :load-data="loadData", style="width: 200px")
        br
        br
        p 搜索选项
        Cascader(v-model="value3", :data="data", filterable, style="width: 200px")
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
        value3: [],
        text: '未选择',
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
        }],
        data2: [{
          value: 'zhejiang',
          label: '浙江',
          children: [{
            value: 'hangzhou',
            label: '杭州',
            children: [{
              value: 'xihu',
              label: '西湖'
            },{
              value: 'huzhou',
              label: '湖州',
              disabled: true,
            }
            ]
          }]
        }, {
          value: 'jiangsu',
          label: '江苏',
          disabled: true,
          children: [{
            value: 'nanjing',
            label: '南京',
            children: [{
              value: 'zhonghuamen',
              label: '中华门'
            }]
          }]
        }],
        data3: [{
          value: 'zhejiang',
          label: '浙江',
          children: [{
            value: 'hangzhou',
            label: '杭州',
            children: [{
              value: 'xihu',
              label: '西湖',
              code: 310000
            }]
          }]
        }, {
          value: 'jiangsu',
          label: '江苏',
          children: [{
            value: 'nanjing',
            label: '南京',
            children: [{
              value: 'zhonghuamen',
              label: '中华门',
              code: 210000
            }]
          }]
        }],
        data4: [
          {
            value: 'beijing',
            label: '北京',
            children: [],
            loading: false
          },
          {
            value: 'hangzhou',
            label: '杭州',
            children: [],
            loading:false
          }
        ]
      }
    },
    methods: {
      handleChange (value, selectedData) {
        this.text = selectedData.map(o => o.label).join(', ');
      },
      format (labels, selectedData) {
        const index = labels.length - 1;
        const data = selectedData[index] || false;
        if (data && data.code) {
          return '位置：' + labels[index] + ' - 编码：' + data.code;
        }else{
          return labels[index];
        }
      },
      loadData (item, callback) {
        item.loading = true;
        setTimeout(() => {
          if (item.value === 'beijing') {
            item.children = [
              {
                value: 'aoyou',
                label: '遨游网',
                children: [
                  {
                    value: 'qianduan',
                    label: '前端',
                  },
                  {
                    value: 'houduan',
                    label: '后端',
                  }
                ]
              },
              {
                value: 'baidu',
                label: '百度'
              },
              {
                value: 'sina',
                label: '新浪'
              }
            ];
          } else if (item.value === 'hangzhou') {
            item.children = [
              {
                value: 'ali',
                label: '阿里巴巴'
              },
              {
                value: '163',
                label: '网易'
              }
            ];
          }
          item.loading = false;
          callback();
        }, 1000);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>