<template>
  <div class="main">
    <XHead></XHead>
    <img class="investment-bg" :src="investment_bg">
    <p class="investment-content" style="margin-top: 40px">There are more than 2 thousand crypto currencies[1] circulated on the secondary
      market, and many token projects in the pipeline. Given the most recent trend of the Initial Bank Offering
      (IBO) and Security Token Offering (STO), for which brings down the threshold for token financing, while we are
      also foreseeing a thriving token economy embedded in a more sophisticated digital economy, the total amount of
      token projects is expected to grow tremendously.</p>
    <p class="investment-content">Meanwhile, as a relative newly formed market, there is no widely agreed evaluation
      protocol for token project. Given the complexity of every single token project and the ever increasing token
      amount, machine assisted investment intelligence should be introduced.</p>
    <img class="knowledge" :src="investment_knowledge">
    <p class="investment-title">From data driven to knowledge driven</p>
    <div class="investment-detail">
      <div class="investment-line"></div>
      Data sources
    </div>
    <div class="investment-detail">
      <div class="investment-line"></div>
      Real-time updates and storage
    </div>
    <div class="investment-detail">
      <div class="investment-line"></div>
      Natural language processing for knowledge extraction
    </div>
    <div class="investment-technology">
      <img :src="scrapy">
      <img :src="flink">
      <img :src="tensorflow">
    </div>
    <div class="investment-product">
      <div class="product-data">
        <img style="position: absolute;height: 100%;width: 100%;top:0;left: 0;" :src="product_data">
      </div>
      <div class="product-relation">
        <img style="position: absolute;height: 100%;width: 100%;top:0;left: 0;" :src="product_relation">
      </div>
    </div>
    <p class="investment-title">From knowledge-based database to real-time interactive Product</p>
    <div class="investment-detail">
      <div class="investment-line"></div>
      Professional requirements
    </div>
    <div class="investment-detail">
      <div class="investment-line"></div>
      Modeling and analysis
    </div>
    <div class="investment-detail">
      <div class="investment-line"></div>
      Visualization
    </div>
    <div class="investment-technology">
      <img :src="python">
      <img :src="oracle">
      <img :src="d3">
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
  import XHead from './XHead.vue';
  import Bus from '../assets/js/vue-bus.js';

  export default {
    components: {
      XHead,
    },
    data() {
      return {
        investment_bg: require('../assets/img/investment_head.png'),
        investment_knowledge: require('../assets/img/investment_knowledge_driven.png'),
        scrapy: require('../assets/img/investment_scrapy.png'),
        flink: require('../assets/img/investment_flink.png'),
        tensorflow: require('../assets/img/investment_tensorflow.png'),
        product_data: require('../assets/img/investment_product_data.png'),
        product_relation: require('../assets/img/investment_product_relation.png'),
        python: require('../assets/img/investment_python.png'),
        oracle: require('../assets/img/investment_oracle.png'),
        d3: require('../assets/img/investment_d3.png'),
        list: [
          {
            'imgUrl': 'https://static.wixstatic.com/media/7336fe_37bb0a741d8e492f91ed756f73f417e2~mv2.png/v1/fill/w_278,h_262,al_c,q_80,usm_0.66_1.00_0.01/7336fe_37bb0a741d8e492f91ed756f73f417e2~mv2.webp',
            'title': 'Knowledge Graph Based Value Discovering Environment for The Token World',
            'desc': 'We can use knowledge graph to make causal inferences between concepts that are derived from the limitless data on the web to identify',
            'label': 'Investment Intelligence',
            'url': 'https://medium.com/@lizeng_44669/knowledge-graph-based-value-discovering-environment-for-the-token-world-45c9f65d23af',
            'time': '2018/10/22'
          }
        ],
      }
    },
    mounted() {
      window.scrollTo(0, 0);
      Bus.eventBus.$emit('select', 2);
    },
  }
</script>
<style scoped>
  .main {
    width: 100%;
    min-height: 100%;
  }

  .investment-bg {
    max-width: 70%;
    margin-top: 90px;
  }

  .investment-content{
    margin: 10px 25px;
    opacity:0.6;
    font-family: 'NunitoSans-Regular';
    font-size:13px;
    color:#00173b;
    letter-spacing:0;
    text-align:center;
    line-height:18px;
  }

  .knowledge{
    margin: 50px 25px 0 25px;
    max-width: 70%;
  }

  .investment-title{
    margin: 20px 25px 0 25px;
    font-family: 'NunitoSans-Regular';
    font-size:13px;
    color:#1D2D40;;
    letter-spacing:1.73px;
    text-align:left;
    font-weight: bold;
  }

  .investment-detail{
    display: flex;
    align-items: center;
    margin: 15px 25px 0 35px;
    font-family: 'NunitoSans-Regular';
    font-size:11px;
    color:#666666;
    letter-spacing:1px;
    line-height:13px;
    text-align:left;

  }

  .investment-line{
    margin-right: 5px;
    opacity:0.5;
    background:#666666;
    width:14px;
    height:1px;
  }

  .investment-technology{
    margin: 20px 25px 0 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .investment-technology img{
    max-width: 30%;
  }

  .investment-product{
    margin: 50px 25px 0 25px;
    display: flex;
    justify-content: space-between;
  }

  .product-data{
    position: relative;
    width: 43%;
    padding-top: 43%;
    height: 0;
  }

  .product-relation{
    position: relative;
    margin-top: 60px;
    width: 53%;
    padding-top: 53%;
    height: 0;
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

  .article-info{
    margin-top: 15px;
    display: flex;
  }

  .article-time{
    font-family: 'NunitoSans-Regular';
    font-size:10px;
    color:#6a6f7a;
    letter-spacing:0.29px;
    text-align:left;
  }
</style>
