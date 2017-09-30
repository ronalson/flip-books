<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from './components/shared/AppNavbar';

export default {
  name: 'app',
  components: {
    AppNavbar,
  },
};
</script>