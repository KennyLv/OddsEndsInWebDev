﻿define(function(require, exports, module) {
	// 加载Zepto核心组件和选择器组件
	var $ = require('./zepto/zepto'),$=require('./zepto/animationShow');
	var darwCanvas = require('./darwCanvas');
	
	$(function(){
	
			var loadCanvas = document.getElementById("clearCanvas");//
			var canvaStyle={
					"width" : "300",
					"height" : "120",
					"top" : "20",
					"left" : "120"
			};
			var printStyle = {
					finishedPercent : 0.2,
					brush : 15
			}
			var onFinishedFn = function(){
					alert("OK");
			}
			darwCanvas.showCanvas(loadCanvas, canvaStyle, printStyle, onFinishedFn);
			
			setTimeout(function(){
					document.getElementById("rootDiv").style.top = "300px";
					darwCanvas.onNotifyPositionChanged();
			}, 3000);
			
	});
	
	
});