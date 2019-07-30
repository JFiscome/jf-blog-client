<template>
  <div id="app">
   
    <div id="nav">
      <router-link :to="{name:'hello',params:{author:'jianfan'}}">Hello</router-link> | 
      <router-link to="/world/beijing">World</router-link> | 
      <router-link to="/userone">用户1号</router-link> |
      <router-link to="/usertwo">用户2号</router-link>
      <p>{{$route.name}}</p>
    </div>
    <router-view/>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
}
</style>
