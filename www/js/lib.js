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
	//$("#transitor").attr("href", "#" + id + "-page").click();
	var $old = $("#body div:first");
	if($old.length > 0)
		$old.appendTo("#bucket");

	var $new = $("#" + id + "-page");
	$new.appendTo("#body");
}

var audioElem = null;
function audio(filename) {
	if(audioElem != null) {
		audioElem.pause();
	}
	if(filename != null) {
		audioElem = new Audio('audio/' + filename);
		var def = $.Deferred();
		$(audioElem).on("ended", function() { def.resolve(); });
		$(audioElem).on("paused", function() { def.resolve(); });
		audioElem.play();
		return def.promise();
	}
}

function rand(maxExclusive) {
	return Math.floor((Math.random() * maxExclusive));
}

function delay(time, func) {
	setTimeout(func, time);
}

function twice(e) {
	e.preventDefault();
	e.stopImmediatePropagation();
}

jQuery.fn.extend({
	onn: function(a, b) {
		return this.off(a).on(a, b);
	},
	offf: function(a) {
		return this.off(a);
	}
});

/*function alertStackTrace() {
  var callstack = [];
  var isCallstackPopulated = false;
  try {
    i.dont.exist+=0; //doesn't exist- that's the point
  } catch(e) {
    if (e.stack) { //Firefox
      var lines = e.stack.split('\n');
      for (var i=0, len=lines.length; i < len; i++) {
        if (lines[i].match(/^\s*[A-Za-z0-9\-_\$]+\(/)) {
          callstack.push(lines[i]);
        }
      }
      //Remove call to printStackTrace()
      callstack.shift();
      isCallstackPopulated = true;
    }
    else if (window.opera && e.message) { //Opera
      var lines = e.message.split('\n');
      for (var i=0, len=lines.length; i < len; i++) {
        if (lines[i].match(/^\s*[A-Za-z0-9\-_\$]+\(/)) {
          var entry = lines[i];
          //Append next line also since it has the file info
          if (lines[i+1]) {
            entry += ' at ' + lines[i+1];
            i++;
          }
          callstack.push(entry);
        }
      }
      //Remove call to printStackTrace()
      callstack.shift();
      isCallstackPopulated = true;
    }
  }
  if (!isCallstackPopulated) { //IE and Safari
    var currentFunction = arguments.callee.caller;
    while (currentFunction) {
      var fn = currentFunction.toString();
      var fname = fn.substring(fn.indexOf("function") + 8, fn.indexOf('')) || 'anonymous';
      callstack.push(fname);
      currentFunction = currentFunction.caller;
    }
  }
  alert(callstack.length);
   alert(callstack.join('\n\n'));
}*/
