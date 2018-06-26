<template>
  <section class="profil">
    <div class="profil__photo">
      <img :src="profil.photo"/>
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
  </section>
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
  width: 25%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &__photo {
    width: 100%;
  }
}
</style>
