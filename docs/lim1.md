# 简单求极限

[demo](https://humanchecker.pages.dev/lim/1)

在代码中使用：



```html
		<script src="https://humanchecker.pages.dev/lim/1.js"></script>
		<div id="q"></div><!-- 存放问题 -->
		<form onsubmit="return check(res)"><!-- res:用于处理结果的函数 -->
			<label>分子：</label>
			<input type="text" id="x"><br><br>
			<label>分母（整数请填1）：</label>
			<input type="text" id="y"><br><br>
			<input type="submit" value="提交">
		</form>
```

定义res函数

```html
	<script>
		function res(result){
    	if(result){
    	    alert("通过验证");
    	}
    	else{
    	    alert("是人吗？不是人。");
    	}
	}
	</script>
```

