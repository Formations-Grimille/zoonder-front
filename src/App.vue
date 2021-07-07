<template>
  <div id="app">
    <main>
      <router-view/>
      <Menu/>
    </main>
  </div>
</template>

<script>
import Menu from './layout/Menu.vue';

export default {
  components: { Menu }
}
</script>

<style>
  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-size: cover;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1037%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c534 C 144%2c480.6 432%2c268 720%2c267 C 1008%2c266 1296%2c476.6 1440%2c529L1440 560L0 560z' fill='rgba(24%2c 148%2c 201%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1037'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  }

  #app, main {
    height: 100%;
  }

</style>
