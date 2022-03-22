<template>
  <div id="app">
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i> CHECK IT OUT!</span>
    </nav>

    <div class="container-fluid mt-3">
      <!--    <img alt="Vue logo" src="./assets/logo.png">-->
      <!--    <hello-universe msg="Welcome to Your Vue.js App"/>-->
      <library-list></library-list>
    </div>
    <div class="container-fluid mt-3">
      <h3>cart</h3>
      <bag-list></bag-list>
    </div>
  </div>
</template>

<script>
/*import BagCollection from "@/models/BagCollection";*/
import LibraryList from "@/components/LibraryList";
import BagList from "@/components/BagList";

export default {
  name: 'App',
  components: {
    LibraryList,
    BagList,
  }
}
</script>

<style>

</style>
