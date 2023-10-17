<template>
  <router-view />
</template>

<style>
@font-face {
	font-family: 'neodgm';
	src: url('./assets/font/neodgm.ttf') format('woff');
	font-weight: normal;
	font-style: normal;
}

#app {
	font-family: neodgm;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #376da3;
	width: 100%;
	height: 100%;
	background-color: #fdbf7e;
	padding: 50px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

html,
body {
	width: 100%;
	height: 100%;
	margin: 0;
}

.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}

@media screen and (max-width: 576px) {
	#app {
		font-family: neodgm;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #376da3;
		width: 100%;
		height: 100%;
		background-color: #fdbf7e;
		padding: 5px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
}
</style>
