<template>
  <div class="movie">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">Runtime: {{item.runtime}}</p>
  </div>
</template>

<script>
import {Movie} from "@/models/LibraryItems";

export default {
  name: "MovieDetails",
  props: {item: Movie},
}
</script>

<style scoped>

</style>
