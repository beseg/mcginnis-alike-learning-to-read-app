(function(){

var APP = window.APP = window.APP || {};
APP.learnDraw = {
	init: init
};

var $page;

$(function(){
	$page = $("#learnDraw-page");
});

var wwpx, hhpx, ratio, wwv = 66, hhv = 88;
var smilesCount = 15;
var smilesClasses = "";
for(var i = 0; i < smilesCount; ++i)
	smilesClasses += " smile-" + i;
smilesClasses = smilesClasses.trim();

var pointIndex;
var symbol;
var $marker;

function init() {
	nextRiddle(true);
	$("#learnDraw-next").onn("click", function() { nextRiddle(); });
}

function nextRiddle(isFirst) {
	//$("#learnDraw-next").hide();
	var arr = APP.settings.symbolsArray;
	var r;
	do {
		r = rand(arr.length);
	} while(symbol != null && arr[r] == symbol.id && arr.length > 1);
	symbol = APP.symbolsDict[arr[r]];
	
	//כתבו את הצליל לפי הפרצוף
	$("#learnDraw-content").html('\
	<div id="learnDraw-canvasWrapper">\
		<div id="learnDraw-marker" class="smile"/>\
		<canvas id="learnDraw-canvas"></canvas>\
		<img id="learnDraw-letter" src="image/' + symbol.image.replace('/f-', '/e-') + '" alt=""/>\
	</div>');
	
	wwpx = $("#learnDraw-canvasWrapper").innerWidth();
	hhpx = $("#learnDraw-canvasWrapper").innerHeight();
	ratio = hhpx / hhv;
	
	$("#learnDraw-canvas").attr("width", wwpx);
	$("#learnDraw-canvas").attr("height", hhpx);
	$("#learnDraw-canvas").sketch({defaultColor: "#ff0",defaultSize: ratio * 20, hook: hook });
	
	$marker = $("#learnDraw-marker");
	$marker.on("vmouseover", function() { console.log("AAAAAAAAAAAAAA"); return true; });
	$marker.on("vmouseenter", function() { console.log("BBBBBBBBBBBBB"); return true;  });
	
	changeSmile();

	pointIndex = 0;
	placeSmile();

	audio(isFirst ? "instructions/write-the-symbol-by-the-face.mp3" : "effects/bip.mp3").done(function(){
		audio(symbol.audio);
	});
}

function changeSmile() {
	$marker.removeClass(smilesClasses);
	$marker.addClass("smile-" + rand(smilesCount));
}

function placeSmile() {
	if(pointIndex >= symbol.points.length) {
		$marker.hide();
		audio(symbol.audio).done(APP.audioGood);
		//$("#learnDraw-next").show();
	} else {
		var kp = symbol.points[pointIndex];
		$marker.css({"left": "" + (wwv * kp[0] - 2.5) + "vh", "top": (hhv * kp[1] - 2.5) + "vh"});
	}
}

var lastReaplceMilliSec = 0;
function hook(x, y) {
	if(pointIndex >= symbol.points.length)
		return;
	
	//באמצעות שורה זו ניתן להמציא את מערכי הנקודות
	//console.log("[" + (x / wwpx) + "," + (y / hhpx) + "],");
	
	var rat = ratio * 3;
	var p = $marker.position();
	var l = p.left - rat;
	var t = p.top - rat;
	var r = p.left + $marker.width() + rat;
	var b = p.top + $marker.height() + rat;

	if(l < x && x < r && t < y && y < b) {
		++pointIndex;
		placeSmile();
	}
	
	var ms = milliSec();
	if(ms > lastReaplceMilliSec + 500) {
		lastReaplceMilliSec = ms;
		changeSmile();
	}
}

})();




