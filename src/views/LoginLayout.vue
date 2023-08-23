<template>
  <!-- <img src="../assets/naver/btnG_완성형.png" @click="naverLogin" /> -->
  <div class="cus-container"></div>
</template>
<script setup>
import {toRef} from 'vue';

const naverClientId = toRef('0BmzZJ20Kh4DLMYIvJ7T');
const callbackUrl= toRef('http://localhost:8080/login');
const states = toRef('3tPTjvTWCl');


const naverLogin = () => { //eslint-disable-line no-unused-vars
  const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId.value}&redirect_uri=${callbackUrl.value}&state=${states.value}`;

  console.log("==================url====================");
  console.log(url);

  window.location.href=url;
}; 
</script>
<style>
.cus-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdbf7e;
}
</style>
