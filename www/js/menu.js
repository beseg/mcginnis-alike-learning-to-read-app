(function(){

window.APP = window.APP || {};
window.APP.menu = {
	init: init
};

var $page;

$(function(){
	$page = $("#menu-page");
});

function init() {
	{
		var visits = get("visits");
		visits = visits === null ? 1 : visits + 1;
		set("visits", visits)
		$("#menu-visits").html(visits);
	}
	{
		var html = "";
		html += '<button id="chooseByEar">' + "לבחור 1 מתוך 3 לפי האוזן" + '</button>';
		html += '<button id="learnDraw">' + "לצייר" + '</button>';
		$("#menu-menu").html(html).trigger('create');
		$page.find("button").onn("click", buttonClick);
	}
}

function buttonClick(e) {
	twice(e);
	var id = this.id;
	window.APP[id].init(); 
	//$.mobile.navigate("#" + id + "-page");
	navToPage(id);
}

})();