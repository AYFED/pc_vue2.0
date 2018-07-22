<template lang="pug">
    div
        h2 Form 表单
        h5 由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据
        br
        p 行内表单
        Form(ref="formInline", :model="formInline", :rules="ruleInline", inline)
            FormItem(prop="user")
                Input(type="text", v-model="formInline.user", placeholder="请输入用户名")
                    Icon(type="ios-person-outline", slot="prepend")
            FormItem(prop="password")
                Input(type="password", v-model="formInline.password", placeholder="请输入密码")
                    Icon(type="ios-locked-outline", slot="prepend")
            FormItem
                XButton(type="primary", @click="handleSubmit('formInline')") 登录
        br
        br
        p 表单控件
        Form(:model="formItem" :label-width="80")
            FormItem(label="Input")
                Input(v-model="formItem.input", placeholder="请输入内容...")
            FormItem(label="Select")
                XSelect(v-model="formItem.select")
                    XOption(value="beijing") 北京
                    XOption(value="shanghai") 上海
                    XOption(value="shenzhen") 深圳
            FormItem(label="DatePicker")
                Row
                    Col(span="4")
                        DatePicker(type="date", placeholder="选择日期", v-model="formItem.date")
                    Col(span="1", style="text-align: left") --
                    Col(span="4")
                        TimePicker(type="time", placeholder="选择时间", v-model="formItem.time")
            FormItem(label="Radio")
                RadioGroup(v-model="formItem.radio")
                    Radio(label="male") 男
                    Radio(label="female") 女
            FormItem(label="Checkbox")
                CheckboxGroup(v-model="formItem.checkbox")
                    Checkbox(label="Eat")
                    Checkbox(label="Sleep")
                    Checkbox(label="Run")
                    Checkbox(label="Movie")
            FormItem(label="Switch")
                XSwitch(v-model="formItem.switch", size="large")
                    span(slot="open") 开
                    span(slot="close") 关
            FormItem(label="Slider")
                Slider(v-model="formItem.slider", range)
            FormItem(label="Text")
                Input(v-model="formItem.textarea", type="textarea", :autosize="{minRows: 2,maxRows: 5}", placeholder="请输入...")
            FormItem
                XButton(type="primary") 提交
                XButton(type="ghost", style="margin-left: 20px") 取消
        br
        br
        p 对齐方式
        Form(:model="formLeft", label-position="left", :label-width="100")
            FormItem(label="Title")
                Input(v-model="formLeft.input1")
            FormItem(label="Title name")
                Input(v-model="formLeft.input2")
            FormItem(label="Aligned title")
                Input(v-model="formLeft.input3")
        Form(:model="formRight", label-position="right", :label-width="100")
            FormItem(label="Title")
                Input(v-model="formRight.input1")
            FormItem(label="Title name")
                Input(v-model="formRight.input2")
            FormItem(label="Aligned title")
                Input(v-model="formRight.input3")
        Form(:model="formTop", label-position="top")
            FormItem(label="Title")
                Input(v-model="formTop.input1")
            FormItem(label="Title name")
                Input(v-model="formTop.input2")
            FormItem(label="Aligned title")
                Input(v-model="formTop.input3")
        br
        br
        p 表单验证
        Form(ref="formValidate", :model="formValidate", :rules="ruleValidate", :label-width="80")
            FormItem(label="Name", prop="name")
                Input(v-model="formValidate.name", placeholder="请输入名字")
            FormItem(label="E-mail", prop="mail")
                Input(v-model="formValidate.mail", placeholder="请输入邮箱")
            FormItem(label="City", prop="city")
                XSelect(v-model="formValidate.city", placeholder="请输入城市")
                    XOption(value="beijing") 北京
                    XOption(value="shanghai") 上海
                    XOption(value="shenzhen") 深圳
            FormItem(label="Date")
                Row
                    Col(span="4")
                        FormItem(prop="date")
                            DatePicker(type="date", placeholder="选择日期", v-model="formValidate.date")
                    Col(span="1", style="text-align: left") --
                    Col(span="4")
                        FormItem(prop="time")
                            TimePicker(type="time", placeholder="选择时间", v-model="formValidate.time")
            FormItem(label="Radio", prop="gender")
                RadioGroup(v-model="formValidate.radio")
                    Radio(label="male") 男
                    Radio(label="female") 女
            FormItem(label="Checkbox", prop="interest")
                CheckboxGroup(v-model="formValidate.checkbox")
                    Checkbox(label="Eat")
                    Checkbox(label="Sleep")
                    Checkbox(label="Run")
                    Checkbox(label="Movie")
            FormItem(label="Switch")
                XSwitch(v-model="formValidate.switch", size="large")
                    span(slot="open") 开
                    span(slot="close") 关
            FormItem(label="Slider")
                Slider(v-model="formValidate.slider", range)
            FormItem(label="Text", prop="desc")
                Input(v-model="formValidate.textarea", type="textarea", :autosize="{minRows: 2,maxRows: 5}", placeholder="请输入...")
            FormItem
                XButton(type="primary") 提交
                XButton(type="ghost", style="margin-left: 20px") 取消
        br
        br
        p 自定义验证
        Form(ref="formCustom", :model="formCustom", :rules="ruleCustom", :label-width="80")
            FormItem(label="Password", prop="passwd")
                Input(type="password", v-model="formCustom.passwd")
            FormItem(label="Confirm", prop="passwdCheck")
                Input(type="password", v-model="formCustom.passwdCheck")
            FormItem(label="Age", prop="age")
                Input(type="text", v-model="formCustom.age", number)
            FormItem
                XButton(type="primary", @click="handleSubmit('formCustom')") 提交
                XButton(type="ghost", @click="handleReset('formCustom')", style="margin-left: 14px") 重置
        br
        br
        p 动态增减表单项
        Form(ref="formDynamic", :model="formDynamic", :label-width="80", style="width: 300px")
            FormItem(v-for="(item, index) in formDynamic.items", v-if="item.status == 1", :key="index", :label="'Item ' + item.index", :prop="'items.' + index + '.value'", :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}")
                Row
                    Col(span="14")
                        Input(type="text", v-model="item.value", placeholder="请输入...")
                    Col(span="6", offset="2")
                        XButton(type="ghost", @click="handleRemove(index)") 删除
            FormItem
                Row
                    Col(span="12")
                        XButton(type="dashed", long, @click="handleAdd", icon="ios-add") 新增一项
            FormItem
                XButton(type="primary", @click="handleSubmit('formDynamic')") 提交
                XButton(type="ghost", @click="handleReset('formDynamic')", style="margin-left: 14px") 重置

</template>

<script>
  import { Col, Row, Form, FormItem, Input, Icon, XButton, XOption, XSelect, DatePicker, TimePicker, RadioGroup, Radio, CheckboxGroup, Checkbox, XSwitch, Slider } from '@/components'

  export default {
    components: {
      Row,
      Col,
      Form,
      FormItem,
      Input,
      Icon,
      XButton,
      XOption,
      XSelect,
      DatePicker,
      TimePicker,
      RadioGroup,
      Radio,
      CheckboxGroup,
      Checkbox,
      XSwitch,
      Slider
    },
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入你的密码'));
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入你的密码'));
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('输入的两次密码不匹配!'));
        } else {
          callback();
        }
      };
      const validateAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        // 模拟异步验证效果
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('必须输入数字'));
          } else {
            if (value < 18) {
              callback(new Error('年龄必须大于18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };

      return {
        formInline: {
          user: '',
          password: ''
        },
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        },
        formValidate: {
          name: '',
          mail: '',
          city: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        },
        formLeft: {
          input1: '',
          input2: '',
          input3: ''
        },
        formRight: {
          input1: '',
          input2: '',
          input3: ''
        },
        formTop: {
          input1: '',
          input2: '',
          input3: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码至少需要6位', trigger: 'blur' }
          ]
        },
        ruleValidate: {
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮件格式不正确', trigger: 'blur' }
          ],
          city: [
            { required: true, message: '请选择城市', trigger: 'change' }
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          interest: [
            { required: true, type: 'array', min: 1, message: '至少选择一项', trigger: 'change' },
            { type: 'array', max: 2, message: '最对选择两项', trigger: 'change' }
          ],
          date: [
            { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
          ],
          time: [
            { required: true, type: 'string', message: '请选择时间', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请输入接受', trigger: 'blur' },
            { type: 'string', min: 20, message: '文字不能少于20字', trigger: 'blur' }
          ]
        },
        formCustom: {
          passwd: '',
          passwdCheck: '',
          age: ''
        },
        ruleCustom: {
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ],
          age: [
            { validator: validateAge, trigger: 'blur' }
          ]
        },
        index: 1,
        formDynamic: {
          items: [
            {
              value: '',
              index: 1,
              status: 1
            }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('成功!');
          } else {
            this.$Message.error('失败!');
          }
        })
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('成功!');
          } else {
            this.$Message.error('失败!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      handleAdd () {
        this.index++;
        this.formDynamic.items.push({
          value: '',
          index: this.index,
          status: 1
        });
      },
      handleRemove (index) {
        this.formDynamic.items[index].status = 0;
      }
    }
  }
</script>

<style lang="less">

    @css-prefix: ay-;

    .@{css-prefix}checkbox{
        margin-right: 5px;
    }

</style>