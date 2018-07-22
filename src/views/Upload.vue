<template lang="pug">
    div
        h2 Upload 上传
        h5 通过点击或者拖拽上传文件
        br
        p 基础用法
        Row
            Col(span="6")
                Upload(action="//jsonplaceholder.typicode.com/posts/")
                    XButton(type="ghost", icon="ios-cloud-upload-outline") 点击上传
        br
        br
        p 多选用法
        Row
            Col(span="6")
                Upload(action="//jsonplaceholder.typicode.com/posts/", multiple)
                    XButton(type="ghost", icon="ios-cloud-upload-outline") 点击上传
        br
        br
        p 手动上传
        Row
            Col(span="6")
                Upload(action="//jsonplaceholder.typicode.com/posts/", :before-upload="handleUpload")
                    XButton(type="ghost", icon="ios-cloud-upload-outline") 选择文件上传
            Col(v-if="file !== null")
                div 上传文件:{{file.name}}
                    XButton(type="primary", @click="upload", :loading="loadingStatus") {{ loadingStatus ? '上传中...' : '点击上传' }}
        br
        br
        p 拖拽上传
        Row
            Col(span="6")
                Upload(action="//jsonplaceholder.typicode.com/posts/", multiple, type="drag")
                    div(style="padding: 20px 0")
                        Icon(type="ios-cloud-upload" size="52" style="color: #3399ff")
                        p.demo-tip 将文件拖到此处，或 <em>点击上传</em>
        br
        br
        p 自定义上传列表
        div(class="demo-upload-list", v-for="item in uploadList")
            template(v-if="item.status === 'finished'")
                img(:src="item.url")
                .demo-upload-list-cover
                    Icon(type="ios-eye-outline", @click.native="handleView(item.name)")
                    Icon(type="ios-trash-outline", @click.native="handleRemove(item)")
            template(v-else)
                Progress(v-if="item.showProgress", :percent="item.percentage", hide-info)
        Upload(ref="upload", :show-upload-list="false", :default-file-list="defaultList", :on-success="handleSuccess", :format="['jpg','jpeg','png']", :max-size="2048", :on-format-error="handleFormatError", :on-exceeded-size="handleMaxSize", :before-upload="handleBeforeUpload", multiple, type="drag", action="//jsonplaceholder.typicode.com/posts/", style="display: inline-block;width:58px;")
            div(style="width: 58px;height:58px;line-height: 58px;")
                Icon(type="ios-camera", size="32",style="margin-top: 14px;")
        Modal(title="查看图片" v-model="visible")
            img(:src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%")


</template>

<script>
  import { Col, Icon, Row, Upload, XButton, Progress, Modal } from '@/components'

  export default {
    components: {
      Row,
      Col,
      XButton,
      Upload,
      Icon,
      Progress,
      Modal
    },
    data () {
      return {
        file: null,
        loadingStatus: false,
        defaultList: [
          {
            'name': 'a42bdcc1178e62b4694c830f028db5c0',
            'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar',
          },
          {
            'name': 'bc7521e033abdd1e92222d733590f104',
            'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar',
          },
        ],
        imgName: '',
        visible: false,
        uploadList: [],
      }
    },
    methods: {
      handleUpload (file) {
        this.file = file
        return false
      },
      upload () {
        this.loadingStatus = true
        setTimeout(() => {
          this.file = null
          this.loadingStatus = false
          alert('上传成功')
        }, 1500)
      },
      handleView (name) {
        this.imgName = name
        this.visible = true
      },
      handleRemove (file) {
        const fileList = this.$refs.upload.fileList
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
      },
      handleSuccess (res, file) {
        file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar'
        file.name = '7eb99afb9d5f317c912f08b5212fd69a'
      },
      handleFormatError (file) {
        this.$Notice.warning({
          title: '文件格式不正确',
          desc: '文件格式 ' + file.name + ' 是正确, 请选择jpg或者png',
        })
      },
      handleMaxSize (file) {
        this.$Notice.warning({
          title: '文件大小超过限制',
          desc: '文件  ' + file.name + ' 太大了,文件不超过2M',
        })
      },
      handleBeforeUpload () {
        const check = this.uploadList.length < 5
        if (!check) {
          this.$Notice.warning({
            title: '最多可以上传5张图片',
          })
        }
        return check
      },
    },
    mounted () {
      this.uploadList = this.$refs.upload.fileList
    },
  }
</script>

<style lang="less" scoped>
    @css-prefix: ay-;

    .@{css-prefix}btn-primary {
        margin-left: 20px;
    }

    .demo-tip {

        em {
            color: #409eff;
            font-style: normal;
        }
    }

    .demo-upload-list {
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
        margin-right: 4px;
    }

    .demo-upload-list img {
        width: 100%;
        height: 100%;
    }

    .demo-upload-list-cover {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .6);
    }

    .demo-upload-list:hover .demo-upload-list-cover {
        display: block;
    }

    .demo-upload-list-cover i {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }

</style>