<template>
  <div class="album">
    <h3 class="card-title">{{item.title}}</h3>
    <h6 class="card-title">{{item.artist}}</h6>
    <p class="card-text">Track Count: {{item.trackcount}}</p>
  </div>
</template>

<script>
import {Album} from "@/models/LibraryItems";

export default {
  name: "AlbumDetails",
  props: {item: Album},
}
</script>

<style scoped>

</style>