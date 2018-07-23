<template lang="pug">
    div
        h2 Card 卡片
        h5 将信息聚合在卡片容器中展示
        br
        p 基础用法
        Card(style="width:350px")
            p(slot="title")
                Icon(type="ios-film-outline")
                | 经典景点
            a(href="#", slot="extra", @click.prevent="changeLimit")
                Icon(type="ios-loop-strong")
                | 改变
            ul
                li(v-for="item in randomMovieList")
                    a(:href="item.url", target="_blank") {{ item.name }}
                    span
                        Icon(type="ios-star", v-for="n in 4", :key="n")
                        Icon(type="ios-star", v-if="item.rate >= 9.5")
                        Icon(type="ios-star-half", v-else)
                        | {{ item.rate }}
        br
        br
        p 无边框
        Row
            Col(span="6")
                Card(:bordered="false")
                    p(slot="title") 没有边框标题
                    p 内容边框内容边框内容边框内容边框内容边框
        br
        br
        p 禁用悬停阴影
        Row
            Col(span="6")
                Card
                    p(slot="title") 标准卡片
                    p 内容边框内容边框内容边框内容边框内容边框
                    p 内容边框内容边框内容边框内容边框内容边框
                    p 内容边框内容边框内容边框内容边框内容边框
            Col(span="6", offset="2")
                Card(dis-hover)
                    p(slot="title") 禁用悬停卡片
                    p 内容边框内容边框内容边框内容边框内容边框
                    p 内容边框内容边框内容边框内容边框内容边框
                    p 内容边框内容边框内容边框内容边框内容边框
        br
        br
        p 卡片阴影
        Row(style="background:#eee;padding:20px")
            Col(span="6")
                Card(:bordered="false")
                    p(slot="title") 标准卡片
                    p 内容边框内容边框内容边框内容边框内容边框
                    p 内容边框内容边框内容边框内容边框内容边框
                    p 内容边框内容边框内容边框内容边框内容边框
            Col(span="6", offset="2")
                Card(shadow)
                    p(slot="title") 禁用悬停卡片
                    p 内容边框内容边框内容边框内容边框内容边框
                    p 内容边框内容边框内容边框内容边框内容边框
                    p 内容边框内容边框内容边框内容边框内容边框
        br
        br
        p 简洁卡片
        Card(style="width:320px")
            div(style="text-align:center")
                img(src="http://pic2.aoyou.com/logo/2018/main-logo2x.png",style="width:220px")
                h3 一个不错的图标
</template>

<script>
  import { Card, Icon, Row, Col } from '@/components'

  export default {
    components: {
      Card,
      Icon,
      Row,
      Col
    },
    data () {
      return {
        movieList: [
          {
            name: '推荐景点',
            url: 'https://movie.douban.com/subject/1292052/',
            rate: 9.6,
          },
          {
            name: '推荐景点',
            url: 'https://movie.douban.com/subject/1295644/',
            rate: 9.4,
          },
          {
            name: '推荐景点',
            url: 'https://movie.douban.com/subject/1291546/',
            rate: 9.5,
          },
          {
            name: '推荐景点',
            url: 'https://movie.douban.com/subject/1292720/',
            rate: 9.4,
          },
          {
            name: '推荐景点',
            url: 'https://movie.douban.com/subject/1292063/',
            rate: 9.5,
          },
          {
            name: '推荐景点',
            url: 'https://movie.douban.com/subject/1291561/',
            rate: 9.2,
          },
          {
            name: '推荐景点',
            url: 'https://movie.douban.com/subject/1295124/',
            rate: 9.4,
          },
          {
            name: '推荐景点',
            url: 'https://movie.douban.com/subject/1292001/',
            rate: 9.2,
          },
          {
            name: '推荐景点',
            url: 'https://movie.douban.com/subject/2131459/',
            rate: 9.3,
          },
          {
            name: '推荐景点',
            url: 'https://movie.douban.com/subject/3541415/',
            rate: 9.2,
          },
        ],
        randomMovieList: [],
      }
    },
    methods: {
      changeLimit () {
        function getArrayItems (arr, num) {
          const temp_array = []
          for (let index in arr) {
            temp_array.push(arr[index])
          }
          const return_array = []
          for (let i = 0; i < num; i++) {
            if (temp_array.length > 0) {
              const arrIndex = Math.floor(Math.random() * temp_array.length)
              return_array[i] = temp_array[arrIndex]
              temp_array.splice(arrIndex, 1)
            } else {
              break
            }
          }
          return return_array
        }

        this.randomMovieList = getArrayItems(this.movieList, 5)
      },
    },
    mounted () {
      this.changeLimit()
    },
  }
</script>

<style lang="less" scoped>

    @css-prefix: ay-;

</style>