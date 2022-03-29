<template>
  <div id="home" class="wrapper">
     <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                  ref="tabControl1"
                 class="tab-control" v-show="isTabFixed"/>

       <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
             <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
                   <recommend-view :recommends="recommends"/>

             <feature-view/>
            <tab-control :titles="['流行', '新款', '精选']" ref="tabControl2"/>
            <good-list :goods="showGoods"/>
    </scroll>
     <back-top @click.native="backClick" v-show="isShowBackTop"/>

  </div>
</template>
<script>
import Vue from "vue";
  import GoodList  from './content/goods/GoodsList'
  import TabControl from './content/tabControl/TabControl'
  import NavBar from './common/navbar/NavBar'
  import Scroll from './common/scroll/Scroll'
  import BackTop from './content/backTop/BackTop'
  import HomeSwiper from './childComps/HomeSwiper'
  import FeatureView from './childComps/FeatureView'
  import RecommendView from './childComps/RecommendView'

export default {
  name: "videoChild",
    components: {
      TabControl,
      NavBar,
      Scroll,
      GoodList,
       HomeSwiper,
       FeatureView,
      RecommendView,

      BackTop
     },
  data() {
    let u = navigator.userAgent;
    return {
       banners: [
           {image:'//m15.360buyimg.com/mobilecms/jfs/t1/91983/34/20277/344582/61eb3b0dE7cfaa44e/da5c07d9fdab3394.jpg!cr_1125x449_0_166!q70.jpg'},
           {image:'//m15.360buyimg.com/mobilecms/jfs/t1/91983/34/20277/344582/61eb3b0dE7cfaa44e/da5c07d9fdab3394.jpg!cr_1125x449_0_166!q70.jpg'},

       ],
        recommends: [{
          image:'//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/199619/8/13022/236306/616a46beE71d8fb22/5f1fe7fdbf0c74ed.jpg!q70.dpg.webp',
          title:'京东超市'
        },{
          image:'//m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg',
          title:'京东超市'
        },{
          image:'//m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg',
          title:'京东超市'
        },{
          image:'//m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg',
          title:'京东超市'
        },{
          image:'//m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg',
          title:'京东超市'
        },{
          image:'//m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg',
          title:'京东超市'
        },{
          image:'//m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg',
          title:'京东超市'
        },{
          image:'//m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg',
          title:'京东超市'
        },{
          image:'//m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg',
          title:'京东超市'
        },{
          image:'//m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg',
          title:'京东超市'
        }],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,

      showGoods:[{
        title:'秋冬加绒加厚新款打底裤女外穿显瘦高腰保暖棉裤子黑色小脚魔术裤',
        price:'39.8',
        cfav:'273',
        show:{
          img:'https://s5.mogucdn.com/mlcdn/c45406/200907_2i4eddi97955jkkf1958lh73gf4ef_640x960.jpg_640x854.v1cAC.40.webp'
        }

      },{
        title:'秋冬加绒加厚新款打底裤女外穿显瘦高腰保暖棉裤子黑色小脚魔术裤',
        price:'39.8',
        cfav:'273',
        show:{
          img:'https://s5.mogucdn.com/mlcdn/c45406/200907_2i4eddi97955jkkf1958lh73gf4ef_640x960.jpg_640x854.v1cAC.40.webp'
        }

      },{
        title:'秋冬加绒加厚新款打底裤女外穿显瘦高腰保暖棉裤子黑色小脚魔术裤',
        price:'39.8',
        cfav:'273',
        show:{
          img:'https://s5.mogucdn.com/mlcdn/c45406/200907_2i4eddi97955jkkf1958lh73gf4ef_640x960.jpg_640x854.v1cAC.40.webp'
        }

      },{
        title:'秋冬加绒加厚新款打底裤女外穿显瘦高腰保暖棉裤子黑色小脚魔术裤',
        price:'39.8',
        cfav:'273',
        show:{
          img:'https://s5.mogucdn.com/mlcdn/c45406/200907_2i4eddi97955jkkf1958lh73gf4ef_640x960.jpg_640x854.v1cAC.40.webp'
        }

      },{
        title:'秋冬加绒加厚新款打底裤女外穿显瘦高腰保暖棉裤子黑色小脚魔术裤',
        price:'39.8',
        cfav:'273',
        show:{
          img:'https://s5.mogucdn.com/mlcdn/c45406/200907_2i4eddi97955jkkf1958lh73gf4ef_640x960.jpg_640x854.v1cAC.40.webp'
        }

      },{
        title:'秋冬加绒加厚新款打底裤女外穿显瘦高腰保暖棉裤子黑色小脚魔术裤',
        price:'39.8',
        cfav:'273',
        show:{
          img:'https://s5.mogucdn.com/mlcdn/c45406/200907_2i4eddi97955jkkf1958lh73gf4ef_640x960.jpg_640x854.v1cAC.40.webp'
        }

      },{
        title:'秋冬加绒加厚新款打底裤女外穿显瘦高腰保暖棉裤子黑色小脚魔术裤',
        price:'39.8',
        cfav:'273',
        show:{
          img:'https://s5.mogucdn.com/mlcdn/c45406/200907_2i4eddi97955jkkf1958lh73gf4ef_640x960.jpg_640x854.v1cAC.40.webp'
        }

      },{
        title:'秋冬加绒加厚新款打底裤女外穿显瘦高腰保暖棉裤子黑色小脚魔术裤',
        price:'39.8',
        cfav:'273',
        show:{
          img:'https://s5.mogucdn.com/mlcdn/c45406/200907_2i4eddi97955jkkf1958lh73gf4ef_640x960.jpg_640x854.v1cAC.40.webp'
        }

      },{
        title:'秋冬加绒加厚新款打底裤女外穿显瘦高腰保暖棉裤子黑色小脚魔术裤',
        price:'39.8',
        cfav:'273',
        show:{
          img:'https://s5.mogucdn.com/mlcdn/c45406/200907_2i4eddi97955jkkf1958lh73gf4ef_640x960.jpg_640x854.v1cAC.40.webp'
        }

      },{
        title:'秋冬加绒加厚新款打底裤女外穿显瘦高腰保暖棉裤子黑色小脚魔术裤',
        price:'39.8',
        cfav:'273',
        show:{
          img:'https://s5.mogucdn.com/mlcdn/c45406/200907_2i4eddi97955jkkf1958lh73gf4ef_640x960.jpg_640x854.v1cAC.40.webp'
        }

      },{
        title:'秋冬加绒加厚新款打底裤女外穿显瘦高腰保暖棉裤子黑色小脚魔术裤',
        price:'39.8',
        cfav:'273',
        show:{
          img:'https://s5.mogucdn.com/mlcdn/c45406/200907_2i4eddi97955jkkf1958lh73gf4ef_640x960.jpg_640x854.v1cAC.40.webp'
        }

      }],
  
 
    };
  },
 
    destroyed() {
      console.log('home destroyed');
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    },
    methods: {
            swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },
       backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },      contentScroll(position) {
        // 1.判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000

        // 2.决定tabControl是否吸顶(position: fixed)
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },   loadMore() {
        // this.getHomeGoods(this.currentType)
      },
 
    
  },
};
</script>
<style scoped>
   #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }

  /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  /*}*/
</style>
