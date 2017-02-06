<template>
  <div id="app">

<router-view>

</router-view>
<icon class='svv' name="my"></icon>
  <footer>
    <ul class="footer-icon">
      <li class="iconn" @click="Click('home')" ><router-link to="/homePage"><icon class='svv home' :name="home"></icon><p :class="{color:isHome}">首页</p></router-link></li>
      <li class="iconn" @click="Click('video')"><router-link to="/video"><icon class='svv video' :name="video"></icon><p :class="{color:isVideo}">视频</p></router-link></li>
      <li class="iconn" @click="Click('follow')"><router-link to="/follow"><icon class='svv follow' :name="follow"></icon><p :class="{color:isFollow}">关注</p></router-link></li>
      <li class="iconn" @click="Click('my')"><router-link to="/my"><icon class='svv my' :name="my"></icon><p :class="{color:isMy}">我的</p></router-link>
      </li>
    </ul>

  </footer>
    
  </div>
</template>

<script>

export default {
    

  name: 'app',
  components: {
  },
  data(){
    return{
        home:"home2",
        video:"video",
        follow:"follow",
        my:"my",
        isHome:false,
        isVideo:false,
        isFollow:false,
        isMy:false,
    }
  },
  methods:{
    Click:function(el){
        [this.home,this.video,this.follow,this.my]=["home","video","follow","my"];
        [this.isHome,this.isVideo,this.isFollow,this.isMy]=[false,false,false,false];
      if(el==="home"){
        this.home="home2";
        this.isHome=true;
      }
      if(el==="video"){
        this.video="video2";
        this.isVideo=true;
      }
      if(el==="follow"){
        this.follow="follow2";
        this.isFollow=true;
      }
      if(el==="my"){
        this.my="my2";
        this.isMy=true;
      }    
    },
    
  }

}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
html{
  font-size:100px;
}
li{
  list-style:none;
}
a{
  text-decoration: none;
}
footer{
  width:100%;
  height:1.4rem;
  background:rgb(244,245,246);
  position:fixed;
  bottom:0;
}
.footer-icon:after{
  clear:both;
  display:block;
  content:'';
}
.footer-icon{
  height:1.4rem;
}
.iconn{
  float:left;
  width:25%;
  text-align: center;
  font-size:0.3rem;
  margin-top:0.2rem;
}
.iconn p{
  color:black;
}
.iconn .color{
  color:rgb(248,89,89);
}
.svv{
  width:0.64rem;
  height:0.64rem;
 /* color:green;*/
}
</style>
