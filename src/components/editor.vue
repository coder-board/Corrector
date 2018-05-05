<template>
	<div class="content">
		<div class="main">
			<div id="editor" style="text-align: left;" class="view"></div>
			<div class="correct-area">
				<div id="banner"><img src="../assets/logo1.png"></div>
				<textarea id="correct" readonly="readonly"></textarea>
			</div>
		</div>
		<div class="correct-bar">
			<select id="language">
				<option>简体中文</option>
				<option>英文</option>
				<option>印尼语</option>
			</select>
			<button class="correct" id="correctClick">一键纠错</button>
			<button class="clear" id="clear">清除内容</button>
		</div>
	</div>
</template>

<script>
	import E from 'wangeditor';

	export default {
		name: 'editor',
		data(){
			return {
				editorContent:''
			}
		},
		methods:{
			getContent:function(){
				alert(this.editorContent);
			}
		},
		mounted(){
			var editor = new E('#editor');
			editor.customConfig.onchange = (html) =>{
				$.ajax({
					type:'POST',
					url:'',
					data:{},
					dataType:"json",
					success:function(data){
						$('#correct').text(data);
					}
				});
			};
			editor.customConfig.onchangeTimeout = 1500;
			editor.customConfig.pasteFilterStyle = false;
			editor.customConfig.pasteIgnoreImg = true;
			editor.customConfig.pasteTextHandle = function (content) {
        		return content;
    		}
			editor.create();

			document.getElementById('clear').addEventListener('click',function(){
				editor.txt.clear();
			});

			document.getElementById('correctClick').addEventListener('click',function(){

			})
		}
	}
</script>

<style>
	.content{
	  width: 100%;
	  height:auto;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  margin-top: 12%;
	}
 	.main{
 		width: 90%;
 		display: flex;
 		margin-top: -50px;
 	}
	.view{
		flex: 1;
		z-index:0;
		background-color: white;
	}

	.correct-area{
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	#banner{
		width: 100%;
		height: 15%;
		background-color: rgb(17,165,134);
		display: flex;
	}
	
	#banner img{
		width: 136px;
		height: 16px;
		float: right;
		margin:17px auto; 
	}
	#correct{
		width: 100%;
		height: 85%;
		outline: none;
		align-self: flex-end;
	}

	.correct-bar{
		float: left;
		width: 50%;
		margin-left: -39%;
	}

	.correct-bar .clear , .correct{
		float: right;
		display: inline-block;
		width: 80px;
		height: 38px;
		margin-left:20px;
		margin-top: 5px;
		font-size: 15px;
		line-height: 35px; 
		background-color: #11A586;
		text-align: center;
		border-radius: 5px;
		cursor: pointer;
		outline: none;
		color: white;
		border: 1px;
	}

	#language{
		width: 90px;
		height: 38px;
		margin-left:-8px;
		margin-top: 5px;
		font-size: 15px;
		line-height: 35px; 
		outline: none;
		border-radius: 5px;
	}
</style>