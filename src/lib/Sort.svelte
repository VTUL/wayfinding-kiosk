<script>
  import {sortFloor, tapTimeline} from "../store.js";
  
  function changeSort() {
    $sortFloor = !$sortFloor;
    $tapTimeline.restart()
  }
</script>

<div class="button-container">
  <button on:click={() => changeSort()}>{config.appearance.sortText}{$sortFloor ? config.appearance.byAlphaText : config.appearance.byFloorText}</button>
</div>

<style>
</style>