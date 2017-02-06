<template>
<header>
      <img id="header-img" src="../assets/logo.png" alt="" @touchstart="shuaxin">
      <input id="search" type="text" name="" placeholder="搜你想搜的"> 
      <nav>
		<ul :style="{width:width()}">
			<li v-for="item in items">
				{{item.text}}
			</li>
		</ul>
<<<<<<< 4c1db4cec0637654170b689d1feb1e0743d037e7
				
	  </nav>
	  <div id="nav-icon" @click="add">+</div>
=======
		<div id="nav-icon" @click="add">+</div>		
	  </nav>
>>>>>>> 第一次
	  <main @touchstart="down" @touchmove="move" @touchend="Tend" :style="shuxin">
	  <div class="downUpdate" :style="Update">
	  	<p>松开刷新</p>
	  </div>
	  	<ul class="newsList">
	  		<li v-for="(news,index) in newscnt" >
	  			<div class="cnt-head">
	  				{{ news.head }}
	  			</div>
	  			<div class="cnt-cover" :style="{ background:color(index) }">
	  				{{ news.cover }}
	  			</div>
	  			<ul class="message">
	  				<li class="cover">
	  					{{ news.author }}
	  				</li>
	  				<li class="num">
	  					{{ news.num }}
	  				</li>
	  				<li class="sec">
	  					{{ news.sec }}
	  				</li>
	  				<icon class="svg excx" name="exc" >
	  			</ul>
	  			<div class="newsBar"></div>	  			
	  		</li>
	  		
	  	</ul>
	  </main>
	  <div class="nav-edit" :class="{addChannel:isShow}">
	  	<div class="edit-header"><div @click="excc"><icon class="svg" name="exc" ></div></icon></div>
	  	<div class="my-channel">
	  		<div class="channel-head"><p>我的频道</p><span>编辑</span></div>
	  		<div class="channel-cnt">
	  			<ul>
	  				<li v-for="(item,index) in items" @click="edit(index,'my')"><p>{{item.text}}</p></li>
	  			</ul>
	  			<div class="nice-channel">
	  		<div class="nice-head"><p>频道推荐</p></div>
	  		<div class="nice-cnt">
	  			<ul>
	  				<li v-for="(nice,index) in nices" @click="edit(index,'nice')"><p>{{nice.text}}</p></li>
	  			</ul>
	  		</div>
	  	</div>
	  </div>	  		
	  	</div>
	  	
	  </div>
</header> 
</template>

<script>
 import Storg from "./storage"
 import Random from "./Update"
Storg.firstSave();//载入第一次的导航条数据
export default {
  name: 'homePage',
  components:{
  	Storg,
  	Random
  },
  data () {
    return {
    	items:Storg.fetch("my-channel"),
    	nices:Storg.fetch("nice-channel"),
    	newscnt:[
    		{head:"我是标题1",cover:"我是封面1",author:"我是作者1",num:"999评论",sec:"3分钟前",color:"green"},
    	],
    	isShow:false,
    	shuxin:{
    		marginTop:"0rem",
    	},
    	Update:{
    		height:"0rem",
    		marginBottom:"0rem"

    	},
    };
  },
  watch:{
  		items:{
  			handler:function(val){
  				Storg.save("my-channel",val);
  			},
  			deep:true
  		},
  		nices:{
  			handler:function(val){
  				Storg.save("nice-channel",val)
  			},
  			deep:true
  		}
  },
  methods:{
  	width:function(){
  		return (this.items.length)*1.8+1.23+"rem"
  	},
  	color:function(idx){
  		return this.newscnt[idx].color
  	},
  	edit:function(idx,chn){
  		let items=this.items.slice();
  		let nices=this.nices.slice();
  		if(chn==='my'){		
  			nices.unshift(items[idx]);
	  		items.splice(idx,1);
	  		this.items=items;
	  		this.nices=nices;
  		}
  		if(chn==='nice'){
  			items.push(nices[idx]);
  			nices.splice(idx,1);
  			this.items=items;
  			this.nices=nices;
  		}
  		
  	},
  	excc:function(){
  		this.isShow=false;
  	},
  	add:function(){
  		this.isShow=true;
  	},
  	shuaxin:function(){
  		console.log("我触摸了屏幕")
  	},
  	down:function(e){
  		console.log(e.touches[0].pageY);
  		let Th=e.touches[0].pageY/100;
  		this.TouchH=Th;
  	},
  	move:function(e){
  		this.Mh=e.touches[0].pageY/100;
  		console.log(this.Mh-this.TouchH)
  		if(this.Mh-this.TouchH<0){
  			return
  		}
  		this.Update.height=this.Mh-this.TouchH+"rem";
  		// this.Update.marginBottom=this.Mh-this.TouchH+"rem";
  		if(this.Mh-this.TouchH>1){
  			this.Update.height="1rem";
  			// this.Update.marginBottom="1rem"
  		}
  		this.shuxin.marginTop=this.Mh-this.TouchH+"rem"
  		if(this.Mh-this.TouchH>2){
  			this.shuxin.marginTop="2rem"
  		}
  	},
  	Tend:function(e){

  		if(this.shuxin.marginTop==="2rem"){ 	
  			this.Update.height="0rem";	
  			this.shuxin.marginTop="0rem";
  			Random.addUnshift(this.newscnt);
  			console.log("触发了")
  		}
  		
  		

  	}
  }
};
</script>

<style lang="css" scoped>

.downUpdate{	
	overflow: hidden;
	text-align: center;
	font-size:0.6rem;
	width:100%;
	height:1rem;
	line-height:1rem;	
}












main{
	position: absolute;
	top:2.3rem;
	height:13.7rem;
	width:100%;
	background:;
	overflow: auto;
}
.newsList{
	/*border:1px solid black;*/
}
.newsList:after{
	clear:both;
	display:block;
	content:"";
}
.newsList>li{
	float:left;
	height:4rem;
	width:100%;
	margin-bottom:0.42rem;
}
.cnt-head{
	font-size:0.6rem;
	height:0.8rem;
	
}
.cnt-cover{
	height:2.5rem;
	background:green;
}
.newsList ul{
	position: relative;
	width:100%;
	height:0.9rem;
	background:#fff;
	font-size:0.4rem;
}
.message li{
	float:left;
	line-height:0.9rem;
	margin:0 0.1rem;
	color:#888;
}
.message{
	position: relative;
}
.excx.svg{
	width:0.2rem;
	height:0.2rem;
	border:0.01rem solid #666;
	border-radius:0.1rem;
	padding:0.07rem 0.15rem;
}
.newsBar{
	width:80%;
	height:1px;
	border:0.01rem solid rgb(232,232,232);
	margin-left:10%;
}
























.nav-edit.addChannel{
	display:block;
}
.nav-edit{
	position:fixed;
	width:100%;
	height:17.5rem;
	bottom:0;
	z-index:99;
	overflow: auto;
	background:rgb(244,245,246);
	display:none;
}
.edit-header{
	width:100%;
	height:1.3rem;
	position: relative;
}
.edit-header div{
	position: absolute;
	right:3%;
	top:50%;
	transform:translate(0,-50%);
	width:0.5rem;
	height:0.5rem;
}
.svg{
	position: absolute;
	right:3%;
	top:50%;
	transform:translate(0,-50%);
	width:0.5rem;
	height:0.5rem;
}
.my-channel{
	position: absolute;
	left:50%;
	transform:translate(-50%,0);
	background:#ccc;
	width:94%;
/*	height:5rem;*/
	font-size:0.55rem;
}
.nice-channel{
	position: absolute;
	left:50%;
	transform:translate(-50%,0);
	background:#ccc;
	width:94%;
	font-size:0.55rem;
	margin-top:0.1rem;

}
.channel-head,.nice-head{
	position: absolute;
	background:rgb(244,245,246);
	width:100%;
	height:1.1rem;
}
.channel-head p{
	display: inline-block;
	line-height: 1.1rem;
	margin-left:2%;
}
.nice-head p{
	display: inline-block;
	line-height: 1.1rem;
	margin-left:0;
}
.channel-head span{
	position: absolute;
	right:2%;
	width:1rem;
	border:1px solid rgb(248,90,90);
	color:rgb(248,90,90);
	padding:0.05rem 0.45rem;
	margin-top:0.2rem;
	margin-bottom:0.2rem;
	border-radius:0.4rem;
	font-size:0.5rem;
}
.channel-cnt{
	position: absolute;	
	width:100%;
	top:1.1rem;
}
.nice-cnt{
	position: absolute;	
	width:105%;
	right:-2%;
	top:1.1rem;
}
.channel-cnt ul,.nice-cnt ul{
	text-align: center;
	margin-left:3%;
}
.channel-cnt li,.nice-cnt li{
	float:left;
	font-size:0.45rem;
	margin-bottom:0.2rem;
	margin-right:2.5%;
	margin-left:2.5%;	
	background:#fff;
}
.channel-cnt li p,.nice-cnt li p{
	padding:0.1rem 0.1rem;
	width:1.5rem;
}
header{
  width:100%;
  height: 1.3rem;
  background: rgb(212,61,61);
  position: relative;
}
#header-img{
  position:absolute;
  width:20%;
  height:0.55rem;
  top:50%;
  left:5%;
  transform:translate(0,-50%);
}
#search{
  background-image:url(../assets/search.svg);
  background-repeat: no-repeat;
  background-position:0.2rem 0.15rem;
  background-size:0.4rem;
  font-size:0.4rem;
  font-family:"微软雅黑";
  /*width:5.7rem;*/
  width:60%;
  height:0.7rem;
  border-radius:0.15rem;
  border:0px;
  outline:none;
  position: absolute;
  top:50%;
  left:30%;
  transform:translate(0,-50%);
  padding-left:0.8rem;
}
nav{
  position:absolute;
  width:100%;
  height:1rem;
  background:rgb(244,245,246);
  overflow-x: auto;
  top:1.3rem;
}
ul:after{
	clear:both;
	content:"";
	display:block;
}
nav li{
	float:left;
	width:1.8rem;
	font-size:0.5rem;
	line-height:1rem;
	text-align: center;
}
#nav-icon{
<<<<<<< 4c1db4cec0637654170b689d1feb1e0743d037e7
	position:absolute;
=======
	position:fixed;
>>>>>>> 第一次
	top:1.4rem;
	right:0;
	height:0.8rem;
	width:1.23rem;
	border-left:1px solid #ccc; 
	background:rgb(244,245,246);
	opacity:0.9;
	text-align:center;
	line-height:0.8rem;
}
</style>