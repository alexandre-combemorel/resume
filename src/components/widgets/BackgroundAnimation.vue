<template>
  <div class="hexagon__container">
    <div v-for="n in numberOfHexagon" class="hexagon" :id="'hexagon' + n" :key="n">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewbox="0 0 25.980762113533157 30"><path d="M12.990381056766578 0L25.980762113533157 7.5L25.980762113533157 22.5L12.990381056766578 30L0 22.5L0 7.5Z"></path></svg>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineLite } from 'gsap';// eslint-disable-line

export default {
  name: 'BackgroundAnimation',
  data() {
    return {
      numberOfHexagon: 20,
      durationTime: 3,
      randomNumber: {
        min: 0,
        max: 100,
      },
    };
  },
  methods: {
    // This function return a random number which will later give the different verticale position of the hexagons group
    getRandomArbitrary() {
      return (Math.random() * (this.randomNumber.max - this.randomNumber.min)) + this.randomNumber.min;
    },
    // Launch the animation of an hexagon according to its number
    animateSequenceBlock(num) {
      // We make sure that once the animation done it will restart to make the all animation infinite
      const tl = new TimelineLite({ onComplete: () => { tl.restart(); } });

      // Each hexagon block has to start at a different interval, we used the number of the hexagon as second of launching sequence of the blocks
      // - 1 to make sure to start at second 0 and not 1
      tl.startTime(num - 1);
      // target the element and creation of the timeline animation for each hexagon
      const el = document.getElementById(`hexagon${num}`);
      tl.to(el, this.durationTime, { transform: 'scale(0.5)', opacity: 1, left: '-30px', top: `${this.getRandomArbitrary()}vh`, ease: Linear.easeNone })// eslint-disable-line
        .to(el, this.durationTime, { transform: 'scale(1.2)', opacity: 0.2, left: '25%', top: `${this.getRandomArbitrary()}vh`, ease: Linear.easeNone })// eslint-disable-line
        .to(el, this.durationTime, { transform: 'scale(0.8)', opacity: 0.7, left: '50%', top: `${this.getRandomArbitrary()}vh`, ease: Linear.easeNone })// eslint-disable-line
        .to(el, this.durationTime, { transform: 'scale(1)', opacity: 0.3, left: '75%', top: `${this.getRandomArbitrary()}vh`, ease: Linear.easeNone })// eslint-disable-line
        .to(el, this.durationTime, { transform: 'scale(1)', opacity: 1, left: '105%', top: `${this.getRandomArbitrary()}vh`, ease: Linear.easeNone });// eslint-disable-line
    },
  },
  mounted() {
    // Once mounted we want the hexagon animation to start
    // We launch the timeline for all the hexagon blocks
    for (let i = 1; i <= this.numberOfHexagon; i += 1) {
      this.animateSequenceBlock(i);
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';

.hexagon__container {
  position: absolute;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  background-color: $primary; // Old browsers
  background: linear-gradient(135deg, $secondary 0%,$primary 22%,$secondary 55%,$primary 67%);;
  background-size: 300% 300%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;

  .hexagon {
    position: absolute;
    transform: translateX(-100%);
    svg {
      path {
        fill: #2c2e31;
      }
    }
    &:hover {
      animation-duration: 200;
      svg {
        path {
          fill: #cdd2da;
        }
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
