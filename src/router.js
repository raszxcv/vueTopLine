import Vue from 'vue'
import VueRouter from 'vue-router'
import my from "./components/my"
import homePage from "./components/homePage"
import follow from "./components/follow"
import videoo from "./components/video"

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
	  {path:"/",component:homePage},
	  {path:"/my",component:my},
	  {path:"/homePage",component:homePage},
	  {path:"/follow",component:follow},
	  {path:"/video",component:videoo}
	]
})

export default router