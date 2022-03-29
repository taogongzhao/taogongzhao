<template>
  <div>
    <!-- 活动翻牌子 -->
    <div class="active-warp" v-if="showActive">
      <div class="active-title" v-if="showClassI">
         <div class="bom">
          恭喜您抽取到了<span class="f58"  >{{couponList[showClassIndex]}}元优惠券</span >
        </div>
      </div>
      <div class="active-title" else>
        <div class='top'>恭喜您获得</div>
        <div class='bom'><text class="f58">大额优惠券抽奖机会！</text></div>
      </div>
      <div class="content" style=" margin: 20px;">
        <div :key="index" v-for="(item, index) in couponList">

           <div  @click="changeFreeCard(index,0)"  :class=" [showClassI?'free-change item':'item']" v-if="index === showClassIndex">
            <div class="front card-item">
              <img src="../../static/img/freeFront.png">
            </div>
            <div class="back card-item">
              <img src="../../static/img/freeBack.png">
              <div class="active-coupon-price">
                <span class="f96">100</span>
                <span class="f20">元</span>
              </div>
            </div>
          </div>
  
          <div  @click="changeFreeCard(index,0)"  v-else   :class=" [showClass?'free-change item':'item']">

            <div class="front card-item">
              <img src="../../static/img/freeFront.png"/>
            </div>
            <div class="back card-item">
              <img src="../../static/img/freeBack.png">
              <div class="active-coupon-price">
                <span class="f96">{{couponList[showClassIndex]}}</span>
                <span class="f20">元</span>
              </div>
            </div>
          </div>
        </div>
        <div class="active-bom-btn" @click="random" v-if="!showClassI">
          随机翻牌
        </div>
       </div>
    </div>
    <div class="active-warp active-big-warp" v-if="showBigCoupon">
      <div class="active-title">
        <div class="top">今日收起最佳！</div>
        <div class="bom">
          恭喜您抽取到了<span class="f58"
            >{{couponList[showClassIndex]}}元优惠券</span
          >
        </div>
      </div>
      <div class="animation-warp">
        <div class="position">
          <div class="animation-big">
            <img src="../../static/img/freeBigBg.png"></img>
            <div class="active-coupon-price animation-big-price" style="    margin-top: -50px; ">
               <span class="f20" style="padding-left: 120px;">{{couponList[0]}}元</span>
            </div>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
       checkedList: {},
      ready: "0",
      couponList: [1,3,5,10,2,6],
      // 控制其余翻牌动画
      showClass: false,
      // 控制第一张翻牌动画
      showClassI: false,
      // 当前选中翻牌的索引
      showClassIndex: '',
      // 控制翻牌动画
      showActive: true,
      // 控制翻牌后放大动画
      showBigCoupon: false,
    };
  },
  methods: {
    random() {
      this.changeFreeCard( Math.floor(Math.random() * (6 - 1)) + 1,null);
    },
    changeFreeCard(index, i) {
     
      let temp = this.couponList[0]; // 临时最大值
       this.couponList[0]=this.couponList[index];
       console.log(this.couponList[0]);
      this.couponList[index]=temp;
      this.showClassIndex=index;

          setTimeout(() => {
            this.showClassI= true ;
          }, 100);
          setTimeout(() => {
            this.showClass= true ;
          }, 1000);
          setTimeout(() => {
            this.showBigCoupon=true;
          }, 2000);
     
    },
 
  },
};
</script>

 <style scoped>
.active-warp,
.active-big-warp {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
}

.active-big-warp {
  z-index: 2;
}

.active-warp .content {
  display: flex;
  flex-wrap: wrap;
  justv-ify-content: space-between;
  padding: 46px 15px 0;
}

.active-warp .active-title {
  padding-top: 60px;
  span-align: center;
}

.active-warp .active-title .top {
  font-size: 38px;
  color: #ffd52c;
  background: #000;
  border-radius: 2px;
}

.active-warp .active-title .bom {
  font-size: 18px;
  color: #ffd52c;
  line-height: 16px;
  background: #000;
  border-radius: 2px;
}

.active-warp .active-title .bom .f58 {
  font-size: 18px;
  color: #fff;
  line-height: 88px;
}

.active-warp .content .item {
  height: 100px;
  min-width: 100px;
  position: relative;
  flex: 1;
}

.active-warp .content .item .card-item {
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  width: 100px;
  transition: all 1s ease-in-out;
}

.active-warp .content .item .front {
  transform: rotateY(0deg);
  z-index: 2;
}

.active-warp .content .item .back {
  transform: rotateY(180deg);
  z-index: 1;
}

.active-warp .content .free-change .front {
  transform: rotateY(180deg);
  z-index: 1;
}

.active-warp .content .free-change .back {
  transform: rotateY(0deg);
  z-index: 2;
}

.active-coupon-price {
  position: absolute;
  top: 36px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  span-align: center;
  justv-ify-content: center;
 }

.active-coupon-price .f96 {
  /* line-height: 1; */
  /* letter-spacing: 1px; */
  font-size: 20px;
  margin-left: 30px;
  font-weight: 500;
  color: #ff2323;
}

.active-coupon-price .f20 {
  font-size: 20px;
  font-weight: 600;
  color: #ff2323;
  text-align: center;
 
}

.active-bom-btn {
  margin: 52px auto 0;
  width: 348px;
  height: 80px;
  span-align: center;
  line-height: 80px;
  color: #fff2ce;
  font-size: 32px;
  font-weight: 600;
  background: linear-gradient(166deg, #ff2020 0%, #ff0100 100%);
  border-radius: 40px;
}

.animation-warp {
  position: relative;
  padding-top: 46px;
  width: 100%;
  height: 636px;
}

.animation-warp .position {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.animation-big {
  position: relative;
 
  width: 100px;
  height: 100px;
  animation: freescale 1.3s 1 forwards;
}

.animation-big .animation-big-price {
  animation: t150 1.3s 1 forwards;
 
  }

.animation-big .animation-big-price .f96 {
  animation: f210 1.3s 1 forwards;
}

.animation-big .animation-big-price .f20 {
  animation: f44 1.3s 1 forwards;
}

@keyframes f210 {
  100% {
    font-size: 20px;
    letter-spacing: 6px;
  }
}

@keyframes f44 {
  100% {
    font-size: 34px;
    line-height: 1.9;
  }
}

@keyframes t150 {
  100% {
    top: 150px;
  }
}

@keyframes freescale {
  0% {
    width: 100px;
    height: 100px;
  }

  100% {
    width: 300px;
    height: 300px;
  }
}

.tag-icon {
  width: 30px;
  height: 30px;
  margin-right: 6px;
}
.tag .tag-item {
  margin-right: 32px;
}
.tag .tag-item:last-child {
  margin-right: 0;
}

.free-step .bom .item .img {
  width: 88px;
  height: 38px;
  margin: 0 auto 6px;
}


.fotter .img {
  width: 50px;
  height: 50px;
  margin-bottom: 3px;
}
img{
  width: 100%;
  height: 100%;
  display: block; }
 
</style>
