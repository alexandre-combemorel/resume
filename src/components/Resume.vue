<template>
  <div class="resume">
    <div class="background-animation">
      <background-animation></background-animation>
    </div>
    <div class="content">
      <profil></profil>
      <timeline></timeline>
    </div>
  </div>
</template>

<script>
import Timeline from '@/components/widgets/Timeline';
import BackgroundAnimation from '@/components/widgets/BackgroundAnimation';
import Profil from '@/components/Profil';

export default {
  name: 'Resume',
  components: {
    Timeline,
    BackgroundAnimation,
    Profil,
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
    position: absolute;
    display: flex;
  }
}
</style>
