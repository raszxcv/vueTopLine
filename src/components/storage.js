const STORAGE_KEY='my-channel';
const STORAGE_KEY2='nice-channel';

export default{
	fetch:function(channel){		
		if(channel===STORAGE_KEY){
			return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]')
		}
		if(channel===STORAGE_KEY2){
			return JSON.parse(window.localStorage.getItem(STORAGE_KEY2)||'[]')
		}
	},
	save:function(channel,items){
		if(channel===STORAGE_KEY){
			return window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
		}
		if(channel===STORAGE_KEY2){
			return window.localStorage.setItem(STORAGE_KEY2,JSON.stringify(items))
		}	
	},
	firstSave:function(){
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify([
    		{text:"推荐"},
    		{text:"热点"},
    		{text:"深圳"},
    		{text:"视频"},
    		{text:"社会"},
    		{text:"头条号"},
    	]));
		window.localStorage.setItem(STORAGE_KEY2,JSON.stringify([
    		{text:"小说"},
    		{text:"时尚"},
    		{text:"历史"},
    		{text:"直播"},
    		{text:"育儿"},
    		{text:"搞笑"},
    	]))
    	return
	}
}