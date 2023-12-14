<script>
  import {onMount} from "svelte";
  import config from '../config.js';
  import { showMap, splitFloors, destination, sortFloor, globalTimer, tapTimeline } from '../store.js';
  import FloorDirectory from "./FloorDirectory.svelte";
  import AlphaDirectory from './AlphaDirectory.svelte';
  import Sort from "./Sort.svelte";
  import anime from "animejs";

  onMount(() => {
      buildTimeline();
      $tapTimeline.play();
  });
    

  const selectDestination = (row, nearest) => {
    // console.log(row)
    clearTimeout($globalTimer)
    nearest ? $destination = {...row, floor: config.metadata.kioskFloor} : $destination = row
    if(!nearest && row.floor !== config.metadata.kioskFloor) {
      $splitFloors = true;
    }
    $showMap = !$showMap;
  }

  function buildTimeline() {
        
    $tapTimeline = anime.timeline({loop: true});

    $tapTimeline
        .add({
            targets: "#tap-container",
            duration: 1,
            loop: true,
            easing: "easeInOutSine",
            scale: 1,
            translateY: "-150px",
        })
        .add({
            targets: "#tap-container",
            duration: 3000,
            loop: false,
            easing: "easeInOutSine",
            delay: config.behavior.tapDelay,
            translateY: "0px",
            translateX: "400px",
        })
        .add({
            targets: "#tap-container",
            duration: 250,
            loop: false,
            easing: "easeInOutSine",
            scale: 0.9,
            direction: 'alternate',
        })
        .add({
            targets: "#tap-container",
            duration: 250,
            loop: false,
            easing: "easeInOutSine",
            scale: 1,
            direction: 'alternate',
        })
        .add({
            targets: "#tap-container",
            duration: config.behavior.tapFadeOut,
            delay: 1000,
            loop: false,
            easing: "easeInOutSine",
            opacity: 0,
        })
  }
</script>

{@html config.appearance.tapScreen}
{#if $sortFloor}
  <FloorDirectory selectDestination={selectDestination}></FloorDirectory>
{:else}
  <AlphaDirectory selectDestination={selectDestination}></AlphaDirectory>
{/if}

{#if config.nearest}
  <div class="floor-container">
    <h2 class="floor-heading">{config.appearance.nearestText}</h2>
    <table>
      <tbody id="nearest">
        {#each config.nearest as nearestLocation}
          <tr on:click={() => selectDestination(nearestLocation, true)}>
            <td class="nearest-td">
              {nearestLocation.name}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}
<Sort></Sort>

<style>
</style>