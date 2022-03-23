<template>
  <div id="app">
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i> CHECK IT OUT!</span>
    </nav>

    <div class="container-fluid mt-3">
      <!--    <img alt="Vue logo" src="./assets/logo.png">-->
      <!--    <hello-universe msg="Welcome to Your Vue.js App"/>-->
      <library-list @update-cart="update"></library-list>
    </div>
    <div class="container-fluid mt-3">
      <h3>cart</h3>
      <bag-list :x="x"></bag-list>
      <button @click="clearCart" v-on:click="x.checkOut()">Check Out</button>
    </div>
  </div>
</template>

<script>
/*import BagCollection from "@/models/BagCollection";*/
import LibraryList from "@/components/LibraryList";
import BagList from "@/components/BagList";
import BagCollection from "@/models/LibraryCollection";
import {Album, Book, Movie} from "@/models/LibraryItems";

export default {
  name: 'App',
  data() {
    return {
      x: new BagCollection()
          .addItem(new Book('Interaction Design', 234))
          .addItem(new Movie('The Muppets', 107))
          .addItem(new Album('Superclean, Vol. 1', 'The Marias', 6)),
      page: 1
    }
  },

  components: {
    LibraryList,
    BagList,
  },

  methods: {
    update(y){
      this.x.addItem(y)
    },

    clearCart(){
      this.x.splice(0);
    }
  }
}
</script>

<style>

</style>
