if(!Array.prototype.indexOf)Array.prototype.indexOf=function(s,n,w){n=+n||0;for(var r=this.length;n<r;n++)if(this[n]===s||w&&this[n]==s)return n;return-1};
(function(){function s(){w&&n()}var n=function(){l.repaintEverything()},w=true,r=null;$(window).bind("resize",function(){r&&clearTimeout(r);r=setTimeout(s,100)});var o={},z={},D=true,x=[],y=[],A=1200,E=function(a,d){for(var b=a.attr("id"),c=o[b],f=0;f<c.length;f++)c[f].paint(b,d)},G=function(a,d){var b=function(h,e){z[e]=d;h.draggable&&h.draggable("option","disabled",!d)};if(typeof a=="object"&&a.length)for(var c=0;c<a.length;c++)b($(a[c]),a[c]);else{c=typeof a=="string"?$("#"+a):a;var f=c.attr("id");
b(c,f)}},B=function(a,d){for(var b=o[a],c=0;c<b.length;c++){b[c].canvas.style.display=d;if(b[c].drawEndpoints){b[c].sourceEndpointCanvas.style.display=d;b[c].targetEndpointCanvas.style.display=d}}},C=function(a){var d=document.createElement("canvas");document.body.appendChild(d);d.style.position="absolute";if(a)d.className=a;if(/MSIE/.test(navigator.userAgent)&&!window.opera){l.sizeCanvas(d,0,0,A,A);d=G_vmlCanvasManager.initElement(d)}return d},v=function(a){if(a!=null)try{document.body.removeChild(a)}catch(d){}},
u=function(a){var d=this;this.x=a.x||0;this.y=a.y||0;this.orientation=a.orientation||[0,0];this.offsets=a.offsets||[0,0];this.compute=function(b,c){return[b[0]+d.x*c[0]+d.offsets[0],b[1]+d.y*c[1]+d.offsets[1]]}},l=window.jsPlumb={connectorClass:"_jsPlumb_connector",endpointClass:"_jsPlumb_endpoint",DEFAULT_PAINT_STYLE:{lineWidth:10,strokeStyle:"red"},DEFAULT_ENDPOINT_STYLE:{fillStyle:null},DEFAULT_ENDPOINT_STYLES:[null,null],DEFAULT_DRAG_OPTIONS:{},DEFAULT_CONNECTOR:null,DEFAULT_ENDPOINT:null,DEFAULT_ENDPOINTS:[null,
null],Anchors:{TopCenter:new u({x:0.5,y:0,orientation:[0,-1]}),BottomCenter:new u({x:0.5,y:1,orientation:[0,1]}),LeftMiddle:new u({x:0,y:0.5,orientation:[-1,0]}),RightMiddle:new u({x:1,y:0.5,orientation:[1,0]}),Center:new u({x:0.5,y:0.5,orientation:[0,0]}),TopRight:new u({x:1,y:0,orientation:[0,-1]}),BottomRight:new u({x:1,y:1,orientation:[0,1]}),TopLeft:new u({x:0,y:0,orientation:[0,-1]}),BottomLeft:new u({x:0,y:1,orientation:[0,1]})},Connectors:{Straight:function(){this.compute=function(a,d,b,c,
f){b=Math.abs(a[0]-d[0]);c=Math.abs(a[1]-d[1]);var h=0.45*b,e=0.45*c;b*=1.9;c*=1.9;var g=Math.min(a[0],d[0])-h,i=Math.min(a[1],d[1])-e;if(b<2*f){b=2*f;g=a[0]+(d[0]-a[0])/2-f;h=(b-Math.abs(a[0]-d[0]))/2}if(c<2*f){c=2*f;i=a[1]+(d[1]-a[1])/2-f;e=(c-Math.abs(a[1]-d[1]))/2}return[g,i,b,c,a[0]<d[0]?b-h:h,a[1]<d[1]?c-e:e,a[0]<d[0]?h:b-h,a[1]<d[1]?e:c-e]};this.paint=function(a,d){d.beginPath();d.moveTo(a[4],a[5]);d.lineTo(a[6],a[7]);d.stroke()}},Bezier:function(a){var d=this;this.majorAnchor=a||150;this.minorAnchor=
10;this._findControlPoint=function(b,c,f,h,e){var g=[],i=d.majorAnchor,j=d.minorAnchor;if(h.orientation[0]!=e.orientation[0]||h.orientation[1]==e.orientation[1]){e.orientation[0]==0?g.push(f[0]<c[0]?b[0]+j:b[0]-j):g.push(b[0]+i*e.orientation[0]);e.orientation[1]==0?g.push(f[1]<c[1]?b[1]+j:b[1]-j):g.push(b[1]+i*h.orientation[1])}else{h.orientation[0]==0?g.push(c[0]<f[0]?b[0]+j:b[0]-j):g.push(b[0]-i*h.orientation[0]);h.orientation[1]==0?g.push(c[1]<f[1]?b[1]+j:b[1]-j):g.push(b[1]+i*e.orientation[1])}return g};
this.compute=function(b,c,f,h,e){e=e||0;var g=Math.abs(b[0]-c[0])+e,i=Math.abs(b[1]-c[1])+e,j=Math.min(b[0],c[0])-e/2,m=Math.min(b[1],c[1])-e/2,k=b[0]<c[0]?g-e/2:e/2,q=b[1]<c[1]?i-e/2:e/2,t=b[0]<c[0]?e/2:g-e/2;e=b[1]<c[1]?e/2:i-e/2;var p=d._findControlPoint([k,q],b,c,f,h);b=d._findControlPoint([t,e],c,b,h,f);c=Math.min(Math.min(k,t),Math.min(p[0],b[0]));f=Math.max(Math.max(k,t),Math.max(p[0],b[0]));if(f>g)g=f;if(c<0){j+=c;c=Math.abs(c);g+=c;p[0]+=c;k+=c;t+=c;b[0]+=c}c=Math.min(Math.min(q,e),Math.min(p[1],
b[1]));f=Math.max(Math.max(q,e),Math.max(p[1],b[1]));if(f>i)i=f;if(c<0){m+=c;c=Math.abs(c);i+=c;p[1]+=c;q+=c;e+=c;b[1]+=c}return[j,m,g,i,k,q,t,e,p[0],p[1],b[0],b[1]]};this.paint=function(b,c){c.beginPath();c.moveTo(b[4],b[5]);c.bezierCurveTo(b[8],b[9],b[10],b[11],b[6],b[7]);c.stroke()}}},Endpoints:{Dot:function(a){a=a||{radius:10};var d=this;this.radius=a.radius;var b=0.5*this.radius,c=this.radius/3,f=function(h){try{return parseInt(h)}catch(e){if(h.substring(h.length-1)=="%")return parseInt(h.substring(0,
h-1))}};this.paint=function(h,e,g,i,j){var m=i.radius||d.radius;l.sizeCanvas(g,h[0]-m,h[1]-m,m*2,m*2);h=g.getContext("2d");g={};$.extend(g,i);if(g.fillStyle==null)g.fillStyle=j.strokeStyle;$.extend(h,g);j=/MSIE/.test(navigator.userAgent)&&!window.opera;if(i.gradient&&!j){j=i.gradient;g=b;var k=c;if(j.offset)g=f(j.offset);if(j.innerRadius)k=f(j.innerRadius);j=[g,k];e=h.createRadialGradient(m,m,m,m+(e[0]==1?j[0]*-1:j[0]),m+(e[1]==1?j[0]*-1:j[0]),j[1]);for(j=0;j<i.gradient.stops.length;j++)e.addColorStop(i.gradient.stops[j][0],
i.gradient.stops[j][1]);h.fillStyle=e}h.beginPath();h.arc(m,m,m,0,Math.PI*2,true);h.closePath();h.fill()}},Rectangle:function(a){a=a||{width:20,height:20};var d=this;this.width=a.width;this.height=a.height;this.paint=function(b,c,f,h,e){var g=h.width||d.width,i=h.height||d.height;l.sizeCanvas(f,b[0]-g/2,b[1]-i/2,g,i);b=f.getContext("2d");f={};$.extend(f,h);if(f.fillStyle==null)f.fillStyle=e.strokeStyle;$.extend(b,f);e=/MSIE/.test(navigator.userAgent)&&!window.opera;if(h.gradient&&!e){c=b.createLinearGradient(c[0]==
1?g:c[0]==0?g/2:0,c[1]==1?i:c[1]==0?i/2:0,c[0]==-1?g:c[0]==0?i/2:0,c[1]==-1?i:c[1]==0?i/2:0);for(e=0;e<h.gradient.stops.length;e++)c.addColorStop(h.gradient.stops[e][0],h.gradient.stops[e][1]);b.fillStyle=c}b.beginPath();b.rect(0,0,g,i);b.closePath();b.fill()}},Image:function(a){var d=this;this.img=new Image;this.img.onload=function(){d.ready=true};this.img.src=a.url;var b=function(c,f,h,e){f=d.img.width||e.width;e=d.img.height||e.height;l.sizeCanvas(h,c[0]-f/2,c[1]-e/2,f,e);h.getContext("2d").drawImage(d.img,
0,0)};this.paint=function(c,f,h,e,g){d.ready?b(c,f,h,e,g):window.setTimeout(function(){d.paint(c,f,h,e,g)},200)}}},connect:function(a){a=new H(a);o[a.sourceId+"_"+a.targetId]=a;var d=function(b,c){var f=o[b];if(f==null){f=[];o[b]=f}f.push(c)};d(a.sourceId,a);d(a.targetId,a)},detach:function(a,d){for(var b=o[a],c=-1,f=0;f<b.length;f++)if(b[f].sourceId==a&&b[f].targetId==d||b[f].targetId==a&&b[f].sourceId==d){v(b[f].canvas);if(b[f].drawEndpoints){v(b[f].targetEndpointCanvas);v(b[f].sourceEndpointCanvas)}c=
f;break}c!=-1&&b.splice(c,1)},detachAll:function(a){for(var d=o[a],b=0;b<d.length;b++){v(d[b].canvas);if(d[b].drawEndpoints){v(d[b].targetEndpointCanvas);v(d[b].sourceEndpointCanvas)}}delete o[a];o[a]=[]},detachEverything:function(){for(var a in o){var d=o[a];if(d.length)try{for(var b=0;b<d.length;b++){v(d[b].canvas);if(d[b].drawEndpoints){v(d[b].targetEndpointCanvas);v(d[b].sourceEndpointCanvas)}}}catch(c){}}delete o;o=[]},getConnections:function(a){return o[a]},hide:function(a){B(a,"none")},makeAnchor:function(a,
d){var b={};if(arguments.length==1)$.extend(b,a);else{b={x:a,y:d};if(arguments.length>=4)b.orientation=[arguments[2],arguments[3]];if(arguments.length==6)b.offsets=[arguments[4],arguments[5]]}return new u(b)},repaint:function(a){var d=function(c){var f=typeof c=="string"?$("#"+c):c;c=f.attr("id");var h=o[c];f={absolutePosition:f.offset()};for(var e=0;e<h.length;e++)h[e].paint(c,f,true)};if(typeof a=="object")for(var b=0;b<a.length;b++)d(a[b]);else d(a)},repaintEverything:function(){for(var a in o){var d=
o[a];if(d.length)try{for(var b=0;b<d.length;b++)d[b].repaint()}catch(c){}}},setAutomaticRepaint:function(a){w=a},setDefaultNewCanvasSize:function(a){A=a},setDraggable:function(a,d){G(a,d)},setDraggableByDefault:function(a){D=a},setRepaintFunction:function(a){n=a},show:function(a){B(a,"block")},sizeCanvas:function(a,d,b,c,f){a.style.height=f+"px";a.height=f;a.style.width=c+"px";a.width=c;a.style.left=d+"px";a.style.top=b+"px"},toggle:function(a){var d=o[a];if(d.length>0)B(a,"none"==d[0].canvas.style.display?
"block":"none")},unload:function(){delete o;delete x;delete y;delete z}},H=function(a){var d=this;this.source=typeof a.source=="string"?$("#"+a.source):a.source;this.target=typeof a.target=="string"?$("#"+a.target):a.target;this.sourceId=$(this.source).attr("id");this.targetId=$(this.target).attr("id");this.drawEndpoints=a.drawEndpoints!=null?a.drawEndpoints:true;this.endpointsOnTop=a.endpointsOnTop!=null?a.endpointsOnTop:true;this.anchors=a.anchors||l.DEFAULT_ANCHORS||[l.Anchors.BottomCenter,l.Anchors.TopCenter];
this.connector=a.connector||l.DEFAULT_CONNECTOR||new l.Connectors.Bezier;this.paintStyle=a.paintStyle||l.DEFAULT_PAINT_STYLE;this.endpoints=[];if(!a.endpoints)a.endpoints=[null,null];this.endpoints[0]=a.endpoints[0]||a.endpoint||l.DEFAULT_ENDPOINTS[0]||l.DEFAULT_ENDPOINT||new l.Endpoints.Dot;this.endpoints[1]=a.endpoints[1]||a.endpoint||l.DEFAULT_ENDPOINTS[1]||l.DEFAULT_ENDPOINT||new l.Endpoints.Dot;this.endpointStyles=[];if(!a.endpointStyles)a.endpointStyles=[null,null];this.endpointStyles[0]=a.endpointStyles[0]||
a.endpointStyle||l.DEFAULT_ENDPOINT_STYLES[0]||l.DEFAULT_ENDPOINT_STYLE;this.endpointStyles[1]=a.endpointStyles[1]||a.endpointStyle||l.DEFAULT_ENDPOINT_STYLES[1]||l.DEFAULT_ENDPOINT_STYLE;x[this.sourceId]=this.source.offset();y[this.sourceId]=[this.source.outerWidth(),this.source.outerHeight()];x[this.targetId]=this.target.offset();y[this.targetId]=[this.target.outerWidth(),this.target.outerHeight()];var b=C(l.connectorClass);this.canvas=b;if(this.drawEndpoints){this.sourceEndpointCanvas=C(l.endpointClass);
this.targetEndpointCanvas=C(l.endpointClass);var c=function(e,g,i){i=i?1:-1;g=$(g).css("zIndex");$(e).css("zIndex",g!="auto"?g+i:"auto")};c(this.sourceEndpointCanvas,this.source,this.endpointsOnTop);c(this.targetEndpointCanvas,this.target,this.endpointsOnTop)}this.paint=function(e,g,i){var j=e!=this.sourceId,m=j?this.sourceId:this.targetId,k=j?0:1,q=j?1:0;if(this.canvas.getContext){if(i){g=$("#"+e);i=$("#"+m);y[e]=[g.outerWidth(),g.outerHeight()];y[m]=[i.outerWidth(),i.outerHeight()];x[e]=g.offset();
x[m]=i.offset()}else{i=g.absolutePosition||g.offset;g=g!=null?i:$("#"+e).offset();x[e]=g}i=x[e];var t=x[m],p=y[e],F=y[m];g=b.getContext("2d");m=this.anchors[q].compute([i.left,i.top],p,[t.left,t.top],F);e=this.anchors[q].orientation;i=this.anchors[k].compute([t.left,t.top],F,[i.left,i.top],p);t=this.anchors[k].orientation;k=this.connector.compute(m,i,this.anchors[q],this.anchors[k],this.paintStyle.lineWidth);l.sizeCanvas(b,k[0],k[1],k[2],k[3]);$.extend(g,this.paintStyle);q=/MSIE/.test(navigator.userAgent)&&
!window.opera;if(this.paintStyle.gradient&&!q){q=j?g.createLinearGradient(k[4],k[5],k[6],k[7]):g.createLinearGradient(k[6],k[7],k[4],k[5]);for(p=0;p<this.paintStyle.gradient.stops.length;p++)q.addColorStop(this.paintStyle.gradient.stops[p][0],this.paintStyle.gradient.stops[p][1]);g.strokeStyle=q}this.connector.paint(k,g);if(this.drawEndpoints){k=j?this.sourceEndpointCanvas:this.targetEndpointCanvas;this.endpoints[j?1:0].paint(m,e,j?this.targetEndpointCanvas:this.sourceEndpointCanvas,this.endpointStyles[j?
1:0]||this.paintStyle,this.paintStyle);this.endpoints[j?0:1].paint(i,t,k,this.endpointStyles[j?0:1]||this.paintStyle,this.paintStyle)}}};this.repaint=function(){this.paint(this.sourceId,null,true)};if((a.draggable==null?D:a.draggable)&&d.source.draggable){var f=a.dragOptions||l.DEFAULT_DRAG_OPTIONS,h=f.drag||function(){};a=function(e,g){var i=$.extend({drag:g},f),j=z[e.attr("id")];i.disabled=j==null?false:!j;e.draggable(i)};a(this.source,function(e,g){E(d.source,g);h(e,g)});a(this.target,function(e,
g){E(d.target,g);h(e,g)})}this.source.resize&&this.source.resize(function(){l.repaint(d.sourceId)});this.source.offset();this.paint(this.sourceId,{absolutePosition:this.source.offset()})}})();
(function(s){s.fn.plumb=function(n){n=s.extend({},n);return this.each(function(){var w=s(this),r={};r.source=w;for(var o in n)r[o]=n[o];jsPlumb.connect(r)})};s.fn.detach=function(n){return this.each(function(){var w=s(this).attr("id");if(typeof n=="string")n=[n];for(var r=0;r<n.length;r++)jsPlumb.detach(w,n[r])})};s.fn.detachAll=function(){return this.each(function(){var n=s(this).attr("id");jsPlumb.detachAll(n)})}})(jQuery);