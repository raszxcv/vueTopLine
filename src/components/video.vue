<template>
<div id="video">
	<nav>
		<ul :style="{width:width()}">
			<li v-for="item in items">
			{{ item.text }}
			</li>
		</ul>
		<div id="search"><img src="../assets/search.svg" alt=""></div>
	</nav>
	<div id="video-list">
		<ul>
			<li v-for="(list,index) in lists">
				<div class="list">
					<div class="listCover" :style="{background:color(index)}">{{ list.cover }}</div>
					<div class="listMessage">
					<ul>
						<li class="author"><p><img src="../assets/heh.jpg" alt=""><span>{{ list.author }}</span></p></li>
						<li class="num">{{ list.num }}</li>
						<li class="comment"><p><img src="../assets/heh.jpg" alt=""><span>{{ list.comment }}</span></p></li>
						<li class="more"><p><img src="../assets/heh.jpg" alt=""></p></li>
					</ul>					
					</div>					
				</div>
				<div class="bar"></div>
			</li>
		</ul>
	</div>
	
</div>
</template>

<script>
export default {
  name: 'video',
  data () {
    return {
    	items:[
    		{text:"推荐"},
    		{text:"音乐"},
    		{text:"搞笑"},
    		{text:"社会"},
    		{text:"小品"},
    		{text:"生活"},
    		{text:"影视"},
    		{text:"娱乐"},
    		{text:"呆萌"},
    		{text:"游戏"},
    		{text:"原创"},
    		{text:"开眼"},
    	],  	
    	lists:[
    		{cover:"我是封面",author:"我是作者",num:"125万次播放",comment:"999",color:"red"},
    		{cover:"我是封面",author:"我是作者",num:"25万次播放",comment:"999",color:"green"},
    		{cover:"我是封面",author:"我是作者",num:"25万次播放",comment:"999",color:"yellow"},
    	],
    }
  },
  methods:{
  	check:function(){
  		console.log(this.items)
  	},
  	color:function(idx){
  		return this.lists[idx].color
  	},
  	width:function(){
  		console.log((this.items.length)*2)
  		return (this.items.length)*1.8+1.1+"rem"
  	},
  }
};
</script>

<style lang="css" scoped>
#video{
	width:100%;
	height:16rem;
	overflow:auto;
	position:relative;
}
nav{
	
	width:100%;
	height:1.2rem;
	overflow: auto;
}
nav ul:after{
	clear:both;
	display:block;
	content:"";
}
nav ul li{
	float:left;
	width:1.8rem;
	line-height: 1.2rem;
	font-size:0.5rem;
	text-align: center;
}
#search{
  position: absolute;
  width:1.1rem;
  height:0.8rem;
  border-left:1px solid #ccc;
  background:#fff;
  opacity:0.9;
  top:0.2rem;
  right:0;
  text-align: center;
  line-height: 0.8rem;
}
#search img{
	width:0.6rem;
	height:0.6rem;
}
.list{
	width:100%;
	height:7.3rem;

}
.listCover{
	width:100%;
	height:6.1rem;

}
.listMessage{
	width:100%;
	height:1.2rem;
}
.listMessage ul{

}
.listMessage ul:after{
	clear:both;
	display:block;
	content:"";
}
.listMessage li{
/*	border:1px solid green;*/
	float:left;
	height:1.2rem;
	line-height: 1.2rem;
}
.author{
	font-size:0.43rem;
	font-family:"微软雅黑";
	margin-left:0.5rem;
}
.author p,.comment p,.more p{
	position:relative;
	height:1.2rem;
}

.author img,.comment img,.more img{
	position: absolute;
	top:50%;
	transform:translate(0,-50%);
	width:0.8rem;
	height:0.8rem;
	border-radius:50%;
	/*vertical-align:middle;*/
}
.author span{
	margin-left:0.9rem;
}
.comment span{
	margin-left:0.9rem;
}
.num{
	font-size:0.4rem;
	color:#aaa;
	margin-left:0.8rem;
}
.comment{
	font-size:0.4rem;
	color:#aaa;
	margin-left:0.4rem;
}
.more{
	margin-right:5%;
	margin-right:0.4rem;
	margin-left:0.4rem;
}
.bar{
	width:100%;
	background: rgb(244,245,246);
	height:0.3rem;
	border-top:1px solid rgb(232,232,232);
	border-bottom:1px solid rgb(232,232,232);
}
</style>