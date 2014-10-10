angular.module("Rx",[]).run(function(){Rx.promiseToObservable=function(e){var t=new Rx.AsyncSubject;return e.then(function(e){t.onNext(e),t.onCompleted()},function(e){t.onError(e),t.onCompleted()}),t}}),angular.module("ymusica",["ngResource","Rx"]),angular.module("ymusica").controller("AlbumSearch",["$scope","Albums","Artists","$q",function(e,t,n,i){e.albums=[],e.artists=[];var u=function(e,t){var n=new Rx.Subject;return e[t]=function(e){n.onNext(e)},n},c=u(e,"searchMusic");c.sample(250).select(function(e){var u=i.all([t.query(e),n.query(e)]);return Rx.promiseToObservable(u)}).switchLatest().select(function(e){return[e[0].data.albums,e[1].data.artists]}).subscribe(function(t){e.albums=t[0].slice(0,5),e.artists=t[1].slice(0,5),e.music=e.albums.concat(e.artists)}),e.selectMusic=function(t){console.log("music selected!",t),e.term=t.name},e.imageSource=function(e){return e.images.medium},e.hasAlbums=function(){return e.albums.length>0},e.hasArtists=function(){return e.artists.length>0}}]),angular.module("ymusica").factory("Albums",["$http",function(e){return{query:function(t){return e.get("/api/album",{params:{q:t}})}}}]),angular.module("ymusica").factory("Artists",["$http",function(e){return{query:function(t){return e.get("/api/artist",{params:{q:t}})}}}]),angular.module("ymusica").controller("MyController",function(){}),angular.module("ymusica").directive("typeahead",["$timeout",function(e){return{restrict:"E",transclude:!0,replace:!0,template:'<div><form><input ng-model="term" ng-change="query()" type="text" autocomplete="off" /></form><div ng-transclude></div></div>',scope:{search:"&",select:"&",items:"=",term:"="},controller:["$scope",function(e){e.items=[],e.hide=!1,this.activate=function(t){e.active=t},this.activateNextItem=function(){var t=e.items.indexOf(e.active);this.activate(e.items[(t+1)%e.items.length])},this.activatePreviousItem=function(){var t=e.items.indexOf(e.active);this.activate(e.items[0===t?e.items.length-1:t-1])},this.isActive=function(t){return e.active===t},this.selectActive=function(){this.select(e.active)},this.select=function(t){e.hide=!0,e.focused=!0,e.select({item:t})},e.isVisible=function(){return!e.hide&&(e.focused||e.mousedOver)},e.query=function(){e.hide=!1,e.search({term:e.term})}}],link:function(t,n,i,u){var c=n.find("form > input"),o=n.find("> div");c.bind("focus",function(){t.$apply(function(){t.focused=!0})}),c.bind("blur",function(){t.$apply(function(){t.focused=!1})}),o.bind("mouseover",function(){t.$apply(function(){t.mousedOver=!0})}),o.bind("mouseleave",function(){t.$apply(function(){t.mousedOver=!1})}),c.bind("keyup",function(e){(9===e.keyCode||13===e.keyCode)&&t.$apply(function(){u.selectActive()}),27===e.keyCode&&t.$apply(function(){t.hide=!0})}),c.bind("keydown",function(e){(9===e.keyCode||13===e.keyCode||27===e.keyCode)&&e.preventDefault(),40===e.keyCode&&(e.preventDefault(),t.$apply(function(){u.activateNextItem()})),38===e.keyCode&&(e.preventDefault(),t.$apply(function(){u.activatePreviousItem()}))}),t.$watch("items",function(e){u.activate(e.length?e[0]:null)}),t.$watch("focused",function(t){t&&e(function(){c.focus()},0,!1)}),t.$watch("isVisible()",function(e){if(e){var t=c.position(),n=c[0].offsetHeight;o.css({top:t.top+n,left:t.left,position:"absolute",display:"block"})}else o.css("display","none")})}}}]),angular.module("ymusica").directive("typeaheadItem",function(){return{require:"^typeahead",link:function(e,t,n,i){var u=e.$eval(n.typeaheadItem);e.$watch(function(){return i.isActive(u)},function(e){e?t.addClass("active"):t.removeClass("active")}),t.bind("mouseenter",function(){e.$apply(function(){i.activate(u)})}),t.bind("click",function(){e.$apply(function(){i.select(u)})})}}});
//@ sourceMappingURL=ymusica-map.js