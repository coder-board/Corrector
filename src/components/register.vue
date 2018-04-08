<template>
	<div id="all">
			<!--点击后弹出的灰色蒙版以及注册界面-->
			<div>
				<img src="../assets/close.png" id="close1" onclick="CloseButton(this)" />
				<table>
					<tr>
						<td>
							<input type="text" id="membername" name="membername" placeholder="用户名">
						</td>
					</tr>
					<tr>
						<td>
							<input type="password" id="password" name="password" placeholder="请输入密码">
						</td>
					</tr>
					<tr>
						<td>
							<input type="password" id="password" name="password" placeholder="请输入密码"> 
						</td>
					</tr>
					<tr>
						<td>
							<input type="text" id="mailbox" name="mailbox" placeholder="邮箱">
						</td>
					</tr>
					<tr>
						<th>
							<!-- <input type="button" name="register" value="" autofocus="autofocus" style=" height:35px;background:url(img/register.png) no-repeat" onclick()="confirm()"><br/> -->
							<button @click="loginclick"></button>
						</th>
					</tr>
				</table>
			</div>
		</div>
</template>

<script>
	export default{
		name:'register',
		methods:{

		}
	}
</script>

<style>
	#all div{                   /*登录盒子*/
	width: 25%;
	position: relative;
	vertical-align: middle;
    margin: 15% auto;
    background-color: white;
    overflow: hidden;
    border-radius: 5px;
}

#all div table{            /*表格布局登录注册*/
	width: 200px;
	height: 50px;
	cellspacing:4;
	margin: 5% auto;
}

#all div tr input {         /*灰色蒙版中文本框的设置*/
	width: 200px;
	height: 28px;
	border-radius:5px;
	margin: 15px 0;
	padding-left: 10px;
}

#all a {                          /*底部红色字注册跳转*/
	text-decoration: none;
	font-size: 10px;
	color: red;
	float: right;
}

#close1{                             /*关闭按钮CSS3样式设置*/
	float: none;
	position: absolute;
	right: 0px;
	top: 0px;
	transition: transform 0.5s;
	-ms-transition: transform 0.5s;
	-o-transition: transform 0.5s;
	-moz-transition: transform 0.5s;
	-webkit-transition: transform 0.5s;  /*CSS3兼容性处理*/
}

#close1:hover{
	transform: rotate(90deg);
	-webkit-transform: rotate(90deg);
	-moz-transform: rotate(90deg);
	-o-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	cursor: pointer;
}

#all button{
	background-image: url(../assets/register.png);
	height: 35px;
	width: 200px;
	border: 1px;
	outline: none;
	margin-top: 15px;
}

#all button:hover{
	opacity: 0.8;
	cursor: pointer;	
}
</style>