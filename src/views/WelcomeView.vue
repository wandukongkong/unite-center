<template>
  <div class="cus-container d-flex flex-column">
    <img src="@/assets/img/pokemon/uniteCenterLogo.png" />
    <div class="position-relative">
      <img class="pokemon-center" src="@/assets/img/pokemon/pokemoncenter.png" />
      <img class="object object-1" src="@/assets/img/pokemon/object1.png" />
      <img class="object object-2" src="@/assets/img/pokemon/object2.png" />
      <img class="object object-3" src="@/assets/img/pokemon/object3.png" />
      <img class="object object-4" src="@/assets/img/pokemon/object4.png" @click="router.push('/circle')" />
      <img class="object object-5" src="@/assets/img/pokemon/object5.png" @click="router.push('/board')" />
      <img class="object object-6" src="@/assets/img/pokemon/object6.png" />
      <img class="object object-7" src="@/assets/img/pokemon/object7.png" @click="router.push('randomPick')" />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<style lang="css">
.cus-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.position-relative {
  position: relative;
}

.pokemon-center-logo {
  position: absolute;
  top: 15%;
}

.pokemon-center {
  width: 1200px;
  height: 800px;
}

.object-1 {
  position: absolute;
  right: 26.7%;
  top: 15%;
  width: 70px;
}

.object-2 {
  position: absolute;
  right: 49.5%;
  top: 19.5%;
  width: 139px;
}

.object-3 {
  position: absolute;
  right: 66.5%;
  top: 19.5%;
  width: 139px;
}

.object-4 {
  position: absolute;
  right: 16%;
  top: 62.2%;
  width: 120px;
}

.object-5 {
  position: absolute;
  right: 16.4%;
  top: 16%;
  width: 111px;
}

.object-6 {
  position: absolute;
  right: 41.4%;
  top: 15.4%;
  width: 94px;
}

.object-7 {
  position: absolute;
  right: 78%;
  top: 53.7%;
  width: 136px;
}

.object:hover {
  cursor: pointer;
  transform: scale(1.1);
}

/* Mobile - Landscape */
@media screen and (max-width: 576px) {
  .pokemon-center {
    width: 380px;
    height: 280px;
  }

  .object-1 {
    position: absolute;
    right: 26.7%;
    top: 16%;
    width: 22.9px;
  }

  .object-2 {
    position: absolute;
    right: 49.5%;
    top: 20%;
    width: 45px;
  }

  .object-3 {
    position: absolute;
    right: 66.5%;
    top: 20%;
    width: 44px;
  }

  .object-4 {
    position: absolute;
    right: 15.5%;
    top: 62.8%;
    width: 40px;
  }

  .object-5 {
    position: absolute;
    right: 16.4%;
    top: 16.3%;
    width: 36px;
  }

  .object-6 {
    position: absolute;
    right: 41.4%;
    top: 15.8%;
    width: 30px;
  }

  .object-7 {
    position: absolute;
    right: 77%;
    top: 54.5%;
    width: 47.5px;
  }

  .object:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}
</style>
