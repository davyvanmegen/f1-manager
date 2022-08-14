<template>
  <v-app>
    <NavBar></NavBar>
    <NavDrawer></NavDrawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import NavDrawer from './components/NavDrawer.vue';

export default {
  name: 'App',

  components: {
    NavBar,
    NavDrawer
},

  data: () => ({
    //
  }),
}
</script>
