(function(){

window.APP = window.APP || {};
window.APP.chooseByEar = {
	init: init
};

var badAudios = ["bad-1.mp3", "bad-2.mp3", "bad-3.mp3", "bad-4.mp3", "bad-5.mp3", "bad-6.mp3", "bad-7.mp3"];
var goodAudios = ["good-1.mp3", "good-2.mp3", "good-3.mp3", "good-4.mp3", "good-5.mp3", "good-6.mp3", "good-7.mp3"];

function audioBad() { 
	return audio(badAudios[rand(badAudios.length)]);
}

function audioGood() { 
	return audio(goodAudios[rand(goodAudios.length)]);
}

var dict = {
	"samekh": { desc: "ס", imageFill: "letters/f-samekh.png", audio: "samekh.mp3" },
	"lamed": { desc: "ל", imageFill: "letters/f-lamed.png", audio: "lamed.mp3" },
	"het": { desc: "ח", imageFill: "letters/f-het.png", audio: "het.mp3" },
	
	"kamatz": { desc: "קמץ \u05B8", imageFill: "letters/f-kamatz.png", audio: "a.mp3" },
	"patach": { desc: "פתח \u05B7", imageFill: "letters/f-patach.png", audio: "a.mp3" },
	"holam-male": { desc: "חולם מלא ו\u05B9", imageFill: "letters/f-holam-male.png", audio: "o.mp3" },
	
	_: {}
};

var negate = [
	"kamatz|patach"
];

var all = [];

for (prop in dict)
	if(prop != "_")
		all.push(prop);

// לצלילים מורכבים עם פייד וכו
//http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library

var $page;

$(function(){
	$page = $("#chooseByEar-page");
});

function init() {
	nextRiddle(true);
}

var qst, anses, maxAnsesCount = 3;
function nextRiddle(isFirst) {
	var all2 = all.slice();

	var r = rand(all2.length);
	qst = all2[r];
	all2.splice(r, 1);
	
	anses = [qst];
	while(anses.length < maxAnsesCount && all2.length) {
		r = rand(all2.length);
		var ans = all2[r];
		if(negate.indexOf(qst + "|" + ans) == -1 && negate.indexOf(ans + "|" + qst) == -1)
			anses.push(ans);
		all2.splice(r, 1);
	}
	
	shuffle(anses);

	var html = "";
	for(i in anses)
		html += "<img src='image/" + dict[anses[i]].imageFill + "' alt='' id='chooseByEar-" + anses[i] + "'/>"
	
	$("#chooseByEar-letters").html(html);
	
	audio(isFirst ? "what-is-the-matched-sound.mp3" : "bip.mp3").done(function(){
		audio(dict[qst].audio).done(function() {
			$("#chooseByEar-letters img").click(buttonClick);
		});
	});
}

function buttonClick() {
	$("#chooseByEar-letters img").unbind("click");
	var id = this.id.replace(/^chooseByEar-/, "");
	if(id === qst) {
		$(this).addClass("good");
		audioGood().done(function() {
			nextRiddle();
		});
	} else {
		$(this).addClass("bad");
		audioBad().done(function() {
			audio(dict[qst].audio).done(function() {
				$("#chooseByEar-letters img").click(buttonClick);
			});
		});
	}
}

})();