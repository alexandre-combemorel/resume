<template>
  <section class="employment-history">
    <div class="employment-history__experiences">
      <transition name="slide-up">
        <experience v-for="xp in experiences" v-if="xp.id === dateSelect" :xp="xp" :key="xp.id"></experience>
      </transition>
    </div>
    <div class="employment-history__dates">
      <div class="date" v-for="date in experiences" @click="dateSelect = date.id" :key="date.id">
        <div class="date__container">
          <div class="date__container__end">{{ date.date_timeline.end }}</div>
          <div class="date__container__start">{{ date.date_timeline.start }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Experience from '@/components/widgets/Experience';
import experiences from '@/config/experiences';

export default {
  name: 'EmploymentHistory',
  components: {
    Experience,
  },
  data() {
    return {
      experiences,
      dateSelect: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/variables.scss';

.employment-history {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  &__experiences {
    flex: 1 1 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__dates {
    display: flex;
    align-items: flex-end;
    .date {
      justify-content: space-between;
      margin: $inset-s;
      padding: $inset-s;
      border: 1px solid white;
      font-weight: bold;
      position: relative;
      transition: all 0.5s ease;
      cursor: pointer;
      &::before {
        content: '';
        position: absolute;
        background: white;
        width: 0%;
        height: 100%;
        top: 0;
        left: 0;
        transition: all 0.5s ease;
      }
      &:hover {
        &::before {
          width: 100%;
        }
        color: black;
        transform: scale(1.1);
      }
      &__container {
        position: relative;
        display: flex;
        &__end {
          margin-right: $inline-l;
        }
        &__start {
          margin-left: $inline-l;
        }
      }
    }
  }
}
.slide-up-leave-active {
  animation: bounce-in 0.8s ease;
}
.slide-up-enter-active {
  animation: bounce-in 0.8s ease reverse;
}

@keyframes bounce-in {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  20% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}
</style>
