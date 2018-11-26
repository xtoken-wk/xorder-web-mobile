<template>
  <div class="main">
    <XHead></XHead>
    <img class="labs-bg" :src="labs_bg">
    <p class="labs-title">Our Mission</p>
    <p class="labs-content">X-Order Lab is a research institute that endeavours to explore the hidden order
      beneath the changing landscape of our economy and society. Our research area includes complex system theory,
      token economy, data science, distributed system, artificial intelligence, game theory, etc.</p>
    <p class="labs-content" style="margin-top: 15px">We seek to promote the well-being of humankind on earth to
      revolutionize people's
      understanding about the dynamics that are currently shaping our economy and our world..</p>
    <p class="labs-title">Operating Principles</p>
    <div class="project" v-for="(item) of projects">
      <img :src="item.img">
      <p class="project-title">{{item.title}}</p>
      <p class="project-detail">{{item.content}}</p>
    </div>
    <p class="labs-title">Research Proposals</p>
    <div class="proposal" v-for="(item) of proposals">
      <div class="proposal-line"></div>
      <div class="proposal-content">
        <p class="proposal-detail">{{item.title}}</p>
        <div class="proposal-keys">
          <p class="proposal-key" v-for="(key) of item.keys">#{{key}}</p>
        </div>
      </div>
    </div>
    <p class="interesting">If you are interested in these projects or have related ideas,please contact <a
      target="_blank" href="mailto:hr@xorder.ai">lab@xorder.ai</a></p>
    <p class="labs-title">Our partners</p>
    <div style="display: flex;flex-direction: column;">
      <img class="partner" :src="item" v-for="(item) of partners">
    </div>
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
        labs_bg: require('../assets/img/labs_bg.png'),

        projects: [
          {
            img: require('../assets/img/labs_open_source.png'),
            title: 'Create an open source collaborative environment',
            content: 'We believe that open source represents the approach to challenge the world in an innovative way, looking for new possibilities, and doing so in a collaborative and transparent environment.'
          },
          {
            img: require('../assets/img/labs_collaboration.png'),
            title: 'Support Interdisciplinary collaboration',
            content: 'We are absolutely relentless at hammering down the boundaries created by academic disciplines and institutional structures.'
          },
          {
            img: require('../assets/img/labs_practical_based.png'),
            title: 'Dedicated to both theoretical and application research',
            content: 'While we are focused on practical applications of technologies, we believe our research should also provide the impetus for change in the way the world thinks about and deals with the pressing problems of our age.'
          },
          {
            img: require('../assets/img/labs_interdisciplinary.png'),
            title: 'Push for integration with academia and industry',
            content: 'Industries should work in tangent with academia to pinpoint impactful questions and provide insights about and solutions to them.'
          },
          {
            img: require('../assets/img/labs_no_boundary.png'),
            title: 'Dedicated to making research without boundary',
            content: 'We aim to integrate a diverse range of academic fields in our research efforts to discover new patterns over old phenomena.'
          },
        ],
        proposals: [
          {
            title: 'User Matching Within Specific Topics Between Different Social Media Platforms',
            keys: ['topic modeling', 'social listening']
          },
          {
            title: 'New Project/Token Detection and Tracking In Social Media',
            keys: ['SNS', 'web crawling']
          },
          {
            title: 'Key Opinion Leader Detection and Tracking (PART 1) - Based On Sub Community',
            keys: ['KOL detection']
          },
          {
            title: 'Key Opinion Leader Detection and Tracking (PART 2) - Based On Overall Platform',
            keys: ['KOL detection']
          },
          {
            title: 'Event Extraction and Causal Analysis In Token Area',
            keys: ['Natural language processing', 'knowledge graph']
          },
          {
            title: 'Authenticity Detection (News, White Paper, Etc.)',
            keys: ['knowledge graph', 'web crawling']
          },
//          {
//            title:'Detecting the relationship between academic research and industry market performance',
//            keys:['keywords','keywords']
//          },
        ],
        partners: [
          require('../assets/img/about_partner_block.png'),
          require('../assets/img/about_partner_jizhi.png'),
          require('../assets/img/about_partner_labs.png'),
          require('../assets/img/about_partner_dfc.png'),
          require('../assets/img/about_partner_ngc.png'),
          require('../assets/img/about_partner_nus.png'),
          require('../assets/img/about_partner_purdue.png'),
          require('../assets/img/about_partner_tongji.png'),
        ],
      }
    },
    mounted() {
      window.scrollTo(0, 0);
      Bus.eventBus.$emit('select', 3);
    },
  }
</script>
<style scoped>
  .main {
    width: 100%;
    min-height: 100%;
  }

  .labs-bg {
    margin-top: 90px;
    max-width: 70%;
  }

  .labs-title {
    margin: 50px 25px 25px 25px;
    font-family: NunitoSans-SemiBold;
    font-size: 17px;
    color: #1D2D40;;
    letter-spacing: 2px;
    text-align: center;
  }

  .labs-content {
    margin: 0 25px;
    opacity: 0.6;
    font-family: NunitoSans-Regular;
    font-size: 13px;
    color: #00173b;
    letter-spacing: 0;
    text-align: center;
    line-height: 18px;
  }

  .project {
    margin: 0 25px 20px 25px;
    padding: 20px 25px 40px 25px;
    background: #ffffff;
    box-shadow: 6px 8px 20px 0 rgba(213, 227, 242, 0.35);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project img {
    max-width: 50px;
    max-height: 50px;
  }

  .project-title {
    margin: 10px 0;
    font-family: NunitoSans-SemiBold;
    font-size: 12px;
    color: #3697fb;
    letter-spacing: 0;
    text-align: left;
  }

  .project-detail {
    font-family: NunitoSans-SemiBold;
    font-size: 11px;
    color: #666666;
    letter-spacing: 0;
    text-align: justify;
    line-height: 16px;
    margin: 0;
  }

  .proposal {
    margin: 0 25px 15px 25px;
    display: flex;
    align-items: center;
  }

  .proposal-line {
    width: 6px;
    height: 50px;
    background: #3697fb;
  }

  .proposal-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .proposal-detail {
    margin: 0;
    font-family: NunitoSans-Regular;
    font-size: 12px;
    color: #00173b;
    letter-spacing: 0;
    text-align: justify;
  }

  .proposal-keys {
    margin-top: 3px;
    display: flex;
    flex-wrap: wrap;
  }

  .proposal-key {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 15px;
    font-family: NunitoSans-Regular;
    font-size: 8px;
    color: #3697fb;
    letter-spacing: 1px;
    text-align: justify;
  }

  .interesting {
    margin: 5px 25px 0 25px;
    font-family: PingFangSC-Regular;
    font-size: 11px;
    color: #00173b;
    letter-spacing: 1.22px;
    text-align: left;
  }

  .partner {
    margin: 20px auto;
    max-height: 40px;
  }
</style>
