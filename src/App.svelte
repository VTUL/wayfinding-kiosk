<script>
  import Directory from "./lib/Directory.svelte";
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
  import MapContainer from "./lib/MapContainer.svelte";
  import config from "./config";
  import { showMap } from "./store";
</script>

{#if !$showMap}
  <Header />
{/if}

<main style={"background-color: " + config.appearance.backgroundColor + "; color: " + config.appearance.textColor + ";"}>
  {#if $showMap}
     <MapContainer />
  {:else}
    <Directory />
  {/if}
</main>

{#if !$showMap}
  <Footer />
{/if}

<style>
  main {
    width: 100vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    overflow: hidden;
  }
</style>
