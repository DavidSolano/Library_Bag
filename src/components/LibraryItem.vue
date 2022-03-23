<template>
  <div class="card" :class="{'border-success': item.isAvailable()}">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button v-if="item.isAvailable()" @click="item.checkOut()">Check Out</button>
      <button v-else @click="item.checkIn()">Check In</button>
      <!--                <button v-if="removeMethod" @click="removeMethod(item);">Remove</button>-->
      <!--                <button @click="$emit('remove-me', item);">Remove</button>-->
      <button @click="item.remove()">Remove</button>
      <button @click="$emit('add-cart', item)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import BookDetails from "@/components/BookDetails";
import MovieDetails from "@/components/MovieDetails";
import AlbumDetails from "@/components/AlbumDetails";

export default {
  name: "LibraryItem",
  components: {BookDetails, MovieDetails, AlbumDetails},
  props: {
    item: {
      type: Object,
      required: true,
    },
    removeMethod: {
      type: Function,
    }
  },
  computed: {
    typeOfItem() {
      return this.item.constructor.name + 'Details';
    }
  },
}
</script>

<style scoped>

</style>
