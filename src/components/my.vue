<template>
<div id="my">
	<div id="user">
		<div id="userImg">
			<img src="../assets/heh.jpg" alt="">
			<p>{{ userName }}</p>
		</div>		
	</div>
	<div id="setBar">
		<ul>
			<li class="set-icon"><icon class="icon" name="shoucang"></icon><p>收藏</p></li>
			<li class="set-icon"><icon class="icon" name="night"></icon><p>夜间</p></li>
			<li class="set-icon"><icon class="icon" name="set"></icon><p>设置</p></li>
		</ul>
	</div>
	<div class="bar"></div>
	<ul id="option">
		<li v-for="item in items">
			{{ item.text }}
			<span>></span>
		</li>
	</ul>
</div>

</template>

<script>
export default {
  name: 'my',
  data () {
    return {
    	userName:"火Cc",
    	items:[
    		{text:"消息通知"},
    		{text:"离线"},
    		{text:"活动"},
    		{text:"商城"},
    		{text:"京东特供 春节配送不打烊"},
    		{text:"我要爆料"},
    		{text:"反馈"},
    	]
    };
  }
};
</script>

<style lang="css" scoped>
#my{	
	width:100%;
	height:16rem;
	overflow:auto;
}
#user{
		background:rgb(100,106,105);
	width:100%;
	height:6rem;
	position:relative;
	text-align: center;
	font-size:0.6rem;
	color:#fff;
}
#userImg{
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
}
#userImg img{
	width:2rem;
	height:2rem;
	border-radius:50%;
	margin-bottom:0.1rem;
}
#setBar{
	width: 100%;
	height:1.8rem;
}
#setBar ul:after{
	clear:both;
	display:block;
	content:"";
}
#setBar ul{
	display:flex;
	border-bottom:none;
}
.set-icon{
	width:33.3333333333333333333%;
	height:2rem;
	text-align:center;
	font-size:0.35rem;
}
.set-icon:nth-child(2){
	justify-content: center;
	border-left:1px solid rgb(232,232,232);
	border-right:1px solid rgb(232,232,232);
}
.set-icon:nth-child(3){
	justify-content: flex-end;
}
.set-icon .icon{
	margin-top:0.25rem;
	width:0.7rem;
	height:0.7rem;
}
.bar{
	width:100%;
	background: rgb(244,245,246);
	height:0.25rem;
	border-top:1px solid rgb(232,232,232);
	border-bottom:1px solid rgb(232,232,232);
}
#option{
	width:95%;
	margin-left:5%;
	color:rgb(81,81,81);
	font-size:0.5rem;
}
#option li{
	position:relative;
	line-height:1.2rem;
	height:1.2rem;
	margin-top:0.3rem;
	border-bottom:1px solid rgb(232,232,232);
}
#option li>span{
	position:absolute;
	right:0.5rem;
}
</style>