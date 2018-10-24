!function(){for(var a=0,t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[e]+"CancelAnimationFrame"]||window[t[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var i=(new Date).getTime(),s=Math.max(0,16-(i-a)),n=window.setTimeout(function(){t(i+s)},s);return a=i+s,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),function(y){y.snowfall=function(o,h){h=y.extend({flakeCount:35,flakeColor:"#ffffff",flakePosition:"absolute",flakeIndex:999999,minSize:1,maxSize:2,minSpeed:1,maxSpeed:5,round:!1,shadow:!1,collection:!1,collectionHeight:40,deviceorientation:!1},h);var l=function(t,e){return Math.round(t+Math.random()*(e-t))};function t(t,e,i,s,n){this.id=n,this.x=t,this.y=e,this.size=i,this.speed=s,this.step=0,this.stepSize=l(1,10)/100,h.collection&&(this.target=f[l(0,f.length-1)]);var a=null;h.image?(a=y(document.createElement("img")))[0].src=h.image:(a=y(document.createElement("div"))).css({background:h.flakeColor}),a.attr({class:"snowfall-flakes",id:"flake-"+this.id}).css({width:this.size,height:this.size,position:h.flakePosition,top:this.y,left:this.x,fontSize:0,zIndex:h.flakeIndex}),y(o).get(0).tagName===y(document).get(0).tagName?(y("body").append(a),o=y("body")):y(o).append(a),this.element=document.getElementById("flake-"+this.id),this.update=function(){if(this.y+=this.speed,this.y>r-(this.size+6)&&this.reset(),this.element.style.top=this.y+"px",this.element.style.left=this.x+"px",this.step+=this.stepSize,this.x+=!1===z?Math.cos(this.step):z+Math.cos(this.step),h.collection&&this.x>this.target.x&&this.x<this.target.width+this.target.x&&this.y>this.target.y&&this.y<this.target.height+this.target.y){var t=this.target.element.getContext("2d"),e=this.x-this.target.x,i=this.y-this.target.y,s=this.target.colData;if(void 0!==s[parseInt(e)][parseInt(i+this.speed+this.size)]||i+this.speed+this.size>this.target.height)if(i+this.speed+this.size>this.target.height){for(;i+this.speed+this.size>this.target.height&&0<this.speed;)this.speed*=.5;t.fillStyle="#fff",null==s[parseInt(e)][parseInt(i+this.speed+this.size)]?(s[parseInt(e)][parseInt(i+this.speed+this.size)]=1,t.fillRect(e,i+this.speed+this.size,this.size,this.size)):(s[parseInt(e)][parseInt(i+this.speed)]=1,t.fillRect(e,i+this.speed,this.size,this.size)),this.reset()}else this.speed=1,this.stepSize=0,parseInt(e)+1<this.target.width&&null==s[parseInt(e)+1][parseInt(i)+1]?this.x++:0<parseInt(e)-1&&null==s[parseInt(e)-1][parseInt(i)+1]?this.x--:(t.fillStyle="#fff",t.fillRect(e,i,this.size,this.size),s[parseInt(e)][parseInt(i)]=1,this.reset())}(this.x>d-c||this.x<c)&&this.reset()},this.reset=function(){this.y=0,this.x=l(c,d-c),this.stepSize=l(1,10)/100,this.size=l(100*h.minSize,100*h.maxSize)/100,this.speed=l(h.minSpeed,h.maxSpeed)}}y(o).data("snowfall",this);var e=[],i=0,s=0,r=y(o).height(),d=y(o).width(),c=0,n=0;if(!1!==h.collection){var a=document.createElement("canvas");if(a.getContext&&a.getContext("2d")){var f=[],p=y(h.collection),m=h.collectionHeight;for(s=0;s<p.length;s++){var u=p[s].getBoundingClientRect(),w=document.createElement("canvas"),g=[];if(0<u.top-m){document.body.appendChild(w),w.style.position=h.flakePosition,w.height=m,w.width=u.width,w.style.left=u.left+"px",w.style.top=u.top-m+"px";for(var x=0;x<u.width;x++)g[x]=[];f.push({element:w,x:u.left,y:u.top-m,width:u.width,height:m,colData:g})}}}else h.collection=!1}for(y(o).get(0).tagName===y(document).get(0).tagName&&(c=25),y(window).bind("resize",function(){r=y(o)[0].clientHeight,d=y(o)[0].offsetWidth}),s=0;s<h.flakeCount;s+=1)i=e.length,e.push(new t(l(c,d-c),l(0,r),l(100*h.minSize,100*h.maxSize)/100,l(h.minSpeed,h.maxSpeed),i));h.round&&y(".snowfall-flakes").css({"-moz-border-radius":h.maxSize,"-webkit-border-radius":h.maxSize,"border-radius":h.maxSize}),h.shadow&&y(".snowfall-flakes").css({"-moz-box-shadow":"1px 1px 1px #555","-webkit-box-shadow":"1px 1px 1px #555","box-shadow":"1px 1px 1px #555"});var z=!1;h.deviceorientation&&y(window).bind("deviceorientation",function(t){z=.1*t.originalEvent.gamma}),function t(){for(s=0;s<e.length;s+=1)e[s].update();n=requestAnimationFrame(function(){t()})}(),this.clear=function(){y(o).children(".snowfall-flakes").remove(),e=[],cancelAnimationFrame(n)}},y.fn.snowfall=function(e){return"object"==typeof e||null==e?this.each(function(t){new y.snowfall(this,e)}):"string"==typeof e?this.each(function(t){var e=y(this).data("snowfall");e&&e.clear()}):void 0}}(jQuery);