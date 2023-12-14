<script>
  import config from '../config.js';
  export let selectDestination;
  let allLocations = config.locations.concat(config.specialEvents)
</script>

<div class="floor-container">
  <h2 class="floor-heading">Locations</h2>
  <table>
    <thead>
      <tr>
        <th>
          Name
        </th>
        <th>
          Floor
        </th>
        <th>
          Room
        </th>
      </tr>
    </thead>
    <tbody>
      {#each allLocations.sort((a, b) => {return a.name > b.name ? 1 : 0}) as floorLocation, index}
        {#if index < config.behavior.alphaCount}
        <tr on:click={() => selectDestination(floorLocation)}>
          <td>
            {floorLocation.name}
          </td>
          <td>
            {floorLocation.floor}
          </td>
          <td>
            {floorLocation.roomNumber}
          </td>
        </tr>
        {/if}
      {/each}
    </tbody>
  </table>
  </div>
  {#if allLocations.length > config.behavior.alphaCount}
  <div class="floor-container">
  <h2 class="floor-heading blank-heading"> </h2>
  <table>
    <thead>
      <tr>
        <th>
          Name
        </th>
        <th>
          Floor
        </th>
        <th>
          Room
        </th>
      </tr>
    </thead>
    <tbody>
      {#each allLocations.sort((a, b) => {return a.name > b.name ? 1 : 0}) as floorLocation, index}
        {#if index >= config.behavior.alphaCount}
        <tr on:click={() => selectDestination(floorLocation)}>
          <td>
            {floorLocation.name}
          </td>
          <td>
            {floorLocation.floor}
          </td>
          <td>
            {floorLocation.roomNumber}
          </td>
        </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</div>
{/if}
<style>
  
</style>