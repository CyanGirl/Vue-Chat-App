<template>
    <div class="login">
      <br />
      <input class="mb-3" type="text" v-model="name" placeholder="Enter username to continue"/>
      <br />
      <button type="submit" class="btn waves-effect waves-light" @click="setUsername(name)">Join
          <i class="material-icons right">send</i>
      </button>
    </div>
</template>

<script>

import {mapMutations} from 'vuex';

export default {
  name: "LoginPage",
  data() {
    return {
      name: this.$store.state.username,
    }
  },
  methods: {
    ...mapMutations(["setName","setUsername"]),
 },
}

</script>

<style scoped>
.login {
  width: 50%;
  margin: auto;
}
h3 {
  font-size: 30px;
  text-align: center;
}
input {
  width: 50%;
  border-radius: 4px;
  border: 1px solid rgb(156, 156, 156);
  padding-left: 2px;
  padding-right: 2px;
}
</style>

