<template>
  <div class="cus-container">
    <div>
      <div class="d-flex flex-row align-items-center">
        <div class="line opacity-25 mb-2"></div>
        <h5 class="mx-3">
          간편 로그인
        </h5>
        <div class="line opacity-25 mb-2"></div>
      </div>
      <button class="btn">
        <img class="naver-btn m-2" src="../assets/naver/btnG_아이콘사각.png" @click="naverLogin" />
      </button>
    </div>
  </div>
</template>
<script setup>
import {toRef} from 'vue';

// FIXME: 숨겨야함
const naverClientId = toRef('0BmzZJ20Kh4DLMYIvJ7T');
const callbackUrl= toRef('http://localhost:8080/check');
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
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fdbf7e;
}

.naver-btn {
  width: 50px
}

.line {
  width: 40px;
  border: 1px solid #777777;
}
</style>
