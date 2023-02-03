<template>
	<div class="container">
	  <div class="circle circle1"></div>
	  <div class="circle circle2"></div>
	  <div class="circle circle3"></div>
	</div>
</template>

<script>
	 export default {
	        name: "Main1"
	    }
</script>

<style scoped>
	.container {
	  position: relative;
	}
	
	.circle {
	  position: absolute;
	  width: 150px;
	  height: 150px;
	  border-radius:40% 50% 50% 40%;
	  border: 3px solid;
	}
	
	.circle1 {
	  top: 10px;
	  left: 10px;
	  border-color: red;
	  animation: circle1 5s infinite ease-in-out;
	}
	
	.circle2 {
	  top: 40px;
	  left: 20px;
	  border-color: blue;
	  animation: circle2 4s infinite ease-in-out;
	}
	
	.circle3 {
	  top: 15px;
	  left: 30px;
	  border-color: green;
	  animation: circle3 3s infinite ease-in-out;
	}
	
	@keyframes circle1 {
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
	}
	
	@keyframes circle2 {
	  0% {
	    transform: rotate(10deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
	}
	
	@keyframes circle3 {
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
	}
</style>