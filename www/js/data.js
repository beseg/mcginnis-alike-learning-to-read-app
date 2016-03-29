(function(){

var APP = window.APP = window.APP || {};

var goodAudios = ["goods/good-1.mp3", "goods/good-2.mp3", "goods/good-3.mp3", "goods/good-4.mp3", "goods/good-5.mp3", "goods/good-6.mp3", "goods/good-7.mp3"];
var badAudios = ["bads/bad-1.mp3", "bads/bad-2.mp3", "bads/bad-3.mp3", "bads/bad-4.mp3", "bads/bad-5.mp3", "bads/bad-6.mp3", "bads/bad-7.mp3"];

APP.audioGood = function() { 
	return audio(goodAudios[rand(goodAudios.length)]);
}

APP.audioBad = function() { 
	return audio(badAudios[rand(badAudios.length)]);
}

APP.symbolsDict = {
	"samekh": { desc: "ס", imageFill: "letters/f-samekh.png", audio: "consonants/samekh.mp3" },
	"lamed": { desc: "ל", imageFill: "letters/f-lamed.png", audio: "consonants/lamed.mp3" },
	"het": { desc: "ח", imageFill: "letters/f-het.png", audio: "consonants/het.mp3" },
	
	"kamatz": { desc: "קמץ \u05B8", imageFill: "letters/f-kamatz.png", audio: "vowels/a.mp3" },
	"patach": { desc: "פתח \u05B7", imageFill: "letters/f-patach.png", audio: "vowels/a.mp3" },
	"holam-male": { desc: "חולם מלא ו\u05B9", imageFill: "letters/f-holam-male.png", audio: "vowels/o.mp3" },
	
	_: {}
};

APP.symbolsNegateArray = [
	"kamatz|patach"
];

APP.symbolsArray = [];

for (prop in APP.symbolsDict)
	if(prop != "_")
		APP.symbolsArray.push(prop);

// לצלילים מורכבים עם פייד וכו
//http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library


})();