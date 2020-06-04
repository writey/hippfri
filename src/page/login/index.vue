<template>
  <div class="warp">
    <el-container>
      <el-header></el-header>
      <el-main>
        <span class="head">登录</span>
        <el-input placeholder="用户名" v-model="name"></el-input>
        <el-input type="password" placeholder="密码" v-model="password"></el-input>
        <span for="" >用户名或密码错误</span>
        <el-button style="color:#666" :class = "[ {'move' : !alert}]" @click="login">登录</el-button>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  data () {
    return {
      name: '',
      password: '',
      alert: false
    }
  },
  methods: {
    ...mapMutations(['addToken']),
    login() {
      if (this.name.length > 0 && this.password.length > 0) {
        const usersQuery = new this.$AV.Query('users');
        usersQuery.equalTo('name', this.name);
        usersQuery.equalTo('password', this.password);
        usersQuery.find().then((res) => {
          if (res.length == 1) {
            this.addToken(res[0]);
            this.$router.push('/home');
          } else {
            this.alert = true;
          }
        });
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.warp {
  height: 100%;
  background-image: -webkit-gradient(linear, 0% 100%, 0% 0%, color-stop(0.3, rgb(91, 157, 249)), to(rgb(71, 191, 255)));
}
.el-container {
  height: 100%;
}
.el-main {
  margin-top: -10em;
  display: flex;
  flex-direction: column;
  padding: 13em 20px;
  // justify-content: center;
  div, span, button {
    margin: 20px 0;
    transition: all .3s;
  }
  span {
    color: white;
  }
  .move {
    transform: translateY(-60px);
  }
}
.head {
  padding: 4px 10px;
  font-size: 21px;
}
</style>