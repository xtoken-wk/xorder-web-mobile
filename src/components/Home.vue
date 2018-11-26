<template>
  <div class="main">
    <XHead></XHead>
    <img class="home-bg" :src="home_bg">
    <p class="title">ENVISIONING A NEW FINANCIAL ORDER</p>
    <p class="paragraph" style="margin-top: 40px">X-Order is first and foremost an investment company. We came out of NEO blockchain in order to pursue our vision of the future where blockchain is much more about new ways to foster mass innovation online.</p>
    <div class="channels">
      <img class="channel" :src="channel1">
      <a href="https://www.reddit.com/user/XToken_org/">
        <img class="channel" :src="channel2">
      </a>
      <a href="https://medium.com/@xorder">
      <img class="channel" :src="channel3">
      </a>
      <img class="channel" :src="channel4">
    </div>
    <img class="content-img" :src="token">
    <p class="content-title">Token Economy</p>
    <p class="paragraph">We are foreseeing a thriving token economy embedded in a more sustainable and sophisticated digital economy, enabled by various scalable peer to peer cooperation approaches. </p>
    <p class="paragraph">However, few theoretical frameworks have been created into that domain. Hence, we are combining the expertise from Complex Systems and traditional Macro Economy theories to facilitate intriguing conversations into that topic.</p>
    <p class="content-more" @click="jumpMore(1)">LEARN MORE
      <img :src="home_arrow">
    </p>
    <img class="content-img" :src="intelligence">
    <p class="content-title">Investment Intelligence</p>
    <p class="paragraph">We are dedicated to discover innovations that have the potential to grow exponentially and change our world for the better. </p>
    <p class="paragraph">Through Web Mining, Natural Language Processing, Knowledge Graph, and Machine Learning technologies, we excavate and evaluate information from online communities and other multiple sources to unveil the hidden investment value.</p>
    <p class="content-more" @click="jumpMore(2)">LEARN MORE
      <img :src="home_arrow">
    </p>
    <img class="content-img" :src="lab">
    <p class="content-title">X-Order Laboratory</p>
    <p class="paragraph">X-Order Laboratory is a research institute that endeavors to explore the hidden order beneath the changing landscape of our economy and society. We aim to facilitate the discovery of new socio-technological systems and shed light on what we can do to bring a better future closer.</p>
    <p class="paragraph">Our research areas include complex system theory, artificial intelligence, data science, and their applications within the blockchain domain.</p>
    <p class="content-more" @click="jumpMore(3)">LEARN MORE
      <img :src="home_arrow">
    </p>
    <p class="content-title">Articles</p>
    <a class="article" :href="item.url" v-for="(item,index) of list" target="_blank">
      <img :src="item.imgUrl">
      <p class="article-title">{{item.title}}</p>
      <p class="article-content">{{item.desc}}</p>
      <div class="article-info">
        <p :class="index==2?'article-type article-type2':'article-type'">#{{item.label}}</p>
        <p class="article-time">{{item.time}}</p>
      </div>
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
  import XHead from './XHead.vue';
  import Bus from '../assets/js/vue-bus.js';
  export default {
    components: {
      XHead,
    },
    data() {
      return {
        home_bg:require('../assets/img/home_bg.png'),
        channel1:require('../assets/img/home_channel_discord.png'),
        channel2:require('../assets/img/home_channel_reddit.png'),
        channel3:require('../assets/img/home_channel_medium.png'),
        channel4:require('../assets/img/home_channel_wechat.png'),
        home_arrow:require('../assets/img/home_arrow.png'),
        token:require('../assets/img/home_token_economy.png'),
        intelligence:require('../assets/img/home_investment_intelligence.png'),
        lab:require('../assets/img/home_order_lab.png'),

        list:[
          {
            'imgUrl': "https://static.wixstatic.com/media/7336fe_ad03127632ac4bc28e25b93c53dc24aa~mv2.png/v1/fill/w_192,h_181,al_c,lg_1,q_80/7336fe_ad03127632ac4bc28e25b93c53dc24aa~mv2.webp",
            'title': 'XToken | Ponzi Structure and the Law of Expansion',
            'desc': 'Bubble is not a scam. Economic structures are naturally expanding orders that tend to lead to the emergence of new asset classes. The capital market is a complex system that grows, but also shrinks.',
            'label': 'Token Economy',
            'url': 'https://medium.com/p/b4c894c6f79f?source=user_profile---------2------------------',
            'time': '2018/03/27'
          },
          {
            'imgUrl': 'https://miro.medium.com/fit/c/1400/420/1*aJEp998491GN212bfizaUQ.jpeg',
            'title': 'The Extended Order in the lens of Complexity — Revelation for Complexity Economics',
            'desc': 'Future economic analysis is going to be more about looking at the economy as a complex adaptive system that can be studied through agent based simulation.',
            'label': 'Token Economy',
            'url': 'https://medium.com/@xorder/the-extended-order-in-the-lens-of-complexity-revelation-for-complexity-economics-b7393545e99e',
            'time': '2018/07/11'
          },
          {
            'imgUrl': 'https://static.wixstatic.com/media/7336fe_37bb0a741d8e492f91ed756f73f417e2~mv2.png/v1/fill/w_278,h_262,al_c,q_80,usm_0.66_1.00_0.01/7336fe_37bb0a741d8e492f91ed756f73f417e2~mv2.webp',
            'title': 'Knowledge Graph Based Value Discovering Environment for The Token World',
            'desc': 'We can use knowledge graph to make causal inferences between concepts that are derived from the limitless data on the web to identify',
            'label': 'Investment Intelligence',
            'url': 'https://medium.com/@lizeng_44669/knowledge-graph-based-value-discovering-environment-for-the-token-world-45c9f65d23af',
            'time': '2018/10/22'
          }
        ]
      }
    },

    mounted() {
      window.scrollTo(0, 0);
      Bus.eventBus.$emit('select', 0);
    },

    methods:{
      jumpMore: function (index) {
        this.$router.push({name:index==1?'token':index==2?'investment':'labs'})
      },
    }

  }
</script>
<style scoped>
  .main {
    width:100%;
    min-height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-bg{
    max-width: 100%;
  }

  .title{
    font-family: 'NunitoSans-Regular';
    margin: 50px 45px 0 45px;
    font-size:25px;
    color:#000000;
    letter-spacing:1.5px;
    text-align:center;
    line-height:30px;
    font-weight: bold;
  }

  .paragraph{
    margin: 25px 30px 0 30px;
    opacity:0.6;
    font-family: 'NunitoSans-Regular';
    font-size:13px;
    color:#00173b;
    letter-spacing:0.5px;
    text-align:center;
    line-height:18px;
  }

  .channels{
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  .channel{
    max-width:25px;
    max-height: 25px;
    margin: 0 20px;
  }

  .content-img{
    max-width: 70%;
    margin-top: 50px;
  }

  .content-title{
    font-family: 'NunitoSans-Regular';
    font-size:17px;
    color:#1D2D40;;
    letter-spacing:1.1px;
    text-align:center;
    margin-top: 40px;
    margin-bottom: 0;
  }

  .content-more {
    position: relative;
    margin-top: 35px;
    margin-bottom: 0;
    font-family: 'NunitoSans-Regular';
    width: 90px;
    font-size:10px;
    color: #7f8b9d;
    letter-spacing: 0;
    line-height: 10px;
    padding-bottom: 3px;
    border-bottom: 2px solid #3698fc;
  }

  .content-more img {
    max-width: 10px;
    max-height: 10px;
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
