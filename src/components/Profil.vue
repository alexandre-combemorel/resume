<template>
  <div class="profil">
    <div class="profil__photo">
      <img src="../assets/picture_180x180.jpg"/>
    </div>
    <div class="profil__information">
      <ul>
        <li>{{ profil.name }}</li>
        <li>{{ profil.nationality }}</li>
        <li>E: {{ profil.email }}</li>
        <li>M: {{ profil.phone }}</li>
        <li></li>
      </ul>
    </div>

  </div>
</template>

<script>
import profil from '@/config/profil';

export default {
  name: 'Profil',
  data() {
    return {
      profil,
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
