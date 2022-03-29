<template>
  <div class="tab" id="video_box">
 
   
  <div class="coupon-wrapper">
  <div class="coupon-item">
          <div class="style-two">
              <div class="info-box">
                  <p class="nick">唯品会平台优惠?</p>
                  <div class="coupon-money">
                      <div class="lay of">￥<em>10</em></div>
                      <div class="lay">
                          <p class="tit">优惠?</p>
                          <p class="demand">满100元可用</p>
                      </div>
                  </div>
              </div>
              <a href="javascript:;" class="get-btn">
                  <span>立即领取</span>
              </a>
          </div>
      </div>

  </div>
 </div>
</template>
<script>
import Vue from "vue";
 import GoodList  from './content/goods/GoodsList'

export default {
  name: "videoChild",
    components: {
      GoodList
     },
  data() {
    let u = navigator.userAgent;
    return {
      show:false,
       date: '',
      active: 0,
      isTKBool:false,
      isSATE:false,
      CollectCode:'',
    
    };
  },
 
  methods: {

    
 
 
    
  },
};
</script>
<style scoped>
.coupon-wrapper {
    width: 100%;
    height: auto;
    padding: 5%;
}
.coupon-wrapper .coupon-item {
    width: 100%;
}

.style-two {
    background-color: #ED008C;
    border: 1px solid #ED008C;
    color: #fff;
}

.style-two{
  width: 100%;
    height: 8rem;
    position: relative;
    margin: 5% 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #E5004F;
}

.style-two .info-box{
  -webkit-box: 1;
    -webkit-flex: 1;
    flex: 1;
    padding: 0 3% 0 10%;
    position: relative;
}

 .style-two .get-btn{
   display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24%;
    height: 8rem;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    line-height: 1.35;
    background-color: #E5004F;
    position: relative;
 }

 .style-two .get-btn {
    background-color: #ed008c;
}

.style-two .info-box:before, .style-two .info-box:after {
    border-color: transparent;
}



.style-two:before {
    top: -.4rem;
    left: .5rem;
    right: .5rem;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.style-two:before {
    content: "";
    height: .5rem;
    position: absolute;
    display: block;
    z-index: 9;
    background-image: linear-gradient(-45deg,#ED008C 25%,transparent 25%,transparent),linear-gradient(-135deg,#ED008C 25%,transparent 25%,transparent),linear-gradient(-45deg,transparent 75%,#ED008C 75%),linear-gradient(-135deg,transparent 75%,#ED008C 75%);
    background-size: 1rem 1rem;
    background-repeat: repeat-x,repeat-x;
}

.style-two:after {
    bottom: -.36rem;
    left: 1.2rem;
    right: 1.38rem;
}

 .style-two:after {
    content: "";
    height: .5rem;
    position: absolute;
    display: block;
    z-index: 9;
    background-image: linear-gradient(-45deg,#ED008C 25%,transparent 25%,transparent),linear-gradient(-135deg,#ED008C 25%,transparent 25%,transparent),linear-gradient(-45deg,transparent 75%,#ED008C 75%),linear-gradient(-135deg,transparent 75%,#ED008C 75%);
    background-size: 1rem 1rem;
    background-repeat: repeat-x,repeat-x;
}

 .style-two .info-box:before {
    top: -1.8rem;
    left: -.5rem;
    -webkit-transform: rotate(43deg);
    transform: rotate(43deg);
}
.style-two .info-box:before{
  content: "";
    width: 1.4rem;
    height: 2rem;
    position: absolute;
    z-index: 9;
    border-width: 1px;
    border-style: solid;
    border-color: transparent #E5004F transparent transparent;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: #f5f5f5;
}
</style>
