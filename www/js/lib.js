function set(key, obj) {
	window.localStorage.setItem(key, JSON.stringify(obj));
}
function get(key) {
	//http://samritchie.net/2011/04/01/uncaught-illegal-access-exception-in-android-browser-on-json-parse/
	//return JSON.parse(window.localStorage.getItem(key))
	var val = window.localStorage.getItem(key)
	return val === null ? null : JSON.parse(val);
}

// https://gist.github.com/tbranyen/1049426
String.prototype.format = function() {
	var i, safe, arg;
	var str = this, len = arguments.length + 1;
	arg = arguments[i++]
	for (i = 0; i < len; arg = arguments[i++]) {
		safe = typeof arg === 'object' ? JSON.stringify(arg) : arg;
		str = str.replace(RegExp('\\{'+(i - 1)+'\\}', 'g'), arg);
	}
	return str;
};

// http://jsperf.com/count-string-occurrence-in-string/12
String.prototype.countSubstring = function(search) {
    var count = 0;
    var index = this.indexOf(search);
    while(index != -1){
        count++;
        index = this.indexOf(search, index + 1);
    }
    return count;
}

// http://stackoverflow.com/questions/5073799/how-to-sort-a-javascript-array-of-objects-by-nested-object-property
var sort = function (propertyRetriever, arr) {
    arr.sort(function (a, b) {
        var valueA = propertyRetriever(a);
        var valueB = propertyRetriever(b);

        if (valueA < valueB) {
            return -1;
        } else if (valueA > valueB) {
            return 1;
        } else {
            return 0;
        }
    });
};

//http://css-tricks.com/snippets/javascript/shuffle-array/
//http://www.robweir.com/blog/2010/02/microsoft-random-browser-ballot.html
function shuffle(o) {
	// "| 0" == fast "floor" // http://jsperf.com/math-floor-vs-math-round-vs-parseint/55
	for(var j, x, i = o.length; i; j = (Math.random() * i) | 0, x = o[--i], o[i] = o[j], o[j] = x);
};

//http://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
function padThreeZeros(num) {
	if (num <= 999)
		num = ("00" + num).slice(-3);
	return num;
}

function navToPage(id) {
	$("#transitor").attr("href", "#" + id + "-page").click();
}

function audio(filename) {
	var audio = new Audio('audio/' + filename);
	var def = $.Deferred();
	audio.onended = function() { def.resolve(); };
	audio.play();
	return def.promise();
}

function rand(maxExclusive) {
	return Math.floor((Math.random() * maxExclusive));
}

function delay(time, func) {
	setTimeout(func, time);
}