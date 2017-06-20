function getStyle(obj, attr){
      return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
    }

  function doMove (obj, attr, step, frequency, target, endFn){

      clearInterval(obj.timer);
      step = parseInt(getStyle(obj, attr)) < target ? step : -step; 

      obj.timer = setInterval(function(){
        var displace = parseInt(getStyle( obj, attr )) + step; // 位移
        if ( step > 0 && displace > target || step < 0 && displace < target) {
          displace = target;
        }
        
        obj.style[attr] = displace + 'px';
        if( displace == target ) {
          clearInterval(obj.timer);
          endFn && endFn();
        }
      }, frequency);
    }

function imageslide(){
      var oWrap = document.getElementById("wrap");
        aImg = oWrap.getElementsByTagName("img");
       num = 0,
        timer = null,
     
      timer = setInterval(function(){
        var target = -760 * (num + 1);
        doMove(oWrap, 'left', 20, 20, target, function(){


              if(num == aImg.length-1 ) {
                oWrap.style.left = 0;
                num = 0;
              }
        });
        num ++;
      }, 3000);
      
        
      
    }