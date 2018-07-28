<template lang="pug">
    div
        .index
            .bg
                span
            .ay-row-flex.ay-row-flex-middle.ay-row-flex-center(style='position: relative; z-index: 3;')
                .ay-col.ay-col-span-24()
                    h1()
                        img.img-logo(src='http://pic2.aoyou.com/logo/2018/main-logo2x.png')
                    h2() 一套基于 Vue.js 的高质量 UI 组件库
                    .list()
                        a(, href='') 指南
                        a(, href='') 组件
                        a(, href='') 实践
                        a(, href='') 概览
                        a(, href='', target='_blank')
                            i.ay-icon.ay-icon-social-github()
                            |                         GitHub
        #indexLizi()
            div(style='position: relative; top: 200px;')
                canvas(width='1400', height='917')
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style lang="less" scoped>

    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        overflow: hidden
    }

    .index h1 img {
        display: block;
        margin: 0 auto
    }

    .index h1 .img-logo {
        width: auto;
        height: 90px
    }

    .index h1 .img-name {
        width: 90px;
        height: 40px;
        position: relative;
        left: 0
    }

    .index h2 {
        color: #000;
        font-weight: 400;
        margin-top: 50px;
        font-size: 16px
    }

    .index .list {
        margin: 40px 0 200px
    }

    .index .list a {
        color: #000;
        font-size: 16px;
        display: inline-block;
        padding: 10px;
        position: relative;
        transition: color .3s
    }

    .index .list a:after, .index .list a:before {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background: #ccc;
        content: "";
        opacity: 0;
        transition: opacity .3s, -webkit-transform .3s;
        transition: opacity .3s, transform .3s;
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px)
    }

    .index .list a:before {
        top: 0;
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px)
    }

    .index .list a:after {
        bottom: 0;
        -webkit-transform: translateY(10px);
        transform: translateY(10px)
    }

    .index .list a:hover {
        color: #ccc;
    }

    .index .list a:hover:after, .index .list a:hover:before {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    .index .ay-row-flex {
        height: 100%
    }

    .index-lang {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 10
    }

    .index-lang span {
        display: inline-block;
        color: #fff;
        cursor: pointer
    }

    #indexLizi {
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        overflow: hidden
    }
</style>