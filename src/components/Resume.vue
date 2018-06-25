<template>
  <div class="resume">
    <background-animation></background-animation>
    <timeline></timeline>
  </div>
</template>

<script>
import Timeline from '@/components/widgets/Timeline';
import BackgroundAnimation from '@/components/widgets/BackgroundAnimation';

export default {
  name: 'Resume',
  components: {
    Timeline,
    BackgroundAnimation,
  },
};
</script>

<style lang="scss" scoped>
.resume {
  width: 100vw;
  height: 100vh;
}
</style>
