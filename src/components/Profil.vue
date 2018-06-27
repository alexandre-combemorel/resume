<template>
  <section class="profil">
    <div class="profil__photo">
      <img :src="profil.photo"/>
    </div>
    <div class="profil__information">
      <ul>
        <li class="profil__information__name">{{ profil.name }}</li>
        <li class="profil__information__nationality">{{ profil.nationality }}</li>
        <li class="profil__information__email"><b>E:</b> <a :href="'mailto:' + profil.email">{{ profil.email }}</a></li>
        <li class="profil__information__mobile"><b>M:</b> <a :href="'tel:' + profil.email">{{ profil.phone }}</a></li>
      </ul>
    </div>
    <div class="profil__hobbies">
      <h2 class="profil__hobbies__title">Hobbies</h2>
      <div class="profil__hobbies__column" v-for="column in hobbies" :key="column.id">
        <b class="profil__hobbies__column__title">{{ column.section }}</b>
        <ul>
          <li class="profil__hobbies__column__item" v-for="item in column.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
// Config Files, contains data of the App
import profil from '@/config/profil';
import hobbies from '@/config/hobbies';

export default {
  name: 'Profil',
  data() {
    return {
      profil,
      hobbies,
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
  justify-content: flex-start;
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
  &__hobbies {
    &__title {
      border-bottom: solid white 1px;
      margin-bottom: $stack-s;
    }
    &__column {
      &__title {
        font-weight: bold;
      }
      &__item {
        font-size: 0.8em;
      }
    }
  }
}
</style>
