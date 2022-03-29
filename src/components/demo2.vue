<template>
  <div>
    <nut-noticebar  @click="hello"  :text="text"></nut-noticebar>
    <nut-noticebar    @click="hello"  >{{text}}   </nut-noticebar>

   <nut-noticebar direction='vertical' :list="horseLamp1" :speed='10' :standTime='1000'  @click='go' :closeMode="true"></nut-noticebar>
 
       <div class="buttonBody  ">
        <div class="buttonTwo ">确认 </div>
        <div class="buttonOne "> 拒绝 </div>
      </div>
  
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      horseLamp1: ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆'],

     text:"" ,
          pwd:"",
          type:"password",
          code:"",
          seen:"password",
          eye:true,        
      
    };
  },
  created(){

    this.text='helllo华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！'
  },
  methods: {
     changeSeen(){
      this.type = this.seen ? 'password' : 'text';
      this.seen = !this.seen;
    },
     go(item){
        console.log(item)
    },hello(){

    }
 
  },
};
</script>

 <style scoped>


  .box{
    width: 100%;
    text-align: center;
    display: table-cell;
    vertical-align:middle;
    height: 3rem;

  }
  	.bun2{
		  width: 49%;
			height: 3rem;
			background: #2394EF;
			opacity: 1;
			float: right;
      font-size: 18px;
      font-family: SourceHanSansCN-Regular;
      line-height: 12px;
      color: #FFFFFF;
  
	}

  	.bun{
		    width: 49%;
       background: #67C23A;
			opacity: 1;
			float: right;
      font-size: 18px;
      font-family: SourceHanSansCN-Regular;
      line-height: 12px;
      color: #FFFFFF;
 
	}
 
 
 
  .buttonOne {
    width: 50%;
    float: left;
   
    background: #67C23A;
   }
 
  .buttonTwo {
    width: 50%;
    float: left;
    background: #2394EF;
 }


.buttonBody {
     width: 100%;
     height: 3rem;
     line-height: 3rem;
     overflow: hidden;
     font-size: 1rem;
    text-align: center;
    color: #fff;
}
</style>
