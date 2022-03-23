<template>
  <div class="card-columns">
    <library-item v-for="(item, i) in x" :key="i" :item="item"></library-item>
  </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";

export default {
  name: "BagList",
  components: {LibraryItem},
  props: {
    x: {
      type: []
    }
  }
}
</script>

<style scoped>

</style>