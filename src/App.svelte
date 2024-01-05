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
<div class="scroll-container">
    <main class={$showMap ? "map-main" : "dir-main"} style={"background-color: " + config.appearance.backgroundColor + "; color: " + config.appearance.textColor + ";"}>
      {#if $showMap}
        <MapContainer />
      {:else}
        <Directory />
      {/if}
    </main>
  </div>
  {#if !$showMap}
    <Footer />
  {/if}
