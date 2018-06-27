<template>
  <nav class="navigation">
    <a class="navigation__item" :class="{ navigation__item__active: isActive(item.link) }" v-for="item in navigation" :href="item.link" :key="item.id">{{ item.name }}</a>
  </nav>
</template>

<script>
// Config Files, contains data of the App
import navigation from '@/config/navigation';

export default {
  name: 'Navigation',
  props: ['page'],
  data() {
    return {
      navigation,
    };
  },
  methods: {
    isActive(link) {
      // the OR condition has to manage the home page, when Skills is display on home page
      // this.page contains Skills but links property in the navigation.js is a root path like '/#/'
      return link.indexOf(this.page) > -1 || (link === '/#/' && this.page === 'skills');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/variables.scss';

.navigation {
  display: flex;
  justify-content: center;
  &__item {
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
    &__active {
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: -5px;
        left: 0;
        background: white;
        transition: all 0.5s ease;
      }
    }
  }
}
</style>
