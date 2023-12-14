<script>
  import config from '../config.js';
  export let selectDestination;
</script>

{#if config.specialEvents}
    <div class="floor-container">
        <h2 class="floor-heading">{config.appearance.specialEventText}</h2>
        <table>
        <thead>
            <tr>
            <th>
                Name
            </th>
            <th>
                Room Number
            </th>
            </tr>
        </thead>
        <tbody>
            {#each config.specialEvents.sort((a, b) => {return a.name > b.name ? 1 : 0}) as floorLocation}
            <tr on:click={() => selectDestination(floorLocation)}>
                <td>
                {floorLocation.name}
                </td>
                <td>
                {floorLocation.roomNumber}
                </td>
            </tr>
            {/each}
        </tbody>
        </table>
    </div>
{/if}

{#each config.metadata.maps as map}
  <div class="floor-container">
    <h2 class="floor-heading">{map.name}</h2>
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Room Number
          </th>
        </tr>
      </thead>
      <tbody>
        {#each config.locations.filter((entry => {return entry.floor === map.floor})).sort((a, b) => {return a.name > b.name ? 1 : 0}) as floorLocation}
          <tr on:click={() => selectDestination(floorLocation)}>
            <td>
              {floorLocation.name}
            </td>
            <td>
              {floorLocation.roomNumber}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/each}

<style>
</style>