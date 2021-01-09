<template>
  <div id="app">
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
    export default{
	data(){
	    return {
 
		}
	},
	computed:{
	    key(){
	        return this.$route.path + Math.random();
	    }
	}
    }
</script>
