<template>
  <section class="profil">
    <div class="profil__photo">
      <img :src="profil.photo"/>
    </div>
    <div class="profil__information">
      <ul>
        <li class="profil__information__name">{{ profil.name }}</li>
        <li class="profil__information__nationality">{{ profil.nationality }}</li>
        <li><b>E:</b> {{ profil.email }}</li>
        <li><b>M:</b> {{ profil.phone }}</li>
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
@import '../assets/css/variables.scss';

.profil {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 0 $inline-m;
  &__photo {
    text-align: center;
    img {
      width: 180px;
    }
  }
  &__information {
    margin-bottom: $inline-m;
    li b {
      font-weight: bold;
    }
    &__name {
      font-size: 1.2em;
      font-weight: bold;
    }
    &__nationality {
      font-style: italic;
    }
  }
}
</style>
