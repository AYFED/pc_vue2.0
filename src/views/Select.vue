<template lang="pug">
    div
        h2 Select 选择器
        h5 当选项过多时，使用下拉菜单展示并选择内容
        br
        p 基础用法
        XSelect(v-model="model1", style="width: 200px")
            XOption(v-for="item in cityList", :value="item.value", :key="item.value") {{ item.label }}
        br
        br
        p 尺寸
        XSelect(v-model="model2", size="small", style="width:100px")
            XOption(v-for="item in cityList", :value="item.value", :key="item.value") {{ item.label }}
        XSelect(v-model="model3", style="width:100px")
            XOption(v-for="item in cityList", :value="item.value", :key="item.value") {{ item.label }}
        XSelect(v-model="model4", size="large", style="width:100px")
            XOption(v-for="item in cityList", :value="item.value", :key="item.value") {{ item.label }}
        br
        br
        p 禁用
        XSelect(v-model="model5", disabled, style="width:200px")
            XOption(v-for="item in cityList", :value="item.value", :key="item.value") {{ item.label }}
        XSelect(v-model="model6", style="width:200px")
            XOption(value="beijing") BeiJing
            XOption(value="shanghai", disabled) ShangHai
            XOption(value="shenzhen") ShenZhen
        br
        br
        p 分组
        XSelect(v-model="model7", style="width:200px")
            OptionGroup(label="热门城市")
                XOption(v-for="item in cityList1", :value="item.value", :key="item.value") {{ item.label }}
            OptionGroup(label="城市名称")
                XOption(v-for="item in cityList2", :value="item.value", :key="item.value") {{ item.label }}
        br
        br
        p 自定义模板
        XSelect(v-model="model9", style="width:200px")
            XOption(value="New York", label="New York")
                span New York
                span(style="float:right;color:#ccc") America
            XOption(value="London", label="London")
                span London
                span(style="float:right;color:#ccc") U.K.
            XOption(value="Sydney", label="Sydney")
                span Sydney
                span(style="float:right;color:#ccc") Australian
        br
        br
        p 多选
        XSelect(v-model="model10", multiple, style="width:260px")
            XOption(v-for="item in cityList", :value="item.value", :key="item.value") {{ item.label }}
        br
        br
        p 可搜索
        XSelect(v-model="model11", filterable, style="width:260px")
            XOption(v-for="item in cityList", :value="item.value", :key="item.value") {{ item.label }}
        XSelect(v-model="model12", filterable, multiple, style="width:260px")
            XOption(v-for="item in cityList", :value="item.value", :key="item.value") {{ item.label }}
        br
        br
        p 远程搜索
        XSelect(v-model="model13", filterable, remote, :remote-method="remoteMethod1", :loading="loading1", style="width:260px")
            XOption(v-for="(option, index) in options1", :value="option.value", :key="index") {{ option.label }}
        XSelect(v-model="model14", multiple, filterable, remote, :remote-method="remoteMethod2", :loading="loading2", style="width:260px")
            XOption(v-for="(option, index) in options2", :value="option.value", :key="index") {{ option.label }}

</template>

<script>
  import { OptionGroup, XOption, XSelect } from '@/components'

  export default {
    components: {
      OptionGroup,
      XSelect,
      XOption,
    },
    data () {
      return {
        cityList: [
          {
            value: 'New York',
            label: 'New York',
          },
          {
            value: 'London',
            label: 'London',
          },
          {
            value: 'Sydney',
            label: 'Sydney',
          },
          {
            value: 'Ottawa',
            label: 'Ottawa',
          },
          {
            value: 'Paris',
            label: 'Paris',
          },
          {
            value: 'Canberra',
            label: 'Canberra',
          },
        ],
        cityList1: [
          {
            value: 'New York',
            label: 'New York',
          },
          {
            value: 'London',
            label: 'London',
          },
          {
            value: 'Sydney',
            label: 'Sydney',
          },
        ],
        cityList2: [
          {
            value: 'Ottawa',
            label: 'Ottawa',
          },
          {
            value: 'Paris',
            label: 'Paris',
          },
          {
            value: 'Canberra',
            label: 'Canberra',
          },
        ],
        model1: 'New York',
        model2: '',
        model3: '',
        model4: '',
        model5: '',
        model6: '',
        model7: '',
        model8: '',
        model9: '',
        model10: [],
        model11: '',
        model12: [],
        model13: '',
        loading1: false,
        options1: [],
        model14: [],
        loading2: false,
        options2: [],
        list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming']
      }
    },
    methods: {
      remoteMethod1 (query) {
        if (query !== '') {
          this.loading1 = true;
          setTimeout(() => {
            this.loading1 = false;
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              };
            });
            this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 200);
        } else {
          this.options1 = [];
        }
      },
      remoteMethod2 (query) {
        if (query !== '') {
          this.loading2 = true;
          setTimeout(() => {
            this.loading2 = false;
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              };
            });
            this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 200);
        } else {
          this.options2 = [];
        }
      }
    }
  }
</script>

<style lang="less" scoped>
    @css-prefix: ay-;

    .@{css-prefix}select-single {
        margin-right: 20px;
    }
</style>

<style lang="less">
    @css-prefix: ay-;

    .@{css-prefix}tag-checked {
        .@{css-prefix}icon-ios-close {
            margin-left: 8px;
        }
    }

</style>