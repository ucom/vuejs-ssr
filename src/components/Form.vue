<template>
	<div>
		<label for="flavor">Favorite ice cream flavor</label>
		<input @input="changed" type="text" name="flavor">
	</div>
</template>

<script>
	export default{
		methods:{
			changed: function(e){
				this.$store.commit('add_log', 'changed')
				//this.$store.commit('change_flavor', e.target.value)
				this.$store.dispatch('change_flavor_slowly', { flavor: e.target.value })
			}
		}
	}
</script>