(function(){

var APP = window.APP = window.APP || {};
APP.chooseByEar = {
	init: init
};

var $page;

$(function(){
	$page = $("#chooseByEar-page");
});

function init() {
	nextRiddle(true);
}

var qst, anses, maxAnsesCount = 3;
function nextRiddle(isFirst) {
	var arr = APP.symbolsArray.slice();

	var r = rand(arr.length);
	qst = arr[r];
	arr.splice(r, 1);
	
	anses = [qst];
	while(anses.length < maxAnsesCount && arr.length) {
		r = rand(arr.length);
		var ans = arr[r];
		if(APP.symbolsNegateArray.indexOf(qst + "|" + ans) == -1 && APP.symbolsNegateArray.indexOf(ans + "|" + qst) == -1)
			anses.push(ans);
		arr.splice(r, 1);
	}
	
	shuffle(anses);

	var html = "";
	for(i in anses)
		html += "<img src='image/" + APP.symbolsDict[anses[i]].image + "' alt='' id='chooseByEar-" + anses[i] + "'/>"
	
	$("#chooseByEar-letters").html(html);
	
	audio(isFirst ? "instructions/what-is-the-matched-sound.mp3" : "effects/bip.mp3").done(function(){
		audio(APP.symbolsDict[qst].audio).done(function() {
			$("#chooseByEar-letters img").onn("vclick", buttonClick);
		});
	});
}

function buttonClick(e) {
	twice(e);
	
	$("#chooseByEar-letters img").offf("vclick");
	var id = this.id.replace(/^chooseByEar-/, "");
	if(id === qst) {
		$(this).addClass("good");
		APP.audioGood().done(function() {
			nextRiddle();
		});
	} else {
		$(this).addClass("bad");
		APP.audioBad().done(function() {
			audio(APP.symbolsDict[qst].audio).done(function() {
				$("#chooseByEar-letters img").onn("vclick", buttonClick);
			});
		});
	}
}

})();