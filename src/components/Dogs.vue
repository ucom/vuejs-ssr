<template>
	<div>
		Dogs
		<ul>
			<li v-for="(v,p,idx) in $store.getters.breeds">
				{{p}}{{idx}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		components:{

		},
		mounted(){
			this.$store.dispatch('set_dogs');
		},
		metaInfo: {
		  title: 'Dogs',
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