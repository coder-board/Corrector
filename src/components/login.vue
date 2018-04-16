<template>
	<div id="all">
			<!--点击后弹出的灰色蒙版以及登录界面-->
			<div id="logindiv">
				<img src="../assets/close.png" id="close1" @click="closeLogin" />
				<table>
					<tr>
						<td>
							<input type="text" id="username" v-model="username" placeholder="请输入用户名">
						</td>
					</tr>
					<tr>
						<td>
							<input type="password" id="password" v-model="password" placeholder="请输入密码" >
						</td>
					</tr>
					<tr>
						<td>
							<p v-show="showTip">{{tip}}</p>
						</td>
					</tr>
					<tr>
						<th>
							<button class="login" @click="login"></button>
						</th>
					</tr>
					<tr>
						<td>
							<a href="#">《找回密码</a>
						</td>
					</tr>
				</table>
			</div>
		</div>
</template>

<script>
import {setCookie,getCookie} from '../../static/js/cookie.js';
	export default{
		data(){
			return {
				username: '',
				password: '',
				tip: '',
				showTip: false
			}
		},
		props:['loginShow'],
		mounted(){
			if(getCookie('username')){
				this.$router.push('/home');
			}
		},
		methods:{
			login(){
				if(this.username == ""||this.password == ""){
					this.showTip = true;
					this.tip = "请输入用户名与密码";
				}
				else{
					let data = {'username':this.username,'password':this.password}
					//接口请求
					this.$http.post('',data).then((res)=>{
						console.log(res);
						if(res.data == -1){
							this.showTip = true;
							this.tip = "用户不存在";
						}else if(res.data == 0){
							this.showTip = true;
							this.tip = "密码错误";
						}else{
							setCookie('username',this.username,1000*60);
							setTimeout(function(){
								this.$router.push('home')
							}.bind(this),1000);
						}
					})
				}
			},
			closeLogin(){
				this.$emit('Lclose');
			}
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

#all .login{
	background-image: url(../assets/load.png);
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