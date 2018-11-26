<template>
  <div class="main">
    <XHead></XHead>
    <img class="token-bg" :src="token_bg">
    <div class="token-article">
      <p class="token-title">XToken | Ponzi Structure and the Law of Expansion</p>
      <p class="token-time">2018/03/27</p>
      <p class="token-content">A Primer</p>
      <p class="token-content">In the past year, cryptocurrency market has grown exponentially. The scale and speed of
        its expansion has
        baffled people’s mind. Many question the inherent value of cryptocurrency, the question of whether
        cryptocurrency is a new kind of bubble or a new Ponzi scheme has crossed and hooked everyone’s mind save those
        few most ardent crusaders of cryptocurrency. It is not surprising then to see people from all backgrounds and
        working in the entire stratosphere of our economy show their eager curiosity about cryptocurrency by asking
        what
        exactly does cryptocurrency mean to our present day society?</p>
      <p class="token-content" v-show="showMore">In order to answer this question, we need to understand the nature of the financial
        market, and how the
        market
        defines value. Let us begin this journey of discovery by first going down to the basics by rigorously
        examining
        the expansionary structures of financial assets.</p>
      <p class="token-content" v-show="showMore">The Double Layered Structure of Capital</p>
      <p class="token-content" v-show="showMore">When we attempt to comprehend the structure of capital expansion, we have to first employ
        the concept of a
        basis layer, which represents our inherent value orientation. This layer corresponds directly to our most
        basic
        human needs, such as to feel secure and to survive. For instance, this capital layer corresponds directly but
        is
        not limited to our need for food, clothes for warmth, and a safe place to live out our lives. On top of this
        is
        the expansion layer, which is the new capital expansion model we aspire to construct. From our perspective,
        the
        most basic capital expansion structure can be separated into two layers: the basis layer and the expansion
        layer.
      </p>
      <div class="token-shadow" v-show="!showMore"></div>
    </div>
    <div style="display: flex;justify-content: center;">
      <p class="token-more" @click="showArticle()">
        Read full article
        <img :src="token_arrow">
      </p>
    </div>
    <p class="articles">Articles</p>
    <a class="article" :href="item.url" v-for="(item,index) of list" target="_blank">
      <img :src="item.imgUrl">
      <p class="article-title">{{item.title}}</p>
      <div class="article-info">
        <p class="article-time">{{item.time}}</p>
      </div>
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
  import XHead from './XHead.vue'
  import Bus from '../assets/js/vue-bus.js';

  export default {
    data() {
      return {
        token_bg: require('../assets/img/token_bg.png'),
        showMore:false,
        token_arrow: require('../assets/img/token_arrow.png'),
        list:[
          {
            'imgUrl': "https://miro.medium.com/fit/c/1190/358/1*LCdHtDvJ-OKXa74zt0bd2w.png",
            'title': 'XToken | Ponzi Structure and the Law of Expansion',
            'desc': 'Our civilization depends, not only for its origin but also for its…',
            'time':'2018/03/27',
            'url': 'https://medium.com/p/b4c894c6f79f?source=user_profile---------2------------------'
          },
          {
            'imgUrl': 'https://cdn-images-1.medium.com/max/600/1*vIJOJpPrZAONDzMfP4p8Uw.jpeg',
            'title': 'AMA by Tony Tao, Founder of X-Order',
            'desc': 'Tony started to tell us to stop buying, start selling or shorting in January 2018, Which was at the very top of the ICO boom. At that time, Tony was still serving as the secretary general of Neo Foundation and setting up Neo Global…',
            'time':'2018/10/02',
            'url': 'https://medium.com/p/ca985985423?source=user_profile---------4------------------'
          },
          {
            'imgUrl': 'https://cdn-images-1.medium.com/max/600/1*_B4c1I6Xf0eU3XfPLAO9wQ.png',
            'title': 'Why do we believe in token economy (Part 1)',
            'desc': '“The intellect has little to do on the road to discovery. There comes a leap in consciousness, call it intuition or what you will, the solution comes to you and you don’t know how or why.',
            'time':'2018/08/03',
            'url': 'https://medium.com//p/7f3bbf27310e?source=user_profile---------5------------------'
          },
          {
            'imgUrl': 'https://miro.medium.com/fit/c/1400/420/1*aJEp998491GN212bfizaUQ.jpeg',
            'title': 'The Extended Order in the lens of Complexity — Revelation for Complexity Economics',
            'desc': '',
            'time':'2018/07/11',
            'url': 'https://medium.com/@xorder/the-extended-order-in-the-lens-of-complexity-revelation-for-complexity-economics-b7393545e99e'
          },
          {
            'imgUrl': 'https://miro.medium.com/fit/c/856/256/1*a1OQIZ_tQ1GxhvyEb84WSg.png',
            'title': 'Hidden Order Inside Complex Adaptive System, Part Two',
            'desc': 'At worst, it will disclose new sights and perspectives. At best, it will reveal the general principles we seek.',
            'time':'2018/07/05',
            'url': 'https://medium.com/p/e1770bd04bc1?source=user_profile---------7------------------'
          },
          {
            'imgUrl': 'https://miro.medium.com/fit/c/1400/420/1*u5p-del-U2YFzlRd9u3wdg.jpeg',
            'title': 'Hidden Order Inside Complex Adaptive Systems, Part one',
            'desc': '',
            'time':'2018/07/02',
            'url': 'https://medium.com/p/a67d840c176f?source=user_profile---------8------------------'
          }
        ],
      }
    },
    components: {
      XHead,
    },
    mounted() {
      window.scrollTo(0, 0);
      Bus.eventBus.$emit('select', 1);
    },
    methods:{
      showArticle: function () {
        if (!this.showMore) {
          this.showMore=true;
        }else {
          window.location.href='https://medium.com/p/b4c894c6f79f?source=user_profile---------2------------------'
        }
      },
    }
  }
</script>
<style scoped>
  .main {
    width: 100%;
    min-height: 100%;
  }

  .token-bg {
    margin-top: 65px;
    max-width: 100%;
  }

  .token-article {
    margin: 25px 30px;
    position: relative;
  }

  .token-title {
    margin: 0;
    font-family: 'NunitoSans-Regular';
    font-size: 17px;
    color: #1D2D40;;
    letter-spacing: 1px;
    text-align: left;
  }

  .token-time{
    margin-top: 10px;
    margin-bottom: 15px;
    font-family: 'NunitoSans-Regular';
    font-size:11px;
    color:#6a6f7a;
    letter-spacing:0.31px;
    text-align:left;
  }

  .token-content{
    font-family: 'NunitoSans-Regular';
    font-size:11px;
    color:#666666;
    letter-spacing:1.3px;
    line-height:13px;
    text-align:left;
  }

  .token-shadow{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-image:linear-gradient(-180deg, rgba(255,255,255,0.00) 1%, #ffffff 96%);
  }

  .token-more{
    margin: 0;
    font-family: 'NunitoSans-Regular';
    font-size:10px;
    color:#7f8b9d;
    letter-spacing:0;
    line-height:13px;
    text-align:left;
  }

  .token-more img{
    max-width: 10px;
    max-height: 10px;
    margin-left: 5px;
  }

  .articles{
    font-family: 'NunitoSans-Regular';
    font-size:17px;
    color:#1D2D40;;
    letter-spacing:1.1px;
    text-align:center;
    margin-top: 40px;
    margin-bottom: 0;
  }

  .article{
    margin: 25px 30px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  .article img{
    max-width: 100%;
    height: 150px;
  }

  .article-title{
    margin-top: 15px;
    margin-bottom: 10px;
    font-family: 'NunitoSans-Regular';
    font-size:13px;
    color:#1D2D40;;
    letter-spacing:1px;
    text-align:left;
  }

  .article-content{
    margin: 0;
    font-family: 'NunitoSans-Regular';
    font-size:11px;
    color:#6a6f7a;
    letter-spacing:0.3px;
    text-align:justify;
  }

  .article-info{
    margin-top: 15px;
    display: flex;
  }

  .article-type{
    flex: 1;
    font-family: 'NunitoSans-Regular';
    font-size:10px;
    color:#f78e1e;
    letter-spacing:1px;
    text-align:left;
  }

  .article-type2{
    color:#36b4fc;
  }

  .article-time{
    font-family: 'NunitoSans-Regular';
    font-size:10px;
    color:#6a6f7a;
    letter-spacing:0.29px;
    text-align:left;
  }
</style>
