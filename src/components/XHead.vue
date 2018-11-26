<template>
  <div class="head-all">
    <div id="head" :class="{'show-bg': showBg}">
      <img class="head-logo" :src="logo">
      <p class="head-title">{{menus[menu_select].title}}</p>
      <img class="head-menu" :src="menu" @click="changeMenu">
    </div>


    <div class="menu" v-if="showMenu">
      <img class="menu-close" :src="menu_close" @click="menuClose">
      <div style="margin-top: 150px">
        <div style="display: flex;justify-content: center" v-for="(item,index) of menus">
          <p :class="menu_select==index?'menu-item menu-item-select':'menu-item'" @click="jumpOther(item.path)">
            {{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bus from '../assets/js/vue-bus.js';
  export default {
    data() {
      return {
        height:50,
        showBg: false,
        logo: require("../assets/img/xorder_logo.png"),
        menu: require("../assets/img/head-menu.png"),
        showMenu:false,
        menu_select: 0,
        menu_close: require("../assets/img/menu-close.png"),
        menus: [
          {
            title: 'Home',
            path: 'home'
          },
          {
            title: 'Token Economy',
            path: 'token'
          },
          {
            title: 'Investment Intelligence',
            path: 'investment'
          },
          {
            title: 'X-Order Labs',
            path: 'labs'
          },
          {
            title: 'Hiring',
            path: 'hiring'
          },
        ],
      }
    },
    created() {
      Bus.eventBus.$on('select', target => {
        this.menu_select=target;
      });
    },
    mounted() {
      document.onscroll = (e) => {
        if (window.pageYOffset > this.height) {
          this.showBg = true
        } else {
          this.showBg = false
        }
      }
    },

    methods:{
      menuClose(){
        this.showMenu=false;
      },
      jumpOther(path){
        this.$router.push({name:path})
      },
      changeMenu(){
        this.showMenu=true;
      }
    }

  }
</script>
<style scoped>
  .head-all {
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    z-index: 9999;
  }

  #head {
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
  }

  .show-bg {
    background: #ffffff;
    box-shadow:0 3px 10px -3px rgba(0,0,0,0.10);
  }

  .head-logo {
    max-width: 55px;
    max-height: 10px;
    margin-left: 20px;
  }

  .head-title {
    flex: 1;
    margin-right: 10px;
    opacity: 0.1;
    font-family: 'NunitoSans-Regular';
    font-size: 10px;
    color: #333333;
    letter-spacing: 0;
    text-align: right;
    line-height: 11px;
  }

  .head-menu {
    max-width: 12px;
    max-height: 10px;
    margin-right: 20px;
  }

  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    display: flex;
    flex-direction: column;
  }

  .menu-close {
    position: fixed;
    top: 15px;
    right: 20px;
    max-width: 12px;
    max-height: 12px;
  }

  .menu-item {
    font-family: 'NunitoSans-Regular';
    font-size: 12px;
    color: #bababa;
    letter-spacing: 1.5px;
    margin-top: 30px;
    margin-bottom: 0;
  }

  .menu-item-select {
    color: #ffffff;
    border-bottom: 1px solid #ffffff;
  }
</style>
