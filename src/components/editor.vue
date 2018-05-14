<template>
	<div class="content">
		<div class="main">
			<div id="editor" style="text-align: left;" class="view" spellcheck="false"></div>
			<div class="correct-area">
				<div id="banner"><img src="../assets/logo1.png"></div>
				<div id="corrector"></div>
			</div>
		</div>
		<div class="correct-bar">
			<button class="Btn-correct" id="correctClick">一键纠错</button>
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
			// const data = {
			// 	text:"I love you.",
			// 	wrongs:[
			// 		{
			// 			word:'love',
			// 			corrects:[
			// 				"my",
			// 				"me"
			// 			],
			// 			index: 2
			// 		},
			// 		{
			// 			word: 'you',
			// 			corrects: [
			// 				"my",
			// 				"me"
			// 			],
			// 			index: 7
			// 		}
			// 	]
			// }
			function correct(data){
				let texts = [];
				let index = 0;
				data.wrongs.sort((value1, value2) => {
					return value1.index > value2.index;
				}).forEach(value => {
					texts.push(data.text.substring(index, value.index));
					texts.push('<span data-word="' + value.corrects + '">');
					texts.push(value.word);
					texts.push('</span>');
					index = value.index + value.word.length;
				});
				texts.push(data.text.substr(index));
				$('#corrector')[0].innerHTML = texts.join('');
			}

			let span = undefined;

			$('#corrector').delegate("span","click",function(){
				if (span)span.className = '';
				this.className = 'span-show';
				span = this;
			});


			editor.create();
			document.getElementById('clear').addEventListener('click',function(){
				editor.txt.clear();
			});

			document.getElementById('correctClick').addEventListener('click',function(){
				$.ajax({
					type:'POST',
					url:'',
					data:{
						text:editor.txt.text()
					},
					success:function(data){
						correct(data);
					},
					error:function(err){
						console.log(err);
					}
				});
			});
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
	  text-decoration:none;
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
	#corrector{
		width: 100%;
		height: 85%;
		outline: none;
		align-self: flex-end;
		background-color: white;
		text-decoration:none;
	}

	#corrector span {
		text-decoration: wavy underline red; 
		cursor: pointer;
		position: relative;
	}

	#corrector span::before{
		content: attr(data-word);
		display: none;
		position: absolute;
		top: 100%;
		background-color: white;
		border: 1px solid black;
		left: 0px;
	}

	#corrector span.span-show::before {
		display: block;
	}

	.correct-bar{
		float: left;
		width: 50%;
		margin-left: -39%;
	}

	.correct-bar .clear , .Btn-correct{
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
</style>