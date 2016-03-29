(function(){

var APP = window.APP = window.APP || {};
APP.settingsEdit = {
	init: init
};

APP.settings = get("settings");

if(APP.settings == null) {
	APP.settings = {};
	APP.settings.symbols = {};
	for (key in APP.symbolsDict)
		APP.settings.symbols[key] = { level: 1 };
	calculateSymbolsArray();
}

var $page;

$(function(){
	$page = $("#settingsEdit-page");
});

function calculateSymbolsArray() {
	APP.settings.symbolsArray = [];
	for (key in APP.settings.symbols) {
		if(APP.settings.symbols[key].level == 1)
			APP.settings.symbolsArray.push(key);
		if(APP.settings.symbols[key].level == 2)
			for(i = 0; i < 4; ++i)
				APP.settings.symbolsArray.push(key);
	}
}

function init() {
	var html = "";
	
	html += '<table id="table-symbols">';
	html += '<tr><th>סמל</th><th>לא להציג</th><th>להציג</th><th>להציג הרבה</th></tr>';
	html += '<tr><th>סמל</th>\
		<th><button class="radio-all" id="radio-all-0">סמן הכול</button></th>\
		<th><button class="radio-all" id="radio-all-1">סמן הכול</button></th>\
		<th><button class="radio-all" id="radio-all-2">סמן הכול</button></th>\
		</tr>';
	for(key in APP.settings.symbols) {
		html += '<tr><th>' + APP.symbolsDict[key].desc + '</th>\
			<th><input type="radio" class="radio-0" name="radio-' + key + '" id="radio-' + key + '-0"/></th>\
			<th><input type="radio" class="radio-1" name="radio-' + key + '" id="radio-' + key + '-1"/></th>\
			<th><input type="radio" class="radio-2" name="radio-' + key + '" id="radio-' + key + '-2"/></th>\
			</tr>';
	}
	html += '</table>';
	html += '<br/><br/><br/>';
	html += '<button id="settingsEdit-save" style="float:left">שמירה</button>';
	$("#settingsEdit-content").html(html);
	
	for (prop in APP.settings.symbols)
		$("#radio-" + prop + "-" + APP.settings.symbols[prop].level).prop("checked", true);
	
	$(".radio-all").onn("click", clickAll);
	$("#settingsEdit-save").onn("click", clickSave);
	//$page.find("img").onn("click", click);
}

function clickSave(e) {
	twice(e);
	$("#table-symbols input:checked").each(function(){
		var key = $(this).attr("name").replace("radio-", "");
		var level = $(this).attr("class").replace("radio-", "");
		APP.settings.symbols[key].level = level;
	});
	calculateSymbolsArray();
	set("settings", APP.settings);
	navToPage("menu");
}

function clickAll(e) {
	twice(e);
	var id = this.id.replace('radio-all-', "");
	$(".radio-" + id).prop("checked", true);
}

})();