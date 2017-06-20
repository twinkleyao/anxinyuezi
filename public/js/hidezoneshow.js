
function hidezoneShow(obj,hidezone,listzone,color){
	var timer=null;
obj.click(function(){
	if(hidezone.is(":visible")){

		hidezone.hide();
		//$("i:eq(0)").show();
		// $("i:last").hide();
		
	}else{
		hidezone.show();
		// $("i:first").hide();
		// $("i:last").show();		
		clearTimeout(timer);
	}
})
obj.mouseleave(function(){
 timer=setTimeout(function(){hidezone.hide()},500);
})
listzone.mouseenter(function(){
	clearTimeout(timer);
	listzone.css("background","#fff");
	$(this).css("background",color)
})
listzone.mouseleave(function(){
	listzone.css("background",'#fff');
	timer=setTimeout(function(){hidezone.hide()},500);
})	
}

$(function(){
var topUc=$("header #topTools .tool .login #topUc");
var ucZone=$("header #topTools .tool .login #ucZone");
var aZones=$("header #topTools .tool .login #ucZone li");
var oText3=$("#main .main .left .order .text3");
var oListConPrice=$("#main .main .left .order .listConPrice");
var aPrices=$("#main .main .left .order .listConPrice li");
var oText1=$("#main .main .left .order .text1");
var oSelectzone=$("#main .main .left .order .selectZone");
var aSubzones=$("#main .main .left .order .selectZone li");
hidezoneShow(topUc,ucZone,aZones,"#ddd");
hidezoneShow(oText3,oListConPrice,aPrices,"#ddd");
hidezoneShow(oText1,oSelectzone,aSubzones);
})