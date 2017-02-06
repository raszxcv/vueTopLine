<template>
<div id="follow">
	<header><p>我关注的</p><span>+</span></header>
	<ul id="ul-one" class="ul-cnt">
		<li v-for="item in items"><span></span><p>{{ item.text }}</p></li>
	</ul>
	<div class="bar"></div>

	<ul id="ul-two" class="ul-cnt" >
		<li v-for="(follo,index) in follos"><span></span><p>{{ follo.text }}</p></li>
		<div class="add"  >
			<span>+</span>
			<p>添加更多感兴趣内容</p>
		</div>
	</ul>
	
</div>
</template>

<script>
export default {
  name: 'follow',
  data () {
    return {
    	items:[
    		{text:"好友动态"},
    		{text:"我的火山主播"}
    	],
    	follos:[
    		{text:"赫敏"},
    		{text:"艾玛"}
    	],
    };
  }
};
</script>

<style lang="css" scoped>
#follow{
	width:100%;
	height:16rem;	
}
header{
	position:relative;
	width:100%;
	height:1.3rem;
	font-size:0.5rem;
	border-bottom:1px solid #ccc;
}
header p{
	position: absolute;
	left:50%;
	line-height:1.3rem;
	transform:translate(-50%,0);
}
header span{
	position: absolute;
	font-size:1rem;
	line-height:1.3rem;
	right:0.3rem;
}
.ul-cnt{
	width:100%;
}
.ul-cnt li{
	position: relative;
	height:2rem;
	border-bottom:1px solid #ccc;
}
.ul-cnt li p{
	font-size:0.5rem;
	position: absolute;
	top: 50%;
	transform:translate(0,-50%);
	left:2rem;
}
.ul-cnt li span{
	display:inline-block;
	width:1.4rem;
	height:1.4rem;
	margin-top:0.3rem;
	margin-left:0.3rem;
	border:1px solid black;
}
.bar{
	width:100%;
	background: rgb(244,245,246);
	height:0.25rem;
	border-top:1px solid rgb(232,232,232);
	border-bottom:1px solid rgb(232,232,232);
}
#ul-two{
	position: relative;
}
.add{
	position:absolute;
	width:5rem;
	height:5rem;
	top:4.3rem;
	left:50%;
	transform:translate(-50%,0);
	text-align: center;
	color:#ccc;
}
.add span{
	position:absolute;
	top:50%;
	transform:translate(-50%,-50%);
	border:0.04rem dashed #ccc;
	width:1.2rem;
	height:1.2rem;
}
.add p{
	position:absolute;
	top:80%;
	width:100%;
	font-size:0.4rem;
}
</style>