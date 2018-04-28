<template>
	<div class="content">
		<div class="main">
		<div id="editor" style="text-align: left;" class="view"></div>
		<div class="correct-area">
			<div id="banner"><img src="../assets/logo1.png"></div>
			<textarea id="correct"></textarea>
		</div>
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
					dataType:,
					success:function(data){
						$('#correct').text(data);
					}
				})
			editor.create();
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
		flex: 2;
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

</style>