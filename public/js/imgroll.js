function imgroll(){
	
	var oPrev=document.getElementById("prev");
	var oNext=document.getElementById("next");
	var oImg=document.getElementsByClassName("slideimg")[0];
	var oUl=document.getElementById("dots");
	var aLi=oUl.getElementsByTagName("li");
	var num=0;
	
	
	var Imsrc=['img/001.jpg',"img/002.jpg","img/003.jpg","img/004.jpg"];
	//var sImsrc=['img/s1.jpg',"img/s2.jpg","img/s3.jpg","img/s4.jpg"];
	//小圆点实现切换
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].index=i;
		var that=aLi[0];
		aLi[i].onmouseover=function(){
			//aLi[this.index].innerHTML='<img class="small" src="'+sImsrc[this.index]+'"/>';
			//that.style.background='grey';
		//that=this;
		for(var j=0;j<aLi.length;j++){aLi[j].style.background='grey';}
		this.style.background='#FF9D9D';
			}
			
			aLi[i].onmouseout=function(){
			//aLi[this.index].innerHTML='';
			//that.style.background='rgb(234,124,28)';
		//that=this;
		//for(var j=0;j<aLi.length;j++){aLi[j].style.background='rgb(234,124,28)';}
		this.style.background='grey';
			}
			
			aLi[i].onclick=function(){
			oImg.src=Imsrc[this.index];
			}
			
		}
	//前后翻页
	/*oPrev.onclick=function(){
		alert(1);
		}*/
		oImg.src=Imsrc[num];
		//alert(Imsrc.length);
	oPrev.onclick=function(){
		 num--;
		 if(num==-1)
		 {
			num=Imsrc.length-1;
			 oImg.src=Imsrc[num];
			 for(var j=0;j<aLi.length;j++){
				aLi[j].style.background='grey'; }
			 aLi[num].style.background='rgb(234,124,28)';
			 
	      }else
			{oImg.src=Imsrc[num];
			for(var j=0;j<aLi.length;j++){
				aLi[j].style.background='grey'; }
			aLi[num].style.background='rgb(234,124,28)';}
		}
	oNext.onclick=function(){
		 num++;
		 if(num==Imsrc.length)
		 {
			num=0;
			 oImg.src=Imsrc[num];
			 for(var j=0;j<aLi.length;j++){
				aLi[j].style.background='grey'; }
			 aLi[num].style.background='rgb(234,124,28)';
			 
	      }else
			{oImg.src=Imsrc[num];
			for(var j=0;j<aLi.length;j++){
				aLi[j].style.background='grey'; }
			aLi[num].style.background='rgb(234,124,28)';}
		}
	
	}