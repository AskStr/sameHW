# sameHW
## 页面元素等宽高
2019-11-14 新增:
1. 元素顶边分组等高
2. 元素左边分组等宽
3. 元素顶边分组等高、左边分组等宽

引入本库文件：<script src="sameHW.js" type="text/javascript"></script>

* * *
### sameHW.setSameHWTage( "父标签", "子类","类型")
* 参数1: 父标签
* 参数2: 子类
* 参数3: 类型
		1. 等高;
		2. 等宽;
		3. 等宽高;
		4. 顶边分组等高;
		5. 左边分组等宽;
		6. 顶边分组等高、左边分组等宽;
示例代码:
```javascript
sameHW.setSameHWTage("*","a",1);	//所有class为a的元素等高
sameHW.setSameHWTage("*","a",2);	//所有class为a的元素等宽
sameHW.setSameHWTage("*","a",3);	//所有class为a的元素等宽高
sameHW.setSameHWTage("*","a",4);	//所有class为a的元素顶边分组等高
sameHW.setSameHWTage("*","a",5);	//所有class为a的元素左边分组等宽
sameHW.setSameHWTage("*","a",6);	//所有class为a的元素顶边分组等高、左边分组等宽
```
* * *
### sameHW.setSameHWClass( "父类", "子类","类型")
* 参数1: 父类
* 参数2: 子类
* 参数3: 类型
		1. 等高
		2. 等宽
		3. 等宽高
		4. 顶边分组等高
		5. 左边分组等宽
		6. 顶边分组等高、左边分组等宽
示例代码:
```javascript
sameHW.setSameHWClass("b", "a", 1); //class为b的元素中所有class为a的子元素等高
sameHW.setSameHWClass("b", "a", 2); //class为b的元素中所有class为a的子元素等宽
sameHW.setSameHWClass("b", "a", 3); //class为b的元素中所有class为a的子元素等宽高
sameHW.setSameHWClass("b", "a", 4); //class为b的元素中所有class为a的子元素顶边分组等高
sameHW.setSameHWClass("b", "a", 5); //class为b的元素中所有class为a的子元素左边分组等宽
sameHW.setSameHWClass("b", "a", 6); //class为b的元素中所有class为a的子元素顶边分组等高、左边分组等宽
```
* * *
### sameHW.setSameHWClass( "父ID", "子类","类型")
* 参数1: 父ID
* 参数2: 子类
* 参数3: 类型
		1. 等高
		2. 等宽
		3. 等宽高
		4. 顶边分组等高
		5. 左边分组等宽
		6. 顶边分组等高、左边分组等宽
示例代码:
```javascript
sameHW.setSameHWId("c", "a", 1); //ID为c的元素中所有class为a的子元素等高
sameHW.setSameHWId("c", "a", 2); //ID为c的元素中所有class为a的子元素等宽
sameHW.setSameHWId("c", "a", 0); //ID为c的元素中所有class为a的子元素等宽高
sameHW.setSameHWId("c", "a", 4); //ID为c的元素中所有class为a的子元素顶边分组等高
sameHW.setSameHWId("c", "a", 5); //ID为c的元素中所有class为a的子元素左边分组等宽
sameHW.setSameHWId("c", "a", 6); //ID为c的元素中所有class为a的子元素顶边分组等高、左边分组等宽
```