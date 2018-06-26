<template>
  <div class="resume">
    <div class="background-animation">
      <background-animation></background-animation>
    </div>
    <div class="content">
      <navigation></navigation>
      <div class="content__inner">
        <profil></profil>
        <employment-history v-if="page === 'employmenthistory'"></employment-history>
        <skills v-if="page === 'skills'"></skills>
        <presentation v-if="page === 'presentation'"></presentation>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundAnimation from '@/components/widgets/BackgroundAnimation';
import Navigation from '@/components/Navigation';
import Profil from '@/components/Profil';
import EmploymentHistory from '@/components/EmploymentHistory';
import Skills from '@/components/Skills';
import Presentation from '@/components/Presentation';

export default {
  name: 'Resume',
  props: ['page'],
  components: {
    BackgroundAnimation,
    Navigation,
    Profil,
    EmploymentHistory,
    Skills,
    Presentation,
  },
};
</script>

<style lang="scss" scoped>
.resume {
  width: 100%;
  height: 100vh;
  .background-animation {
    position: absolute;
  }
  .content {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;

    &__inner {
      display: flex;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
