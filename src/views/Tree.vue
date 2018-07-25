<template lang="pug">
    div
        h2 Tree 树形控件
        h5 用清晰的层级结构展示信息，可展开或折叠
        br
        p 基础用法
        Tree(:data="data1")
        br
        br
        p 可勾选
        Tree(:data="data1", show-checkbox)
        br
        br
        p 异步加载子节点
        Tree(:data="data2", :load-data="loadData", show-checkbox)
        br
        br
        p 默认展开、选中、勾选和禁用
        Tree(:data="data3", show-checkbox, multiple)
        br
        br
        p 默认展开、选中、勾选和禁用
        Row
            Col(span="6")
                Tree(:data="data4", :render="renderContent")
</template>

<script>
  import { Row, Col, Tree, XButton, Icon } from '@/components'

  export default {
    components: {
      Row,
      Col,
      Tree,
      XButton,
      Icon
    },
    data () {
      return {
        data1: [
          {
            title: '主题 1',
            expand: true,
            children: [
              {
                title: '主题 1-1',
                expand: true,
                children: [
                  {
                    title: '次主题 1-1-1'
                  },
                  {
                    title: '次主题 1-1-2'
                  }
                ]
              },
              {
                title: '主题 1-2',
                expand: true,
                children: [
                  {
                    title: '次主题 1-2-1'
                  },
                  {
                    title: '次主题 1-2-1'
                  }
                ]
              }
            ]
          }
        ],
        data2: [
          {
            title: 'parent',
            loading: false,
            children: []
          }
        ],
        data3: [
          {
            title: '主题 1',
            expand: true,
            selected: true,
            children: [
              {
                title: '主题 1-1',
                expand: true,
                children: [
                  {
                    title: '子标题 1-1-1',
                    disabled: true
                  },
                  {
                    title: '子标题 1-1-2'
                  }
                ]
              },
              {
                title: '主题 1-2',
                expand: true,
                children: [
                  {
                    title: '子标题 1-2-1',
                    checked: true
                  },
                  {
                    title: '子标题 1-2-1'
                  }
                ]
              }
            ]
          }
        ],
        data4: [
          {
            title: '主题 1',
            expand: true,
            render: (h, { root, node, data }) => {
              return h('span', {
                style: {
                  display: 'inline-block',
                  width: '100%'
                }
              }, [
                h('span', [
                  h('Icon', {
                    props: {
                      type: 'ios-folder-outline'
                    },
                    style: {
                      marginRight: '8px'
                    }
                  }),
                  h('span', data.title)
                ]),
                h('span', {
                  style: {
                    display: 'inline-block',
                    float: 'right',
                    marginRight: '32px'
                  }
                }, [
                  h('Button', {
                    props: Object.assign({}, this.buttonProps, {
                      icon: 'ios-plus-empty',
                      type: 'primary'
                    }),
                    style: {
                      width: '52px'
                    },
                    on: {
                      click: () => { this.append(data) }
                    }
                  })
                ])
              ]);
            },
            children: [
              {
                title: '子标题 1-1',
                expand: true,
                children: [
                  {
                    title: '子子标题 1-1-1',
                    expand: true
                  },
                  {
                    title: '子子标题 1-1-2',
                    expand: true
                  }
                ]
              },
              {
                title: '子标题 1-2',
                expand: true,
                children: [
                  {
                    title: '子子标题 1-2-1',
                    expand: true
                  },
                  {
                    title: '子子标题 1-2-1',
                    expand: true
                  }
                ]
              }
            ]
          }
        ],
        buttonProps: {
          type: 'ghost',
          size: 'small',
        }
      }
    },
    methods: {
      loadData (item, callback) {
        setTimeout(() => {
          const data = [
            {
              title: '字标题',
              loading: false,
              children: []
            },
            {
              title: '字标题',
              loading: false,
              children: []
            }
          ];
          callback(data);
        }, 1000);
      },
      renderContent (h, { root, node, data }) {
        return h('span', {
          style: {
            display: 'inline-block',
            width: '100%'
          }
        }, [
          h('span', [
            h('Icon', {
              props: {
                type: 'ios-paper-outline'
              },
              style: {
                marginRight: '8px'
              }
            }),
            h('span', data.title)
          ]),
          h('span', {
            style: {
              display: 'inline-block',
              float: 'right',
              marginRight: '32px'
            }
          }, [
            h('Button', {
              props: Object.assign({}, this.buttonProps, {
                icon: 'ios-plus-empty'
              }),
              style: {
                marginRight: '8px'
              },
              on: {
                click: () => { this.append(data) }
              }
            }),
            h('Button', {
              props: Object.assign({}, this.buttonProps, {
                icon: 'ios-minus-empty'
              }),
              on: {
                click: () => { this.remove(root, node, data) }
              }
            })
          ])
        ]);
      },
      append (data) {
        const children = data.children || [];
        children.push({
          title: '插入标题',
          expand: true
        });
        this.$set(data, 'children', children);
      },
      remove (root, node, data) {
        const parentKey = root.find(el => el === node).parent;
        const parent = root.find(el => el.nodeKey === parentKey).node;
        const index = parent.children.indexOf(data);
        parent.children.splice(index, 1);
      }
    }
  }
</script>

<style lang="less">
    @css-prefix: ay-;

    .@{css-prefix}checkbox-wrapper{
        margin-left: 8px;
    }

</style>