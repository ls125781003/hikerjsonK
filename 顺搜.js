function 顺搜(arr) {
	if (MY_PAGE == 1) {
		putVar('小程序名', MY_RULE.title);
		var 本地 =getPath('hiker://files/rules/dzHouse/html/顺搜.html');
		if (fileExist(本地) == false) {
			var 远程x5 = request('https://ghproxy.net/https://raw.githubusercontent.com/ls125781003/hikerjsonK/main/顺搜.html');
			if (远程x5.indexOf("search_bg") > 0) {
				writeFile(本地, 远程x5);
			} else {
				confirm({
					title: '❌错误提示',
					content: '顺搜导入出错\n请到道长仓库手动导入顺搜.html'
				})
			}
		}
		if (!getVar('X5加载')) {
			x5_height = 0
		} else {
			x5_height = 'video'
		}
		arr.push({
			desc: 'list&&' + x5_height,
			url: 本地,
			col_type: 'x5_webview_single',
			extra: {
				ua: MOBILE_UA
			}
		})
	}
}