<template>
  <nav class="navigation">
    <a class="navigation__items" v-for="item in navigation" :href="item.link" :key="item.id">{{ item.name }}</a>
  </nav>
</template>

<script>
import navigation from '@/config/navigation';

export default {
  name: 'Navigation',
  data() {
    return {
      navigation,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/variables.scss';

.navigation {
  display: flex;
  justify-content: center;
  &__items {
    margin: $inset-m;
    text-decoration: none;
    color: $text-color;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: -5px;
      left: 0;
      background: white;
      transition: all 0.5s ease;
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
}
</style>
