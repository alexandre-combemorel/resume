<template>
  <div class="resume">
    <div class="hexagon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="300" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon class="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon></svg></div>
    <timeline></timeline>
  </div>
</template>

<script>
import Timeline from '@/components/widgets/Timeline';

export default {
  name: 'Resume',
  components: {
    Timeline,
  },
};
</script>

<style lang="scss" scoped>
.resume {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100wh;
  height: 100vh;
  color: #fff;
  background-color: #45484d; // Old browsers
  background: linear-gradient(
    135deg,
    #45484d 0%,
    #000000 39%,
    #000000 39%,
    #45484d 69%,
    #000000 100%
  );
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}

.hexagon {
  position: absolute;
  transform: scale(0.1);
  svg {
    .hex {
      fill:#2c2e31;
    }
  }
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
