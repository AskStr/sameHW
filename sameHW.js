// 页面元素等宽高
// 创建日期 2019-10-27
// 版本：0.1
// 版权：问星

//	使用方式：
// 引入本库文件：<script src="sameHW.js" type="text/javascript"></script>
//	sameHW.setSameHWTage("*","a",1);	//所有class为a的元素等高
//	sameHW.setSameHWTage("*","a",2);	//所有class为a的元素等宽
//	sameHW.setSameHWTage("*","a",0);	//所有class为a的元素等宽高
//	sameHW.setSameHWClass("b", "a", 1); //class为b的元素中所有class为a的子元素等高
//	sameHW.setSameHWClass("b", "a", 2); //class为b的元素中所有class为a的子元素等宽
//	sameHW.setSameHWClass("b", "a", 0); //class为b的元素中所有class为a的子元素等宽高
//	sameHW.setSameHWId("c", "a", 1); //ID为c的元素中所有class为a的子元素等高
//	sameHW.setSameHWId("c", "a", 2); //ID为c的元素中所有class为a的子元素等宽
//	sameHW.setSameHWId("c", "a", 0); //ID为c的元素中所有class为a的子元素等宽高

var sameHW = {
	maxHeight: 0,
	maxWidth: 0,
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
					j++;
				}
			}
		}
		return sClass;
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
			if (i == l - 1) {
				s += els[i].scrollWidth + ');';
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
	//获取元素最大高度或宽度
	//type 0：取紧了大宽高；1:取最大高度；2取最大宽度； 
	getElemenMaxHW: function(els, type) {
		var l = els.length;
		if (type == 1) {
			this.getMaxHeight(els, l);
		} else if (type == 2) {
			this.getMaxWidth(els, l);
		} else {
			this.getMaxWH(els, l);
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
		var j=0;
		var robj = [];
		for (var i = 0; i < l; i++) {
			var sobj = this.getAllSubElement(fobj[i], subclass);
			for(var k=0;k<sobj.length;k++){
				robj[j]=sobj[k];
				j++;
			}
		}
		return robj;
	},
	//设置指定class中的子class等宽高
	//father 父class名
	//sub 子class名
	//type 0：等宽高；1:等高；2：等宽； 
	setSameHWClass: function(father, sub, type) {
		
		var eobj = this.getClassInSub(father, sub);
		this.getElemenMaxHW(eobj, type);
		if (type == 1) {
			this.setsameH(eobj);
		} else if (type == 2) {
			this.setsameW(eobj);
		} else {
			this.setsameHW(eobj);
		}
	},
	//设置指定ID中的子class等宽高
	//father 父id名
	//sub 子class名
	//type 0：等宽高；1:等高；2：等宽；  
	setSameHWId: function(id, sub, type) {
		eid=document.getElementById(id);
		var eobj = this.getAllSubElement(eid, sub);
		this.getElemenMaxHW(eobj, type);
		if (type == 1) {
			this.setsameH(eobj);
		} else if (type == 2) {
			this.setsameW(eobj);
		} else {
			this.setsameHW(eobj);
		}
	},
	//设置指定tage中的子class等宽高
	//father 父id名
	//sub 子class名
	//type 0：等宽高；1:等高；2：等宽； 
	setSameHWTage: function(tage, sub, type) {
		var eobj = this.getTageClass(tage, sub);
		this.getElemenMaxHW(eobj, type);
		if (type == 1) {
			this.setsameH(eobj);
		} else if (type == 2) {
			this.setsameW(eobj);
		} else {
			this.setsameHW(eobj);
		}
	}
}
