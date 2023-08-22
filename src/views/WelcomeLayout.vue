<template>
  <div class="container">
    <img src="../assets/uniteCenterLogo.png" class="pokemon-center-logo" />
    <div class="position-relative">
      <img src="../assets/pokemoncenter.png" width="1200" height="800" />
      <img class="object object-1" src="../assets/object1.png" />
      <img class="object object-2" src="../assets/object2.png" />
      <img class="object object-3" src="../assets/object3.png" />
      <img class="object object-4" src="../assets/object4.png" />
      <img class="object object-5" src="../assets/object5.png" />
      <img class="object object-6" src="../assets/object6.png" />
      <img class="object object-7" src="../assets/object7.png" />
    </div>
  </div>
</template>
<script setup></script>
<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdbf7e;
}

.position-relative {
  position: relative;
}

.pokemon-center-logo {
  position: absolute;
  top: 15%;
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
</style>
