function hideplaceshow(obj,placezone){
var timer=null;
	obj.click(function(){
	if(placezone.is(":visible")){
		placezone.hide();
	}else{
		placezone.show();
		clearTimeout(timer);
	}
})

obj.mouseleave(function(){
// alert("ok");
 placezone.hide();
  })
 placezone.mouseenter(function(){
 	placezone.show();
 	//clearTimeout(obj.timer);

 }).mouseleave(function(){
 	timer=setTimeout(function(){placezone.hide()},1000);
 })

}
$(function(){
	var oPlace=$("header #topHeader .place");
var oPlacezone=$("header #topHeader #placeZone");

hideplaceshow(oPlace,oPlacezone);
})
