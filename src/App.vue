<template>
  <div id="app">
    <app-message></app-message>
    <router-link to="/">Home</router-link>
    <router-link to="/users/10">Users is team 10</router-link>
    <router-link to="/users/12">Users is team 12</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
</style>
