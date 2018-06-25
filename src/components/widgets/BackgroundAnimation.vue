<template>
  <div class="hexagon__container">
    <div v-for="n in 20" class="hexagon" :id="'hexagon' + n" :key="n">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewbox="0 0 25.980762113533157 30"><path fill="#45484d" d="M12.990381056766578 0L25.980762113533157 7.5L25.980762113533157 22.5L12.990381056766578 30L0 22.5L0 7.5Z"></path></svg>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineLite } from 'gsap';// eslint-disable-line

export default {
  name: 'BackgroundAnimation',
  data() {
    return {
      durationTime: 3,
    };
  },
  methods: {
    getRandomArbitrary() {
      const max = 100;
      const min = 0;
      return (Math.random() * (max - min)) + min;
    },
    animateSequenceBlock(num) {
      const tl = new TimelineLite({ onComplete: () => { tl.restart(); } });
      tl.startTime(num);
      const el = document.getElementById(`hexagon${num}`);
      tl.to(el, this.durationTime, { transform: 'scale(0.5)', opacity: 1, left: '-30px', top: `${this.getRandomArbitrary()}vh`, ease: Linear.easeNone })// eslint-disable-line
        .to(el, this.durationTime, { transform: 'scale(1.2)', opacity: 0.2, left: '25%', top: `${this.getRandomArbitrary()}vh`, ease: Linear.easeNone })// eslint-disable-line
        .to(el, this.durationTime, { transform: 'scale(0.8)', opacity: 0.7, left: '50%', top: `${this.getRandomArbitrary()}vh`, ease: Linear.easeNone })// eslint-disable-line
        .to(el, this.durationTime, { transform: 'scale(1)', opacity: 0.3, left: '75%', top: `${this.getRandomArbitrary()}vh`, ease: Linear.easeNone })// eslint-disable-line
        .to(el, this.durationTime, { transform: 'scale(1)', opacity: 1, left: '105%', top: `${this.getRandomArbitrary()}vh`, ease: Linear.easeNone });// eslint-disable-line
    },
  },
  mounted() {
    for (let i = 1; i <= 20; i += 1) {
      this.animateSequenceBlock(i);
    }
  },
};
</script>

<style lang="scss" scoped>
.hexagon__container {
  position: absolute;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  background-color: #45484d; // Old browsers
  background: linear-gradient(135deg, #000000 0%,#292b2d 22%,#000000 55%,#292b2d 67%);;
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;

  .hexagon {
    position: absolute;
    transform: translateX(-100%);
    svg {
      .hex {
        fill: #2c2e31;
      }
    }
  }
}

@-webkit-keyframes Gradient {
  0%    { background-position: 0% 50%; }
  50%   { background-position: 100% 50%; }
  100%  { background-position: 0% 50%; }
}

@-moz-keyframes Gradient {
  0%    { background-position: 0% 50%; }
  50%   { background-position: 100% 50%; }
  100%  { background-position: 0% 50%; }
}

@keyframes Gradient {
  0%    { background-position: 0% 50%; }
  50%   { background-position: 100% 50%; }
  100%  { background-position: 0% 50%; }
}
</style>
