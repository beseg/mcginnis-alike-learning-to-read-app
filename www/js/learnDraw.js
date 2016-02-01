(function(){

window.APP = window.APP || {};
window.APP.learnDraw = {
	init: init
};

var $page;

$(function(){
	$page = $("#learnDraw-page");
});

function init() {
	$("#learnDraw-content").html('<div id="canvasWrapper" style="margin:0 auto;height:90vh;width:90vw;border:1px solid red;position:relative"><img src="image/letters/f-lamed.png" alt="" style="position:absolute;top:0;left:0;z-index:3" id="zzz"/><canvas id="simple_sketch" style="position:absolute;top:0;right:0;z-index:2"></canvas><img src="image/letters/f-lamed.png" alt="" style="position:absolute;top:0;right:0;z-index:3;pointer-events:none"/>');
	$("#simple_sketch").attr("width", $("#canvasWrapper").innerWidth());
	$("#simple_sketch").attr("height", $("#canvasWrapper").innerHeight());
	$("#simple_sketch").sketch({defaultColor: "#ff0",defaultSize: 50});
	$("#zzz").on("vmouseover", function() { alert("ASDA"); });
	$("#zzz").on("vmouseenter", function() { alert("ASD11A"); });
}

})();