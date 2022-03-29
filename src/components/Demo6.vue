<template>
  <div class="tab" id="video_box">

        <!-- <div style="width: 100%;    margin: 0.5rem 3%;" >

            <div style="width: 44%;float: left;">
                <van-cell     :value="date" @click="show = true" />
                  <van-calendar v-model="show" @confirm="onConfirm"   color="#1989fa"/>
               
              </div>
             <div style="float: left;width: 7%;margin-top: 0.5rem; ">
               至
             </div>

             <div style="width: 44%;float: left;">
                <van-cell   :value="date" @click="show = true" />
                  <van-calendar v-model="show" @confirm="onConfirm"   color="#1989fa"/>
            
              </div>
            </div> -->

       <!-- <div class="telBox"  >
 
        <van-field v-model="date" @click="show = true"  readonly/>
          <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
            <van-calendar v-model="show" type="range" @confirm="onConfirm" color="#87CEEB" :min-date="minDate" :max-date="maxDate"/>
          </van-popup>
        </div> -->



	<!-- <div class="diBu">
		<div  class="single btn ">
			<font  class="weight"> <font  class="tag">¥</font > 3000</font >
			<font >单独购买</font >
		</div>

		<div  class="group btn " >
			<font  class="weight"> <font  class="tag">¥</font > 500</font >
			<font >一键开团</font >
		</div>
	</div> -->
 
      <div class="textBody">
          <div class="textName">数量：</div>
          <div class="textNameDetails">
               <div class="label">
                <div class="label-item" :class="{ backgroundBlue: active == 1 }" @click="numType(1)">公司</div>
                <div class="label-item" :class="{ backgroundBlue: active == 2 }" @click="numType(2)">住宅</div>
                <div class="label-item" :class="{ backgroundBlue: active == 3 }" @click="numType(3)">学校</div>
              </div>
          </div>
        </div>

       <van-skeleton title :row="3" />

<!-- <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
         <good-list :goods="showGoods"/>

</van-list> -->


     <!--   <div class="tiankuangBox" v-if="isTKBool">
       <div class="tiankuangBody">
          <button @click="tijiaoQR" class="buttonLogin3" style="width: 80%;bottom: 0.5rem;margin-left: 10%;float: left;" type="button"               :class="{backgroundBlue:!billState  }" :disabled="!billState">补箱</button>
         </div>  

         <div class="tiankuangBody">

          
 
          <input type="text" id="buhuoWeiZi" v-model="CollectCode" class="inputWZ" @keyup.enter="searchEnterFun">  
        
               <p class='textFont2'>Z001</p> 
               <div class="quxiaoBtn" @click="quxiaoXuanZe">X</div>

              <div class="hangBox ">共<span class="NumFontSize">1111</span>  已分拣<span class="NumFontSize">1111</span> 未分拣<span class="NumFontSize">1111</span>
   
              </div> 
 
          <input type="text" id="buhuoWeiZi" v-model="CollectCode" class="inputWZ" @keyup.enter="searchEnterFun">
       
          <button @click="tijiaoQR" class="buttonLogin3" style="width: 40%;bottom: 0.5rem;margin-left: 30%;float: left;" type="button"               :class="{backgroundBlue:!billState  }" :disabled="!billState">补箱</button>
         </div> 
      </div> -->

         <!-- <view wx:for="{{shopList}}" wx:key="index" catchtap="tapSite" data-id="{{item.shop_id}}" class="shopItem {{item.element.shop_id == currentShop?'shopItem1':''}}">
					<view class="shopRow1">
						<view class="shopRowName {{item.shop_id == currentShop?'active':''}}">{{item.shop_name}}</view>
						<view class="shopRowdistance {{item.shop_id == currentShop?'active':''}}">
							<image wx:if="{{item.shop_id == currentShop}}" src="http://jhkdjw.oss-cn-zhangjiakou.aliyuncs.com/jhk_xcx/icon/icon_Ad._select.png"></image>
							<image wx:else src="http://jhkdjw.oss-cn-zhangjiakou.aliyuncs.com/jhk_xcx/icon/icon_Ad.png"></image>
							{{item.distance}}
						</view>
					</view>
					<view class="shopRow2 {{item.shop_id == currentShop?'active':''}}">
						{{item.address}}
					</view>
					<image wx:if="{{item.shop_id == currentShop}}" class="selectCun" src="http://jhkdjw.oss-cn-zhangjiakou.aliyuncs.com/jhk_xcx/icon/select.png"></image>
				</view> -->


       <div class="tiankuangBox2" v-if="isTKBool">
        <div class="tiankuangBody2">
          <p style="font-size: 19px; font-weight: bold">问题描述</p>
          <div class="tabboot">

            <div class="shopItem" :key="index" v-for="(item, index) in wentiList" @click="pinzhongList1(index)">
              <div class="shopRow1">
                   <div class="shopRowName active">菊花开郑州福元路店</div>
           
               </div>
                  <div class="shopRow2 active">
         
				         		郑州市金水区福元路与未来路交叉口向东300米路南
					
                </div>
            	<img class="selectCun"  v-if="index==0" src="http://jhkdjw.oss-cn-zhangjiakou.aliyuncs.com/jhk_xcx/icon/select.png"></img>
           </div>

    
          </div>
          <button @click="quxiaoXuanZe" class="buttonLogin bottom1" type="button">
            选好了
          </button>
          <p style="height: 0.1rem; margin: 0.4rem 0"></p>
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
      billState:true,
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

      }],
      wentiList:[{
        Rmark:'11111111111',
        pxxztype:'',


      },{
        Rmark:'11111111111',
        pxxztype:'',


      }],
       minDate: new Date(2010, 0, 1),
      maxDate: new Date(2030, 0, 31),
      list: [],
      loading: false,
      finished: false,
      loveCount: 0
    };
  },
    created () {
    this.date = [new Date(2010, 0, 1), new Date(2030, 0, 31)]
    this.onConfirm( this.date )
    },
  methods: {

     onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.showGoods.push({
        title:'秋冬加绒加厚新款打底裤女外穿显瘦高腰保暖棉裤子黑色小脚魔术裤',
        price:'39.8',
        cfav:'273',
        show:{
          img:'https://s5.mogucdn.com/mlcdn/c45406/200907_2i4eddi97955jkkf1958lh73gf4ef_640x960.jpg_640x854.v1cAC.40.webp'
        }

      });
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.showGoods.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
 
        pinzhongList1 (index) {
  
      this.$forceUpdate()
    },
     formatDate(date) {
      return ` ${date.getFullYear()}- ${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },

   numType (number) {
    this.active=number
    this.isTKBool=true
    },tijiaoQR(){

    },  
     quxiaoXuanZe () {
      this.isTKBool = false
    },
 
    
  },
};
</script>
<style scoped>
 #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
}
 .label-item {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 2rem;
    padding: 5px 18px;
    font-size: 12px;
    background: #f6f7f9;
    border-radius: 15px;
    color: #1d1e1e;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.backgroundBlue {
       background: rgba(30, 202, 245, 0.05);
       color: #87CEEB;
       border: 1px solid #87CEEB;
}
  .textBody {
    width: 94%;
    height: 3rem;
    background: #fff;
    border-bottom: #f2f2f2 solid 1px;
    line-height: 3rem;
    padding: 0 3%;
  }
  .textName {
    width: 43%;
    float: left;
    text-align: left;
  }

  .textNameDetails {
    width: 57%;
    float: right;
    text-align: right;
    color: darkgray;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

    .tiankuangBox {
    position: fixed;
    margin: 0;
    z-index: 20;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    background: #f2f2f2;
    scroll-behavior: auto;
    overflow: scroll;
    background: rgba(49, 49, 49, 0.5);
  }
    .tiankuangBody {
    width: 80%;
    height: 18rem;
    top: 50%;
    margin-top: -9rem;
    margin-left: 10%;
    position: absolute;
    background: #fff;
    border-radius: 5px;
  }
   .inputWZ {
    width: 60%;
    border-bottom: #000 solid 1px;
    padding: 10% 20%;
    padding: 0 5%;
    text-align: center;
    font-size: 1.4rem;
  }
    .buttonLogin3 {
    background: #87CEEB;
    width: 84%;
    height: 2.5rem;
    margin: 0.5rem 8%;
    border-radius: 0.4rem;
    border: 0.041667rem solid transparent;
    outline: none;
    COLOR: #FFF;
    font-size: 1.2rem;
    margin-top:2.5rem;
  }

    .textFont {
    width: 100%;
    text-align: center;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.6rem;
    font-weight: 900;
    float: left;
    margin: 2rem 0 2.5rem 0;
  }

  
      .textFont2 {
    width: 100%;
    text-align: center;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.6rem;
    font-weight: 900;
    float: left;
    margin: 2rem 0 0rem 0;
  }
  input {
    background: transparent;
    border: none;
    outline: medium;
}

      /* .backgroundBlue{
 background-color: #ccc;
    } */

    .flex-between {
 display: flex;
 justify-content: space-between;
 align-items: center;
  padding-bottom: 10px;

}

  .textNameleft {
     height: 1.5rem;
    line-height: 1.5rem;
    font-size: 1.05rem;
    text-align: left;
   }

    .hangBox {
    width: 90%;
    height: auto;
    overflow: hidden;
    
     margin-top: 0.6rem;
    margin-left: 5%;

     margin-bottom: 1.5rem;
  }

  
  .NumFontSize {
    font-size: 1.15rem;
    font-weight: 600;
    color:#000;
  }
  .quxiaoBtn {
    position: absolute;
    margin: 0 0 0 14rem;
    width: 2rem;
    right: 5px;
    height: 2rem;
    color: #000;
    line-height: 2rem;
    text-align: center;
  }
  .telBox {
    width: 74%;
    margin: 0.5rem 3%;
    height: 2.73rem;
    line-height: 2.5rem;
    font-size: 1.1rem;
    margin-top: 1rem;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    float: left;
}
.telName {
    width: auto;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: right;
    float: left;
    font-size: 1.05rem;
}


/* 底部 */
.diBu {
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 3rem;
  padding: 0 20px;
  background-color:#fff;
}

.diBu .btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48%;
  height: 2.5rem;
  color: #333333;
  font-size: 1rem;
  border-radius: 44px;
}
.diBu .weight {
  font-size: 1rem;
  line-height: 1rem;
  font-weight: bold;
}
.diBu .btn .tag {
  font-size: 1rem;
}
.diBu .single {
  border: 1px solid #cccccc;
}
.diBu .group {
  background: #FDD901;
  border: 1px solid #FDD901;
}
.diBu .gray {
  color: #f5f5f5;
  background: lightgray;
  border: 1px solid lightgray;
}


.tiankuangBox2 {
    position: fixed;
    margin: 0;
    z-index: 60;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: #d31b1b;

    background: rgba(49, 49, 49, 0.5);
  }

  .tiankuangBody2 {
    width: 80%;
    margin: 7% 10%;
    position: absolute;
    background: #fff;
    border-radius: 5px;
    min-height: 20rem;
    top: 55%;
    scroll-behavior: auto;
    margin-top: -13rem;
  }

 .tabboot {
    overflow: scroll;
    height: 18rem;
  }

  .textBox3 {
    width: 86%;
    margin-left: 7%;
    height: 3rem;
    background-color: red;
    overflow: scroll;
    box-sizing: border-box;
    border: #ccc solid 1px;
    margin-top: 0.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

    .textBody4 {
    width: 94%;
    height: 3rem;
    background: #f2f2f2;
    line-height: 3rem;
    padding: 0 3%;
  }

  .xuanzhongImage {
    width: 10%;
    float: left;
    height: 2rem;
  }


  .shopItem{
  border: 1px solid #eee;
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 8px 10px;
  box-sizing: border-box;
  position: relative;
  width: 90%;
  margin-left: 5%;

}




 
.selectCun{
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 1.55rem;
  height: 1.55rem;
}

.shopRow1{
  display: flex;
  justify-content: space-between;
}

  .textName {
    width: 43%;
    float: left;
    text-align: left;
  }

  .shopRowName{
  max-width: 100%;
  overflow: hidden;
	text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
}

.shopRowdistance{
  font-size: 1rem;
  color: #666;
  margin-top: 7px;
}

.shopRow2{
  width: 80%;
  overflow: hidden;
	text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 24rpx;
  color: #666;
  margin-top: 10rpx;
}
</style>
