<template lang="pug">
    div
        h2 Table 表格
        h5 用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作
        br
        p 基础表格
        XTable(:columns="columns1", :data="data1")
        br
        br
        p 斑马纹表格
        XTable(:columns="columns1", :data="data1", stripe)
        br
        br
        p 特定样式
        XTable(:columns="columns1", :data="data1", :row-class-name="rowClassName")
        br
        XTable(:columns="columns9", :data="data1")
        br
        XTable(:columns="columns1", :data="data8")
        br
        br
        p 固定表头样式
        XTable(:columns="columns1", :data="data2", height="200")
        br
        br
        p 固定列样式
        XTable(:columns="columns2", :data="data3", width="550", border)
        br
        br
        p 固定表头和列
        XTable(:columns="columns2", :data="data3", width="550", height="200", border)
        br
        br
        p 单选交互
        XTable(:columns="columns3", :data="data1", highlight-row, ref="currentRowTable")
        XButton(@click="handleClearCurrentRow", type="primary", style="margin-top: 10px;width:100px;") 清空
        br
        br
        p 多选交互
        XTable(:columns="columns4", :data="data1", highlight-row, ref="selection")
        XButton(@click="handleSelectAll(true)", type="primary", style="margin-top: 10px;width:100px;") 设置全选
        XButton(@click="handleSelectAll(false)", type="primary", style="margin-left: 20px;margin-top: 10px;width:100px;") 取消全选
        br
        br
        p 排序交互
        XTable(:columns="columns5", :data="data5", border)
        br
        br
        p 自定义列模板
        XTable(:columns="columns7", :data="data6", border)
        br
        br
        p 加载中
        XTable(:loadingSpinner="loading", :columns="columns1", :data="data1")
        br
        XSwitch(v-model="loading")
        | 切换 Loading 状态
        br
        br
        p 尺寸样式
        XTable(size="large", :columns="columns1", :data="data1")
        br
        XTable(size="small", :columns="columns1", :data="data1")
        br
        br
        p 导出csv
        XTable(size="small", :columns="columns8", :data="data7", ref="table")
        br
        XButton(type="primary", size="large", @click="exportData(1)")
            Icon(type="ios-download-outline")
            | 导出原始数据
        XButton(type="primary", size="large", @click="exportData(2)")
            Icon(type="ios-download-outline")
            | 导出排序和过滤后的数据
        XButton(type="primary", size="large", @click="exportData(3)")
            Icon(type="ios-download-outline")
            | 导出自定义数据


</template>

<script>
  import { Icon, XButton, XSwitch, XTable, Page, Tag, Poptip } from '@/components'

  export default {
    components: {
      Icon,
      XTable,
      XButton,
      XSwitch,
      Page,
      Tag,
      Poptip
    },
    data () {
      return {
        loading: true,
        columns1: [
          {
            title: 'Name',
            key: 'name',
          },
          {
            title: 'Age',
            key: 'age',
          },
          {
            title: 'Address',
            key: 'address',
          },
        ],
        columns2: [
          {
            title: 'Name',
            key: 'name',
            width: 100,
            fixed: 'left',
          },
          {
            title: 'Age',
            key: 'age',
            width: 100,
          },
          {
            title: 'Province',
            key: 'province',
            width: 100,
          },
          {
            title: 'City',
            key: 'city',
            width: 100,
          },
          {
            title: 'Address',
            key: 'address',
            width: 200,
          },
          {
            title: 'Postcode',
            key: 'zip',
            width: 100,
          },
          {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            width: 120,
            render: (h) => {
              return h('div', [
                h('span', {
                  props: {
                    type: 'text',
                    size: 'small',
                  },
                }, '查看'),
                h('span', {
                  style: {
                    marginLeft: '10px',
                  },
                }, '编辑'),
              ])
            },
          },
        ],
        columns3: [
          {
            type: 'index',
            width: 60,
            align: 'center',
          },
          {
            title: 'Name',
            key: 'name',
          },
          {
            title: 'Age',
            key: 'age',
          },
          {
            title: 'Address',
            key: 'address',
          },
        ],
        columns4: [
          {
            type: 'selection',
            width: 60,
            align: 'center',
          },
          {
            title: 'Name',
            key: 'name',
          },
          {
            title: 'Age',
            key: 'age',
          },
          {
            title: 'Address',
            key: 'address',
          },
        ],
        columns5: [
          {
            title: 'Date',
            key: 'date',
            sortable: true,
          },
          {
            title: 'Name',
            key: 'name',
          },
          {
            title: 'Age',
            key: 'age',
            sortable: true,
          },
          {
            title: 'Address',
            key: 'address',
          },
        ],
        columns7: [
          {
            title: 'Name',
            key: 'name',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'ios-person',
                  },
                  style: {
                    marginRight: '5px',
                  },
                }),
                h('strong', `${params.row.name} - ${params.index}`),
              ])
            },
          },
          {
            title: 'Age',
            key: 'age',
          },
          {
            title: 'Address',
            key: 'address',
          },
          {
            title: 'Action',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small',
                  },
                  style: {
                    marginRight: '5px',
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    },
                  },
                }, 'View'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small',
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    },
                  },
                }, 'Delete'),
              ])
            },
          },
        ],
        columns8: [
          {
            'title': 'Name',
            'key': 'name',
            'fixed': 'left',
            'width': 200,
          },
          {
            'title': 'Show',
            'key': 'show',
            'width': 150,
            'sortable': true,
            filters: [
              {
                label: 'Greater than 4000',
                value: 1,
              },
              {
                label: 'Less than 4000',
                value: 2,
              },
            ],
            filterMultiple: false,
            filterMethod (value, row) {
              if (value === 1) {
                return row.show > 4000
              } else if (value === 2) {
                return row.show < 4000
              }
            },
          },
          {
            'title': 'Weak',
            'key': 'weak',
            'width': 150,
            'sortable': true,
            filters: [
              {
                label: 'Greater than 4000',
                value: 1,
              },
              {
                label: 'Less than 4000',
                value: 2,
              },
            ],
            filterMultiple: true,
            filterMethod (value, row) {
              if (value === 1) {
                return row.show > 4000
              } else if (value === 2) {
                return row.show < 4000
              }
            },
          },
          {
            'title': 'Signin',
            'key': 'signin',
            'width': 150,
            'sortable': true,
          },
          {
            'title': 'Click',
            'key': 'click',
            'width': 150,
            'sortable': true,
          },
          {
            'title': 'Active',
            'key': 'active',
            'width': 150,
            'sortable': true,
          },
          {
            'title': '7, retained',
            'key': 'day7',
            'width': 150,
            'sortable': true,
          },
          {
            'title': '30, retained',
            'key': 'day30',
            'width': 150,
            'sortable': true,
          },
          {
            'title': 'The next day left',
            'key': 'tomorrow',
            'width': 150,
            'sortable': true,
          },
          {
            'title': 'Day Active',
            'key': 'day',
            'width': 150,
            'sortable': true,
          },
          {
            'title': 'Week Active',
            'key': 'week',
            'width': 150,
            'sortable': true,
          },
          {
            'title': 'Month Active',
            'key': 'month',
            'width': 150,
            'sortable': true,
          },
        ],
        columns9: [
          {
            title: 'Name',
            key: 'name',
          },
          {
            title: 'Age',
            key: 'age',
            className: 'demo-table-info-column',
          },
          {
            title: 'Address',
            key: 'address',
          },
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03',
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01',
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02',
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04',
          },
        ],
        data2: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03',
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01',
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02',
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04',
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03',
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01',
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02',
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04',
          },
        ],
        data3: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            province: 'America',
            city: 'New York',
            zip: 100000,
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'Washington, D.C. No. 1 Lake Park',
            province: 'America',
            city: 'Washington, D.C.',
            zip: 100000,
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            province: 'Australian',
            city: 'Sydney',
            zip: 100000,
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            province: 'Canada',
            city: 'Ottawa',
            zip: 100000,
          },
        ],
        data5: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03',
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01',
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02',
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04',
          },
        ],
        data6: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
          },
        ],
        data7: [
          {
            'name': 'Name1',
            'fav': 0,
            'show': 7302,
            'weak': 5627,
            'signin': 1563,
            'click': 4254,
            'active': 1438,
            'day7': 274,
            'day30': 285,
            'tomorrow': 1727,
            'day': 558,
            'week': 4440,
            'month': 5610,
          },
          {
            'name': 'Name2',
            'fav': 0,
            'show': 4720,
            'weak': 4086,
            'signin': 3792,
            'click': 8690,
            'active': 8470,
            'day7': 8172,
            'day30': 5197,
            'tomorrow': 1684,
            'day': 2593,
            'week': 2507,
            'month': 1537,
          },
          {
            'name': 'Name3',
            'fav': 0,
            'show': 7181,
            'weak': 8007,
            'signin': 8477,
            'click': 1879,
            'active': 16,
            'day7': 2249,
            'day30': 3450,
            'tomorrow': 377,
            'day': 1561,
            'week': 3219,
            'month': 1588,
          },
          {
            'name': 'Name4',
            'fav': 0,
            'show': 9911,
            'weak': 8976,
            'signin': 8807,
            'click': 8050,
            'active': 7668,
            'day7': 1547,
            'day30': 2357,
            'tomorrow': 7278,
            'day': 5309,
            'week': 1655,
            'month': 9043,
          },
          {
            'name': 'Name5',
            'fav': 0,
            'show': 934,
            'weak': 1394,
            'signin': 6463,
            'click': 5278,
            'active': 9256,
            'day7': 209,
            'day30': 3563,
            'tomorrow': 8285,
            'day': 1230,
            'week': 4840,
            'month': 9908,
          },
          {
            'name': 'Name6',
            'fav': 0,
            'show': 6856,
            'weak': 1608,
            'signin': 457,
            'click': 4949,
            'active': 2909,
            'day7': 4525,
            'day30': 6171,
            'tomorrow': 1920,
            'day': 1966,
            'week': 904,
            'month': 6851,
          },
          {
            'name': 'Name7',
            'fav': 0,
            'show': 5107,
            'weak': 6407,
            'signin': 4166,
            'click': 7970,
            'active': 1002,
            'day7': 8701,
            'day30': 9040,
            'tomorrow': 7632,
            'day': 4061,
            'week': 4359,
            'month': 3676,
          },
          {
            'name': 'Name8',
            'fav': 0,
            'show': 862,
            'weak': 6520,
            'signin': 6696,
            'click': 3209,
            'active': 6801,
            'day7': 6364,
            'day30': 6850,
            'tomorrow': 9408,
            'day': 2481,
            'week': 1479,
            'month': 2346,
          },
          {
            'name': 'Name9',
            'fav': 0,
            'show': 567,
            'weak': 5859,
            'signin': 128,
            'click': 6593,
            'active': 1971,
            'day7': 7596,
            'day30': 3546,
            'tomorrow': 6641,
            'day': 1611,
            'week': 5534,
            'month': 3190,
          },
          {
            'name': 'Name10',
            'fav': 0,
            'show': 3651,
            'weak': 1819,
            'signin': 4595,
            'click': 7499,
            'active': 7405,
            'day7': 8710,
            'day30': 5518,
            'tomorrow': 428,
            'day': 9768,
            'week': 2864,
            'month': 5811,
          },
        ],
        data8: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            cellClassName: {
              age: 'demo-table-info-cell-age',
              address: 'demo-table-info-cell-address',
            },
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            cellClassName: {
              name: 'demo-table-info-cell-name',
            },
          },
        ],
      }
    },
    methods: {
      rowClassName (row, index) {
        if (index === 1) {
          return 'demo-table-info-row'
        } else if (index === 3) {
          return 'demo-table-error-row'
        }
        return ''
      },
      handleClearCurrentRow () {
        this.$refs.currentRowTable.clearCurrentRow()
      },
      handleSelectAll (status) {
        this.$refs.selection.selectAll(status)
      },
      exportData (type) {
        if (type === 1) {
          this.$refs.table.exportCsv({
            filename: '原始数据',
          })
        } else if (type === 2) {
          this.$refs.table.exportCsv({
            filename: '过滤数据',
            original: false,
          })
        } else if (type === 3) {
          this.$refs.table.exportCsv({
            filename: '自定义数据',
            columns: this.columns8.filter((col, index) => index < 4),
            data: this.data7.filter((data, index) => index < 4),
          })
        }
      },
    },
  }
</script>

<style lang="less">

    @css-prefix: ay-;

    .@{css-prefix}table {

        .demo-table-info-row {
            td {
                background-color: #2db7f5;
                color: #fff;
            }
        }

        .demo-table-error-row {
            td {
                background-color: #ff6600;
                color: #fff;
            }
        }

        .demo-table-info-column {
            background-color: #2db7f5;
            color: #fff;
        }

        .demo-table-info-cell-name {
            background-color: #2db7f5;
            color: #fff;
        }

        .demo-table-info-cell-age {
            background-color: #ff6600;
            color: #fff;
        }

        .demo-table-info-cell-address {
            background-color: #187;
            color: #fff;
        }

        .@{css-prefix}table-row {
            cursor: pointer;
        }

        .@{css-prefix}table-row-highlight {
            td {
                background: #2d8cf0;
                color: #fff;
            }

            &:hover {
                td {
                    background: #2d8cf0;
                    color: #fff;
                }
            }
        }

        .@{css-prefix}table-row-hover {
            td {
                background: #2d8cf0;
                color: #fff;
            }
        }
    }

    .@{css-prefix}loading-mask {
        border: 1px solid #dddee1;
        border-left: 0;
        border-top: 0;
    }

    .@{css-prefix}switch {
        margin-right: 5px;
    }

    .@{css-prefix}icon {
        margin-right: 5px;
    }

    .@{css-prefix}btn {
        margin-right: 20px;
    }


</style>