<template>
  <div class="timeline">
    <experience v-for="xp in experiences" :xp="xp" :key="xp.id"></experience>
  </div>
</template>

<script>
import Experience from '@/components/widgets/Experience';
import experiences from '@/config/experiences';

export default {
  name: 'Timeline',
  components: {
    Experience,
  },
  data() {
    return {
      experiences,
    };
  },
};
</script>

<style lang="scss" scoped>
.timeline {
  color: #fff;
}
</style>
