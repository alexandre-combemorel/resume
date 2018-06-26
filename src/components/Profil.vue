<template>
  <div class="profil">
    <div class="profil__photo">
      <img src="../assets/picture_180x180.jpg"/>
    </div>
    <div class="profil__information">
      <ul>
        <li>French</li>
        <li>E: alexandre.combemorel@gmail.com</li>
        <li>M: +61 43254221</li>
        <li></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Profil',
  data() {
    return {
      src: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.profil {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &__photo {
    width: 100%;
  }
}
</style>
