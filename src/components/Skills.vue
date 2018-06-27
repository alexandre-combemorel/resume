<template>
  <section class="skills">
    <div class="skills__column" v-for="column in skills" :key="column.id">
      <div class="skills__column__title">{{ column.column_name }}</div>
      <ul class="skills__column__itemsgroup">
        <li class="skills__column__itemsgroup__item" v-for="item in column.items" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
// Config Files, contains data of the App
import skills from '@/config/skills';

export default {
  name: 'Skills',
  data() {
    return {
      skills,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/variables.scss';

.skills {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  &__column {
    margin: $inset-m;
    width: 40%;
    &__title {
      padding: $inset-s;
      background: white;
      color: $secondary;
      font-weight: bold;
      border-radius: 5px 0 0 0;
    }
    &__itemsgroup {
      margin-top: $stack-s;
      &__item {
        line-height: 1.5em;
      }
    }
  }
}
</style>
