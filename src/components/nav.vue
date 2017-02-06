<template>
<nav>
<ul :style="navWidth">
	<li v-for="item in items">
		{{item.text}}
	</li>
</ul>
<div id="nav-edit">+</div>
</nav>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
    	items:[
    		{text:"推荐"},
    		{text:"热点"},
    		{text:"深圳"},
    		{text:"视频"},
    		{text:"社会"},
    		{text:"头条号"},
    		{text:"推荐"},
    		{text:"热点"},
    		{text:"深圳"},
    		{text:"视频"},
    		{text:"社会"},
    		{text:"视频"},
    	],
    	navWidth:{
    		width:"120rem"
    	}
    };
  }
};
</script>

<style lang="css" scoped>
nav{
  position:relative;
  width:100%;
  height:1rem;
  background:rgb(244,245,246);
  overflow-x: auto;

}
ul:after{
	clear:both;
	content:"";
	display:block;
}
ul{
	
	height:1rem;
	
}
li{
	float:left;
	font-size:0.5rem;
	line-height:1rem;
	margin-left:0.2rem;	
}
#nav-edit{
	position:fixed;
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