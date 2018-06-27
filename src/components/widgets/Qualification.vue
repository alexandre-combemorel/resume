<template>
  <div class="qualification">
    <div class="qualification__details">
      <span class="qualification__details__date">{{ ql.date }}</span><br>
      <span class="qualification__details__name">{{ ql.type }}</span><br>
    </div>
    <div class="qualification__content">
      <p>
        <span class="qualification__content__location">
          City: {{ ql.location }}<br>
          {{ ql.school }}<br>
        </span>
        <span class="qualification__content__title">{{ ql.title }}</span><br>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Qualification',
  props: ['ql'],
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

.qualification {
  position: absolute;
  display: flex;
  padding: $inset-m;
  border: 1px solid white;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 800px;
  &__details {
    flex: 0 0 200px;
    &__date {
      font-weight: bold;
    }
  }
  &__content {
    &__location {
      color: silver;
      font-style: italic;
    }
  }
}
</style>
