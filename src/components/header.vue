<template>
	<div class="header">
		<div class="container">
			<div class="row header">
				<div class="logo col-lg-4 col-md-4"><img src="../assets/logo1.png"></div>
			    <div class="text col-lg-4 col-md-4"> <span class="col-lg-4 col-md-4">一键纠错的在线协作文档</span></div>
			    <nav class="navbar nav-default col-lg-4 col-md-4">
                     <ul class="nav navbar-nav">
                     	<li style="font-size:20px;" ><a href="" @click.prevent="showDetail">登录</a></li>
                     	<li style="font-size:20px;" ><a href="" @click.prevent="showDetail">注册</a></li>
                     	<li style="font-size:40px;top:-2px;" ><a href="">···</a></li>
                     </ul>
			    </nav>
			</div>
			<div v-show="detailShow" class="detail">
				<register></register>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import login from './login.vue';
import register from './register.vue';

export default {
	components: {
		'login': login,
		'register':register
	},
	data(){
		return {
			detailShow:false
		};
	},
	methods: {
		showDetail(){
			this.detailShow = true;
		}
	}
}
</script>

<style type="text/css">
.container{
	padding: 0;
	margin:0;
	width: auto;
	height: 100%;
	background-color:#eeeeee;
}

.header{
	width: 100%;
    height: 55px;
}

.logo{
	height: 100%;
	background-color: rgb(17,165,134);
}

.logo img{
	width: 136px;
	height: 16px;
	float: right;
	margin:18px 30px; 
}

.text{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}
.text span{
	width: auto;
	font-size: 20px;
	color: #ACADAF;
	font-family: 'Microsoft YaHei';
	line-height: 35px;
	margin-left: 6%;
}

nav{
	font-size:18px;
	font-family: 'Microsoft YaHei';
	color: #11A586;
	display: flex;
	justify-content: center;
	align-items: center;
}

ul li a{
	float: left;
	color: #11A586;
}

.detail{
	position: fixed;
	z-index: 100;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(7,17,27,0.8);
}
</style>