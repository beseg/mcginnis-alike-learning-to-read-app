(function(){

var APP = window.APP = window.APP || {};

var goodAudios = ["goods/good-1.mp3", "goods/good-2.mp3", "goods/good-3.mp3", "goods/good-4.mp3", "goods/good-5.mp3", "goods/good-6.mp3", "goods/good-7.mp3"];
var lastGood = -1;
APP.audioGood = function() { 
	var r;
	while((r = rand(goodAudios.length)) == lastGood) { }
	return audio(goodAudios[lastGood = r]);
}

var badAudios = ["bads/bad-1.mp3", "bads/bad-2.mp3", "bads/bad-3.mp3", "bads/bad-4.mp3", "bads/bad-5.mp3", "bads/bad-6.mp3", "bads/bad-7.mp3"];
var lastBad = -1;
APP.audioBad = function() { 
	var r;
	while((r = rand(badAudios.length)) == lastBad) { }
	return audio(badAudios[lastBad = r]);
}

APP.symbolsDict = {
	
	//"alef": { desc: "", imageFill: "letters/f-alef.png", audio: "consonants/alef.mp3" },
	"bet": { desc: "ב\u05BC", imageFill: "letters/f-bet.png", audio: "consonants/bet.mp3" },
	"bet-soft": { desc: "ב\u05B7", imageFill: "letters/f-bet-soft.png", audio: "consonants/bet-soft.mp3" },
	"gimel": { desc: "ג", imageFill: "letters/f-gimel.png", audio: "consonants/gimel.mp3" },
	"dalet": { desc: "ד", imageFill: "letters/f-dalet.png", audio: "consonants/dalet.mp3" },
	"he": { desc: "ה", imageFill: "letters/f-he.png", audio: "consonants/he.mp3" },
	//"vav": { desc: "ו", imageFill: "letters/f-vav.png", audio: "consonants/bet-soft.mp3" /*"consonants/vav.mp3"*/ },
	"zayin": { desc: "ז", imageFill: "letters/f-zayin.png", audio: "consonants/zayin.mp3" },
	"het": { desc: "ח", imageFill: "letters/f-het.png", audio: "consonants/het.mp3" },
	"tet": { desc: "ט", imageFill: "letters/f-tet.png", audio: "consonants/tav.mp3" /*"consonants/tet.mp3"*/ },
	"yod": { desc: "י", imageFill: "letters/f-yod.png", audio: "consonants/yod.mp3" },
	"kaf": { desc: "כ\u05BC", imageFill: "letters/f-kaf.png", audio: "consonants/kaf.mp3" },
	"kaf-soft": { desc: "כ\u05B7", imageFill: "letters/f-kaf-soft.png", audio: "consonants/kaf-soft.mp3" },
	"lamed": { desc: "ל", imageFill: "letters/f-lamed.png", audio: "consonants/lamed.mp3" },
	"mem": { desc: "מ", imageFill: "letters/f-mem.png", audio: "consonants/mem.mp3" },
	"nun": { desc: "נ", imageFill: "letters/f-nun.png", audio: "consonants/nun.mp3" },
	"samekh": { desc: "ס", imageFill: "letters/f-samekh.png", audio: "consonants/samekh.mp3" },
	"ayin": { desc: "ע", imageFill: "letters/f-ayin.png", audio: "consonants/ayin.mp3" },
	"pe": { desc: "פ\u05BC", imageFill: "letters/f-pe.png", audio: "consonants/pe.mp3" },
	"pe-soft": { desc: "פ\u05B7", imageFill: "letters/f-pe-soft.png", audio: "consonants/pe-soft.mp3" },
	"tsadi": { desc: "צ", imageFill: "letters/f-tsadi.png", audio: "consonants/tsadi.mp3" },
	"qof": { desc: "ק", imageFill: "letters/f-qof.png", audio: "consonants/kaf.mp3" /*"consonants/qof.mp3"*/ },
	"resh": { desc: "ר", imageFill: "letters/f-resh.png", audio: "consonants/resh.mp3" },
	"shin": { desc: "ש", imageFill: "letters/f-shin.png", audio: "consonants/shin.mp3" },
	"tav": { desc: "ת", imageFill: "letters/f-tav.png", audio: "consonants/tav.mp3" },
	
	"hiriq": { desc: "חיריק \u05B4", imageFill: "letters/f-hiriq.png", audio: "vowels/i.mp3" },
	"zeire": { desc: "צירה \u05B5", imageFill: "letters/f-zeire.png", audio: "vowels/e.mp3" },
	"segol": { desc: "סגול \u05B6", imageFill: "letters/f-segol.png", audio: "vowels/e.mp3" },
	"patach": { desc: "פתח \u05B7", imageFill: "letters/f-patach.png", audio: "vowels/a.mp3" },
	"kamatz": { desc: "קמץ \u05B8", imageFill: "letters/f-kamatz.png", audio: "vowels/a.mp3" },
	//"holam-haser": { desc: "חולם חסר \u05B9", imageFill: "letters/f-holam-haser.png", audio: "vowels/o.mp3" },
	"holam-male": { desc: "חולם מלא ו\u05B9", imageFill: "letters/f-holam-male.png", audio: "vowels/o.mp3" },
	"shuruk": { desc: "שורוק ו\u05B7", imageFill: "letters/f-shuruk.png", audio: "vowels/u.mp3" },
	"kubutz": { desc: "קובוץ \u05BB", imageFill: "letters/f-kubutz.png", audio: "vowels/u.mp3" },
	
	_: {}
};

APP.symbolsNegateArray = [
	"tet|tav",
	"qof|kaf",
	"het|kaf-soft",
	"vav|bet-soft",
	"tsadi|samekh", //?

	"kamatz|patach",
	"zeire|segol",
	"holam-haser|holam-male",
	"shuruk|kubutz",
];

APP.symbolsArray = [];

for (prop in APP.symbolsDict)
	if(prop != "_")
		APP.symbolsArray.push(prop);

// לצלילים מורכבים עם פייד וכו
//http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library

})();