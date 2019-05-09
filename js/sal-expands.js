var expandItems = {};

var sal_expand_util = {

	find_tag_node: function(ele, tagName) {
		const result = [];
		this._find_tag_node(ele, tagName, result);
		return result;
	},
	_find_tag_node: function(ele, tagName, result) {
		const childNodes = ele.childNodes;
		if (!childNodes || childNodes.length == 0) {
			return;
		}
		for (var i = 0; i < childNodes.length; i++) {
			if (tagName === childNodes[i].tagName) {
				result.push(childNodes[i]);
			}
			this._find_tag_node(childNodes[i], tagName, result);
		}

	}
};

(function() {

// 	var all = document.all;
// 
// 	var appBox = document.getElementById('app');
// 	var template = appBox.getElementsByTagName('template');
// 	// var tables = template[0].all;sal-base
// 	var base = sal_expand_util.find_tag_node(template[0].content, 'SAL-BASE')[0];
// 	var columns = sal_expand_util.find_tag_node(base, 'SAL-TABLE-COLUMN');
// 	var expands = sal_expand_util.find_tag_node(base, 'SAL-TABLE-AUTO-EXPANDS')[0];
// 	// console.log(columns);
// 	for (var i = 0; i < columns.length; i++) {
// 		var key = columns[i].getAttribute('auto-expand');
// 		var html = columns[i].innerHTML.replace(/(^\s*)|(\s*$)/ig, "").replace(/\n+|\t+/ig, ' ');
// 		if (html.length > 0) {
// 			expandItems[key] = html;
// 			expands.innerHTML += '<sal-table-column-form-item :index="pppp.index" :row="pppp.row">' + html + '</sal-table-column-form-item>';
// 		} else {
// 			expandItems[key] = false;
// 			expands.innerHTML +=
// 				'<sal-table-column-form-item :index="pppp.index" :row="pppp.row"><template v-slot:default="pppp"><span>{{pppp}}</span></el-form></sal-table-column-form-item>';
// 		}
// 	}
// 	console.log(expands.innerHTML);


})();
