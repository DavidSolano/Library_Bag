<template>
  <div class="card-columns">
    <library-item v-for="(item, i) in x" :key="i" :item="item"></library-item>
  </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";
import BagCollection from "@/models/LibraryCollection";
import {Book, Movie, Album} from "@/models/LibraryItems";

export default {
  name: "BagList",
  components: {LibraryItem},
  data() {
    return {
      x: new BagCollection()
        .addItem(new Book('Interaction Design', 234))
        .addItem(new Movie('The Muppets', 107))
        .addItem(new Album('Superclean, Vol. 1', 'The Marias', 6)),
      page: 1
    }
  },

}
</script>

<style scoped>

</style>