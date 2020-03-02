<template>
  <div id="app">
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  font-weight: 500;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(90px);
}

.v-enter-active,
.v-leave-active {
  transition: all .6s ease;
}
</style>
