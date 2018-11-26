<template>
  <div class="main">
    <XHead></XHead>
    <div class="jobs">
      <p :class="select==index?'job select':'job'" v-for="(item,index) of list" @click="selectJob(index)">
        {{item.job}}</p>
    </div>
    <div v-for="(item,index) in list[select].values">
      <p class="desc-title">{{item.key}}</p>
      <ul class="desc">
        <li v-for="(desc) in item.values">{{desc}}</li>
      </ul>
      <div class="explain">{{item.explain}}</div>
    </div>
    <p class="desc" v-for="(some) of list[select].some">{{some}}</p>
    <p class="desc">{{list[select].email}}
      <a class="email" target="_blank" href="mailto:hr@xorder.ai"> hr@xorder.ai </a>
    </p>
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
        select: 0,
        list: [
          {
            job: 'Data Scientist',
            values: [
              {
                key: 'Description',
                values: ['Responsible for the transformation of domain expert knowledge into structured data.', 'Extract meaningful patterns from unstructured social data.', 'Responsible for the development of AI solutions for investment decision making assistance to domain experts.']
              },
              {
                key: 'Requirements',
                values: ['Experienced with the processing (oversea online community) unstructured text data. Familiar with culture of communities such as Github and Reddit. Have prior experience participating in projects on open platforms such as Github or Kaggle.', 'Have over 2 years of experience working or researching in a NLP related capacity.', 'Working knowledge of TensorFlow, PyTorch, or similar frameworks.', 'Strong programming skills with working knowledge of Python.', 'Have communication skills that enable effective teamwork with others.']
              },
              {
                key: 'Preferred',
                values: ['PhD in Computer Science, Computational Linguistics, Language Processing or Machine Learning.', 'Experience with building crawlers.', 'Experience with causality, Bayesian network and PC algorithm or related subjects.', 'Published 2-3 academic papers in data science, machine learning or economic modeling.']
              }
            ],
            some: ['Location: Shanghai'],
            email: 'Please send your resume and an intro to'
          },
          {
            job: 'Data Architect',
            values: [
              {
                key: 'Description',
                values: ['Responsible for the overall design of data infrastructure and integration with our partners data platforms.', 'Responsible for the optimization and maintenance of the data platform.', 'Responsible for research of new data technologies and evangelize them in the team.']
              },
              {
                key: 'Requirements',
                values: ['Have hands on experience in data quality, profiling and other data analysis. Have good knowledge of data issues that impact user experience and solutions to them.', 'Comfortable working with data scientists and product managers to design and implement data quality, data acquisition and data integration strategies.', '3+ years of of strong SQL and big data warehousing experience with big data lake.', 'Have experience with the management of unstructured social network data.', 'Possess knowledge of distributed computing algorithms and data structures.', 'Should be able to take the initiative to interact with others for new ideas about processes, implementation, and new findings.']
              },
              {
                key: 'Preferred',
                values: ['6+ years of data infrastructure building experience.', 'Experience of knowledge graph database.', 'Experience of embeddings in knowledge graph.']
              }
            ],
            some: ['Location: Shanghai'],
            email: 'Please send your resume and an intro to'
          },
          {
            job: 'Algorithm Engineer',
            values: [
              {
                key: 'Description',
                values: ['Familiar with modelling algorithms and build models based on the need of the project.', 'Employ data to design models, robustness and expansibility of targeted utilities and goals.']
              },
              {
                key: 'Requirements',
                values: ['Possess diplomas related to computer science, mathematics, statistics or related subjects.', 'Familiar with Python or R.', 'Won awards in high profile mathematical modelling competitions.', 'Strong teamwork spirit and communication ability.', 'Have specific interest in model algorithm design and willing to do proprietary research in developing needed algorithms.']
              }
            ],
            some: ['Location: Shanghai'],
            email: 'Please send your resume and an intro to'
          },
          {
            job: 'Project Analyst Intern',
            values: [
              {
                key: 'Description',
                values: ['The translation of important articles regarding token economics, network sciences, complex system theories, and other interdisciplinary fields from English to Chinese.', 'The editing and summary of translated articles.', 'Participation in ad-hoc projects to brainstorm and research potential uses and applications of emerging technology such as blockchain and evaluate their viability.'],
                explain: 'As our intern, you will learn about token economics, token market and public blockchain in perspectives and depths that you could not find online. We will help you create a learning roadmap on token economics and introduce you to a community that is enthusiastic about learning about and experimenting with blockchain and token. You will also have the opportunity to have a sponsored trip to a academic conference or an industry conference to achieve specific goals.'
              },
              {
                key: 'Requirements',
                values: ['You are able to comprehend and translate relatively complex English articles that may describe abstract models into Chinese and preserve the structure of the original arguments.', 'It is preferable but not necessary that you are pursuing studies in computer science, history, political science, economics, physics, biology, arts or related fields.', 'You must be able to ask intelligent questions and do meaningful research.', 'You are able to plan your time well and finish your tasks on time.', 'You are a believer in swift experimentation and iteration, and you see efforts spent in these actions are investments instead of waste.']
              }
            ],
            some: ['Location: Remote', 'Compensation: Unpaid', 'Length: 3 months minimum'],
            email: 'Please send your resume and an intro to'
          },
        ],
      }
    },
    mounted() {
      window.scrollTo(0, 0);
      Bus.eventBus.$emit('select', 4);
    },
    methods: {
      selectJob(index) {
        this.select = index;
      }
    }
  }
</script>
<style scoped>
  .main {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .jobs {
    margin-top: 50px;
    width: 90%;
    display: flex;
    overflow-x: scroll;
  }

  .job {
    margin: 20px 15px;
    opacity: 0.3;
    font-family: 'NunitoSans-Regular';
    font-size: 20px;
    color: #333333;
    letter-spacing: 0;
    flex-wrap: nowrap;
    flex-shrink: 0;
  }

  .select {
    opacity: 1;
  }

  .desc-title{
    margin: 0 25px;
    font-family: 'NunitoSans-Regular';
    font-size:12px;
    color:#333333;
    letter-spacing:0;
    line-height:16px;
    text-align:left;
  }

  .desc{
    margin: 15px 25px;
    font-family: 'NunitoSans-Regular';
    font-size:12px;
    color:#666666;
    letter-spacing:0;
    line-height:16px;
    text-align:left;
  }

  .explain{
    margin: 15px 25px;
    font-family: 'NunitoSans-Regular';
    font-size:12px;
    color:#666666;
    letter-spacing:0;
    line-height:16px;
    text-align:left;
  }

  .email{
    font-family: 'NunitoSans-Regular';
    font-size:12px;
    color:#666666;
    letter-spacing:0;
    line-height:16px;
    text-align:left;
  }
</style>
