<template>
  <div class="timeline">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      msg: 'Hello world',
    };
  },
};
</script>

<style lang="scss" scoped>
.timeline {
  position: absolute;
  color: #fff;
}
</style>
