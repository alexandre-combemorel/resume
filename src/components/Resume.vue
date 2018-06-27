<template>
  <div class="resume">
    <div class="background-animation">
      <background-animation></background-animation>
    </div>
    <div class="content">
      <navigation :page="page"></navigation>
      <div class="content__inner">
        <profil></profil>
        <timeline v-if="page === 'employmenthistory'" :page="page"></timeline>
        <timeline v-if="page === 'qualifications'" :page="page"></timeline>
        <skills v-if="page === 'skills'"></skills>
        <presentation v-if="page === 'presentation'"></presentation>
      </div>
    </div>
  </div>
</template>

<script>
// Components list
import BackgroundAnimation from '@/components/widgets/BackgroundAnimation';
import Navigation from '@/components/Navigation';
import Profil from '@/components/Profil';
import Timeline from '@/components/Timeline';
import Skills from '@/components/Skills';
import Presentation from '@/components/Presentation';

// This component define the structure of the App
export default {
  name: 'Resume',
  props: ['page'],
  components: {
    BackgroundAnimation,
    Navigation,
    Profil,
    Timeline,
    Skills,
    Presentation,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/variables.scss';

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
