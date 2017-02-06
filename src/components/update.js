const Color =["red","green","yellow","black"];


export default{
	randomColor:function(){
		return Math.floor(Math.random()*4)
	},
	addUnshift:function(el){
		let Orandomcolor=Math.floor(Math.random()*4);
		let Trandomcolor=Math.floor(Math.random()*4);
		let Srandomcolor=Math.floor(Math.random()*4);
		el.unshift({head:"我是标题",cover:"我是封面",author:"我是作者",num:"999评论",sec:"3分钟前",color:Color[Orandomcolor]},
			
			)
		
	}
}


