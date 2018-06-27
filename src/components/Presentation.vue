<template>
  <section class="presentation">
    <div class="presentation__inner">
      <h2 class="presentation__inner__title">{{ introduction.title }}</h2>
      <p class="presentation__inner__text" v-html="introduction.text"></p>
    </div>
  </section>
</template>

<script>
// Config Files, contains data of the App
import introduction from '@/config/introduction';

export default {
  name: 'Presentation',
  data() {
    return {
      introduction,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/variables.scss';

.presentation {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  &__inner {
    width: 800px;
    &__title {
      border-bottom: solid 1px white;
      font-weight: bold;
    }
    &__text {
      margin-top: $stack-s;
    }
  }
}
</style>
