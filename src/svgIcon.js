import Vue from 'vue'
import Icon from 'vue-svg-icon/Icon.vue'

Vue.component('icon', Icon); 

const svgIcon=[
	Icon.inject('my'),
	Icon.inject('my2'),
	Icon.inject('home'),
	Icon.inject('home2'),
	Icon.inject('follow'),
	Icon.inject('follow2'),
	Icon.inject('video'),
	Icon.inject('video2'),
	Icon.inject('set'),
	Icon.inject('night'),
	Icon.inject('shoucang'),
	Icon.inject('exc')
]


export default svgIcon
