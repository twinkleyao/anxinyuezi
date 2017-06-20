$(function(){

$("header #topTools .tool .entry .clientPhone").mouseover(function(){
	$("header #topTools .tool .entry .dlQRcode").show();
}).mouseout(function(){
	$("header #topTools .tool .entry .dlQRcode").hide();
})
// var topUc=$("header #topTools .tool .login #topUc");
// var ucZone=$("header #topTools .tool .login #ucZone");
// var aZones=$("header #topTools .tool .login #ucZone li");
// topUc.click(function(){
// 	if(ucZone.is(":visible")){
// 		ucZone.hide();
// 	}else{
// 		ucZone.show();
// 		clearTimeout(timer);
// 	}
// })
// topUc.mouseout(function(){
//  timer=setTimeout(function(){ucZone.hide()},500);
// })
// aZones.mouseover(function(){
// 	clearTimeout(timer);
// 	aZones.css("background",'#fff');
// 	$(this).css("background",'#ddd')
// })
// aZones.mouseout(function(){
// 	aZones.css("background",'#fff');
// 	timer=setTimeout(function(){ucZone.hide()},500);
// })


})