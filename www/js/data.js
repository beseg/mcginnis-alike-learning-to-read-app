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

APP.symbolsDict	 = {
	
	/**/"alef": { id: "alef", desc: "א", image: "letters/f-alef.png", audio: "consonants/alef.mp3", points: [[0.3038,0.2879],[0.3638,0.3450],[0.4545,0.4410],[0.5275,0.5297],[0.6215,0.6209],[0.7138,0.7120],[0.7560,0.2721],[0.7592,0.3596],[0.7252,0.4520],[0.6344,0.5079],[0.3557,0.4447],[0.2747,0.5066],[0.2487,0.5990],[0.2487,0.7181]] },
	"bet": { id: "bet", desc: "ב\u05BC", image: "letters/f-bet.png", audio: "consonants/bet.mp3", points: [[0.2520,0.2915],[0.3444,0.2842],[0.4545,0.2854],[0.5745,0.3049],[0.6522,0.3535],[0.6522,0.3547],[0.6830,0.4483],[0.6733,0.5346],[0.6733,0.5358],[0.6085,0.6221],[0.6085,0.6233],[0.2536,0.7011],[0.3654,0.6999],[0.5323,0.7084],[0.6344,0.7023],[0.6360,0.7023],[0.7462,0.7011],[0.4043,0.4933]] },
	"bet-soft": { id: "bet-soft", desc: "ב\u05BF", image: "letters/f-bet-soft.png", audio: "consonants/bet-soft.mp3", points: [[0.2520,0.2915],[0.3444,0.2842],[0.4545,0.2854],[0.5745,0.3049],[0.6522,0.3535],[0.6522,0.3547],[0.6830,0.4483],[0.6733,0.5346],[0.6733,0.5358],[0.6085,0.6221],[0.6085,0.6233],[0.2536,0.7011],[0.3654,0.6999],[0.5323,0.7084],[0.6344,0.7023],[0.6360,0.7023],[0.7462,0.7011]] },
	"gimel": { id: "gimel", desc: "ג", image: "letters/f-gimel.png", audio: "consonants/gimel.mp3", points: [[0.3411,0.2867],[0.3427,0.2867],[0.4691,0.2903],[0.5826,0.3304],[0.5955,0.4082],[0.5971,0.5006],[0.6263,0.6002],[0.6263,0.6027],[0.6263,0.7327],[0.5064,0.5443],[0.5064,0.5455],[0.4043,0.5941],[0.4043,0.5954],[0.4043,0.5966],[0.4011,0.5990],[0.3249,0.7145]] },
	"dalet": { id: "dalet", desc: "ד", image: "letters/f-dalet.png", audio: "consonants/dalet.mp3", points: [[0.2406,0.2927],[0.3492,0.2952],[0.4610,0.2952],[0.5777,0.2940],[0.5777,0.2952],[0.7219,0.2940],[0.5955,0.3766],[0.5826,0.4981],[0.5696,0.5929],[0.5696,0.5941],[0.5809,0.7157]] },
	"he": { id: "he", desc: "ה", image: "letters/f-he.png", audio: "consonants/he.mp3", points: [[0.2504,0.3049],[0.3573,0.2952],[0.4902,0.2915],[0.6134,0.3049],[0.7041,0.3766],[0.7398,0.4933],[0.7381,0.4945],[0.7349,0.6027],[0.7349,0.6039],[0.7365,0.6039],[0.7381,0.7193],[0.2893,0.4750],[0.2779,0.5711],[0.2779,0.5723],[0.2779,0.5735],[0.2779,0.5747],[0.2812,0.7193]] },
	/**/"vav": { id: "vav", desc: "ו", image: "letters/f-vav.png", audio: "consonants/bet-soft.mp3" /*"consonants/vav.mp3"*/, points: [[0.4945,0.2991],[0.5053,0.3843],[0.5053,0.4817],[0.5053,0.5730],[0.4999,0.6603],[0.5080,0.7252]] },
	"zayin": { id: "zayin", desc: "ז", image: "letters/f-zayin.png", audio: "consonants/zayin.mp3", points: [[0.3525,0.2867],[0.4335,0.2879],[0.5566,0.2891],[0.6490,0.2867],[0.5096,0.3644],[0.4789,0.4325],[0.4967,0.5127],[0.5129,0.5978],[0.5129,0.5990],[0.5388,0.7096]] },
	"het": { id: "het", desc: "ח", image: "letters/f-het.png", audio: "consonants/het.mp3", points: [[0.2666,0.3049],[0.3735,0.2867],[0.5145,0.2806],[0.6555,0.3146],[0.7430,0.4276],[0.7430,0.5419],[0.7430,0.5431],[0.7430,0.6573],[0.7430,0.7193],[0.2763,0.3292],[0.2795,0.3997],[0.2795,0.4009],[0.2876,0.4787],[0.2876,0.4799],[0.2893,0.5881],[0.2893,0.7205]] },
	"tet": { id: "tet", desc: "ט", image: "letters/f-tet.png", audio: "consonants/tav.mp3" /*"consonants/tet.mp3"*/, points: [[0.2568,0.2806],[0.2552,0.2806],[0.2552,0.3486],[0.2504,0.4434],[0.2504,0.4447],[0.2504,0.4459],[0.2763,0.5601],[0.2779,0.5601],[0.3071,0.6513],[0.4562,0.7047],[0.4578,0.7047],[0.4594,0.7060],[0.4610,0.7060],[0.4659,0.7072],[0.4708,0.7084],[0.4772,0.7096],[0.6134,0.7035],[0.6944,0.6695],[0.7560,0.5844],[0.7722,0.4738],[0.7398,0.3669],[0.6652,0.3219],[0.5177,0.2867]] },
	"yod": { id: "yod", desc: "י", image: "letters/f-yod.png", audio: "consonants/yod.mp3", points: [[0.5080,0.2782],[0.5064,0.3486],[0.5064,0.3511],[0.5096,0.4313],[0.5129,0.5006]] },
	"kaf": { id: "kaf", desc: "כ\u05BC", image: "letters/f-kaf.png", audio: "consonants/kaf.mp3", points: [[0.2552,0.2915],[0.3622,0.2879],[0.5032,0.2879],[0.6053,0.3389],[0.6782,0.4033],[0.6782,0.4046],[0.6879,0.5322],[0.6360,0.6549],[0.6344,0.6549],[0.6328,0.6549],[0.6312,0.6561],[0.4302,0.7096],[0.2666,0.7047],[0.4043,0.4969]] },
	"kaf-soft": { id: "kaf-soft", desc: "כ\u05BF", image: "letters/f-kaf-soft.png", audio: "consonants/kaf-soft.mp3", points: [[0.2552,0.2915],[0.3622,0.2879],[0.5032,0.2879],[0.6053,0.3389],[0.6782,0.4033],[0.6782,0.4046],[0.6879,0.5322],[0.6360,0.6549],[0.6344,0.6549],[0.6328,0.6549],[0.6312,0.6561],[0.4302,0.7096],[0.2666,0.7047]] },
	"lamed": { id: "lamed", desc: "ל", image: "letters/f-lamed.png", audio: "consonants/lamed.mp3", points: [[0.2832,0.1117],[0.2786,0.1628],[0.2786,0.2220],[0.2848,0.2951],[0.3699,0.2951],[0.4535,0.2928],[0.4566,0.2928],[0.5432,0.2962],[0.6237,0.3241],[0.6640,0.3647],[0.6640,0.3659],[0.6717,0.4495],[0.6717,0.4506],[0.6671,0.5446],[0.6671,0.5458],[0.6330,0.6178],[0.6330,0.6189],[0.6330,0.6201],[0.5479,0.6746],[0.4721,0.7002],[0.4705,0.7002],[0.3730,0.7060],[0.3715,0.7060]] },
	"mem": { id: "mem", desc: "מ", image: "letters/f-mem.png", audio: "consonants/mem.mp3", points: [[0.2747,0.7169],[0.2763,0.6367],[0.2731,0.5553],[0.2795,0.4532],[0.3217,0.3717],[0.4756,0.3085],[0.6198,0.2952],[0.7446,0.3717],[0.7446,0.3742],[0.7592,0.5091],[0.7592,0.5103],[0.7592,0.5115],[0.7592,0.5139],[0.7592,0.5151],[0.7398,0.6744],[0.6117,0.7218],[0.5145,0.7145],[0.2649,0.2854]] },
	"nun": { id: "nun", desc: "נ", image: "letters/f-nun.png", audio: "consonants/nun.mp3", points: [[0.3784,0.2842],[0.4837,0.2952],[0.5647,0.3486],[0.5826,0.4216],[0.5712,0.5188],[0.5777,0.6136],[0.5826,0.6999],[0.4724,0.7084],[0.4708,0.7084],[0.3281,0.7108]] },
	"samekh": { id: "samekh", desc: "ס", image: "letters/f-samekh.png", audio: "consonants/samekh.mp3", points: [[0.2423,0.2951],[0.4011,0.2842],[0.5908,0.2902],[0.7042,0.3486],[0.7674,0.4676],[0.7399,0.5940],[0.6459,0.6973],[0.4627,0.7155],[0.3120,0.6596],[0.2520,0.5308],[0.2488,0.3972],[0.2472,0.3972],[0.2407,0.3182]] },
	"ayin": { id: "ayin", desc: "ע", image: "letters/f-ayin.png", audio: "consonants/ayin.mp3", points: [[0.6976,0.2867],[0.7057,0.3717],[0.7025,0.4678],[0.6766,0.5589],[0.5907,0.6573],[0.4432,0.6987],[0.3184,0.7303],[0.3184,0.7315],[0.2050,0.7521],[0.2812,0.2745],[0.3281,0.3499],[0.3735,0.4605],[0.3735,0.4617],[0.4383,0.5990],[0.4400,0.5990]] },
	"pe": { id: "pe", desc: "פ\u05BC", image: "letters/f-pe.png", audio: "consonants/pe.mp3", points: [[0.3913,0.4945],[0.2844,0.4896],[0.2828,0.4252],[0.2828,0.3608],[0.2795,0.2879],[0.3897,0.2782],[0.5323,0.2794],[0.5339,0.2794],[0.6766,0.3256],[0.7316,0.4191],[0.7398,0.5237],[0.7219,0.6148],[0.6409,0.6695],[0.5015,0.7096],[0.5015,0.7108],[0.3557,0.7108],[0.2342,0.6987],[0.5339,0.4957]] },
	"pe-soft": { id: "pe-soft", desc: "פ\u05BF", image: "letters/f-pe-soft.png", audio: "consonants/pe-soft.mp3", points: [[0.3913,0.4945],[0.2844,0.4896],[0.2828,0.4252],[0.2828,0.3608],[0.2795,0.2879],[0.3897,0.2782],[0.5323,0.2794],[0.5339,0.2794],[0.6766,0.3256],[0.7316,0.4191],[0.7398,0.5237],[0.7219,0.6148],[0.6409,0.6695],[0.5015,0.7096],[0.5015,0.7108],[0.3557,0.7108],[0.2342,0.6987]] },
	"tsadi": { id: "tsadi", desc: "צ", image: "letters/f-tsadi.png", audio: "consonants/tsadi.mp3", points: [[0.3119,0.2903],[0.3735,0.3584],[0.4432,0.4325],[0.5015,0.5103],[0.5874,0.5869],[0.5890,0.5869],[0.6798,0.6962],[0.6798,0.6975],[0.5437,0.7193],[0.3946,0.7072],[0.2374,0.7072],[0.2374,0.7060],[0.7252,0.2733],[0.7187,0.3657],[0.6749,0.4301],[0.5971,0.4981]] },
	"qof": { id: "qof", desc: "ק", image: "letters/f-qof.png", audio: "consonants/kaf.mp3" /*"consonants/qof.mp3"*/, points: [[0.1936,0.2976],[0.2828,0.2927],[0.4108,0.2854],[0.4124,0.2854],[0.5356,0.2854],[0.6539,0.2976],[0.7398,0.3693],[0.7527,0.4641],[0.7252,0.5613],[0.6636,0.6464],[0.5745,0.6926],[0.4951,0.7011],[0.4934,0.7011],[0.4934,0.7023],[0.2747,0.4945],[0.2731,0.5698],[0.2714,0.6622],[0.2860,0.7521],[0.2860,0.7534],[0.2795,0.8871],[0.2795,0.8883],[0.2795,0.8895],[0.2795,0.8907],[0.2763,0.9612],[0.2779,0.9612]] },
	"resh": { id: "resh", desc: "ר", image: "letters/f-resh.png", audio: "consonants/resh.mp3", points: [[0.2131,0.2988],[0.3103,0.2927],[0.4351,0.2927],[0.5599,0.3134],[0.6474,0.3778],[0.6474,0.3790],[0.6766,0.4750],[0.6668,0.5723],[0.6668,0.5735],[0.6668,0.5747],[0.6668,0.5771],[0.6668,0.5783],[0.6701,0.6756],[0.6652,0.7351],[0.6668,0.7351]] },
	"shin": { id: "shin", desc: "ש", image: "letters/f-shin.png", audio: "consonants/shin.mp3", points: [[0.1580,0.2879],[0.1693,0.3790],[0.1693,0.3815],[0.1693,0.3827],[0.1904,0.4896],[0.1904,0.4921],[0.1904,0.4945],[0.1904,0.4969],[0.1904,0.4981],[0.2163,0.5978],[0.2325,0.6756],[0.3395,0.7242],[0.5032,0.7169],[0.6814,0.6950],[0.7576,0.5869],[0.8175,0.4289],[0.8354,0.2988],[0.5129,0.2696],[0.4967,0.3681],[0.4464,0.4908],[0.3265,0.5601]] },
	"tav": { id: "tav", desc: "ת", image: "letters/f-tav.png", audio: "consonants/tav.mp3", points: [[0.1953,0.2988],[0.3087,0.2867],[0.4756,0.2806],[0.6328,0.3000],[0.7414,0.3401],[0.7414,0.3414],[0.7398,0.3414],[0.7657,0.4592],[0.7867,0.5990],[0.7867,0.6002],[0.7851,0.6002],[0.7819,0.6002],[0.7754,0.7205],[0.3006,0.3292],[0.3152,0.4483],[0.3103,0.5771],[0.3103,0.5783],[0.2487,0.6902],[0.2471,0.6902],[0.1256,0.7084],[0.1240,0.7084]] },
	
	"hiriq": { id: "hiriq", desc: "חיריק \u05B4", image: "letters/f-hiriq.png", audio: "vowels/i.mp3", points: [[0.5015,0.8287]] },
	"zeire": { id: "zeire", desc: "צירה \u05B5", image: "letters/f-zeire.png", audio: "vowels/e.mp3", points: [[0.5809,0.8311],[0.4189,0.8263]] },
	"segol": { id: "segol", desc: "סגול \u05B6", image: "letters/f-segol.png", audio: "vowels/e.mp3", points: [[0.5842,0.8311],[0.4173,0.8275],[0.5015,0.9442]] },
	"patach": { id: "patach", desc: "פתח \u05B7", image: "letters/f-patach.png", audio: "vowels/a.mp3", points: [[0.4140,0.8275],[0.5032,0.8275],[0.5015,0.8275],[0.5955,0.8324]] },
	"kamatz": { id: "kamatz", desc: "קמץ \u05B8", image: "letters/f-kamatz.png", audio: "vowels/a.mp3", points: [[0.4043,0.8263],[0.4594,0.8275],[0.4610,0.8275],[0.5339,0.8275],[0.5988,0.8263],[0.4967,0.8676],[0.5032,0.9284]] },
	/**/"holam-haser": { id: "holam-haser", desc: "חולם חסר \u05B9", image: "letters/f-holam-haser.png", audio: "vowels/o.mp3", points: [[0.4756,0.1445]] },
	"holam-male": { id: "holam-male", desc: "חולם מלא ו\u05B9", image: "letters/f-holam-male.png", audio: "vowels/o.mp3", points: [[0.4951,0.2976],[0.5015,0.3620],[0.5096,0.4447],[0.5096,0.4459],[0.5032,0.5358],[0.5015,0.6330],[0.5015,0.6343],[0.4983,0.7242],[0.4983,0.1420]] },
	"shuruk": { id: "shuruk", desc: "שורוק ו\u05BC", image: "letters/f-shuruk.png", audio: "vowels/u.mp3", points: [[0.5032,0.2782],[0.5015,0.2782],[0.5113,0.3535],[0.5113,0.3547],[0.5113,0.3572],[0.5113,0.3584],[0.5048,0.4447],[0.5015,0.5686],[0.4999,0.5686],[0.4983,0.5698],[0.5032,0.6610],[0.5032,0.6622],[0.5032,0.6646],[0.5048,0.7449],[0.3411,0.4933]] },
	"kubutz": { id: "kubutz", desc: "קובוץ \u05BB", image: "letters/f-kubutz.png", audio: "vowels/u.mp3", points: [[0.3719,0.8299],[0.4983,0.8810],[0.6263,0.9430]] },
	
	_: {}
};

delete APP.symbolsDict._;

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

// לצלילים מורכבים עם פייד וכו
//http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library

})();