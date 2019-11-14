/* 	页面元素等宽高
创建日期 2019-10-27
版本：0.2
版权：问星
修改：
	2019-11-14
		新增:
			1、元素顶边分组等高
			2、元素左边分组等宽
			3、元素顶边分组等高、左边分组等宽
	使用方式：
引入本库文件：<script src="sameHW.js" type="text/javascript"></script>
	sameHW.setSameHWTage("*","a",1);	//所有class为a的元素等高
	sameHW.setSameHWTage("*","a",2);	//所有class为a的元素等宽
	sameHW.setSameHWTage("*","a",3);	//所有class为a的元素等宽高
	sameHW.setSameHWTage("*","a",4);	//所有class为a的元素顶边分组等高
	sameHW.setSameHWTage("*","a",5);	//所有class为a的元素左边分组等宽
	sameHW.setSameHWTage("*","a",6);	//所有class为a的元素顶边分组等高、左边分组等宽
	sameHW.setSameHWClass("b", "a", 1); //class为b的元素中所有class为a的子元素等高
	sameHW.setSameHWClass("b", "a", 2); //class为b的元素中所有class为a的子元素等宽
	sameHW.setSameHWClass("b", "a", 3); //class为b的元素中所有class为a的子元素等宽高
	sameHW.setSameHWClass("b", "a", 4); //class为b的元素中所有class为a的子元素顶边分组等高
	sameHW.setSameHWClass("b", "a", 5); //class为b的元素中所有class为a的子元素左边分组等宽
	sameHW.setSameHWClass("b", "a", 6); //class为b的元素中所有class为a的子元素顶边分组等高、左边分组等宽
	sameHW.setSameHWId("c", "a", 1); //ID为c的元素中所有class为a的子元素等高
	sameHW.setSameHWId("c", "a", 2); //ID为c的元素中所有class为a的子元素等宽
	sameHW.setSameHWId("c", "a", 3); //ID为c的元素中所有class为a的子元素等宽高
	sameHW.setSameHWId("c", "a", 4); //ID为c的元素中所有class为a的子元素顶边分组等高
	sameHW.setSameHWId("c", "a", 5); //ID为c的元素中所有class为a的子元素左边分组等宽
	sameHW.setSameHWId("c", "a", 6); //ID为c的元素中所有class为a的子元素顶边分组等高、左边分组等宽
*/

var sameHW = {
	maxHeight: 0,
	maxWidth: 0,
	maxHeights: [], //元素最大高度组
	maxWidths: [], //元素最大宽度组
	//获取元素所有的子元素class为name的元素
	getAllSubElement: function(elem, name) {
		var s = elem.children;
		var l = s.length;
		var sClass = [];
		var j = 0;
		for (var i = 0; i < l; i++) {
			if (s[i].nodeType == 1) { //判断节点类型 
				if (s[i].getAttribute("class") == name) //判断和需要CLASS名字相同的，并组成一个数组 
				{
					sClass[j] = s[i];
					console.log(sClass[j])
					j++;
				}
			}
		}
		return sClass;
	},
	//元素按左边位置分组
	getLeftGroup: function(els) {
		var rels = [];
		var lefts = [];
		//console.log(els)
		for (var i = 0; i < els.length; i++) {
			if (i == 0) {
				lefts.push(els[i].offsetLeft);
				var ar = [];
				ar.push(els[i]);
				rels.push(ar);
			} else {
				var a = 0;
				for (var j = 0; j < lefts.length; j++) {
					if (els[i].offsetLeft == lefts[j]) {
						rels[j].push(els[i]);
						a = 1;
						break;
					}
				}
				if (a == 0) {
					lefts.push(els[i].offsetLeft);
					var ar = [];
					ar.push(els[i]);
					rels.push(ar);
				}
			}
		}
		return rels;
	},
	//分组取最大宽度
	getMaxWInGroup: function(gele) {
		maxWidths = [];
		for (var i = 0; i < gele.length; i++) {
			this.getMaxWidth(gele[i], gele[i].length)
			maxWidths.push(this.maxWidth);
		}
	},
	//元素按顶边位置分组
	getTopGroup: function(els) {
		var rels = [];
		var tops = [];
		for (var i = 0; i < els.length; i++) {
			if (i == 0) {
				tops.push(els[i].offsetTop);
				var ar = [];
				ar.push(els[i]);
				rels.push(ar);
			} else {
				var a = 0;
				for (var j = 0; j < tops.length; j++) {
					if (els[i].offsetTop == tops[j]) {
						rels[j].push(els[i]);
						a = 1;
						break;
					}
				}
				if (a == 0) {
					tops.push(els[i].offsetTop);
					var ar = [];
					ar.push(els[i]);
					rels.push(ar);
				}
			}
		}
		return rels;
	},
	//分组取最大高度
	getMaxHInGroup: function(gele) {
		maxHeights = [];
		for (var i = 0; i < gele.length; i++) {
			this.getMaxHeight(gele[i], gele[i].length)
			maxHeights.push(this.maxHeight);
		}
	},
	//取最大高度
	getMaxHeight: function(els, l) {
		var s = 'Math.max(';
		for (var i = 0; i < l; i++) {
			if (i == l - 1) {
				s += els[i].scrollHeight + ');';
			} else {
				s += els[i].scrollHeight + ',';
			}
		}
		this.maxHeight = eval(s);
	},
	//取最大宽度
	getMaxWidth: function(els, l) {
		var s = 'Math.max(';
		for (var i = 0; i < l; i++) {
			if (i == (l - 1)) {
				s += els[i].scrollWidth + ')';
			} else {
				s += els[i].scrollWidth + ',';
			}
		}
		this.maxWidth = eval(s);
	},
	//取最大宽高度
	getMaxWH: function(els, l) {
		var s = 'Math.max(';
		var s1 = 'Math.max(';
		for (var i = 0; i < l; i++) {
			if (i == l - 1) {
				s += els[i].scrollWidth + ');';
				s1 += els[i].scrollHeight + ');';
			} else {
				s += els[i].scrollWidth + ',';
				s1 += els[i].scrollHeight + ',';
			}
		}
		this.maxWidth = eval(s);
		this.maxHeight = eval(s1);
	},
	//分组等高
	setsameHg: function(els) {
		var gels = this.getTopGroup(els);
		this.getMaxHInGroup(gels);
		//console.log(JSON.stringify(maxHeights))
		for (var i = 0; i < gels.length; i++) {
			for (var j = 0; j < gels[i].length; j++) {
				var el = gels[i][j];
				el.style.height = maxHeights[i] + 'px';
			}
		}
	},
	//分组等宽
	setsameWg: function(els) {
		var gels = this.getLeftGroup(els);
		this.getMaxWInGroup(gels);
		//console.log(JSON.stringify(maxHeights))
		for (var i = 0; i < gels.length; i++) {
			for (var j = 0; j < gels[i].length; j++) {
				var el = gels[i][j];
				el.style.width = maxWidths[i] + 'px';
			}
		}
	},
	//等高
	setsameH: function(els) {
		var le = els.length;
		for (var i = 0; i < le; i++) {
			els[i].style.height = this.maxHeight + 'px';
		}
	},
	//等宽
	setsameW: function(els) {
		var le = els.length;
		for (var i = 0; i < le; i++) {
			els[i].style.width = this.maxWidth + 'px';
		}
	},
	//等宽高
	setsameHW: function(els) {
		var le = els.length;
		for (var i = 0; i < le; i++) {
			els[i].style.height = this.maxHeight + 'px';
			els[i].style.width = this.maxWidth + 'px';
		}
	},

	//取标签tage中class名为name的元素，返回元素数组
	getTageClass: function(tage, name) {
		var classobj = new Array(); //定义数组 
		var ci = 0; //定义数组的下标 
		var tags = document.getElementsByTagName(tage); //获取HTML的对应标签 
		for (var i in tags) { //对标签进行遍历 
			if (tags[i].nodeType == 1) { //判断节点类型 
				if (tags[i].getAttribute("class") == name) //判断和需要CLASS名字相同的，并组成一个数组 
				{
					classobj[ci] = tags[i];
					ci++;
				}
			}
		}
		return classobj; //返回组成的数组
	},
	//取所有class名为name的元素，返回元素数组
	getClass: function(name) {
		if (document.getElementsByClassName) //如果支持这个函数则用这个函数取
		{
			return document.getElementsByClassName(name);
		} else {
			return getTageClass("*", name);
		}
	},
	//取class中所有class为subclass的子元素
	getClassInSub: function(father, subclass) {
		var fobj = this.getClass(father);
		var l = fobj.length;
		var j = 0;
		var robj = [];
		for (var i = 0; i < l; i++) {
			var sobj = this.getAllSubElement(fobj[i], subclass);
			for (var k = 0; k < sobj.length; k++) {
				robj[j] = sobj[k];
				j++;
			}
		}
		return robj;
	},

	//条件设置等宽高
	setSame: function(eobj, type) {
		var l = eobj.length;
		switch (type) {
			case 1: //所有等高
				this.getMaxHeight(eobj, l);
				this.setsameH(eobj);
				break;
			case 2: //所有等宽
				this.getMaxWidth(eobj, l);
				this.setsameW(eobj);
				break;
			case 3: //所有等宽高
				this.getMaxWH(eobj, l);
				this.setsameHW(eobj);
				break;
			case 4: //顶边分组等高
				this.setsameHg(eobj);
				break;
			case 5: //左边分组等宽
				this.setsameWg(eobj);
				break;
			case 6: //顶边分组等高；左边分组等宽
				this.setsameHg(eobj);
				this.setsameWg(eobj);
				break;
			default:
				break;
		}
	},
	//设置指定class中的子class等宽高
	//father 父class名
	//sub 子class名
	//type 0：等宽高；1:等高；2：等宽；3:元素顶边分组等高；4：元素左边分组等宽；5：元素顶边分组等高，元素左边分组等宽 
	setSameHWClass: function(father, sub, type) {
		var eobj = this.getClassInSub(father, sub);
		this.setSame(eobj, type);
	},
	//设置指定ID中的子class等宽高
	//father 父id名
	//sub 子class名
	//type 0：等宽高；1:等高；2：等宽；3:元素顶边分组等高；4：元素左边分组等宽；5：元素顶边分组等高，元素左边分组等宽
	setSameHWId: function(id, sub, type) {
		var eid = document.getElementById(id);
		var eobj = this.getAllSubElement(eid, sub);
		this.setSame(eobj, type);
	},
	//设置指定tage中的子class等宽高
	//father 父id名
	//sub 子class名
	//type 0：等宽高；1:等高；2：等宽；3:元素顶边分组等高；4：元素左边分组等宽；5：元素顶边分组等高，元素左边分组等宽
	setSameHWTage: function(tage, sub, type) {
		var eobj = this.getTageClass(tage, sub);
		this.setSame(eobj, type);

	}
}
