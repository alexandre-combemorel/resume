<template>
  <div class="experience">
    <div class="experience__details">
      <span class="experience__details__date">{{ xp.date }}</span><br>
      <span class="experience__details__name">{{ xp.company.name }}</span><br>
      <span class="experience__details__industry">{{ xp.company.industry }}</span><br>
      <span class="experience__details__location">{{ xp.company.location }}</span><br>
      <div class="experience__details__picture"><img :src="xp.company.picture"/></div>
    </div>
    <div class="experience__content">
      <p>{{ xp.text }}</p><br>
      <p><span class="experience__content__skills">Key skills:</span> <span>{{ xp.skills }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  props: ['xp'],
};
</script>

<style lang="scss" scoped>
.experience {
  position: absolute;
  display: flex;
  padding: 16px;
  border: 1px solid white;
  border-radius: 5px;
  width: 800px;
  &__details {
    flex: 0 0 200px;
    &__date, &__name {
      font-weight: bold;
    }
    &__industry {
      font-style: italic;
    }
    &__picture {
      margin-top: 8px;
      img {
        width: 120px;
      }
    }
  }
  &__content {
    p {
    }
    &__skills {
      font-weight: bold;
      font-style: italic;
    }
  }
}
</style>
