<template>
	<div>
		<Form />
		<Display />
	</div>
</template>

<script>
	import Form from './Form.vue'
	import Display from './Display.vue'
	export default {
		components:{
			Form,
			Display
		},
		metaInfo: {
		  title: 'Icecream',
		  titleTemplate: '%s - Yay!',
		  htmlAttrs: {
		    lang: 'en',
		    amp: false
		  }
		}
	}
</script>

<style>

</style>