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
		html += '<img id="chooseByEar" src="image/menu/chooseByEar.png" alt=""/>';
		html += '<img id="learnDraw" src="image/menu/chooseByEar.png" alt=""/>';
		$("#menu-menu").html(html);//.trigger('create');
		$page.find("img").onn("click", click);
	}
}

function click(e) {
	twice(e);
	var id = this.id;
	window.APP[id].init(); 
	navToPage(id);
}

})();