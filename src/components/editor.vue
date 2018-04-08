<template>
	<div id="editor" style="text-align: left"></div>
	<!-- <button v-on:click="getContent">查看内容</button> -->
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
				this.editorContent = html;
			}
			editor.create();
		}
	}
</script>