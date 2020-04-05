<template>
  <transition name="bounce">
    <div class="content-loading" v-show="loading" el-loading>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Loading',
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  },
  created() {
    this.loadImages();
  },
  methods: {
    loadImages() {  //  缓存图片
      // set background color
      const bgColorArr = this.$store.state.bgColorArr;
      document.documentElement.style.setProperty(
        '--bg-color', 
        bgColorArr[Math.floor(Math.random() * bgColorArr.length)]
      );
    },
    // ...mapMutations(['setShow', 'setImageCache'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.content-loading {
    display: flex;
    width: 100%;
    text-align: center;
    align-items: center;
    height: 100vh;
}

</style>
