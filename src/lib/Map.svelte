<script>
  import config from "../config";
  export let map;
  export let destination;
  export let start;
</script>

<div class="map">
  <h2>{config.appearance.navigatingText}{start.name} to {destination.name}</h2>
  <div class="map-background">
    {@html map}
  </div>
</div>

<style>
</style>