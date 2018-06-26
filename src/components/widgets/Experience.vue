<template>
  <div class="experience">
    {{ xp.company.name }}
  </div>
</template>

<script>
export default {
  name: 'Experience',
  props: ['xp'],
};
</script>

<style lang="scss" scoped>
</style>
